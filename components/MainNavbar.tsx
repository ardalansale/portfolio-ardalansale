"use client";
// "use client" behövs eftersom jag använder usePathname(), som är en React hook
// och bara fungerar i Client Components. Utan denna rad får jag ett ett Ecmascript error.

import Link from "next/link";
import { usePathname } from "next/navigation"; // Används för att markera aktiv länk i navbar baserat på aktuell sida
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Lucide-ikoner för hamburgermeny


export default function MainNavbar() {
    const pathname = usePathname(); // Hämtar aktuell sida
    const [menuOpen, setMenuOpen] = useState(false); // Toggle för mobilmeny
    const links = [
        { name: "Home", href: "/" },
        { name: "Work", href: "/work" },
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

// För att snabbt stänga hamburgarmenyn när skärmenstorleken ändras
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    // Navbar styling 
    return (
        <nav className='flex flex-col justify-center items-center mt-30 mb-30 py-2 relative z-50'>

            {/* Humburgarmeny-knapp */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className='lg:hidden'
                aria-label='Toggle menu'
                >
                {menuOpen ? (
                    <X className='w-10 h-10'/>
                ) : ( 
                    <Menu className='w-10 h-10'/>
                )}    
            </button>
            
            {/* Länkar */}
            <ul 
                className={`flex-col gap-6 bg-white mt-4 p-6 rounded shadow-md z-40
                    ${
                    menuOpen ? 'flex' : 'hidden'
                } lg:flex lg:flex-row lg:mt-0 mt-4 p-6 rounded shadow-md z-40 lg:bg-transparent lg:p-0 lg:shadow-none`}
            >
                
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                        href={link.href}
                        className={`py-2 block text-center ${
                            pathname === link.href
                            ? 'text-gray-500'
                            : 'hover:underline'
                        }`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};