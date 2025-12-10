// components/Button.js
import Link from "next/link";

export default function Button({ href, children, className }) {
  return (
    <Link
      href={href}
      className={`

        px-8 py-4 bg-dark text-footer-accent font-semibold rounded-full
        inline-block
       
        bg-linear-to-r from-[#d49409] to-gold2
        text-black
       
        
      
        sm:px-8 sm:py-4
        md:px-6 md:py-4
        text-2xl
        text-center
        transition-all duration-300
        hover:brightness-110
        hover:border-4
        hover:bg-transparent
        ${className || ""}
      `}
    >
      {children}
    </Link>
  );
}
