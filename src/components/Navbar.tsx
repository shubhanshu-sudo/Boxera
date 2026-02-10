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
        { name: "Gallery", href: "/gallery" },
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
                className={`fixed top-0 left-0 w-full h-20 md:h-24 z-[150] flex items-center px-8 md:px-12 justify-between border-b border-white/10 transition-all duration-500 ${isHome && !isOpen ? "bg-black/40 backdrop-blur-md" : "bg-black"
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

                <div className="flex items-center gap-3 md:gap-6">
                    <Link href="/#contact" onClick={(e) => handleLinkClick(e, "/#contact")}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden xs:flex bg-accent text-white px-6 md:px-8 py-2.5 md:py-3.5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(67,67,209,0.3)] hover:bg-white hover:text-black transition-all duration-300 items-center justify-center whitespace-nowrap"
                        >
                            JOIN THE ERA NOW
                        </motion.button>
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white z-[111] p-1 focus:outline-none flex items-center justify-center transition-transform active:scale-90"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} className="text-accent" /> : <Menu size={24} />}
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
                        className="fixed inset-0 z-[110] bg-black/98 backdrop-blur-2xl flex flex-col p-8 pt-44"
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                            <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
                        </div>

                        <div className="relative z-10 flex flex-col items-start gap-5 w-full max-w-[320px]">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -25 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: i * 0.1,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                    className="w-full"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={(e) => {
                                            handleLinkClick(e, link.href);
                                            setIsOpen(false);
                                        }}
                                        className={`text-[2rem] xs:text-[2.8rem] font-anton uppercase tracking-tighter hover:text-accent transition-all duration-300 block text-left ${pathname === link.href ? "text-accent" : "text-white"}`}
                                    >
                                        <span className="flex items-center gap-4">
                                            {pathname === link.href && <motion.div layoutId="nav-line" className="w-8 h-[2px] bg-accent" />}
                                            {link.name}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="w-full mt-10"
                            >
                                <button className="w-full bg-accent text-white py-5 px-6 text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_15px_40px_rgba(67,67,209,0.3)] hover:bg-white hover:text-black transition-all duration-500 transform active:scale-[0.98] text-left flex justify-between items-center group/mb">
                                    <span>JOIN THE ERA NOW</span>

                                </button>

                                <div className="mt-16 flex gap-8 text-white/20 text-[9px] font-black uppercase tracking-[0.3em]">
                                    {["Instagram", "Youtube", "Twitter"].map((social) => (
                                        <span key={social} className="hover:text-accent cursor-pointer transition-colors whitespace-nowrap">
                                            {social}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

