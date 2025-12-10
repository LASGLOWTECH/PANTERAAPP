"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function ReservationSuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name");
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const guests = searchParams.get("guests");
  const seatingType = searchParams.get("seatingType");

  const handleClose = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#111] border border-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full my-16 text-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-4"
        >
          <FiCheckCircle className="text-green-500" size={70} />
        </motion.div>

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-2">Reservation Received</h1>

        {/* Message */}
        <p className="text-gray-400 mb-8">
          Thank you for choosing{" "}
          <span className="text-gold2 font-semibold">Panthera Restolounge</span>.
          Your reservation has been successfully submitted.
        </p>

        {/* Reservation Details */}
        <div className="space-y-3 mb-8 bg-gray-900 p-4 rounded-xl border border-gray-700 text-left">
          <p><span className="font-semibold text-gray-300">Name:</span> {name}</p>
          <p><span className="font-semibold text-gray-300">Guests:</span> {guests}</p>
          <p><span className="font-semibold text-gray-300">Date:</span> {date}</p>
          <p><span className="font-semibold text-gray-300">Time:</span> {time}</p>
          <p><span className="font-semibold text-gray-300">Seating:</span> {seatingType}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleClose}
            className="w-full bg-red-600 hover:bg-red-700 transition-all p-3 rounded-lg font-semibold text-center"
          >
            Close
          </button>

          <button
            onClick={() => router.push("/")}
            className="w-full bg-gray-700 hover:bg-gray-600 transition-all p-3 rounded-lg font-semibold"
          >
            Back to Homepage
          </button>
        </div>
      </motion.div>
    </div>
  );
}
