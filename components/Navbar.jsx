// components/Navbar.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Button from "@/components/Button";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const navLinks = [
    { link: "Home", to: "/" },
     { link: "About", to: "/about" },
    { link: "Menu", to: "/menu" },
    { link: "Gallery", to: "/gallery" },
    { link: "Events", to: "/events" },
    { link: "Reservations", to: "/reservations" },
        { link: "Contact", to: "/contact" },
   
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center  text-gold px-12 py-4">
        <Link href="/">
          <Image src="/logo1.png" alt="Logo" width={80} height={80} priority />
        </Link>
        <nav className="flex  space-x-6">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.to}
              className="hover:text-yellow-400  text-lg font-serif text-semibold transition"
            >
              {link.link}
            </Link>
          ))}
        </nav>
 
             
                <Link href='/about' ><button className=" hidden md:flex text-gold text-lg px-6 py-3 border-gold border-2 hover:bg-linear-to-r  hover:from-bg-gold hover:to-bg-gold2 shadow-lg font-semibold rounded-full transition-all duration-300">Learn More</button></Link>

      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center bg-dark text-gold px-6 py-4">
        <Link href="/">
          <Image src="/logo1.png" alt="Logo" width={60} height={60} priority />
        </Link>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="text-2xl focus:outline-none"
        >
          {showMenu ? <AiOutlineClose /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      <div
  className={`fixed top-0 left-0 w-full h-screen bg-dark z-40 flex md:hidden flex-col items-center pt-24 space-y-6 transform transition-transform duration-300 ${
    showMenu ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* Logo */}
  <Link href="/" onClick={() => setShowMenu(false)}>
    <Image src="/logo1.png" alt="Logo" width={100} height={100} priority />
  </Link>

  {/* Menu Links */}
  {navLinks.map((link, idx) => (
    <Link
      key={idx}
      href={link.to}
      className="text-gold text-xl hover:text-yellow-400 font-serif transition"
      onClick={() => setShowMenu(false)} // closes menu on click
    >
      {link.link}
    </Link>
  ))}
</div>
    </header>
  );
}
