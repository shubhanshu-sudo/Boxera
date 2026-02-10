"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Gallery Categories
const categories = ["ALL", "TRAINING", "GROUP CLASSES", "STUDIO", "TRANSFORMATIONS"];

// Gallery Data
const galleryData = [
    {
        id: 1,
        src: "/DSC_0118.webp",
        category: "TRAINING",
        title: "Heavy Bag Focus",
        location: "Main Studio",
        span: "md:col-span-2 md:row-span-2"
    },
    {
        id: 2,
        src: "/DSC_0087.webp",
        category: "TRAINING",
        title: "Coach Feedback",
        location: "Ring Corner",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 3,
        src: "/DSC_0525.webp",
        category: "STUDIO",
        title: "Premium Equipment",
        location: "Gear Room",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 4,
        src: "/2022-03-13.webp",
        category: "GROUP CLASSES",
        title: "Team Energy",
        location: "Group Area",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 5,
        src: "/2025-04-02.webp",
        category: "TRAINING",
        title: "Personal Power",
        location: "Drill Zone",
        span: "md:col-span-1 md:row-span-2"
    },
    {
        id: 6,
        src: "/2021-08-17.webp",
        category: "GROUP CLASSES",
        title: "Community Grind",
        location: "Main Floor",
        span: "md:col-span-2 md:row-span-1"
    },
    {
        id: 7,
        src: "/IMG_20200820_9.webp",
        category: "TRAINING",
        title: "Authentic Action",
        location: "Heavy Bag Zone",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 8,
        src: "/studios_bg.png",
        category: "STUDIO",
        title: "Modern Aesthetics",
        location: "Lounge",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 9,
        src: "/himanshutransf.webp",
        category: "TRANSFORMATIONS",
        title: "Himanshu's Journey",
        location: "Transformation Centre",
        span: "md:col-span-2 md:row-span-1"
    },
    {
        id: 10,
        src: "/training.png",
        category: "TRAINING",
        title: "Skill Sharpening",
        location: "Speed Bag Corner",
        span: "md:col-span-1 md:row-span-1"
    }
];

