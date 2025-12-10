// /models/Reservation.js
import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  guests: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  request: { type: String },
  status: { type: String, default: "pending" }, // pending | confirmed | canceled
  seatingType: { type: String, enum: ["Indoor", "Outdoor"], required: true }

}, { timestamps: true });

export default mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema);
