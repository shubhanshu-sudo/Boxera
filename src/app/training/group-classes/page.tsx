"use client";

import { motion } from "framer-motion";
import { MoveRight, ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TransitionLink } from "@/components/transitions/TransitionLink";
import Footer from "@/components/Footer";

const classes = [
    {
        id: "01",
        title: "SWEAT X SCULPT",
        description: "Combine 20-25 minutes of HIIT with 20-25 minutes of dumbbell and kettlebell conditioning for a full-body sculpting workout that maximizes fat burn.",
        highlights: ["20-25 mins HIIT", "Dumbbell & kettlebell conditioning", "Maximum fat burn"],
        image: "/training.png",
        layout: "right",
    },
    {
        id: "02",
        title: "AFTERBURNER: FUNCTIONAL HIIT",
        description: "Sweat it out with high-intensity, functional movements in a dynamic circuit. Use various equipment like rowers and battle ropes to challenge your strength and endurance.",
        highlights: ["Functional circuits", "Rowers & battle ropes", "Strength + endurance"],
        image: "/hero.png",
        layout: "left",
    },
    {
        id: "03",
        title: "WOD CHALLENGE",
        description: "Test your limits with dynamic EMOMs and AMRAPs in this cross-training inspired class. Experience a supportive environment while pushing your HIIT and strength training to new heights.",
        highlights: ["EMOM", "AMRAP", "Cross-training format"],
        image: "/programs_bg.png",
        layout: "right",
    },
    {
        id: "04",
        title: "BOXING",
        description: "Train like an athlete in our boxing class, improving cardio and total body performance. Suitable for all levels, it emphasizes progressive techniques. Remember to bring your own wraps!",
        highlights: ["Progressive techniques", "All levels welcome", "Bring your own wraps"],
        image: "/ring.png",
        layout: "left",
    },
];

