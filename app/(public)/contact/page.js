"use client";
import { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import sideImage from "@/public/assets/interior17.jpg";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);        // ✅ start loading
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        const data = await res.json();
        setError(data.error || "Failed to send message");
      }
    } catch (err) {
      setError("Server error");
    } finally {
      setLoading(false);   
    }
  };

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col justify-center mt-16 px-8 md:px-16 py-24 bg-black">
        <h1 className="text-4xl font-bold mb-4 text-gold">Get In Touch with Us</h1>
        <p className="text-textcolor2 mb-8 max-w-md">
          We would love to hear from you! For bookings, reservations, feedback, 
          or support. Reach out to us anytime.
        </p>

        {/* Contact Icons */}
        <div className="grid grid-cols-1 gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-md bg-dark shadow-md shadow-amber-300">
              <FaEnvelope className="text-gold2 text-xl" />
            </div>
            <div>
              <p className="font-semibold text-gold">Email</p>
              <p className="text-textcolor2">Pantherarestolounge@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-md bg-dark shadow-md shadow-amber-300">
              <FaPhoneAlt className="text-gold2 text-xl" />
            </div>
            <div>
              <p className="font-semibold text-gold">Phone</p>
              <p className="text-textcolor2">+234 8033851591</p>
              <p className="text-textcolor2">+234 9062010234</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-md bg-dark shadow-md shadow-amber-300">
              <FaMapMarkerAlt className="text-gold2 text-xl" />
            </div>
            <div>
              <p className="font-semibold text-gold">Address</p>
              <p className="text-textcolor2">1A Danube Street, Maitama, Abuja</p>
            </div>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded bg-black/40 border border-neutral-700 focus:ring-2 focus:ring-gold2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded bg-black/40 border border-neutral-700 focus:ring-2 focus:ring-gold2"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="p-3 rounded bg-black/40 border border-neutral-700 focus:ring-2 focus:ring-gold2"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded bg-black/40 border border-neutral-700 focus:ring-2 focus:ring-gold2"
            rows="4"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`p-3 rounded font-bold transition ${
              loading ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "bg-gold2 hover:bg-gold text-black"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="text-green-400">{success}</p>}
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src={sideImage}
          alt="Contact Illustration"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-l from-black/40 to-transparent"></div>
      </div>
    </div>
  );
}
