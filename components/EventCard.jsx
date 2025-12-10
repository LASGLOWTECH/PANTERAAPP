// EventCard.jsx

import React from "react";

const EventCard = ({ title, description, date, image }) => {
  // Format date properly
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Date not available";

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl bg-gray-900 transition-transform duration-300 hover:scale-[1.03] cursor-pointer border border-gray-700">
      
      {/* 🖼️ Image Section */}
      {image && (
        <div className="h-56 overflow-hidden">
          <img
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            src={image}
            alt={title}
            loading="lazy"
          />
        </div>
      )}

      {/* 📰 Content */}
      <div className="p-6 text-white">
        
        {/* Title */}
        <h3 className="font-display text-2xl font-bold mb-2 text-gold tracking-wider">
          {title}
        </h3>

        {/* Date */}
        <p className="text-lg font-medium text-gray-300 mb-4">
          {formattedDate}
        </p>

        {/* Description */}
        <p className="text-gray-400 text-base mb-4 line-clamp-3">
          {description}
        </p>

        
      </div>
    </div>
  );
};

export default EventCard;
