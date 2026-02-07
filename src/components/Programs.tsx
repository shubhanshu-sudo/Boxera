"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Zap, Target, Shield } from "lucide-react";

const programs = [
    {
        id: "01",
        title: "PRO BOXING",
        tagline: "TECHNICAL MASTERY",
        description: "ELITE-LEVEL TRAINING FOR ASPIRING FIGHTERS AND PROFESSIONALS.",
        icon: <Target className="w-6 h-6" />,
        image: "/training.png",
    },
    {
        id: "02",
        title: "STRENGTH & POWER",
        tagline: "EXPLOSIVE FORCE",
        description: "BUILD FUNCTIONAL POWER AND SPEED THROUGH METABOLIC CONDITIONING.",
        icon: <Zap className="w-6 h-6" />,
        image: "/hero.png",
    },
    {
        id: "03",
        title: "MUAY THAI",
        tagline: "ART OF 8 LIMBS",
        description: "TRADITIONAL MUAY THAI TECHNIQUES FOR EFFECTIVE COMBAT OFFENSE.",
        icon: <Shield className="w-6 h-6" />,
        image: "/programs_bg.png",
    },
    {
        id: "04",
        title: "CARDIO BOXING",
        tagline: "FAT BURN",
        description: "HIGH-ENERGY CLASSES DESIGNED TO BOOST STAMINA AND TORCH CALORIES.",
        icon: <Zap className="w-6 h-6" />,
        image: "/training.png",
    },
];

export default function Programs() {
    return (
        <section className="bg-black py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
            {/* Background Texture/Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto relative z-10 px-4 md:px-0">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 md:mb-24 gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-shrink-0"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="group relative h-[500px] md:h-[600px] bg-zinc-900 overflow-hidden border border-white/5 hover:border-accent/50 transition-colors duration-500"
                        >
                            {/* Image Layer */}
                            <div className="absolute inset-0 grayscale transition-transform duration-700 group-hover:scale-110">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="object-cover opacity-10 group-hover:opacity-30 transition-opacity"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

                            {/* Content Box */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="text-4xl md:text-5xl font-anton text-white/5 group-hover:text-accent transition-colors duration-500">
                                        {program.id}
                                    </span>
                                    <div className="p-3 border border-white/10 bg-black/50 backdrop-blur-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {program.icon}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 md:gap-4">
                                    <span className="text-accent text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] block">
                                        {program.tagline}
                                    </span>
                                    <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-anton uppercase tracking-normal text-white leading-[1] md:leading-none group-hover:translate-x-2 transition-transform duration-500">
                                        {program.title}
                                    </h3>
                                    <div className="overflow-hidden">
                                        <p className="text-white/50 text-[10px] md:text-xs leading-relaxed uppercase tracking-widest max-w-[240px] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            {program.description}
                                        </p>
                                    </div>

                                    <motion.button
                                        whileHover={{ x: 10 }}
                                        className="mt-4 md:mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white border-b border-accent/30 pb-1 w-fit group-hover:border-accent transition-colors"
                                    >
                                        EXPLORE <ArrowUpRight className="w-3 h-3 text-accent" />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Hover Accent Line */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
