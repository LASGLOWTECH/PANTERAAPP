"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaRegCalendarAlt } from "react-icons/fa";
import Link from "next/link";

export default function SingleEventPage() {
  const params = useParams();
  const id = params?.id;

  const [event, setEvent] = useState(null);
  const [otherEvents, setOtherEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ============================
  // FETCH EVENT + OTHER EVENTS
  // ============================
  useEffect(() => {
    if (!id) return;

    const fetchEvent = async () => {
      try {
        const res = await fetch(`/api/events/${id}`);
        if (!res.ok) throw new Error("Failed to fetch event");
        const data = await res.json();
        setEvent(data.event);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

const fetchOthers = async () => {
  const res = await fetch(`/api/events`);
  const data = await res.json(); 

  // data IS THE ARRAY
  const list = Array.isArray(data) ? data : data.events || [];

  // Filter out the current event
  const filtered = list.filter((e) => String(e._id) !== String(id));

  setOtherEvents(filtered);
};



    fetchEvent();
    fetchOthers();
  }, [id]);

  if (loading)
    return (
      <div className="text-white text-center py-32 bg-dark">Loading...</div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center py-32 bg-dark">{error}</div>
    );

  if (!event)
    return (
      <div className="text-white text-center py-32 bg-dark">
        Event not found.
      </div>
    );

  const dateObj = event.date ? new Date(event.date) : null;

  return (
    <div className="min-h-screen bg-black text-white pt-32   ">
      
      {/* TOP SECTION — 2 COLUMN MODERN LAYOUT */}
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* LEFT — EVENT CONTENT */}
        <div className="lg:col-span-2 pt-6">
          <Link href="/events" className="text-sm text-gray-400 hover:text-gold">
            « Back to Events
          </Link>

          <p className="text-gray-400 text-sm mt-2 mb-4">
            Explore more upcoming events
          </p>

          <h1 className="text-6xl font-bold font-serif mb-6 leading-tight text-gold">
            {event.title}
          </h1>

          {dateObj && (
            <div className="flex items-center gap-2 text-gray-300 mb-5">
              <FaRegCalendarAlt />
              <span>
                {dateObj.toLocaleString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          )}

          <p className="text-gray-300 text-lg text-justify  font-light  leading-relaxed mb-8 max-w-2xl">
            {event.description}
          </p>

          <Link href="/reservations">
            <button className="px-8 py-3 text-gold font-semibold bg-dark border border-gold rounded-lg hover:bg-gold hover:text-dark transition">
              Book Reservation
            </button>
          </Link>
        </div>

        {/* RIGHT — LARGE EVENT IMAGE */}
        <div className="lg:col-span-2">
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src={
                event.image.startsWith("/") 
                  ? event.image 
                  : `/uploads/${event.image}`
              }
              className="w-full  h-full object-cover"
              alt={event.title}
              loading="lazy"
            />
          </div>
        </div>
      </div>
<hr className="my-6"></hr>

      {/* OTHER EVENTS SECTION */}
      <div className="container mx-auto px-4 mt-16 py-10">
        <h2 className="text-3xl font-semibold mb-8 text-gold font-serif">
          Other Events
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {otherEvents.length === 0 && (
            <p className="text-gray-400">No other events available.</p>
          )}

          {otherEvents.map((ev) => (
            <Link
              key={ev._id || ev.id}
              href={`/events/${ev._id || ev.id}`}
              className="bg-[#111] p-4  border border-gray-800 hover:border-gold transition shadow-md hover:shadow-xl"
            >
              <div className="w-full h-44 rounded-lg overflow-hidden">
                <img
                  src={
                    ev.image?.startsWith("/")
                      ? ev.image
                      : `/uploads/${ev.image}`
                  }
                  className="w-full h-full object-cover"
                  alt={ev.title}
                />
              </div>

              <h3 className="mt-4 text-xl font-semibold text-white leading-tight">
                {ev.title}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                {new Date(ev.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
