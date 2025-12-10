"use client";

import { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FaCircle, FaEye } from "react-icons/fa";
import Link from "next/link";

// Images
import img1 from "@/public/assets/hero.jpg";
import img2 from "@/public/assets/interior6.jpg";
import img3 from "@/public/assets/hero5.jpg";
import img4 from "@/public/assets/interior13.jpg";
import img5 from "@/public/assets/hero1.jpg";

const images = [img1, img2, img3, img5, img4];

export default function WorksSlider() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="w-full overflow-x-hidden py-20 bg-[url('/assets/dark1.jpg')] bg-center bg-blend-multiply bg-cover relative z-0">
      
      {/* Heading */}
      <section className="px-6 py-8">
        <div className="flex items-center mb-4">
          <FaCircle className="text-gold2 text-xs" />
          <h3 className="text-2xl ml-3 font-medium text-gold2">Our Inns</h3>
        </div>

        <h2
          className="text-3xl md:text-4xl font-bold font-serif text-gold"
          data-aos="fade-up"
        >
          A Glimpse of our Ins
        </h2>
      </section>

      {/* Slider */}
      <Marquee 
        pauseOnHover 
        speed={30} 
        gradient={false} 
        className="py-4 overflow-hidden"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="
              mx-4 relative group cursor-pointer 
              w-[250px] h-[250px] 
              sm:w-[300px] sm:h-[300px] 
              md:w-[350px] md:h-[350px] 
              overflow-hidden rounded-xl
            "
            onClick={() => setSelected(src)}
          >
            <Image
              src={src}
              alt={`Project ${i + 1}`}
              fill
              className="object-cover rounded-xl transition-all duration-300"
              loading="lazy"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl">
              <FaEye className="text-white text-3xl" />
            </div>
          </div>
        ))}
      </Marquee>

      {/* Image Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-[600px] max-h-[600px] w-full h-full">
            <Image
              src={selected}
              alt="Selected image"
              className="object-contain rounded-lg"
              fill
            />
          </div>
        </div>
      )}

      {/* Button */}
      <div className="py-10 flex justify-center">
        <Link
          href="/gallery"
          className="px-10 py-3 border-2 border-gold text-gold
            hover:bg-gold hover:text-black font-semibold rounded-full
            transition-all duration-300"
        >
          See Gallery
        </Link>
      </div>
    </div>
  );
}
