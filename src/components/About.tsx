"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="coaches" className="relative bg-black py-24 md:py-40 px-6 md:px-12 overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none hidden lg:block">
                <span className="text-[20vw] font-anton uppercase leading-none whitespace-nowrap">
                    IDEOLOGY
                </span>
            </div>

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
                {/* Left Side: Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-5 pt-2"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-[1px] bg-accent" />
                        <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Our Core</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-anton uppercase leading-[1] tracking-tighter text-white mb-8">
                        About <br /> <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>Boxx Era</span>
                    </h2>
                    <div className="hidden lg:flex flex-col gap-6 mt-16 opacity-30">
                        <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold tracking-[0.5em] uppercase">Discipline First</span>
                        <div className="w-[1px] h-16 bg-white" />
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-7 flex flex-col gap-10 md:gap-12"
                >
                    <div className="relative">
                        <h3 className="text-3xl md:text-5xl font-anton uppercase text-white leading-[1.1] mb-2 relative z-10">
                            BOXX ERA IS AN <span className="text-accent">ELITE</span> TRANSFORMATION POWERHOUSE.
                        </h3>
                        <div className="absolute -left-4 -top-4 w-20 h-20 bg-accent/10 rounded-full blur-3xl" />
                    </div>

                    <div className="max-w-[650px] space-y-10">
                        <p className="text-lg md:text-xl font-normal text-white/85 leading-relaxed">
                            We do not follow trendy or casual setups. Ours is a <span className="text-accent font-semibold italic">disciplined and structured academy</span> meant for people who are genuinely looking for results.
                        </p>

                        <p className="text-lg md:text-xl font-normal text-white/85 leading-relaxed">
                            Many times, we honestly ask people to join other gyms or studios if what they are looking for is not something we provide. Yes, it is true — <span className="border-b border-accent/30 pb-1">we carefully select our clients.</span> We prioritize those committed to a complete metamorphosis.
                        </p>

                        <p className="text-lg md:text-xl font-normal text-white/85 leading-relaxed">
                            There is no shirtless training or unnecessary socializing. We focus on <span className="text-white font-bold tracking-tight">building team leaders</span> and creating a positive environment where mindsets are changed and the right path is shown.
                        </p>

                        <p className="text-lg md:text-xl font-normal text-white/85 leading-relaxed">
                            Our coaches and founders come purely from sports backgrounds, not business backgrounds — where <span className="text-accent font-bold">discipline is non-negotiable</span> and <span className="text-white font-bold border-b-2 border-accent">champions are created.</span>
                        </p>
                    </div>

                    <div className="flex items-center gap-6 mt-4">
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center overflow-hidden">
                                    <div className="w-full h-full bg-accent/20 flex items-center justify-center text-[10px] font-bold">BX</div>
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">
                            Join the <span className="text-white">Elite 1%</span>
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* The Hard Filter Section (Strategic Red & Yellow use) */}
            <div className="container mx-auto mt-32 md:mt-48 relative z-10 px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
                    {/* Yellow: For You */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900/50 p-10 md:p-16"
                    >
                        <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Inclusion</span>
                        <h4 className="text-3xl md:text-4xl font-anton uppercase text-white mb-8">This is <span className="text-accent underline decoration-accent/30 underline-offset-8">for you</span> if:</h4>
                        <ul className="space-y-4">
                            {[
                                "You are looking for a complete life transformation.",
                                "You value discipline over short-term trends.",
                                "You want to train in an elite, focused environment.",
                                "You are ready to be coached by pros, not business owners."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start text-white/70 uppercase tracking-wider text-[11px] md:text-xs">
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Red: NOT For You */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-zinc-900/50 p-10 md:p-16 border-t md:border-t-0 md:border-l border-white/5"
                    >
                        <span className="text-accent-red font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Exclusion</span>
                        <h4 className="text-3xl md:text-4xl font-anton uppercase text-white mb-8">This is <span className="text-red-600 underline decoration-red-600/30 underline-offset-8">NOT for you</span> if:</h4>
                        <ul className="space-y-4">
                            {[
                                "You want to train shirtless or socialize for hours.",
                                "You are looking for 'mirrors' and 'Instagram lighting'.",
                                "You cannot commit to the required discipline.",
                                "You are looking for shortcuts or trendy crash diets."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start text-white/70 uppercase tracking-wider text-[11px] md:text-xs">
                                    <div className="w-1.5 h-1.5 bg-accent-red rounded-full mt-1 flex-shrink-0 shadow-[0_0_8px_rgba(255,0,0,0.5)]" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
