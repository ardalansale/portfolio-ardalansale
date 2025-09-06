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
                className='lg:hidden relative w-12 h-12'
                aria-label='Toggle menu'
                >
                {menuOpen ? 
                    <X className='w-12 h-12'/> : <Menu className='w-12 h-12'/>} 
                <span className="text-xs">
                    {menuOpen ? "Close" : "Menu"}
                </span> 
            </button>
            
            {/* Ovarlay som täcker allt under hamburgarmenyns lista */}
            {menuOpen && (
                <div className='fixed inset-0 bg-black/60 z-30 lg:hidden bg'
                onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Länkar */}
            <ul 
                className={`${
                    menuOpen ? 'flex' : 'hidden'}
                } absolute top-full left-0 w-full flex-col gap-6 bg-theme p-6 rounded shadow-md z-40 
                lg:static lg:flex lg:flex-row lg:mt-0 lg:shadow-none lg:justify-center lg:items-center lg:w-full lg:bg-transparent`}
            >
                
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                        href={link.href}
                        className={`py-2 block text-center nav-link ${
                            pathname === link.href ? 'nav-link--active' : 'nav-link--hover'}
                        active:bg-blue-100 dark:active:bg-blue-500 active:rounded-md transition-all duration-150 lg:active:bg-transparent lg:dark:active:bg-transparent`}
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