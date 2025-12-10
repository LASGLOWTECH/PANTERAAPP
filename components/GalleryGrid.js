"use client";

import Image from "next/image";

export default function GalleryGrid({ image }) {
  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg bg-white">
      {image.url ? (
        <Image
          src={image.url}      // URL of the image from your API
          alt={image.name || "Gallery image"}
          fill                 // cover the parent div
          className="object-cover"
        />
      ) : (
        <div className="flex items-center justify-center h-full text-gray-400">
          No Image
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white p-2 text-sm">
        {image.name || "Unnamed"}
      </div>
    </div>
  );
}
