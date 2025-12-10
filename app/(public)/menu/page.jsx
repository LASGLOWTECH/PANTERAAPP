"use client";

import React, { useState } from "react";
import { menuItems } from "@/utils/menuItems"; // full menu with images
import { motion, AnimatePresence } from "framer-motion";
import QuickFlipNaira from "@/components/NairaSign"


export default function MenuPage() {


  

  const handleDownload = () => {
    window.location.href =
     "https://drive.google.com/uc?export=download&id=1BLASODl2UtUwcN5UvSM2z-kMkwVXJKeU";
  };
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
 
  // Get unique categories
  const categories = ["All", ...menuItems.map((item) => item.category)];

  // Filtered items based on search and category
  const filteredMenu = menuItems
    .filter((category) =>
      selectedCategory === "All" ? true : category.category === selectedCategory
    )
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto pb-16 pt-32 px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <h1 className="text-4xl font-bold text-gold">Our Menu</h1>
          <button
            className="px-4 py-2 rounded bg-gold hover:bg-gold2 text-dark font-semibold shadow-lg transition"
            onClick ={handleDownload}
          >
           Download Menu
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search menu..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 mb-6 rounded border border-gold bg-dark text-gold placeholder-gold2"
        />

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded transition font-semibold ${
                selectedCategory === cat
                  ? "bg-gold text-dark"
                  : "bg-dark border border-gold text-gold hover:bg-gold hover:text-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredMenu.map((category) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-dark border border-gold rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={category.image }
                  alt={category.category}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-3 text-gold2">{category.category}</h2>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex justify-between border-b border-gold pb-1 text-gold"
                      >
                        <span>{item.name}</span>
                       <span className="font-semibold flex items-center gap-1">
  <QuickFlipNaira size={16} />
  {item.price}
</span>

                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
