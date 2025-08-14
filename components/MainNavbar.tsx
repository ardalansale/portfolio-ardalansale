import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavbar() {
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "Work", href: "/work" },
        { name: "Projects", href: "/projects" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="py-4 bg-green-500">
            <ul className="flex gap-4 bg-blue-500">
                {links.map((link) => (
                    <                
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