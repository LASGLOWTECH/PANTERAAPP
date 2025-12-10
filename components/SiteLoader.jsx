"use client"; // 1. Must be a Client Component

import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import Image from "next/image"; 
import LOGO  from "@/public/logo1.png";


const SiteLoader = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Function to handle the transition logic
        const handleLoad = () => {
            setFadeOut(true);
            // Wait for 500ms for the fade-out CSS transition to complete
            setTimeout(() => setLoading(false), 500);
        };

        // Check if the document is already fully loaded
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            // Wait for the native window 'load' event
            window.addEventListener("load", handleLoad);
            
            // Cleanup function to remove the event listener when the component unmounts
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []); // Runs only once on mount

    // Exit early if loading is complete
    if (!loading) return null;

    return (
        <div
            className={`fixed inset-0 bg-linear-to-r from-dark to-dark z-50 transition-opacity duration-500 flex flex-col items-center justify-center ${
                
                fadeOut ? "opacity-50" : "opacity-100" 
            }`}
        >
            
            <div className="mb-8"> 
                <Image
                    src={LOGO}
                    alt="Logo"
                    width={200} 
                    height={200}
                    priority 
                    className="object-contain"
                />
            </div>

            {/* Small spinner at bottom */}
            <div className="absolute bottom-8">
                <MoonLoader color="#b67a00" size={25} />
            </div>
        </div>
    );
};

export default SiteLoader;