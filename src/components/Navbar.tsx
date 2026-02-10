"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";

    return (
        <nav
            className={`fixed top-0 left-0 w-full h-20 md:h-24 z-50 flex items-center px-6 md:px-12 justify-between border-b border-white/10 transition-all duration-300 ${isHome ? "bg-black/40 backdrop-blur-md" : "bg-black"
                }`}
        >
            <Link href="/" className="relative w-12 h-12 md:w-16 md:h-16">
                <Image
                    src="/logo.png"
                    alt="BOXXERA Logo"
                    fill
                    className="object-contain invert"
                />
            </Link>

            <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
                <Link href="/#programs" className="hover:text-accent transition-colors">Training</Link>
                <Link href="/#coaches" className="hover:text-accent transition-colors">Coaches</Link>
                <Link href="/articles" className={`transition-colors ${pathname === "/articles" ? "text-accent" : "hover:text-accent"}`}>Articles</Link>
                <Link href="/#pricing" className="hover:text-accent transition-colors">Pricing</Link>
                <Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>

            <button className="bg-white text-black px-5 md:px-6 py-2 text-[9px] md:text-[10px] font-black uppercase tracking-wider hover:bg-accent hover:text-white transition-colors">
                Join Now
            </button>
        </nav>
    );
}
