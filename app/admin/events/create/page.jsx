"use client";
import { useState } from "react";
import AdminProtected from "@/components/AdminProtected";
import { useRouter } from "next/navigation";

export default function AddEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(file ? URL.createObjectURL(file) : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      let imageUrl = "";

      // 1️⃣ UPLOAD IMAGE FIRST
      if (image) {
        const formData = new FormData();
        formData.append("file", image); // IMPORTANT: field name must match API route

        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!uploadRes.ok) {
          const text = await uploadRes.text();
          console.error("Upload failed:", text);
          setError("Image upload failed");
          setLoading(false);
          return;
        }

        const uploadData = await uploadRes.json();
        imageUrl = uploadData.url;
      }

      console.log("Uploaded image:", imageUrl);

      // 2️⃣ NOW POST EVENT TO DATABASE
      const eventRes = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          date,
          image: imageUrl, // Save image URL in DB
        }),
      });

      if (!eventRes.ok) {
        const text = await eventRes.text();
        console.error("Event create error:", text);
        setError("Failed to save event");
        setLoading(false);
        return;
      }

      setSuccess("Event added successfully!");

      // 3️⃣ REDIRECT AFTER SUCCESS
      setTimeout(() => router.push("/admin/events"), 1200);

    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <AdminProtected>
      <div className="min-h-screen bg-black text-white p-6">
        <h1 className="text-3xl mb-6 font-bold">Add Event</h1>

        <form className="grid gap-4 max-w-md" onSubmit={handleSubmit}>
          <input
            className="p-3 rounded bg-dark"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            className="p-3 rounded bg-gray-800"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input
            type="date"
            className="p-3 rounded bg-gray-800"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="text-gray-700"
          />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-48 object-cover rounded mb-3 border border-gray-600"
            />
          )}

          <button
            type="submit"
            className={`p-3 rounded ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-gold2 hover:bg-amber-500"
            }`}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Event"}
          </button>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-400">{success}</p>}
        </form>
      </div>
    </AdminProtected>
  );
}
