"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isHome = pathname === "/";

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Training", href: "/#programs" },
        { name: "Coaches", href: "/#coaches" },
        { name: "Articles", href: "/articles" },
        { name: "Pricing", href: "/#pricing" },
        { name: "Contact", href: "/#contact" },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("/#") && pathname === "/") {
            e.preventDefault();
            const id = href.replace("/#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
            }
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full h-20 md:h-24 z-[150] flex items-center px-6 md:px-12 justify-between border-b border-white/10 transition-all duration-500 ${isHome && !isOpen ? "bg-black/40 backdrop-blur-md" : "bg-black"
                    }`}
            >
                <Link href="/" className="relative w-12 h-12 md:w-16 md:h-16 z-[101]">
                    <Image
                        src="/logo.png"
                        alt="BOXXERA Logo"
                        fill
                        className="object-contain invert"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className={`transition-colors hover:text-accent ${pathname === link.href ? "text-accent" : "text-white"}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4 md:gap-8">
                    <button className="hidden xs:block bg-white text-black px-4 md:px-6 py-2 md:py-3 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all transform hover:scale-105 active:scale-95 duration-300">
                        Join Now
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white z-[111] p-2 -mr-2 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} className="text-accent" /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-0 z-[110] bg-black flex flex-col pt-32 px-10"
                    >
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={(e) => {
                                            handleLinkClick(e, link.href);
                                            setIsOpen(false);
                                        }}
                                        className="text-4xl xs:text-5xl font-anton uppercase tracking-tight hover:text-accent transition-colors block"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="mt-auto mb-12"
                        >
                            <button className="w-full bg-accent text-white py-6 text-sm font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                                Join The Era Now
                            </button>
                            <div className="mt-8 flex gap-6 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                                <span>Instagram</span>
                                <span>Youtube</span>
                                <span>Twitter</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

