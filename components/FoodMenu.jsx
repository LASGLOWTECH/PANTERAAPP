"use client";

import React, { useState } from "react";
import { PiArrowCircleRightFill, PiArrowCircleLeftFill } from "react-icons/pi";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";





import food1 from "@/public/assets/food4.jpeg";
import food2 from "@/public/assets/food8.jpeg";
import food3 from "@/public/assets/food3.jpeg";

/* ---------- Slideshow Images ---------- */



const foodImages = [
  { 
    id: 1, 
    url: food1.src, 
    alt: "Panthera Seafood Platter ,prawns, fish, and grilled delicacies beautifully arranged." 
  },
  { 
    id: 2, 
    url: food2.src, 
    alt: "Signature BBQ Chicken Pizza — rich cheese, chicken toppings, and golden crust." 
  },
  { 
    id: 3, 
    url: food3.src, 
    alt: "Grilled Ribeye Steak — served with mashed potatoes and grilled vegetables." 
  },
];




const menuItems = [
  {
    category: "Starters",
    items: [
      { name: "Tuna Tartare", price: "18,000" },
      { name: "Ceviche Clásico", price: "16,000" },
      { name: "Edamame", price: "8,000" },
      { name: "Bruschetta", price: "10,000" },
      { name: "Cheesy Garlic Bread", price: "12,000" },
      { name: "Tender Chicken Wings", price: "15,000" },
    ],
  },
  {
    category: "Salads",
    items: [
      { name: "Greek Salad", price: "18,000" },
      { name: "Caesar Salad (Chicken & Croutons)", price: "20,000" },
      { name: "Seasonal Salad", price: "15,000" },
      { name: "Panthera Special Salad", price: "18,000" },
      { name: "Tuna Salad", price: "22,500" },
    ],
  },
  {
    category: "Soups (served with garlic bread)",
    items: [
      { name: "Oxtail Soup", price: "18,500" },
      { name: "Cheddar Soup", price: "18,000" },
      { name: "Signature Soup", price: "16,000" },
      { name: "Chicken Soup", price: "16,000" },
    ],
  },
  {
    category: "Breakfast",
    items: [
      { name: "Nigerian Breakfast", price: "15,000" },
      { name: "English Breakfast", price: "18,000" },
      { name: "American Breakfast", price: "18,000" },
      { name: "Waffles & Chicken", price: "18,000" },
      { name: "Nutella Crepes", price: "15,000" },
      { name: "French Toast & Eggs (Sautéed Veggies)", price: "16,000" },
    ],
  },
  {
    category: "Platter",
    items: [
      { name: "Special Crispy Platter", price: "60,000" },
      { name: "Seafood Platter", price: "70,000" },
      { name: "Mixed Grill Platter", price: "80,000" },
      { name: "Platter for 3", price: "35,000" },
      { name: "Platter for 5", price: "60,000" },
      { name: "Platter for 10", price: "100,000" },
    ],
  },
  {
    category: "Stir Fries",
    items: [
      { name: "Singaporean Noodles", price: "16,000" },
      { name: "Naija Special Noodles", price: "14,000" },
    ],
  },
  {
    category: "Pizza",
    items: [
      { name: "BBQ Chicken Pizza", price: "18,500" },
      { name: "Signature Pizza", price: "17,500" },
      { name: "Pepperoni Pizza", price: "18,500" },
      { name: "Margarita Pizza", price: "17,000" },
    ],
  },
  {
    category: "Sandwich",
    items: [
      { name: "Jerk Chicken Wrap", price: "15,000" },
      { name: "Club Sandwich", price: "12,000" },
      { name: "Tuna Sandwich", price: "10,000" },
    ],
  },
  {
    category: "Burger",
    items: [
      { name: "Smashed Burger", price: "18,000" },
      { name: "Comfort Beef Burger", price: "18,500" },
      { name: "Classic Beef Burger", price: "16,000" },
      { name: "Classic Chicken Burger", price: "16,000" },
    ],
  },
  {
    category: "Sides & Extras",
    items: [
      { name: "Beef & Broccoli Fried Rice", price: "18,000" },
      { name: "Special Fried Rice", price: "14,000" },
      { name: "Smoked Jollof Rice", price: "12,000" },
      { name: "Jambalaya Rice", price: "16,000" },
      { name: "Coconut Rice", price: "13,500" },
      { name: "Mashed Potatoes", price: "10,000" },
      { name: "Grilled Potatoes", price: "10,000" },
      { name: "French Fries", price: "8,000" },
      { name: "Grilled Veggies", price: "8,000" },
    ],
  },
  {
    category: "Pasta (served with garlic bread)",
    items: [
      { name: "Pesto Pasta", price: "22,000" },
      { name: "Seafood Pasta", price: "24,000" },
      { name: "Tagliatelle Alfredo", price: "23,500" },
      { name: "Cheesy Steak Pasta", price: "24,000" },
      { name: "Spaghetti Bolognese", price: "21,500" },
      { name: "Penne Arabiata", price: "20,700" },
    ],
  },
  {
    category: "Proteins (with sides)",
    items: [
      { name: "Half Chicken", price: "20,000" },
      { name: "Quarter Chicken", price: "12,000" },
      { name: "Turkey Wings", price: "15,000" },
      { name: "Crispy Drumsticks", price: "15,000" },
      { name: "Grilled Croaker Fish", price: "18,500" },
      { name: "Grilled Lamb Chops", price: "45,000" },
      { name: "Ribeye Steak", price: "40,000" },
      { name: "Grilled Salmon", price: "35,000" },
      { name: "Grilled Jumbo Prawns", price: "38,000" },
      { name: "Beef Fillet", price: "32,000" },
      { name: "Sweet Glazed Beef Kebab", price: "22,000" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Chocolate Cake with Ice Cream", price: "15,000" },
      { name: "Strawberry Cake with Ice Cream", price: "15,000" },
      { name: "Mochi Ice Cream", price: "10,000" },
      { name: "Churro Bites", price: "10,000" },
      { name: "Chocolate Lava Cake", price: "12,000" },
    ],
  },
  {
    category: "Soft Drinks",
    items: [
      { name: "Coke", price: "2,000" },
      { name: "Coke Zero", price: "2,000" },
      { name: "Fanta", price: "2,000" },
      { name: "Maltina", price: "3,000" },
      { name: "Sprite (Big)", price: "2,000" },
      { name: "Sprite (Small)", price: "1,500" },
      { name: "Teem Soda", price: "2,000" },
      { name: "Water", price: "2,000" },
    ],
  },
  {
    category: "Beer & Cans",
    items: [
      { name: "Desperado (Can)", price: "5,000" },
      { name: "Guinness (Bottle)", price: "5,000" },
      { name: "Heineken (Bottle)", price: "5,000" },
      { name: "Star Beer", price: "5,000" },
      { name: "Amstel (Can)", price: "3,000" },
      { name: "Fayrouz", price: "5,000" },
    ],
  },
  {
    category: "Cocktails (All 15,000)",
    items: [
      { name: "Mai Tai", price: "15,000" },
      { name: "Pina Colada", price: "15,000" },
      { name: "Long Island", price: "15,000" },
      { name: "Sex on the Beach", price: "15,000" },
      { name: "Whiskey Sour", price: "15,000" },
      { name: "Margarita", price: "15,000" },
      { name: "Tequila Sunrise", price: "15,000" },
      { name: "Crew Driver", price: "15,000" },
    ],
  },
  {
    category: "Mocktails (All 10,000)",
    items: [
      { name: "Virgin Mojito", price: "10,000" },
      { name: "Virgin Colada", price: "10,000" },
      { name: "Chapman", price: "10,000" },
      { name: "Virgin Sunset", price: "10,000" },
      { name: "Virgin Daiquiri", price: "10,000" },
    ],
  },
  {
    category: "Milkshakes (All 10,000)",
    items: [
      { name: "Strawberry", price: "10,000" },
      { name: "Vanilla", price: "10,000" },
      { name: "Oreo", price: "10,000" },
    ],
  },
  {
    category: "Wine & Champagne",
    items: [
      { name: "Asconi Agor", price: "50,000" },
      { name: "Cockburn", price: "180,000" },
      { name: "Elsberg", price: "400,000" },
      { name: "Four Cousins (Red/White/Rose)", price: "50,000" },
      { name: "Nederburg", price: "60,000" },
      { name: "Sandeman", price: "70,000" },
      { name: "Sweet Kiss Red", price: "30,000" },
      { name: "Taylor’s", price: "50,000" },
      { name: "Terrazas Torrontes", price: "80,000" },
      { name: "Veuve Clicquot (Champagne)", price: "50,000" },
      { name: "Moet & Chandon Brut", price: "400,000" },
      { name: "Moet & Chandon Rosé", price: "400,000" },
    ],
  },
  {
    category: "Whiskey & Cognac",
    items: [
      { name: "Glenfiddich 12yrs", price: "220,000" },
      { name: "Glenfiddich 15yrs", price: "300,000" },
      { name: "Glenfiddich 18yrs", price: "410,000" },
      { name: "Jack Daniel’s", price: "80,000" },
      { name: "Jameson Black Barrel", price: "150,000" },
      { name: "Macallan 12", price: "300,000" },
      { name: "Macallan 18", price: "1,150,000" },
      { name: "Hennessy Gold", price: "200,000" },
      { name: "Hennessy VSOP", price: "350,000" },
      { name: "XO Brandy", price: "1,500,000" },
    ],
  },
  {
    category: "Tequila & Vodka",
    items: [
      { name: "Volcan Cristalino (Tequila)", price: "400,000" },
      { name: "Casamigos 700ml", price: "400,000" },
      { name: "Casamigos 1L", price: "620,000" },
      { name: "Don Julio", price: "1,000,000" },
      { name: "Ciroc (Vodka)", price: "150,000" },
      { name: "Grey Goose (Vodka)", price: "170,000" },
    ],
  },
  {
    category: "Liquors & Extras",
    items: [
      { name: "Campari", price: "60,000" },
      { name: "Jägermeister", price: "60,000" },
      { name: "Kahlua", price: "100,000" },
      { name: "Malibu", price: "40,000" },
      { name: "Triple Sec", price: "50,000" },
      { name: "Shisha", price: "25,000" },
    ],
  },
];

/* ---------- Animations ---------- */
const slideVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const modalBackdrop = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const modalPanel = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { staggerChildren: 0.03 } },
};
const panelItem = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };

