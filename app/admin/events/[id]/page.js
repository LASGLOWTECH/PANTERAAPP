"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminProtected from "@/components/AdminProtected";

export default function AdminEventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const router = useRouter();

  const token = typeof window !== "undefined" ? localStorage.getItem("admin_token") : "";

  // Fetch events
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/events", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch events");
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Delete event
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    try {
      setDeleting(id);
      const res = await fetch(`/api/events/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete event");
      setEvents(events.filter((e) => e._id !== id));
    } catch (err) {
      alert(err.message || "Error deleting event");
    } finally {
      setDeleting(null);
    }
  };

  if (loading) return <div className="text-white text-center py-20">Loading events...</div>;
  if (error) return <div className="text-red-500 text-center py-20">{error}</div>;

  return (
    <AdminProtected>
      <div className="min-h-screen p-6 bg-gray-900 text-white">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Manage Events</h1>
          <button
            onClick={() => router.push("/admin/events/create")}
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          >
            Add New Event
          </button>
        </div>

        {events.length === 0 ? (
          <p className="text-center mt-10">No events found.</p>
        ) : (
          <div className="overflow-x-auto bg-gray-800 rounded">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event._id} className="border-b border-gray-700 hover:bg-gray-700">
                    <td className="px-4 py-2">
                      {event.image ? (
                        <img
                          src={event.image.startsWith("/") ? event.image : `/uploads/${event.image}`}
                          alt={event.title}
                          className="w-20 h-12 object-cover rounded"
                        />
                      ) : (
                        "No Image"
                      )}
                    </td>
                    <td className="px-4 py-2">{event.title}</td>
                    <td className="px-4 py-2">
                      {new Date(event.date).toLocaleString("en-US", {
                        weekday: "short",
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-2 space-x-2">
                      <button
                        onClick={() => router.push(`/admin/events/edit/${event._id}`)}
                        className="bg-yellow-600 px-3 py-1 rounded hover:bg-yellow-700"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(event._id)}
                        className={`bg-red-600 px-3 py-1 rounded hover:bg-red-700 ${
                          deleting === event._id ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        disabled={deleting === event._id}
                      >
                        {deleting === event._id ? "Deleting..." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminProtected>
  );
}
