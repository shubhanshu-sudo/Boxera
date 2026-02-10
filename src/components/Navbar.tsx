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
                <div className="hidden lg:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
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
                        className="lg:hidden text-white z-[111] p-2 -mr-2 focus:outline-none"
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-6"
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
                            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center gap-10 w-full max-w-sm">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: i * 0.1,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={(e) => {
                                            handleLinkClick(e, link.href);
                                            setIsOpen(false);
                                        }}
                                        className={`text-5xl xs:text-6xl font-anton uppercase tracking-tight hover:text-accent transition-all duration-300 block ${pathname === link.href ? "text-accent" : "text-white"}`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                                className="w-full mt-6"
                            >
                                <button className="w-full bg-white text-black py-5 text-xs font-black uppercase tracking-[0.4em] hover:bg-accent hover:text-white transition-all transform active:scale-95">
                                    Join The Era Now
                                </button>

                                <div className="mt-12 flex justify-center gap-8 text-white/30 text-[10px] font-black uppercase tracking-[0.2em]">
                                    <span className="hover:text-accent cursor-pointer transition-colors">IG</span>
                                    <span className="hover:text-accent cursor-pointer transition-colors">YT</span>
                                    <span className="hover:text-accent cursor-pointer transition-colors">TW</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

