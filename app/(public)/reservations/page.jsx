"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import food1 from "@/public/assets/hero5.jpg";

export default function ReservationsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    seatingType: "Indoor", // <-- changed from 'seating' to 'seatingType'
    request: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError("");

  try {
    const res = await fetch("/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      // If waLink exists, open it in new tab
      if (data.waLink) {
        window.open(data.waLink, "_blank");
      }

      // Redirect to success page
      const { name, date, time, guests, seatingType } = form;
      router.push(
        `/success?name=${encodeURIComponent(
          name
        )}&date=${date}&time=${time}&guests=${guests}&seatingType=${seatingType}`
      );
    } else {
      setError(data.error || "Submission failed");
    }
  } catch (err) {
    setError("Server error");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid mt-6 md:grid-cols-2 md:mt-16 gap-12">
        {/* LEFT SIDE — FORM */}
        <div>
          <h1 className="text-4xl font-semibold text-center md:text-left tracking-wide mb-2">
            Reserve a Table
          </h1>
          <p className="text-gray-400 mb-10 max-3xl text-center md:text-left">
            Experience fine dining excellence. Secure your reservation below.
          </p>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="p-3 rounded bg-dark border text-gold  border-neutral-700 focus:ring-2 focus:ring-gold focus:outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="p-3 rounded bg-dark border  text-gold border-neutral-700 focus:ring-2 focus:ring-gold focus:outline-none"
              required
            />
            <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              value={form.guests}
              onChange={handleChange}
              className="p-3 rounded bg-dark border text-gold border-neutral-700 focus:ring-2 focus:ring-gold focus:outline-none"
              required
            />

            {/* DATE + TIME */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="p-3 rounded bg-dark border text-gold  border-neutral-700 focus:ring-2 focus:ring-gold focus:outline-none"
                required
              />
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="p-3 rounded bg-dark border text-gold border-neutral-700 focus:ring-2 focus:ring-gold focus:outline-none"
                required
              />
            </div>

            {/* SEATING PREFERENCE */}
            <div className="bg-neutral-900 border border-neutral-700 p-4 rounded">
              <p className="text-sm text-gold mb-3">Seating Preference</p>
              <div className="flex items-center gap-6">
                <label className="flex text-gold items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="seatingType"
                    value="Indoor"
                    checked={form.seatingType === "Indoor"}
                    onChange={handleChange}
                    className="accent-gold"
                  />
                  Indoor
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="seatingType"
                    value="Outdoor"
                    checked={form.seatingType === "Outdoor"}
                    onChange={handleChange}
                    className="bg-dark  text-gold "
                  />
                  Outdoor
                </label>
              </div>
            </div>

            <textarea
              name="request"
              placeholder="Special Requests (Optional)"
              value={form.request}
              onChange={handleChange}
              className="p-3 rounded bg-dark text-gold h-28 border border-neutral-700 focus:ring-2 focus:ring-gold focus:outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className={`p-3 rounded font-semibold transition-all ${
                loading
                  ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                  : "bg-gold2 hover:bg-gold text-black"
              }`}
            >
              {loading ? "Submitting..." : "Submit Reservation"}
            </button>

            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="hidden md:block relative rounded-xl overflow-hidden shadow-xl">
          <Image
            src={food1}
            alt="Reservation dining table"
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        </div>
      </div>
    </div>
  );
}
