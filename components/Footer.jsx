"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";

import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-footer-text pt-16 pb-8 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto border-b border-white/30 pb-12">
        {/* Top Section: Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

          {/* Column 1: Company Info & Socials */}
          <div>
            {/* Logo */}
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold  text-gold tracking-wider">Panthera</span>
              <span className="text-3xl font-light text-white ml-2">Lounge</span>
            </div>

            <p className="mb-6  md:text-base max-w-sm text-white/70 text-sm">
              Experience the fusion of Panthera Restolounge, crafted cocktails, and an exclusive lounge atmosphere. A destination for refined taste.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href="https://www.tiktok.com/@panthera.no1?_r=1&_t=ZP-91gu6QByuPW"
                aria-label="TikTok"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-footer-accent transition duration-300 rounded-full text-white hover:text-footer-dark"
              >
                <FaTiktok />
              </a>



              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-footer-accent transition duration-300 rounded-full text-white hover:text-footer-dark"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/pantheraabuja?igsh=cW9zYWdnaDUxcWdk"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-footer-accent transition duration-300 rounded-full text-white hover:text-footer-dark"
              >
                <FaInstagram />
              </a>


              <a
                href="https://snapchat.com/t/RUL2XF0i"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-footer-accent transition duration-300 rounded-full text-white hover:text-footer-dark"
              >
                < FaSnapchatGhost />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold uppercase text-gold mb-6">Quick Links</h3>
            <nav className="space-y-3 flex flex-col">

              <Link href="/" className="hover:text-footer-accent text-white/70 transition duration-200">Home</Link >
               <Link href="/about" className="hover:text-footer-accent text-white/70 transition duration-200">About Us</Link >
              <Link href="/menu" className="hover:text-footer-accent text-white/70 transition duration-200">Menu & Drinks</Link >
              <Link href="/reservations" className="hover:text-footer-accent text-white/70 transition duration-200">Reservations</Link >
              <Link href="/events" className="hover:text-footer-accent  text-white/70 transition duration-200">Private Events</Link >
             
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-lg font-semibold uppercase text-gold mb-6">Contact</h3>
            <div className="space-y-4 text-sm">
              <p className="flex items-center   text-white/70 gap-2">
                <HiOutlineMail className="text-footer-accent w-5 h-5" />
                <a href="mailto:reservations@panthera.com" className="hover:text-footer-accent  text-white/70 transition">
                  Pantherarestolounge@gmail.com
                </a>
              </p>
              <p className="flex items-center  text-white/70 gap-2">
                <HiOutlinePhone className="text-footer-accent  text-white/70 w-5 h-5" />
                +234 8033851591 <br></br>

                +234 9062100234              </p>
              <p className="flex items-center  text-white/70 gap-2">
                <HiOutlineLocationMarker className="text-footer-accent  text-white/70 w-5 h-5" />
                1A Danube Street, Maitama, Abuja
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="max-w-7xl mx-auto text-center pt-8">
        <p className="text-sm text-footer-text text-gold">
          &copy; {currentYear} Panthera Restolounge. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
