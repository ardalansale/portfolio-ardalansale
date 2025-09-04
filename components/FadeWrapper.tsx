// Gör att varje sida fade:ar in

"use client";

import { usePathname } from "next/navigation";
export default function FadeWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname ();

    return (
        <div key={pathname} className="fade-in">
        {children}
        </div>
    );
};