"use client";

import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";
import { useRouter } from "next/navigation";

export default function AdminEventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) throw new Error("Failed to fetch events");

        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // ============================
  // 🔥 DELETE EVENT
  // ============================
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this event?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/events/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        alert("Failed to delete event.");
        return;
      }

      // Update UI
      setEvents((prev) => prev.filter((event) => event._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting event.");
    }
  };

  return (
    <div className="min-h-screen bg-dark p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Events</h1>

        <button
          onClick={() => router.push("/admin/events/create")}
          className="px-5 py-2 bg-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition"
        >
          + Add New Event
        </button>
      </div>

      {loading && <p className="text-gray-300">Loading events...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && events.length === 0 && (
        <p className="text-gray-300">No events found.</p>
      )}

      {!loading && events.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event._id} className="relative bg-[#111] p-4 rounded-xl border border-gray-800 shadow-lg">

              {/* Event card */}
              <EventCard
                title={event.title}
                description={event.description}
                date={event.date}
                image={event.image}
              />

              {/* Admin Buttons */}
              <div className="flex gap-3 mt-4">
                {/* EDIT BUTTON */}
                {/* <button
                  onClick={() => router.push(`/admin/events/edit/${event._id}`)}
                  className="flex-1 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition"
                >
                  Update
                </button> */}

                {/* DELETE BUTTON */}
                <button
                  onClick={() => handleDelete(event._id)}
                  className="flex-1 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
