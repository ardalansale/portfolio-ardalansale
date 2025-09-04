"use client";
// "use client" behövs eftersom jag använder usePathname(), som är en React hook
// och bara fungerar i Client Components. Utan denna rad får jag ett ett Ecmascript error.

import Link from "next/link";
import { usePathname } from "next/navigation"; // Används för att markera aktiv länk i navbar baserat på aktuell sida

export default function MainNavbar() {
    const pathname = usePathname(); // Array med alla länkar
    const links = [
        { name: "Home", href: "/" },
        { name: "Work", href: "/work" },
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return ( // Navbar styling 
        <nav className="flex flex-col justify-center items-center mt-30 mb-30 py-2 font-normal text-black">
                        {/* mb-10 py-2  = 48 px avstånd till nedre objekt */}
            <ul className="flex gap-8">
            {links.map((link) => (
                <li key={link.name}>
                    <Link
                    href={link.href}
                    className={`py-2 ${
                        pathname === link.href
                        ? "text-gray-500"
                        : "hover:underline"
                    }`}
                    >

                    {link.name}

                    </Link>
                </li>
            ))}
            </ul>
        </nav>
    )
};