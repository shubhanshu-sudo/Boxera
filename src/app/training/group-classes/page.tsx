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
        title: "BOXING",
        description: "Learn boxing from real fighters. Our coaches will give you knowledge as well as professional techniques in every session. The feeling of empowerment and motivation will keep you coming back for more.",
        highlights: ["Professional Techniques", "Real Fighters", "Empowerment"],
        image: "/ring.png",
        layout: "right",
    },
    {
        id: "02",
        title: "DARK ROOM TRAININGS",
        description: "Working out in the dark removes all the elements of comparison or competition. It's a beautiful opportunity to go inward, as darkness facilitates that intimate connection with oneself.",
        highlights: ["Mental Connection", "No Comparison", "India's First"],
        image: "/training.png",
        layout: "left",
    },
    {
        id: "03",
        title: "WOD CHIPPER",
        description: "Inspired by cross training, expect “EMOMs” and “AMRAPs” as standard and be prepared to dig deep and push hard. Encouraging and motivating environment.",
        highlights: ["EMOMs & AMRAPs", "High Intensity", "Strength Work"],
        image: "/programs_bg.png",
        layout: "right",
    },
    {
        id: "04",
        title: "FORMULA3",
        description: "A competitive, high intensity circuit with 3 targeted blocks, for a full spectrum workout. The Formula to get you fit, fast.",
        highlights: ["3 Targeted Blocks", "Fit Fast", "High Intensity"],
        image: "/hero.png",
        layout: "left",
    },
    {
        id: "05",
        title: "LIFT",
        description: "Create a strong, athletic and powerful body using progressively heavier weights under the careful instruction of your trainer.",
        highlights: ["Progressive Weights", "Form & Technique", "Body Sculpting"],
        image: "/training.png",
        layout: "right",
    },
    {
        id: "06",
        title: "FITNESS FOR CHILDREN",
        description: "Short classes to maintain junior athletes active and engaged, featuring martial arts, sports conditioning, dance and yoga.",
        highlights: ["Junior Athletes", "30-45 Mins", "Engaging"],
        image: "/DSC_0525.webp",
        layout: "left",
    },
    {
        id: "07",
        title: "POWER STRETCHING",
        description: "Reboot post-performance with the stretch class your muscles deserve. Balance out stressed and tight muscles.",
        highlights: ["Post-Performance", "Techniques & Equipment", "Muscle Recovery"],
        image: "/programs_bg.png",
        layout: "right",
    },
    {
        id: "08",
        title: "EXPRESS ABS",
        description: "Improve your core strength and posture in order to look AB-solute best. This focused workout does it.",
        highlights: ["Core Strength", "Posture Correction", "Focused Workout"],
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
                        <TransitionLink href="/#contact">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "#3333A1" }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-accent text-white px-10 md:px-14 py-5 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs transition-all shadow-[0_0_30px_rgba(67,67,209,0.3)]"
                            >
                                JOIN A CLASS
                            </motion.button>
                        </TransitionLink>
                    </motion.div>
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
                        <p className="text-xl md:text-2xl font-light text-white/70 leading-relaxed uppercase tracking-wide italic">
                            Fitness classes at Boxx Era are experiences, created, and developed by the industry’s best minds bringing results through innovation.
                        </p>
                    </motion.div>

                    {/* Split Blocks */}
                    <div className="space-y-32 md:space-y-48">
                        {/* 🔹 BLOCK 1 – BOXING */}
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
                                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Empowerment</span>
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
                                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Inward Connection</span>
                                </div>
                                <h3 className="text-4xl md:text-7xl font-anton uppercase text-white tracking-tight">DARK ROOM <br /> TRAININGS</h3>
                                <p className="text-lg md:text-xl font-normal text-white/80 leading-relaxed max-w-xl">
                                    We are pioneers. Working out in the dark removes all the elements of comparison or competition, which is the main reason why we have curated this training modality. The dark room allows athletes to lose themselves in such a way, that people around them stops being a concern. It&apos;s a beautiful opportunity to go inward, as darkness facilitates that intimate connection with oneself. All of these perks have made us create the first dark room training facility from India.
                                </p>
                            </div>
                        </motion.div>

                        {/* 🔹 BLOCK 3 – FITNESS FOR CHILDREN */}
                        <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm group">
                                <Image
                                    src="/DSC_0525.webp"
                                    alt="Fitness for Children"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-[1px] bg-accent" />
                                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Junior Athletes</span>
                                </div>
                                <h3 className="text-4xl md:text-7xl font-anton uppercase text-white tracking-tight">FITNESS FOR <br /> CHILDREN</h3>
                                <p className="text-lg md:text-xl font-normal text-white/80 leading-relaxed max-w-xl">
                                    These classes are kept short in order to maintain junior athletes active and engaged. One 30 to 45 minute session features everything from martial arts and sports conditioning to dance and yoga.
                                </p>
                            </div>
                        </motion.div>

                        {/* 🔹 BLOCK 4 – WOD CHIPPER */}
                        <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="lg:order-2 relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm group">
                                <Image
                                    src="/programs_bg.png"
                                    alt="WOD Chipper"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            </div>
                            <div className="lg:order-1 flex flex-col gap-8 lg:text-right lg:items-end">
                                <div className="flex items-center gap-4 lg:flex-row-reverse">
                                    <div className="w-12 h-[1px] bg-accent" />
                                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Cross Training</span>
                                </div>
                                <h3 className="text-4xl md:text-7xl font-anton uppercase text-white tracking-tight">WOD CHIPPER</h3>
                                <p className="text-lg md:text-xl font-normal text-white/80 leading-relaxed max-w-xl">
                                    Inspired by cross training, expect &ldquo;EMOMs&rdquo; and &ldquo;AMRAPs&rdquo; as standard and be prepared to dig deep and push hard. The WOD combines effective high intensity training and strength work in an encouraging and motivating environment.
                                </p>
                            </div>
                        </motion.div>

                        {/* 🔹 BLOCK 5 – FORMULA3 */}
                        <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm group">
                                <Image
                                    src="/hero.png"
                                    alt="Formula3"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-[1px] bg-accent" />
                                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Fit Fast</span>
                                </div>
                                <h3 className="text-4xl md:text-7xl font-anton uppercase text-white tracking-tight">FORMULA3</h3>
                                <p className="text-lg md:text-xl font-normal text-white/80 leading-relaxed max-w-xl">
                                    This is the Formula to get you fit, fast. A competitive, high intensity circuit with 3 targeted blocks, for a full spectrum workout.
                                </p>
                            </div>
                        </motion.div>

                        {/* 🔹 BLOCK 6 – LIFT */}
                        <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="lg:order-2 relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm group">
                                <Image
                                    src="/training.png"
                                    alt="Lift Class"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            </div>
                            <div className="lg:order-1 flex flex-col gap-8 lg:text-right lg:items-end">
                                <div className="flex items-center gap-4 lg:flex-row-reverse">
                                    <div className="w-12 h-[1px] bg-accent" />
                                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Athletic Power</span>
                                </div>
                                <h3 className="text-4xl md:text-7xl font-anton uppercase text-white tracking-tight">LIFT</h3>
                                <p className="text-lg md:text-xl font-normal text-white/80 leading-relaxed max-w-xl">
                                    Create a strong, athletic and powerful body using progressively heavier weights under the careful instruction of your trainer. Improve your form and technique, building confidence in lifting weights whilst you sculpt your body. Leave the class feeling stronger and more powerful than ever.
                                </p>
                            </div>
                        </motion.div>

                        {/* 🔹 BLOCK 7 – POWER STRETCHING */}
                        <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm group">
                                <Image
                                    src="/programs_bg.png"
                                    alt="Power Stretching"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-[1px] bg-accent" />
                                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Recovery</span>
                                </div>
                                <h3 className="text-4xl md:text-7xl font-anton uppercase text-white tracking-tight">POWER <br /> STRETCHING</h3>
                                <p className="text-lg md:text-xl font-normal text-white/80 leading-relaxed max-w-xl">
                                    Reboot post-performance with the stretch class your muscles deserve. Apply a variety of techniques and equipment to balance out stressed and tight muscles, leaving you perfectly prepped to rise to your next challenge.
                                </p>
                            </div>
                        </motion.div>

                        {/* 🔹 BLOCK 8 – EXPRESS ABS */}
                        <motion.div {...fadeIn} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="lg:order-2 relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm group">
                                <Image
                                    src="/ring.png"
                                    alt="Express Abs"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            </div>
                            <div className="lg:order-1 flex flex-col gap-8 lg:text-right lg:items-end">
                                <div className="flex items-center gap-4 lg:flex-row-reverse">
                                    <div className="w-12 h-[1px] bg-accent" />
                                    <span className="text-accent text-xs font-black uppercase tracking-[0.4em]">Core Strength</span>
                                </div>
                                <h3 className="text-4xl md:text-7xl font-anton uppercase text-white tracking-tight">EXPRESS ABS</h3>
                                <p className="text-lg md:text-xl font-normal text-white/80 leading-relaxed max-w-xl">
                                    Don&apos;t expect to just lie on the floor during this class. If you want to improve your core strength and posture in order to look AB-solute best, this focused workout does it.
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
