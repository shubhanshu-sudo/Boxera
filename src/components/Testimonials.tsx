"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "Rahul",
        location: "Delhi",
        text: "BEST BOXING GYM I’VE TRAINED AT. SERIOUS COACHING AND REAL RESULTS. THE ATMOSPHERE HERE IS UNMATCHED.",
        rating: 5,
    },
    {
        id: 2,
        name: "Ankit",
        location: "Gurgaon",
        text: "HIGH ENERGY WORKOUTS AND DISCIPLINED ENVIRONMENT. HIGHLY RECOMMENDED FOR ANYONE LOOKING TO LEVEL UP.",
        rating: 5,
    },
    {
        id: 3,
        name: "Neha",
        location: "Delhi",
        text: "PERFECT PLACE TO BUILD STRENGTH AND MENTAL TOUGHNESS. THE COACHES REALLY PUSH YOU BEYOND YOUR LIMITS.",
        rating: 5,
    },
    {
        id: 4,
        name: "Vikram",
        location: "Noida",
        text: "THE ELITE EQUIPMENT AND PROFESSIONAL VIBE MAKE EVERY SESSION PRODUCTIVE. BEST INVESTMENT IN MYSELF.",
        rating: 5,
    },
    {
        id: 5,
        name: "Sanya",
        location: "Delhi",
        text: "TECHNICAL MASTERCLASS EVERY SINGLE DAY. TRULY A WORLD-CLASS FACILITY FOR SERIOUS FIGHTERS.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const [cols, setCols] = useState(3);

    const nextSlide = useCallback(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    useEffect(() => {
        const init = () => {
            setIsMounted(true);
            const updateCols = () => {
                if (window.innerWidth < 768) setCols(1);
                else if (window.innerWidth < 1280) setCols(2);
                else setCols(3);
            };
            updateCols();
        };

        const timeout = setTimeout(init, 0);

        const updateColsOnResize = () => {
            if (window.innerWidth < 768) setCols(1);
            else if (window.innerWidth < 1280) setCols(2);
            else setCols(3);
        };

        window.addEventListener("resize", updateColsOnResize);

        const timer = setInterval(nextSlide, 5000);
        return () => {
            clearTimeout(timeout);
            clearInterval(timer);
            window.removeEventListener("resize", updateColsOnResize);
        };
    }, [nextSlide]);

    return (
        <section className="bg-black py-24 md:py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute left-0 top-0 w-64 h-64 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent uppercase tracking-[0.4em] text-[10px] md:text-xs font-black mb-4 block">
                            SOCIAL PROOF
                        </span>
                        <h2 className="text-5xl md:text-7xl font-anton uppercase tracking-tight leading-none mb-6">
                            WARRIOR <span className="text-white/20">VOICES</span>
                        </h2>
                        <div className="flex items-center justify-center gap-2 text-white/40 uppercase tracking-widest text-[10px] font-bold">
                            <ShieldCheck size={14} className="text-accent" /> TRUSTED BY 500+ ATHLETES
                        </div>
                    </motion.div>
                </div>

                <div className="relative">
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-6 w-full"
                            animate={{ x: isMounted ? `-${index * (100 / cols)}%` : 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        >
                            {testimonials.map((item) => (
                                <div
                                    key={item.id}
                                    className="w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)] flex-shrink-0"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 p-8 md:p-10 rounded-2xl h-full flex flex-col justify-between hover:border-accent/30 transition-colors group"
                                    >
                                        <div>
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(item.rating)].map((_, i) => (
                                                    <Star key={i} size={14} className="fill-accent text-accent" />
                                                ))}
                                            </div>
                                            <p className="text-white/70 text-sm md:text-base leading-relaxed uppercase tracking-wide mb-8 font-medium">
                                                &quot;{item.text}&quot;
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-anton text-lg">
                                                {item.name[0]}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold uppercase tracking-widest text-xs">
                                                    {item.name}
                                                </h4>
                                                <span className="text-white/30 uppercase tracking-tighter text-[10px]">
                                                    {item.location}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <div className="flex justify-center gap-3 mt-12 md:mt-16">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className="group relative h-1 w-8 md:w-12 bg-white/10 overflow-hidden"
                        >
                            <motion.div
                                animate={{
                                    x: index === i ? 0 : "-100%"
                                }}
                                className="absolute inset-0 bg-accent"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
