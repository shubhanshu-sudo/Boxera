"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Zap, Target, Shield, MoveRight } from "lucide-react";

const programs = [
    {
        id: "01",
        type: "TAG_STACK",
        title: "GROUP CLASSES",
        tagline: "COMMUNITY STRENGTH",
        tags: ["HIIT", "BODY TRAINING", "STRENGTH & POWER TRAINING"],
        icon: <Target className="w-6 h-6" />,
        image: "/training.png",
    },
    {
        id: "02",
        type: "PERSONAL_TRAINING",
        title: "PERSONAL TRAINING",
        tagline: "ONE-ON-ONE FOCUS",
        tags: ["ASHWIN", "SHIVANI", "JEETH"],
        features: [
            "Individual Assessment",
            "Identification of wear point",
            "Goal & result oriented training",
            "Expert / Qualified Trainers"
        ],
        icon: <Zap className="w-6 h-6" />,
        image: "/hero.png",
    },
    {
        id: "03",
        type: "TAG_STACK",
        title: "TRANSFORMATIVE PROGRAM",
        tagline: "ELITE EVOLUTION",
        tags: ["Group / DBS", "1-1 / CONSULTATION"],
        icon: <Shield className="w-6 h-6" />,
        image: "/programs_bg.png",
    },
];

export default function Programs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const containerVariants = {
        rest: { transition: { staggerChildren: 0.1 } },
        hover: { transition: { staggerChildren: 0.05 } }
    };

    const itemVariants = {
        rest: { opacity: 0, y: 20 },
        hover: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as any } }
    };

    return (
        <section className="bg-black py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto relative z-10 px-4 md:px-0">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 md:mb-24 gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent uppercase tracking-widest text-[10px] md:text-xs font-bold mb-4 block">
                            TRAINING DISCIPLINE
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-anton uppercase tracking-tight leading-[0.9]">
                            ELITE <br /> <span className="text-white">PROGRAMS</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="lg:max-w-md"
                    >
                        <div className="w-12 h-1 bg-accent mb-6 md:block hidden" />
                        <p className="text-white/40 text-xs md:text-sm leading-relaxed uppercase tracking-[0.2em]">
                            WE DON&apos;T DO &quot;FITNESS CLASSES.&quot; WE TRAIN PEOPLE TO BECOME WEAPONS.
                            CHOOSE YOUR PATH AND FORGE YOUR LEGACY IN THE RING.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`group relative h-[550px] md:h-[700px] bg-zinc-900 overflow-hidden border transition-all duration-700 rounded-sm cursor-pointer
                                ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-30 grayscale blur-[1px]" : "opacity-100 grayscale-0 blur-0"}
                                ${hoveredIndex === index ? "border-accent shadow-[0_0_40px_rgba(255,0,0,0.2)]" : "border-white/5"}
                            `}
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className={`object-cover transition-all duration-1000 ${hoveredIndex === index ? "opacity-20 scale-105" : "opacity-15 scale-100"}`}
                                />
                                <div className={`absolute inset-0 transition-colors duration-700 ${hoveredIndex === index ? "bg-black/90" : "bg-black/70"}`} />
                            </div>

                            <div className="absolute inset-0 p-8 md:p-10 flex flex-col z-20 overflow-hidden text-center items-center">

                                {program.type === "TAG_STACK" ? (
                                    <div className="h-full flex flex-col relative items-center w-full">
                                        {/* Heading Stack (Centered by default, moves to top on hover) */}
                                        <div className={`absolute left-0 right-0 flex flex-col items-center transition-all duration-700 ease-[0.16,1,0.3,1] ${hoveredIndex === index ? "top-0" : "top-1/2 -translate-y-1/2"}`}>
                                            <span className="text-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-2 block">
                                                {program.tagline}
                                            </span>
                                            <h3 className="text-[2.2rem] md:text-[2.8rem] font-anton uppercase tracking-tight text-white leading-none">
                                                {program.title}
                                            </h3>
                                        </div>

                                        {/* Hover Content - Tags Stack (Mirrored logic for 1st and last card) */}
                                        <div className="flex flex-col items-center w-full mt-40 gap-8 h-full">
                                            <motion.div
                                                variants={containerVariants}
                                                animate={hoveredIndex === index ? "hover" : "rest"}
                                                className={`flex flex-col gap-3 w-full transition-all duration-700 ${hoveredIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                                            >
                                                {program.tags?.map((tag, tIdx) => (
                                                    <motion.div
                                                        key={tIdx}
                                                        variants={itemVariants}
                                                        className="border border-white/20 bg-white/5 backdrop-blur-md px-4 py-3 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transform transition-all duration-300 hover:border-accent hover:bg-white/10"
                                                    >
                                                        {tag}
                                                    </motion.div>
                                                ))}
                                            </motion.div>

                                            {/* EXPLORE NOW Button */}
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                transition={{ delay: 0.4, duration: 0.5 }}
                                                className="mt-4 bg-white text-black px-8 py-3 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center gap-3 transition-all hover:bg-accent hover:text-white hover:gap-5"
                                            >
                                                EXPLORE NOW <MoveRight size={16} />
                                            </motion.button>
                                        </div>

                                        {/* Static Bottom */}
                                        <div className={`mt-auto transition-opacity duration-500 ${hoveredIndex === index ? "opacity-0" : "opacity-100"}`}>
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 flex items-center gap-2">
                                                EXPLORE <ArrowUpRight className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    /* Card 02 - Personal Training (Retaining its unique hover logic) */
                                    <div className="h-full flex flex-col relative items-center w-full">
                                        <div className={`absolute left-0 right-0 flex flex-col items-center transition-all duration-700 ease-[0.16,1,0.3,1] ${hoveredIndex === index ? "top-0" : "top-1/2 -translate-y-1/2"}`}>
                                            <span className="text-accent uppercase tracking-[0.3em] font-bold text-[10px] mb-2 block">{program.tagline}</span>
                                            <h3 className="text-[2.5rem] md:text-[3rem] font-anton uppercase tracking-tight text-white leading-none">
                                                PERSONAL <br /> TRAINING
                                            </h3>
                                        </div>

                                        <div className={`w-full flex flex-col items-center transition-all duration-700 mt-44 ${hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
                                            <div className="flex border-b border-white/10 mb-8 w-full">
                                                {program.tags?.map((tag, tIdx) => (
                                                    <div key={tIdx} className="flex-1 py-3 text-[10px] font-black text-white/40 hover:text-accent transition-colors border-r last:border-r-0 border-white/10 uppercase tracking-tighter">
                                                        {tag}
                                                    </div>
                                                ))}
                                            </div>
                                            <ul className="flex flex-col gap-4 items-start mb-10 w-fit mx-auto">
                                                {program.features?.map((f, fIdx) => (
                                                    f ? (
                                                        <li key={fIdx} className="text-white/60 text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center gap-3">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 shadow-[0_0_8px_rgba(255,0,0,0.6)]" />
                                                            {f}
                                                        </li>
                                                    ) : null
                                                ))}
                                            </ul>

                                            {/* EXPLORE NOW Button */}
                                            <motion.button
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={hoveredIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                transition={{ delay: 0.4, duration: 0.5 }}
                                                className="bg-white text-black px-8 py-3 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center gap-3 transition-all hover:bg-accent hover:text-white hover:gap-5"
                                            >
                                                EXPLORE NOW <MoveRight size={16} />
                                            </motion.button>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className={`absolute bottom-0 left-0 h-1 bg-accent transition-all duration-700 ${hoveredIndex === index ? "w-full" : "w-0"}`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}