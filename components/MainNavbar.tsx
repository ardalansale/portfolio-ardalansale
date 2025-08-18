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
        <nav className="mt-40 mb-12 py-8 font-normal text-black bg-red-500">
            <ul className="flex gap-4">
            {links.map((link) => (
                <li key={link.name}>
                    <Link
                    href={link.href}
                    className={`py-2 ${
                        pathname === link.href
                        ? "text-gray-400"
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
}

// export default function MainNavbar() { /* Gammal kod. Behövdes ändras för att göra "Visa aktuell sida" möjlig i navbar.
//     return (
//         <nav className="py-4 bg-green-500">
//             <ul className="flex gap-4 bg-blue-500">
//                 <li><Link href="/">Home</Link></li>
//                 <li><Link href="/work">Work</Link></li>
//                 <li><Link href="/projects">Projects</Link></li>
//                 <li><Link href="/about">About</Link></li>
//                 <li><Link href="/contact">Contact</Link></li>
//             </ul>
//         </nav>
//     )
// }