"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="coaches" className="bg-black py-24 md:py-32 px-6 md:px-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-8xl font-anton uppercase leading-[0.9] tracking-tighter mb-8">
                        About Us
                    </h2>
                    <div className="flex gap-4 mb-8">
                        <div className="w-12 h-1 bg-accent" />
                        <div className="w-12 h-1 bg-white/20" />
                        <div className="w-12 h-1 bg-white/20" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-8"
                >
                    <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed uppercase tracking-wide">
                        Boxxera is not just a gym. It&apos;s a sanctuary for those who seek the highest version of themselves. No music, no mirrors, no bullshit. Just the sound of leather hitting leather.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-4xl font-anton uppercase text-accent mb-2">500+</h4>
                            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Successful Fighters</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-anton uppercase text-accent mb-2">24/7</h4>
                            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">Grind Access</p>
                        </div>
                    </div>
                    <button className="self-start border-b-2 border-accent pb-2 text-xs font-black uppercase tracking-[0.3em] hover:text-accent transition-colors">
                        Our Philosophy
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
