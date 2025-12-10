import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: String, required: true },
    image: { type: String },   // URL from /uploads 
  },
  { timestamps: true }
);

export default mongoose.models.Event ||
  mongoose.model("Event", EventSchema);
