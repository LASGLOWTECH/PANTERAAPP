"use client";
import { FaUserCircle } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Jennifer O.", quote: "Panthera is easily the best dining experience I’ve had in Abuja. From the ambience to the food, everything felt intentional. The service was warm, the music was perfect, and the cocktails were elite. Definitely my new go-to spot.", emoji: "✨" },
  { name: "Chinedu A.", quote: "Authentic drinks only — and that alone sets Panthera apart. Premium quality and a classy environment. Abuja finally has a place that takes hospitality seriously.", emoji: "🍸" },
  { name: "Lara M.", quote: "The perfect blend of fine dining and nightlife. Elegant dinner… then you stay for the energy of the lounge. I love it here!", emoji: "🥂" },
  { name: "Musa A.", quote: "Their customer service is exceptional. The staff treat you like you matter. Panthera is premium in every sense.", emoji: "⭐" },
  { name: "Toyin E.", quote: "A beautiful space for celebrations. My birthday dinner was perfect — décor, food, music, everything.", emoji: "🎉" },
  { name: "Kelvin S.", quote: "Panthera has the softest vibe in Maitama. Lagos luxury with Abuja calm. 10/10 every time.", emoji: "🔥" },
  { name: "Michelle A.", quote: "That grilled seafood platter? Unreal. Their chef needs an award.", emoji: "🍤" },
  { name: "Mr. Ibrahim L.", quote: "Perfect for business meetings or quiet dinners. Classy and discreet.", emoji: "💼" },
  { name: "Sandra N.", quote: "Panthera is where Abuja’s finest people meet. You feel safe, seen, and comfortable.", emoji: "🌟" },
  { name: "David ‘D2’", quote: "Panthera’s events are always a vibe! December here is a different level.", emoji: "🎶" },
  { name: "Amarachi F.", quote: "Every time I visit, Panthera gets better. This is true consistency.", emoji: "💯" },
  { name: "Kingsley P.", quote: "A breath of fresh air in Abuja’s hospitality scene. Elegance done right.", emoji: "👌" },
];

export default function TestimonialSlider() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const [width, setWidth] = useState(0);

  // Calculate drag width correctly
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      const totalWidth = contentRef.current.scrollWidth;
      const visibleWidth = containerRef.current.offsetWidth;
      setWidth(totalWidth - visibleWidth);
    }
  }, []);

  return (
    <section className="py-24 px-6 md:px-16 bg-black text-[#bbbbbb] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-4xl font-bold  font-serif text-gold mb-16 mt-16 text-center tracking-wider"
        >
         <span className="font-gold"> What Our Guests</span> Are Saying
        </motion.h2>

        <motion.div ref={containerRef} className="overflow-hidden cursor-grab">
          <motion.div
            ref={contentRef}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8"
          >
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="w-[85%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[25%] 2xl:w-[20%]
                p-8 bg-dark border border-gold rounded-xl shrink-0 
                shadow-md shadow-black/20 hover:shadow-lg hover:shadow-[#ffb703]/20 
                transition duration-300"
              >
                <p className="italic leading-relaxed text-base mb-6">"{item.quote}"</p>

                <div className="flex items-center pt-4 border-t border-[#ffb703]/20">
                 <div className="w-12 h-12 rounded-full bg-[#ffb703]/10 border border-[#ffb703] flex items-center justify-center mr-4">
  <FaUserCircle className="text-[#ffb703] text-3xl" />
</div>

                  <div>
                    <p className="text-white font-semibold">{item.name}</p>
                    <p className="text-sm text-[#ffb703]/70">Valued Guest</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <p className="text-center text-sm text-white/40 mt-8">
          Swipe or drag to explore more testimonials.
        </p>
      </div>
    </section>
  );
}
