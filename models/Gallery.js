import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    image: { type: String, required: true }, // base64 or public/uploads/image.jpg
  },
  { timestamps: true }
);

export default mongoose.models.Gallery ||
  mongoose.model("Gallery", GallerySchema);
