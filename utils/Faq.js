"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

import faqBanner from "@/public/assets/hero5.jpg"; // Your banner image

const faqData = [
  { q: "Where is Panthera RestoLounge located?", a: "Panthera is located  at No. 1A Danube Street in Maitama, Abuja. one of the city's most exclusive and serene districts." },
  { q: "What type of cuisine does Panthera serve?", a: "We offer a premium fusion menu inspired by international flavours and contemporary African cuisine." },
  { q: "Do you offer outdoor and indoor seating?", a: "Yes. Panthera offers elegant indoor dining, a cosy outdoor lounge area, and VIP/private seating options." },
  { q: "Can I make a reservation?", a: "Yes. Reservations can be made via WhatsApp, phone call, Instagram DMs, or walk-ins." },
  {
    q: "What are your operating hours?", a: `Panthera operates daily, 
Monday to Wednesday: 10am to 10pm.
Thursday to Sunday: 10am to 1am
Offering both  fine dining and lounge experiences.` },

  { q: "Do you host private events or celebrations?", a: "Yes! We host birthdays, corporate dinners, bridal showers, engagements, VIP parties, and more." },
  { q: "Does Panthera serve original premium drinks?", a: "Yes — Panthera guarantees authentic, high-quality drinks only, sourced from trusted vendors." },
  { q: "Do you have a dress code?", a: "Yes. The dress code is smart, elegant, and classy." },
  { q: "Is there a cover charge or gate fee?", a: "Entry is free except during special events. Any charges are communicated in advance." },
  { q: "Do you provide shisha?", a: "Yes, we offer premium shisha blends served by trained staff." },
  { q: "Do you offer take-out or delivery services?", a: "Yes, takeaway is available. Delivery can be arranged depending on your location." },
  { q: "Is Panthera family-friendly?", a: "Dining area is family-friendly during the day; lounge area is adults-only, especially at night." },
  { q: "Do you offer VIP sections or bottle service?", a: "Yes. We have VIP seating, exclusive sections, and premium bottle service." },
  { q: "Are your staff trained in hospitality?", a: "All Panthera staff undergo continuous hospitality and customer-service training." },
  { q: "How can I stay updated on upcoming events?", a: "Follow our social media page or visit the Events section on this website for updates on weekly and special events." },
];

const AccordionItem = ({ question, answer, isOpen, toggleItem }) => (
  <div className="mb-3 bg-dark rounded-lg shadow-md overflow-hidden">
    <motion.header
      onClick={toggleItem}
      className={`flex justify-between items-center p-4 cursor-pointer transition-colors 
        ${isOpen ? "bg-black" : "bg-dark"} rounded-t-lg`}
    >
      <h3 className="text-sm md:text-base font-medium text-gold">{question}</h3>
      <motion.div
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-gold p-1 rounded-full"
      >
        {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
      </motion.div>
    </motion.header>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35 }}
          className="p-4 pt-2 text-gray-300 text-base md:text-base leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-24 px-6 md:px-16 bg-black text-light-text">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">

        {/* LEFT SIDE */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold uppercase text-gold tracking-wider">
              Frequently
            </h2>
            <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase text-white mb-6 tracking-wider">
              Asked Questions
            </h2>
            <p className="text-base text-gray-300 md:text-base mb-4 text-light-text/80">
              Can’t find the answers you're looking for?
            </p>
            <a
              href="/contact"
              className="text-gold underline text-sm md:text-base hover:text-white transition"
            >
              Feel free to reach out
            </a>

            <div className="mt-8 rounded-xl overflow-hidden shadow-lg h-80 md:h-96">
              <Image
                src={faqBanner}
                alt="FAQ Banner"
                className="w-full h-400px object-cover"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === index}
              toggleItem={() => toggleItem(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
