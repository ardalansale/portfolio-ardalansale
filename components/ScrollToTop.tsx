"use client"

import {useState, useEffect} from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Visar knapp när sidan scrollas ned och döljs när det scrollas upp
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };    

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Funktion för att scrolla till toppen av sidan
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Visar knapp endast ifall man har scrollat nedåt
    if (!isVisible) return null;

    // Scroll Knapp-styling
    return (
    <button 
        onClick={scrollToTop}
        className='fixed bottom-8 right-8 bg-blue-200 hover:bg-blue-600 text-whie p-3 rounde-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 z-50'
        aria-label="Go to the top of the page"
        title="Go To Top">
            ↑
        </button>
    )
}