export default function GroupClasses() {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    } as any;

    return (
        <main className="bg-black text-white min-h-screen selection:bg-accent selection:text-white">
            {/* 1️⃣ HERO SECTION */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/DSC_0259.jpeg"
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-40 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-anton uppercase leading-none tracking-tighter mb-6">
                            GROUP CLASSES
                        </h1>
                        <p className="text-xl md:text-2xl font-light uppercase tracking-[0.2em] text-white/80 mb-4">
                            Train Together. Perform Like Athletes.
                        </p>
                        <p className="text-xs md:text-sm font-black uppercase tracking-[0.5em] text-accent mb-12">
                            High intensity. Structured programming. Zero excuses.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#3333A1" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent text-white px-10 md:px-14 py-5 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs transition-all shadow-[0_0_30px_rgba(67,67,209,0.3)]"
                        >
                            JOIN A CLASS
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* 2️⃣ MAIN SECTION – CLASS DETAILS GRID */}
            <section className="py-24 md:py-32 bg-black overflow-hidden">
                <div className="container mx-auto max-w-[1200px] px-6">
                    <div className="grid grid-cols-1 gap-12 md:gap-24">
                        {classes.map((item, idx) => (
                            <motion.div
                                key={item.id}
                                {...fadeIn}
                                className={`group flex flex-col ${item.layout === "left" ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch gap-8 lg:gap-16`}
                            >
                                {/* Text Content */}
                                <div className="flex-1 flex flex-col justify-center bg-[#0e0e0e] p-8 md:p-12 lg:p-16 rounded-sm border border-white/5 group-hover:border-accent/30 group-hover:shadow-[0_0_40px_rgba(67,67,209,0.1)] transition-all duration-500 relative overflow-hidden">
                                    <span className={`text-[8rem] md:text-[12rem] font-anton text-white/[0.03] absolute top-1/2 -translate-y-1/2 ${item.layout === "left" ? "right-4" : "left-4"} leading-none pointer-events-none select-none transition-all duration-700 group-hover:text-accent/[0.05]`}>
                                        {item.id}
                                    </span>

                                    <div className="relative z-10">
                                        <h3 className="text-3xl md:text-5xl font-anton uppercase text-white mb-6 leading-tight">
                                            {item.title}
                                        </h3>

                                        <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 font-light max-w-xl">
                                            {item.description}
                                        </p>

                                        <ul className="space-y-4 mb-10">
                                            {item.highlights.map((highlight, hIdx) => (
                                                <li key={hIdx} className="flex items-center gap-3 text-xs md:text-sm font-bold uppercase tracking-widest text-white/80">
                                                    <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_#4343D1]" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>

                                        <button className="self-start text-accent text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-4 group/btn">
                                            VIEW SCHEDULE <MoveRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                </div>

                                {/* Image Section */}
                                <div className="flex-1 relative min-h-[400px] lg:min-h-[550px] overflow-hidden rounded-sm group-hover:shadow-[0_0_50px_rgba(67,67,209,0.2)] transition-shadow duration-700">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2.5️⃣ MORE THAN A WORKOUT SECTION */}
            <section className="py-24 md:py-40 bg-zinc-950 border-y border-white/5 relative overflow-hidden">
                {/* Background Decorative Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
                    <span className="text-[20vw] font-anton uppercase leading-none whitespace-nowrap">EXPERIENCE</span>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div {...fadeIn} className="text-center max-w-4xl mx-auto mb-24 md:mb-32">
                        <span className="text-accent text-[10px] md:text-xs font-black tracking-[0.6em] uppercase mb-6 block">
                            THE BOXX ERA DIFFERENCE
                        </span>
                        <h2 className="text-5xl md:text-8xl font-anton uppercase mb-10 tracking-tighter leading-none">
                            MORE THAN A <br /> <span className="text-accent underline decoration-1 underline-offset-8">WORKOUT</span>
                        </h2>
                        <p className="text-xl md:text-2xl font-light text-white/70 leading-relaxed uppercase tracking-wide">
                            Fitness classes at Boxx Era are experiences, created and developed by the industry’s best minds bringing results through innovation.
                        </p>
                    </motion.div>

                    {/* Split Blocks */}
                    <div className="space-y-32 md:space-y-48">
                        {/* 🔹 BLOCK 1 – BOXING (Detailed) */}
                        <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm group">
                                <Image
                                    src="/ring.png"
                                    alt="Boxing Training"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-[1px] bg-accent" />
                                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Knowledge & Tech</span>
                                </div>
                                <h3 className="text-4xl md:text-7xl font-anton uppercase text-white tracking-tight">BOXING</h3>
                                <p className="text-lg md:text-xl font-normal text-white/80 leading-relaxed max-w-xl">
                                    Learn boxing from real fighters. Our coaches will give you knowledge as well as professional techniques in every session. The feeling of empowerment and motivation will keep you coming back for more.
                                    <br /><br />
                                    <span className="text-accent font-bold italic border-l-2 border-accent pl-4 block mt-4">
                                        Please bring your wraps or purchase them at the reception.
                                    </span>
                                </p>
                            </div>
                        </motion.div>

                        {/* 🔹 BLOCK 2 – DARK ROOM TRAININGS */}
                        <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="lg:order-2 relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm group">
                                <Image
                                    src="/training.png"
                                    alt="Dark Room Training"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            </div>
                            <div className="lg:order-1 flex flex-col gap-8 lg:text-right lg:items-end">
                                <div className="flex items-center gap-4 lg:flex-row-reverse">
                                    <div className="w-12 h-[1px] bg-accent" />
                                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Mental Reset</span>
                                </div>
                                <h3 className="text-4xl md:text-7xl font-anton uppercase text-white tracking-tight">DARK ROOM <br /> TRAININGS</h3>
                                <p className="text-lg md:text-xl font-normal text-white/80 leading-relaxed max-w-xl">
                                    We are pioneers. Working out in the dark removes all elements of comparison or competition. The dark room allows athletes to lose themselves and go inward, without distraction. It is a powerful mental and physical reset.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ FINAL CTA SECTION */}
            <section className="py-32 md:py-48 px-6 bg-[radial-gradient(circle_at_bottom,rgba(67,67,209,0.15)_0%,transparent_70%)] text-center border-t border-white/5 overflow-hidden">
                <div className="container mx-auto">
                    <motion.div {...fadeIn}>
                        <h2 className="text-5xl md:text-[6rem] lg:text-[7.5rem] font-anton uppercase mb-12 leading-[0.9] tracking-tighter text-white">
                            READY TO TRAIN <br />
                            LIKE AN <span className="text-accent">ATHLETE?</span>
                        </h2>
                        <p className="text-white/40 text-sm md:text-lg uppercase tracking-[0.6em] mb-16">
                            Discipline. Structure. Results.
                        </p>
                        <TransitionLink
                            href="/#contact"
                            className="inline-block"
                        >
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 40px rgba(67,67,209,0.6)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-accent text-white px-12 md:px-16 py-6 md:py-7 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs transition-all"
                            >
                                JOIN THE ERA NOW
                            </motion.button>
                        </TransitionLink>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
