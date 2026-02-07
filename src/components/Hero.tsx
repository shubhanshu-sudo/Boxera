"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const slides = [
    {
        tagline: "EST. 2024 • NO EXCUSES • JUST RESULTS",
        headline: (
            <>
                BOXXER<span className="text-accent">A</span>
            </>
        ),
        description: "THE PREMIUM FIGHT CLUB FOR THOSE WHO DEMAND EXCELLENCE.",
        primaryCTA: "START YOUR JOURNEY",
        secondaryCTA: "VIEW SCHEDULE",
        image: "/hero.png",
    },
    {
        tagline: "DISCIPLINE • POWER • ENDURANCE",
        headline: (
            <>
                TRAIN LIKE A <span className="text-accent">FIGHTER</span>
            </>
        ),
        description: "BUILD STRENGTH, SPEED AND MENTAL TOUGHNESS.",
        primaryCTA: "JOIN THE PROGRAM",
        secondaryCTA: "EXPLORE TRAINING",
        image: "/training.png",
    },
    {
        tagline: "FORGE YOUR BODY",
        headline: (
            <>
                STEP INTO THE <span className="text-accent">RING</span>
            </>
        ),
        description: "TRANSFORM YOUR BODY AND MIND.",
        primaryCTA: "GET YOUR FIRST CLASS",
        secondaryCTA: "CONTACT US",
        image: "/ring.png",
    },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    useEffect(() => {
        const init = () => {
            setIsMounted(true);
            setWindowWidth(window.innerWidth);
        };

        const timeout = setTimeout(init, 0);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        const timer = setInterval(nextSlide, 6000);
        return () => {
            clearTimeout(timeout);
            clearInterval(timer);
            window.removeEventListener("resize", handleResize);
        }
    }, [nextSlide]);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black text-white flex flex-col">
            {/* Navbar overlay */}
            <div className="absolute top-0 left-0 w-full h-20 md:h-24 bg-black/40 backdrop-blur-md z-50 flex items-center px-6 md:px-12 justify-between border-b border-white/10">
                <div className="relative w-12 h-12 md:w-16 md:h-16">
                    <Image
                        src="/logo.png"
                        alt="BOXXERA Logo"
                        fill
                        className="object-contain invert" // Inverting because the uploaded logo is black on white
                    />
                </div>
                <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
                    <a href="#" className="hover:text-accent transition-colors">Training</a>
                    <a href="#" className="hover:text-accent transition-colors">Coaches</a>
                    <a href="#" className="hover:text-accent transition-colors">Pricing</a>
                    <a href="#" className="hover:text-accent transition-colors">Contact</a>
                </div>
                <button className="bg-white text-black px-5 md:px-6 py-2 text-[9px] md:text-[10px] font-black uppercase tracking-wider hover:bg-accent hover:text-white transition-colors">Join Now</button>
            </div>

            <div className="flex-grow relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
                        className="absolute inset-0 w-full h-full"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={slides[current].image}
                                alt="Hero Background"
                                fill
                                className="object-cover grayscale"
                                priority
                            />
                            {/* Cinematic Overlay */}
                            <div className="absolute inset-0 bg-black/70" />
                        </div>

                        {/* Content Container */}
                        <div className="relative z-10 h-full w-full flex items-center justify-center pt-20">
                            <div className="container mx-auto px-6 flex flex-col items-center text-center">

                                {/* 1. Tagline */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="mb-6 md:mb-10"
                                >
                                    <span className="text-[clamp(0.6rem,2vw,0.85rem)] font-bold tracking-[0.3em] md:tracking-[0.4em] text-white/60 uppercase">
                                        {slides[current].tagline}
                                    </span>
                                </motion.div>

                                {/* 2. Headline + Description Section */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full max-w-5xl mb-12 md:mb-20"
                                >
                                    <h1 className="mb-6 md:mb-10 text-[clamp(2.5rem,10vw,8.5rem)] font-anton uppercase tracking-tighter leading-[1.05] md:leading-[0.95]">
                                        {slides[current].headline}
                                    </h1>
                                    <p className="mx-auto max-w-2xl text-[clamp(0.7rem,2vw,1rem)] font-medium text-white/70 tracking-[0.1em] md:tracking-[0.2em] uppercase leading-relaxed">
                                        {slides[current].description}
                                    </p>
                                </motion.div>

                                {/* 3. CTA Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.8 }}
                                    className="flex flex-col sm:flex-row gap-4 md:gap-8 w-full sm:w-auto"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05, backgroundColor: "#ff0000", color: "#ffffff" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-black px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-4 transition-colors"
                                    >
                                        {slides[current].primaryCTA} <MoveRight size={18} />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05, borderColor: "#ff0000", color: "#ff0000" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-2 border-white/30 text-white/70 px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-widest text-xs md:text-sm transition-all"
                                    >
                                        {slides[current].secondaryCTA}
                                    </motion.button>
                                </motion.div>

                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Manual Navigation Dots */}
            <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-50 flex gap-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className="group relative h-10 md:h-12 w-8 flex items-center justify-center"
                    >
                        <motion.div
                            animate={{
                                height: current === index ? (isMounted && windowWidth < 768 ? 24 : 32) : 12,
                                backgroundColor: current === index ? "#ff0000" : "rgba(255,255,255,0.3)",
                            }}
                            className="w-[2px] transition-colors duration-300 group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(255,0,0,0.8)]"
                        />
                    </button>
                ))}
            </div>

            {/* Decorative vertical words - Slide Context */}
            <div className="absolute left-8 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-12 items-center opacity-20 pointer-events-none">
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold tracking-[0.5em] uppercase">Boxxera</span>
                <div className="w-[1px] h-20 bg-white" />
                <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold tracking-[0.5em] uppercase text-accent">Elite</span>
            </div>

            {/* Scroll indicator overlay */}
            <div className="absolute right-8 md:right-12 bottom-12 hidden md:block opacity-40 z-50">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-white" />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Scroll to explore</span>
                </div>
            </div>
        </section>
    );
}
