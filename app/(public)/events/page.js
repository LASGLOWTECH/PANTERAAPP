// "use client";
// import { useEffect, useState } from "react";

// export default function EventsPage() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await fetch("/api/events");
//         if (!res.ok) throw new Error("Failed to fetch events");
//         const data = await res.json();
//         setEvents(data);
//       } catch (err) {
//         setError(err.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   if (loading)
//     return (
//       <div className="text-white text-center py-32 bg-dark">
//         Loading events...
//       </div>
//     );

//   if (error)
//     return (
//       <div className="text-gold text-center py-32 bg-dark">
//         {error}
//       </div>
//     );

//   if (events.length === 0)
//     return (
//       <div className="text-white text-center py-20 bg-gray-900">
//         No upcoming events scheduled. Check back soon!
//       </div>
//     );

//   return (
//     <div className="min-h-screen mt-16 bg-dark font-sans">
//       {/* Page Header */}
//       <header className="py-16 text-center text-white bg-black border-b border-gray-700">
//         <h1 className="text-5xl  font-semibold font-serif tracking-tight my-4 text-gold">
//           Upcoming Events
//         </h1>
//         <p className="text-xl text-gray-300">
//           Join us for exclusive experiences at Panthera Restaurant
//         </p>
//       </header>

//       {/* Event Grid */}
//       <main className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {events.map((event) => (
//             <div
//               key={event._id}
//               className="bg-gray-800 p-4 rounded shadow hover:shadow-lg transition"
//             >
//               {event.image && (
//                 <img
//                   loading="lazy"
//                   src={
//                     event.image.startsWith("/")
//                       ? event.image
//                       : `/uploads/${event.image}`
//                   }
//                   alt={event.title}
//                   className="w-full h-48 object-cover rounded mb-3"
//                 />
//               )}
//               <h2 className="text-xl font-bold mb-2">{event.title}</h2>
//               <p className="text-gray-300 mb-2">
//                 {new Date(event.date).toLocaleString("en-US", {
//                   weekday: "long",
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </p>
//               <p className="text-gray-300">{event.description}</p>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Footer */}

//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
export default function EventsPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const currentYear = new Date().getFullYear();
  const eventDate = new Date(`${currentYear}-12-31T00:00:00`);

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  // Fetch Events from MongoDB API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/events");
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center my-16 py-20 bg-black/50">
        <div className="w-16 h-16 border-4 border-gold2 border-t-transparent rounded-full animate-spin mb-6"></div>
        <h3 className="text-3xl text-white">
          Loading. <span className="text-gold2">Events</span>...
        </h3>
      </div>
    );

  if (error)
    return (
      <div className="text-gold text-center py-32">{error}</div>
    );

  if (events.length === 0)
    return (
      <div className="bg-black text-center py-20 px-4 relative">
        <h2 className="text-4xl md:text-5xl mt-16 font-bold text-white mb-4">
          Thanks for <span className="text-gold2">Stopping by</span>
        </h2>
        <p className="text-lg text-gold mb-10">
          We do not have an upcoming event yet. Please check again soon.
        </p>

        <div className="flex justify-center gap-4 mb-10 text-gold">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-white/90 text-gold2 font-bold rounded-lg px-6 py-4 text-xl md:text-2xl"
            >
              <div>{timeLeft[unit]}</div>
              <div className="text-sm text-black/80">{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
            </div>
          ))}
        </div>

        <Link href="/contact">
          <button className="bg-gold2 text-white px-6 py-3 rounded-md font-semibold hover:bg-gold hover:text-dark transition">
            Notify Me!
          </button>
        </Link>

        <div className="mt-8 space-x-4 text-gold2">
          <a href="https://www.instagram.com/pantheraabuja?igsh=cW9zYWdnaDUxcWdk" className="hover:underline">Instagram</a> |
          <a href="https://www.tiktok.com/@panthera.no1?_r=1&_t=ZP-91gu6QByuPW" className="hover:underline">Tiktok</a> |
          <a href="https://snapchat.com/t/RUL2XF0i" className="hover:underline">Snapchat</a>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen mt-16 bg-dark font-sans">
      {/* Header */}
      <header className="py-12 text-center text-white bg-black border-b border-gray-700">
        <h1 className="text-5xl font-semibold font-serif tracking-tight my-4 text-gold">
          Upcoming Events
        </h1>
        <p className="text-xl text-gray-300">
          Exclusive experiences & special events at Panthera Restaurant
        </p>
      </header>

      {/* Event List */}
      <main className="container mx-auto px-4 py-12 space-y-10">
        {events.map((event) => {
          const dateObj = new Date(event.date);
          const day = dateObj.toLocaleString("en-US", { day: "numeric" });
          const month = dateObj.toLocaleString("en-US", { month: "short" });

          return (
            <Link
              href={`/events/${event._id}`}
              key={event._id}
              className="bg-dark border border-gray-700 rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row hover:shadow-2xl transition"
            >
              {/* Left: Image */}
              <div className="md:w-1/3 relative">
               

                {event.image && (
                  <div className="h-56 relative">
                    <img  src={event.image}
                      alt={event.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transform transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                )}



                {/* Date Badge */}
                <div className="absolute bottom-3 left-3 bg-gold text-black text-center w-16 py-2 rounded-md font-bold shadow">
                  <p className="text-lg">{day}</p>
                  <p className="text-xs">{month.toUpperCase()}</p>
                </div>
              </div>

              {/* Right: Details */}
              <div className="md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">{event.title}</h2>
                  <div className="flex items-center gap-2 text-gray-300 mb-2">
                    <FaRegCalendarAlt />
                    {dateObj.toLocaleString("en-NG", {
                      timeZone: "Africa/Lagos",
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    
                    })}
                  </div>

                  {event.location && (
                    <div className="flex items-center gap-2 text-gray-300 mb-3">
                      <FaMapMarkerAlt />
                      {event.location}
                    </div>
                  )}

                  <p className="text-gray-400 leading-relaxed">{event.description}</p>
                </div>

                <div className="mt-5">
                  <button className="px-6 py-3 bg-gold text-black rounded-lg font-semibold hover:bg-yellow-400 transition">
                    Join Event
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </main>
    </div>
  );
}
