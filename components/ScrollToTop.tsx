"use client";

import {useState, useEffect} from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const [fadeClass, setFadeClass] = useState("");

    // Visar knapp när sidan scrollas ned och döljs när det scrollas upp
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                if (!isVisible) {
                    setShouldRender(true);
                    setIsVisible(true);
                    setFadeClass("fade-in");
                }
            } else {
                if (isVisible) {
                    setIsVisible(false);
                    setFadeClass("fade-out");

                    // Tar bort komponenten efter fade-out är klar
                    setTimeout(() => {
                        setShouldRender(false);
                    }, 300);
                }
            }
        };    

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, [isVisible]);

    // Funktion för att scrolla till toppen av sidan
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Visa inte knappen alls om den inte ska renderas
    if (!shouldRender) return null;

    return (
        <div className={fadeClass}>
            <button 
                onClick={scrollToTop}
                className="fixed lg:bottom-20 lg:right-20 bottom-6 right-6 text-white bg-blue-900 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 z-50"
                aria-label="Go to the top of the page"
                title="Go To Top"
            >
                <ChevronUp size={24} />
            </button>
        </div>
    );
}