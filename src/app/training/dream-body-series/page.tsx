"use client";

import { motion } from "framer-motion";
import { ArrowRight, MoveDown, Check } from "lucide-react";
import Footer from "@/components/Footer";
import { TransitionLink } from "@/components/transitions/TransitionLink";

export default function DreamBodySeries() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    } as any;

    const constraints = [
        "An Athlete’s mindset is strongly needed. No excuses, discipline, and willingness to achieve your goals.",
        "Follow all instructions given by Coach.",
        "Do not suggest or make excuses for the Coach — trust the process.",
        "This program is for people seeking strict coaching and real transformation — not casual fitness.",
        "Be punctual. Log in no later than 7:15 AM. Late entry = no attendance.",
        "Be regular. Do not skip classes. Rest days are decided by Coach.",
        "No other workouts without Coach’s permission.",
        "Strict diet compliance is mandatory.",
        "Missing a class without valid reason may result in removal.",
        "Failure to meet criteria may result in removal from the program.",
        "Fees are non-refundable, non-freezable, non-transferable."
    ];

    return (
        <main className="bg-black text-white min-h-screen selection:bg-accent selection:text-white">
            {/* SECTION 1 — HERO */}
            <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
                {/* Subtle texture/gradient overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(67,67,209,0.08)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <span className="text-accent text-[10px] md:text-xs font-black tracking-[0.6em] uppercase mb-8 block">
                            STRICT. STRUCTURED. NON-NEGOTIABLE.
                        </span>
                        <h1 className="text-[clamp(3rem,12vw,10rem)] font-anton uppercase leading-[0.9] tracking-tighter mb-10">
                            DREAM BODY <br /> SERIES
                        </h1>
                        <div className="text-white/60 text-base md:text-xl font-medium tracking-widest mb-14 max-w-2xl mx-auto uppercase leading-relaxed">
                            <p>This is not for everyone.</p>
                            <p>This is for athletes ready to commit fully.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto bg-accent text-white px-10 py-5 md:px-14 md:py-6 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs flex items-center justify-center gap-4 transition-all shadow-[0_0_40px_rgba(67,67,209,0.3)] border-2 border-accent"
                            >
                                APPLY FOR DBS <ArrowRight size={16} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)", color: "#ffffff" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto border-2 border-white/10 text-white/50 px-10 py-5 md:px-14 md:py-6 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs flex items-center justify-center gap-4 transition-all hover:bg-white/5"
                            >
                                VIEW ELIGIBILITY <MoveDown size={16} />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30 animate-pulse">
                    <div className="w-[1px] h-12 bg-white" />
                    <span className="text-[8px] font-bold tracking-[0.5em] uppercase">Scroll</span>
                </div>
            </section>

            {/* SECTION 2 — PROGRAM INTRO */}
            <section id="details" className="py-24 md:py-48 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.div {...fadeIn}>
                        <h2 className="text-4xl md:text-7xl font-anton uppercase mb-16 tracking-tighter">
                            WHAT IS <span className="text-accent">DREAM BODY</span> SERIES?
                        </h2>
                        <div className="space-y-8 text-xl md:text-3xl font-light text-white/80 leading-relaxed max-w-3xl mx-auto">
                            <p>
                                Dream Body Series is a <span className="text-white font-bold">high-discipline transformation program</span> built for individuals who are serious about results.
                            </p>
                            <p>
                                It is not a casual fitness class.
                            </p>
                            <p>
                                It is a <span className="text-accent font-semibold italic">structured coaching system</span> designed for complete physical and mental evolution.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3 — ELIGIBILITY & DISCIPLINE CRITERIA */}
            <section className="py-24 md:py-48 bg-zinc-950/50 border-y border-white/5">
                <div className="container mx-auto px-6 max-w-5xl">
                    <motion.div {...fadeIn} className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-anton uppercase mb-6 tracking-tighter">ELIGIBILITY & COMMITMENT</h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="w-8 h-[1px] bg-accent" />
                            <p className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
                                Agreement is Mandatory
                            </p>
                            <div className="w-8 h-[1px] bg-accent" />
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6 md:gap-8 lg:px-12">
                        {constraints.map((text, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeIn}
                                transition={{ delay: idx * 0.05, duration: 0.6 }}
                                className="flex items-start gap-6 group bg-white/[0.02] p-6 md:p-8 rounded-xl border border-white/5 hover:border-accent/30 transition-all"
                            >
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                                    <Check size={14} className="text-accent group-hover:text-white" />
                                </div>
                                <p className="text-base md:text-xl text-white/70 leading-relaxed font-medium">
                                    {text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4 — TRANSFORMATION TRACKING */}
            <section className="py-24 md:py-48 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        {...fadeIn}
                        className="bg-zinc-900/40 border border-white/5 p-8 md:p-20 rounded-[2rem] relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/5 blur-[80px] pointer-events-none" />

                        <h2 className="text-3xl md:text-6xl font-anton uppercase text-white mb-12 tracking-tight leading-none">
                            TRANSFORMATION TRACKING <br />
                            <span className="text-accent opacity-80">(COMPULSORY)</span>
                        </h2>

                        <div className="space-y-10 text-lg md:text-2xl text-white/70 font-normal leading-relaxed">
                            <p>
                                You are required to share your <span className="text-white font-bold">pictures, measurements, and weight</span> on the first day.
                            </p>
                            <p>
                                Updated progress data must be submitted <span className="text-white">monthly</span> and whenever requested by the Coach.
                            </p>
                            <div className="pt-6 flex items-center gap-4">
                                <div className="w-12 h-[2px] bg-accent" />
                                <p className="text-accent font-black uppercase tracking-[0.5em] text-[11px] md:text-xs">
                                    This is mandatory.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 5 — FINAL CALL TO ACTION */}
            <section className="py-32 md:py-60 px-6 bg-black text-center relative overflow-hidden border-t border-white/5">
                {/* Decorative Background Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
                    <span className="text-[30vw] font-anton uppercase leading-none whitespace-nowrap">COMMIT</span>
                </div>

                <div className="container mx-auto relative z-10">
                    <motion.div {...fadeIn}>
                        <h2 className="text-4xl md:text-8xl font-anton uppercase mb-16 leading-[1] tracking-tighter">
                            IF YOU AGREE TO <br />
                            EVERYTHING ABOVE, <br />
                            <span className="text-accent">YOU ARE READY.</span>
                        </h2>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
                            <TransitionLink
                                href="/#contact"
                                className="w-full sm:w-auto"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-accent text-white px-10 py-5 md:px-16 md:py-7 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs shadow-[0_20px_50px_rgba(67,67,209,0.4)] transition-all"
                                >
                                    JOIN THE DREAM BODY SERIES →
                                </motion.button>
                            </TransitionLink>
                            <TransitionLink
                                href="/#contact"
                                className="w-full sm:w-auto"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full border border-white/20 text-white/50 px-10 py-5 md:px-16 md:py-7 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs transition-all"
                                >
                                    CONTACT US
                                </motion.button>
                            </TransitionLink>
                        </div>
                    </motion.div>
                </div>

                {/* Subtle background glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 blur-[120px] pointer-events-none" />
            </section>

            <Footer />
        </main>
    );
}
