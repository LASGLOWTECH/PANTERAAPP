"use client";

import { useState, useEffect } from "react";
import AdminProtected from "@/components/AdminProtected";
import { useRouter, useParams } from "next/navigation";

export default function EditEventPage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch event data and prefill
  useEffect(() => {
    async function fetchEvent() {
      try {
        const res = await fetch(`/api/events/${id}`);
        if (!res.ok) throw new Error("Failed to fetch event");

        const data = await res.json();
        setTitle(data.title || "");
        setDescription(data.description || "");
        setDate(data.date ? data.date.slice(0, 10) : "");
        setPreview(data.image || null);
      } catch (err) {
        console.error(err);
        setError("Failed to load event data");
      } finally {
        setLoading(false);
      }
    }
    fetchEvent();
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(file ? URL.createObjectURL(file) : preview);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setError("");
    setSuccess("");

    try {
      let imageUrl = preview;

      // Upload image if changed
      if (image) {
        const formData = new FormData();
        formData.append("file", image);

        const uploadRes = await fetch("/api/upload", { method: "POST", body: formData });
        if (!uploadRes.ok) {
          setError("Image upload failed");
          setUpdating(false);
          return;
        }
        const uploadData = await uploadRes.json();
        imageUrl = uploadData.url;
      }

      // Update event
      const updateRes = await fetch(`/api/events/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, date, image: imageUrl }),
      });

      if (!updateRes.ok) {
        setError("Failed to update event");
        setUpdating(false);
        return;
      }

      setSuccess("Event updated successfully!");
      setTimeout(() => router.push("/admin/events"), 1200);
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }

    setUpdating(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Loading event data...</p>
      </div>
    );
  }

  return (
    <AdminProtected>
      <div className="min-h-screen bg-black text-white p-6">
        <h1 className="text-3xl mb-6 font-bold">Edit Event</h1>

        <form className="grid gap-4 max-w-md" onSubmit={handleUpdate}>
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

          <input type="file" accept="image/*" onChange={handleImageChange} className="text-gray-700" />

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-48 object-cover rounded mb-3 border border-gray-600"
            />
          )}

          <button
            type="submit"
            className={`p-3 rounded flex items-center justify-center gap-2 ${
              updating ? "bg-gray-500 cursor-not-allowed" : "bg-gold2 hover:bg-amber-500"
            }`}
            disabled={updating}
          >
            {updating && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {updating ? "Updating..." : "Update Event"}
          </button>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-400">{success}</p>}
        </form>
      </div>
    </AdminProtected>
  );
}
