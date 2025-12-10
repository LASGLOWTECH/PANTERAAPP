"use client";

import React from "react";
import Image from "next/image";

// Import your gallery images
import img1 from "@/public/assets/food1.jpeg";
import img01 from "@/public/assets/food2.jpg";
import img02  from "@/public/assets/food3.jpeg";
import img03 from "@/public/assets/food4.jpeg";
import img04 from "@/public/assets/food5.jpeg";


import img07 from "@/public/assets/food8.jpeg";
import img08 from "@/public/assets/food9.jpeg";
import img09 from "@/public/assets/food10.jpeg";
import img010 from "@/public/assets/food11.jpeg";
import img011 from "@/public/assets/food12.jpeg";
import img012 from "@/public/assets/food13.jpeg";
import img013 from "@/public/assets/food14.jpeg";
import img014 from "@/public/assets/food15.jpeg";
import img15 from "@/public/assets/food16.jpeg";

import img017 from "@/public/assets/food17.jpeg";
import img018 from "@/public/assets/food18.jpeg";
import img019 from "@/public/assets/food19.jpeg";

import img021 from "@/public/assets/food21.jpeg";
import img2 from "@/public/assets/hero.jpg";

import img4 from "@/public/assets/interior14.jpg";
import img5 from "@/public/assets/interior1.jpg";
import img6 from "@/public/assets/interior2.jpg";
import img7 from "@/public/assets/interior3.jpg";

import img9 from "@/public/assets/interior5.jpg";
import img10 from "@/public/assets/interior6.jpg";
import img11 from "@/public/assets/interior7.jpg";

// Add more images as needed

const galleryImages = [
  
  
  
   img01,
 img02,
 img03,
 img04,

 
 img07,
 img08,
 img09,
img010,
img011,
img012,
img013,
img014,
 img15,
img017,
img018,
img019,
img021,img1, img2, img4, img5, img6,img7, img9, img10,img11];

export default function GalleryPage() {
  return (
    <section className="py-16 md:py-36 px-6 md:px-16 bg-dark text-white">
      <h2 className="text-4xl md:text-5xl mt-24 font-serif font-bold uppercase text-gold mb-12 tracking-wider text-center">
        Our Gallery
      </h2>

      <div
        className="grid gap-1 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px] 
                   grid-cols-1 sm:grid-cols-3 md:grid-cols-4"
      >
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-full rounded-xl overflow-hidden shadow-lg  shadow-black hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <Image
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full py-2 h-full"
              placeholder="blur"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
