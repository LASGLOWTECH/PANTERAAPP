"use client";

import { useState, useEffect } from "react";
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const ScrollTop = () => {

    // Logic to update the 'show' state based on scroll position
    const handleScroll = () => {
        if (window.scrollY > 500) {
            setShow(true);
        } else {
            setShow(false);
        }
    };

    // hide the button by default
    const [show, setShow] = useState(false);

    // 1. Add event listener and RETURN a cleanup function
    useEffect(() => {
        // Add the listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // This cleanup function runs when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Empty dependency array ensures it runs once on mount/unmount

    // Function to scroll to the top of the page
    const ScrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div>
            {/* Conditional rendering of the button */}
            {show && (
                <div className="arrow-up fixed bottom-4 right-4 z-50"> {/* Add fixed positioning */}
                    <BsFillArrowUpCircleFill
                        onClick={ScrolltoTop}
                        className="animate-pulse hover:scale-110 text-4xl font-bold fill-gold2 cursor-pointer" // Add cursor-pointer
                    />
                </div>
            )}
        </div>
    );
};

export default ScrollTop;