export default function GalleryPage() {
    const [filter, setFilter] = useState("ALL");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredImages = filter === "ALL"
        ? galleryData
        : galleryData.filter(img => img.category === filter);

    const openLightbox = (id: number) => {
        const index = galleryData.findIndex(img => img.id === id);
        setCurrentIndex(index);
        setSelectedImage(id);
    };

    const closeLightbox = () => setSelectedImage(null);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % galleryData.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
    };

    // Handle ESC key for lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
            <Navbar />

            {/* SECTION 1: GALLERY HERO */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/programs_bg.png"
                        alt="Gallery Hero"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left md:text-center max-w-5xl mx-auto"
                    >
                        <span className="text-accent text-xs md:text-sm font-black tracking-[0.6em] uppercase mb-8 block">
                            GALLERY
                        </span>
                        <h1 className="text-5xl md:text-9xl font-anton uppercase leading-[1] md:leading-[0.9] mb-12 flex flex-col items-start md:items-center">
                            <span>REAL PEOPLE.</span>
                            <span className="md:my-2">REAL TRAINING.</span>
                            <span className="text-accent">REAL RESULTS.</span>
                        </h1>
                        <div className="flex items-center justify-start md:justify-center gap-6 mt-12">
                            <div className="h-[1px] w-12 md:w-20 bg-accent/30" />
                            <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase text-white/60 whitespace-nowrap">
                                ALL SENSES ON
                            </span>
                            <div className="h-[1px] w-12 md:w-20 bg-accent/30" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: CATEGORY FILTERS */}
            <section className="sticky top-20 md:top-24 z-40 bg-black/95 backdrop-blur-md border-y border-white/5">
                <div className="container mx-auto px-6 py-4 overflow-x-auto no-scrollbar">
                    <div className="flex items-center justify-start md:justify-center gap-x-8 md:gap-x-12 min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-[10px] font-black tracking-[0.2em] uppercase transition-all relative py-2 ${filter === cat ? "text-accent" : "text-white/40 hover:text-white"
                                    }`}
                            >
                                {cat}
                                {filter === cat && (
                                    <motion.div
                                        layoutId="filter-pill"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: MAIN GALLERY GRID */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        layout
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className={`relative group cursor-pointer overflow-hidden border border-white/5 ${image.span}`}
                                    onClick={() => openLightbox(image.id)}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.title}
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:saturate-[1.1]"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-700" />
                                    <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/40 transition-all duration-500 pointer-events-none" />

                                    {/* Info Overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-[9px] font-black text-accent bg-black/60 px-2 py-1 backdrop-blur-md border border-accent/20">
                                                {image.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-anton uppercase text-white leading-none">
                                            {image.title}
                                        </h3>
                                        <p className="text-[9px] font-black text-white/40 tracking-widest uppercase mt-2">
                                            {image.location}
                                        </p>
                                        <div className="absolute top-6 right-6">
                                            <Maximize2 size={16} className="text-accent opacity-60" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 5: TRANSFORMATION HIGHLIGHT */}
            <section className="bg-zinc-900/50 py-24 border-y border-white/5 relative overflow-hidden">
                {/* Background Text Decoration */}
                <div className="absolute top-10 left-0 text-[15rem] font-anton text-white/[0.02] leading-none pointer-events-none select-none">
                    EVOLVE
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-accent text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">
                                RESULTS
                            </span>
                            <h2 className="text-4xl md:text-6xl font-anton uppercase text-white leading-none">
                                TRANSFORMATIONS <br /> THAT SPEAK FOR <br /> THEMSELVES
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-md text-white/40 text-[11px] font-medium tracking-widest uppercase leading-relaxed"
                        >
                            No gimmicks. No shortcuts. Just consistent discipline and elite guidance leading to life-changing physical and mental evolution.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                        {/* Featured Transformation */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-[16/9] md:aspect-auto h-[450px] md:h-[650px] group overflow-hidden border border-white/5"
                        >
                            <Image
                                src="/himanshutransf.webp"
                                alt="Transformation Journey"
                                fill
                                className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-block px-4 py-1.5 bg-accent text-white text-[10px] font-black uppercase tracking-widest mb-6 cursor-default"
                                >
                                    MEMBER CASE STUDY
                                </motion.span>
                                <h4 className="text-4xl md:text-5xl font-anton uppercase text-white mb-3">HIMANSHU'S EVOLUTION</h4>
                                <div className="flex items-center gap-4 text-white/50 text-[11px] font-black tracking-[0.2em] uppercase">
                                    <span>FAT LOSS: 32KG</span>
                                    <div className="w-1 h-1 bg-accent rounded-full" />
                                    <span>TIME: 8 MONTHS</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex flex-col justify-center gap-10">
                            {[
                                {
                                    title: "THE PHILOSOPHY",
                                    icon: "01",
                                    text: "Boxxera didn't just change my physique; it changed how I approach life. The coaches push you to a level you didn't know existed, focusing on mental resilience as much as physical peak performance.",
                                    author: "HIMANSHU G., MEMBER SINCE 2023"
                                },
                                {
                                    title: "THE BLUEPRINT",
                                    icon: "02",
                                    text: "Our transformation program combines high-intensity boxing, strength conditioning, and clinical nutritional guidance to strip body fat and build functional, powerful muscle designed for the ring and for life.",
                                    cta: "START YOUR STORY"
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="p-10 bg-black border border-white/5 relative group"
                                >
                                    <div className="absolute top-0 left-0 w-[2px] h-0 bg-accent group-hover:h-full transition-all duration-700" />
                                    <span className="absolute top-6 right-8 text-4xl font-anton text-white/[0.03] group-hover:text-accent/10 transition-colors">
                                        {item.icon}
                                    </span>
                                    <h5 className="text-2xl font-anton uppercase mb-6 text-accent tracking-wider">{item.title}</h5>
                                    <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 font-medium">
                                        {item.text}
                                    </p>
                                    {item.author ? (
                                        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 border-l border-accent/30 pl-4">
                                            {item.author}
                                        </span>
                                    ) : (
                                        <Link href="/#contact" className="inline-flex items-center gap-3 text-xs font-black text-white hover:text-accent transition-all group/link tracking-[0.2em] uppercase italic">
                                            <span className="border-b-2 border-accent/30 group-hover/link:border-accent transition-colors pb-1">{item.cta}</span>
                                            <ChevronRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: CTA – END OF PAGE */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="/ring.png" alt="CTA Background" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-8xl font-anton uppercase mb-12 leading-[0.9]">
                            READY TO BE <br /> PART OF THE GALLERY?
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/#contact" className="w-full sm:w-auto bg-accent text-white px-10 py-5 text-xs font-black uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(67,67,209,0.4)] hover:bg-white hover:text-black transition-all duration-500">
                                GET YOUR FIRST CLASS
                            </Link>
                            <Link href="/#contact" className="w-full sm:w-auto border border-accent text-white px-10 py-5 text-xs font-black uppercase tracking-[0.3em] hover:bg-accent transition-all duration-500">
                                CONTACT US
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />

            {/* SECTION 4: LIGHTBOX */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[210] p-2"
                        >
                            <X size={32} />
                        </button>

                        {/* Navigation Buttons */}
                        <div className="absolute inset-y-0 left-0 w-20 flex items-center justify-center z-[210] hidden md:flex">
                            <button onClick={prevImage} className="text-white/20 hover:text-accent transition-all transform hover:scale-110 p-4">
                                <ChevronLeft size={64} strokeWidth={1} />
                            </button>
                        </div>
                        <div className="absolute inset-y-0 right-0 w-20 flex items-center justify-center z-[210] hidden md:flex">
                            <button onClick={nextImage} className="text-white/20 hover:text-accent transition-all transform hover:scale-110 p-4">
                                <ChevronRight size={64} strokeWidth={1} />
                            </button>
                        </div>

                        {/* Image Container */}
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 1.05, x: -20 }}
                            className="relative w-full max-w-6xl aspect-[4/3] md:aspect-video"
                        >
                            <Image
                                src={galleryData[currentIndex].src}
                                alt={galleryData[currentIndex].title}
                                fill
                                className="object-contain"
                                priority
                            />

                            {/* Info */}
                            <div className="absolute -bottom-12 md:-bottom-20 left-0 w-full flex flex-col items-start gap-2">
                                <span className="text-accent text-[10px] font-black uppercase tracking-widest bg-accent-blue/10 px-2 py-1">
                                    {galleryData[currentIndex].category}
                                </span>
                                <div className="flex flex-col md:flex-row md:items-end justify-between w-full">
                                    <h4 className="text-2xl md:text-4xl font-anton uppercase text-white leading-none">
                                        {galleryData[currentIndex].title}
                                    </h4>
                                    <p className="text-[10px] md:text-sm font-black text-white/40 tracking-[0.3em] uppercase mt-2 md:mt-0">
                                        LOCATION: {galleryData[currentIndex].location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </main>
    );
}
