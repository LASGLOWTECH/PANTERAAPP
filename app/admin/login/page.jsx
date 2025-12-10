"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import sideImage  from "@/public/assets/log.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";
export default function AdminLoginPage() {
  const [email, setEmail] = useState("");  // this replaces username
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: email, password }), // backend expects "username"
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
      } else {
        localStorage.setItem("admin_token", data.token);
        router.push("/admin"); // redirect to dashboard
      }
    } catch (err) {
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex">


      
      {/* LEFT SIDE — Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-black p-10">
     
       
      
        <div className="w-full max-w-md bg-dark p-6 mt-16 rounded-2xl">
           <button
          onClick={() => router.push('/')}
          className="flex  text-white hover:text-white text-lg font-semibold"
        >
          <FaArrowLeftLong className="mr-2" size={20} />
          Back
        </button>
          <h2 className="text-4xl font-bold my-6 font-serif text-gold">Log into admin</h2>
          <p className="text-gray-400 mb-6">Manage events and reservation requests</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username"
              className="w-full p-3 text-gold rounded-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 rounded-lg text-gold bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
            <button
              type="submit"
              className="w-full py-3 mt-2 bg-gold2 hover:bg-gold2 text-white font-semibold rounded-lg transition"
            >
              LOGIN 
            </button>
            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
          </form>
        </div>
      </div>

      {/* RIGHT SIDE — Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image src={sideImage} alt="Login Illustration" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
      </div>
    </div>
  );
}