/* Utility */
const formatPrice = (p) =>
  `₦${p.replace(/,/g, "")}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

/* ---------- Component ---------- */
const App = () => {
  const handleDownload2 = () => {
    window.location.href =
     "https://drive.google.com/uc?export=download&id=1IB1iugeh9cPPBPeV8ibECDk45gma4AV9";
  };

  const handleDownload = () => {
    window.location.href =
     "https://drive.google.com/uc?export=download&id=1BLASODl2UtUwcN5UvSM2z-kMkwVXJKeU";
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentImage = foodImages[currentImageIndex];

  return (
    <div className="min-h-screen bg-dark text-white font-serif flex flex-col items-center relative overflow-hidden">

      {/* HEADER */}
      <header className="py-10 text-center">
        <h1 className="text-3xl md:text-3xl font-light  uppercase">
          FOOD MENU
        </h1>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl flex flex-col md:flex-row gap-16 px-6 py-8">

        {/* LEFT TEXT */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl tracking-[0.2em] mb-5 uppercase">
            {currentImage.alt.split(" ")[0]} Experience
          </h2>

          <p className="text-lg text-gray-400 mb-4">{currentImage.alt}</p>
          <p className="text-gray-400">
            Every plate is a refined fusion of African and international inspirations, crafted with carefully selected ingredients and elevated through modern gourmet techniques.
          </p>

          <button className="mt-8 bg-gold hover:bg-gold2 text-dark font-semibold tracking-wider uppercase py-3 px-7 rounded-md">
            Book a Table
          </button>
        </motion.div>

        {/* RIGHT – SLIDESHOW */}
       <div className="md:w-1/2 max-w-md">
  <div className="rounded-2xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.45)] relative">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentImage.id}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.35 }}
        className="aspect-square w-full h-full overflow-hidden"
      >
        <img
          src={currentImage.url}
          alt={currentImage.alt}
          className="w-full h-full object-cover rounded-2xl"
        />
      </motion.div>
    </AnimatePresence>
  </div>
</div>

      </main>

      {/* FOOTER CONTROLS */}
      <footer className="max-w-5xl w-full flex justify-between items-center px-6 pb-10">
        {/* OPEN MENU */}
        <div onClick={() => setIsMenuOpen(true)} className="cursor-pointer">
          <span className="text-sm uppercase tracking-widest">Fast Preview</span>
          <BiSolidUpArrowCircle className="w-8 h-8 text-gold2 mt-1" />
        </div>

        {/* SLIDER BUTTONS */}
        <div className="flex gap-6">
          <PiArrowCircleLeftFill
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === 0 ? foodImages.length - 1 : prev - 1
              )
            }
            className="w-8 h-8 text-gold2 hover:text-gold cursor-pointer"
          />

          <PiArrowCircleRightFill
            onClick={() =>
              setCurrentImageIndex((prev) => (prev + 1) % foodImages.length)
            }
            className="w-8 h-8 text-white hover:text-gold cursor-pointer"
          />
        </div>

        {/* CTA */}
        < Link href="/menu">
        <button className="bg-dark border border-gold2 hover:bg-gold2 hover:text-dark px-6 py-3 text-sm uppercase rounded">
        See Menu
        </button></Link>
      </footer>

      {/* MENU MODAL */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-5"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="absolute inset-0 bg-black/85" />

            <motion.div
              className="relative bg-[#0D0D0D] border border-[#6b4f7a] rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto p-8 md:p-10"
              variants={modalPanel}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-5 right-6 text-gray-300 hover:text-gold"
              >
                <FaTimes size={26} />
              </button>

              <h2 className="text-3xl text-center text-gold tracking-widest mb-8 uppercase">
                Panthera Restolounge — Menu
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map((section) => (
                  <motion.div
                    key={section.category}
                    className="bg-black/50 p-5 rounded-xl border border-gold2"
                    variants={panelItem}
                  >
                    <h3 className="text-xl text-[#F0DFA0] mb-3 uppercase">
                      {section.category}
                    </h3>

                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex justify-between text-sm md:text-base"
                        >
                          <span>{item.name}</span>
                          <span className="text-[#fce0ad]">
                            {formatPrice(item.price)}
                          </span>
                        </li>
                      ))}
                    </ul>

                   
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-xs text-gray-500 mt-6">
                Notice: All Prices in Naira and Subject to change.
              </p>

<div className="flex md:flex-row  gap-3 flex-col items-center  ">
                <button
  onClick={handleDownload}
  className="bg-gold hover:bg-gold2 text-dark font-semibold uppercase py-3 px-7 rounded-md mt-6"
>
  Download Food Menu
</button>

       <button
  onClick={handleDownload2}
  className="bg-gold hover:bg-gold2 text-dark font-semibold uppercase py-3 px-7 rounded-md mt-6"
>
  Download Drinks Menu
</button>

</div>
      
            </motion.div>
    
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default App;
