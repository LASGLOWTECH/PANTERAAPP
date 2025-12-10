"use client";
import { useEffect, useState } from "react";
import AdminProtected from "@/components/AdminProtected";

export default function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  const fetchReservations = async () => {
    const token = localStorage.getItem("admin_token");

    try {
      const res = await fetch("/api/reservations", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();

      if (!res.ok) {
        // API returned error (e.g., Unauthorized)
        setError(data.error || "Failed to fetch reservations");
        setReservations([]); // always an array
      } else {
        setReservations(Array.isArray(data) ? data : []);
        setError(null);
      }
    } catch (err) {
      setError(err.message || "Failed to fetch reservations");
      setReservations([]);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  return (
    <AdminProtected>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-3xl mb-6 font-bold">Reservations</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {!error && reservations.length === 0 && <p>No reservations yet</p>}

        <div className="grid gap-4">
          {reservations.map((r) => (
            <div key={r._id} className="p-4 bg-gray-800 rounded">
              <p><strong>Name:</strong> {r.name}</p>
              <p><strong>Phone:</strong> {r.phone}</p>
              <p><strong>Guests:</strong> {r.guests}</p>
              <p><strong>Date:</strong> {r.date}</p>
              <p><strong>Time:</strong> {r.time}</p>
              <p><strong>Seating:</strong> {r.seating}</p>
              <p><strong>Request:</strong> {r.request || "None"}</p>
            </div>
          ))}
        </div>
      </div>
    </AdminProtected>
  );
}
