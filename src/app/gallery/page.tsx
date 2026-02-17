"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
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
    },
    {
        id: 11,
        src: "/9331ecd7-ad25-4c6e-8324-ced7d3407998.jpg",
        category: "TRANSFORMATIONS",
        title: "Elite Progress",
        location: "Transformation Centre",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 12,
        src: "/b3f35b39-9589-42ff-aa5f-ce72736a97e3.JPG",
        category: "TRANSFORMATIONS",
        title: "Body Recomposition",
        location: "Transformation Centre",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 13,
        src: "/ba5cfe46-74c5-455c-a882-8f0e05adcfc8.JPG",
        category: "TRANSFORMATIONS",
        title: "Strength Evolution",
        location: "Transformation Centre",
        span: "md:col-span-2 md:row-span-1"
    },
    {
        id: 14,
        src: "/fatlossjeeth.jpg",
        category: "TRANSFORMATIONS",
        title: "Jeeth's Journey",
        location: "Transformation Centre",
        span: "md:col-span-1 md:row-span-2"
    },
    {
        id: 15,
        src: "/photo-output.jpg",
        category: "TRANSFORMATIONS",
        title: "Client Success",
        location: "Transformation Centre",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 16,
        src: "/photo-output(1).jpg",
        category: "TRANSFORMATIONS",
        title: "Peak Performance",
        location: "Transformation Centre",
        span: "md:col-span-1 md:row-span-1"
    },
    {
        id: 17,
        src: "/photo-output(1).jpg",
        category: "TRANSFORMATIONS",
        title: "Mental Evolution",
        location: "Transformation Centre",
        span: "md:col-span-2 md:row-span-1"
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

    const nextImage = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryData.length);
    }, []);

    const prevImage = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
    }, []);

    // Handle ESC key and arrows for lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImage) return;
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, nextImage, prevImage]);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
            <Navbar />

            {/* SECTION 1: GALLERY HERO */}
            <section className="relative h-[65vh] md:h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/IMG_5062.jpg"
                        alt="Gallery Hero"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
                </div>

                <div className="container mx-auto px-6 relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left md:text-center max-w-5xl mx-auto"
                    >
                        <span className="text-accent text-xs font-black tracking-[0.6em] uppercase mb-8 block md:text-sm">
                            GALLERY
                        </span>
                        <h1 className="text-4xl xs:text-5xl md:text-8xl lg:text-9xl font-anton uppercase leading-[1.1] md:leading-[0.9] mb-8 md:mb-12 flex flex-col items-start md:items-center">
                            <span>REAL PEOPLE.</span>
                            <span className="md:my-2">REAL TRAINING.</span>
                            <span className="text-accent">REAL RESULTS.</span>
                        </h1>
                        <div className="flex items-center justify-start md:justify-center gap-6 mt-8 md:mt-12">
                            <div className="h-[2px] w-8 md:w-20 bg-accent/30" />
                            <span className="text-[9px] md:text-xs font-black tracking-[0.4em] uppercase text-white/60 whitespace-nowrap">
                                ALL SENSES ON
                            </span>
                            <div className="h-[2px] w-8 md:w-20 bg-accent/30" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: CATEGORY FILTERS */}
            <section className="sticky top-20 md:top-24 z-40 bg-black/95 backdrop-blur-md border-y border-white/5">
                <div className="container mx-auto px-6 py-4 overflow-x-auto no-scrollbar">
                    <div className="flex items-center justify-start md:justify-center gap-x-6 md:gap-x-12 min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`text-[10px] md:text-xs font-black tracking-[0.2em] uppercase transition-all relative py-2 px-2 min-h-[44px] flex items-center justify-center ${filter === cat ? "text-accent" : "text-white/40 hover:text-white"
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
            <section className="py-12 md:py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        layout
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 auto-rows-[200px] xs:auto-rows-[250px] md:auto-rows-[350px]"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className={`relative group cursor-pointer overflow-hidden border border-white/5 bg-zinc-900 ${image.span}`}
                                    onClick={() => openLightbox(image.id)}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.title}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-[1.5s] ease-out lg:group-hover:scale-110 lg:group-hover:saturate-[1.1]"
                                        loading={index < 4 ? "eager" : "lazy"}
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/40 lg:bg-black/50 lg:group-hover:bg-black/20 transition-all duration-700" />
                                    <div className="absolute inset-0 border border-accent/0 lg:group-hover:border-accent/40 lg:group-hover:shadow-[inset_0_0_50px_rgba(67,67,209,0.1)] transition-all duration-500 pointer-events-none" />

                                    {/* Info Overlay - Desktop (Hover) */}
                                    <div className="hidden lg:flex absolute inset-0 flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-[10px] font-black text-white bg-accent px-2 py-1 tracking-widest uppercase">
                                                {image.category}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-anton uppercase text-white leading-none tracking-wide">
                                            {image.title}
                                        </h3>
                                        <p className="text-[10px] font-black text-white/40 tracking-[0.3em] uppercase mt-2">
                                            {image.location}
                                        </p>
                                        <div className="absolute top-8 right-8">
                                            <Maximize2 size={20} className="text-accent opacity-60" />
                                        </div>
                                    </div>

                                    {/* Mobile Indicator */}
                                    <div className="lg:hidden absolute bottom-4 right-4 text-white/60">
                                        <Maximize2 size={14} />
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 5: TRANSFORMATION HIGHLIGHT */}
            <section className="bg-zinc-900/50 py-16 md:py-32 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-10 left-0 text-[10rem] md:text-[20rem] font-anton text-white/[0.02] leading-none pointer-events-none select-none">
                    EVOLVE
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 md:mb-24 gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl"
                        >
                            <span className="text-accent text-xs font-black tracking-[0.5em] uppercase mb-6 block md:text-sm">
                                RESULTS
                            </span>
                            <h2 className="text-4xl md:text-7xl lg:text-8xl font-anton uppercase text-white leading-[1.1] md:leading-[1.05] tracking-tight">
                                TRANSFORMATIONS <br className="hidden md:block" /> THAT SPEAK FOR <br className="hidden md:block" /> THEMSELVES
                            </h2>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-md text-white/50 text-xs md:text-sm font-medium tracking-widest uppercase leading-loose lg:text-right lg:mb-4"
                        >
                            No gimmicks. No shortcuts. Just consistent discipline and elite guidance leading to life-changing physical and mental evolution.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Featured Transformation */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/5] sm:aspect-video lg:aspect-auto h-[500px] lg:h-[750px] group overflow-hidden border border-white/5"
                        >
                            <Image
                                src="/himanshutransf.webp"
                                alt="Transformation Journey"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-[2s] lg:group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
                            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    className="inline-block px-4 py-2 bg-accent text-white text-[10px] font-black uppercase tracking-widest mb-6 cursor-default md:text-xs"
                                >
                                    MEMBER CASE STUDY
                                </motion.span>
                                <h4 className="text-4xl md:text-6xl font-anton uppercase text-white mb-4 leading-none whitespace-pre-wrap">HIMANSHU'S <br className="hidden xs:block" /> EVOLUTION</h4>
                                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/50 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
                                    <span className="flex items-center gap-2 underline decoration-accent/40 underline-offset-4">FAT LOSS: 32KG</span>
                                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                    <span className="flex items-center gap-2 underline decoration-accent/40 underline-offset-4">TIME: 8 MONTHS</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex flex-col justify-center gap-8 md:gap-12">
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
                                    className="p-8 md:p-12 bg-black border border-white/5 relative group transition-colors lg:hover:bg-zinc-900/40"
                                >
                                    <div className="absolute top-0 left-0 w-[3px] h-0 bg-accent group-hover:h-full transition-all duration-700" />
                                    <span className="absolute top-6 right-10 text-4xl md:text-6xl font-anton text-white/[0.03] group-hover:text-accent/10 transition-colors pointer-events-none">
                                        {item.icon}
                                    </span>
                                    <h5 className="text-2xl md:text-3xl font-anton uppercase mb-6 text-accent tracking-wider">{item.title}</h5>
                                    <p className="text-white/60 text-sm md:text-lg leading-relaxed mb-10 font-medium">
                                        {item.text}
                                    </p>
                                    {item.author ? (
                                        <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase text-white/30 border-l-2 border-accent/40 pl-5">
                                            {item.author}
                                        </span>
                                    ) : (
                                        <Link href="/#contact" className="inline-flex items-center gap-4 text-xs md:text-sm font-black text-white hover:text-accent transition-all group/link tracking-[0.22em] uppercase min-h-[44px]">
                                            <span className="border-b-2 border-accent/30 group-hover/link:border-accent transition-colors pb-1 italic">{item.cta}</span>
                                            <ChevronRight size={18} className="transition-transform group-hover/link:translate-x-1.5" />
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Secondary Transformation Grid */}
                    <div className="mt-24 md:mt-32">
                        <div className="flex items-center gap-6 mb-12 md:mb-16">
                            <h3 className="text-2xl md:text-4xl font-anton uppercase text-white tracking-wider">MORE RESULTS</h3>
                            <div className="h-[1px] flex-grow bg-white/10" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                            {galleryData
                                .filter(img => img.category === "TRANSFORMATIONS" && img.src !== "/himanshutransf.webp")
                                .map((image, idx) => (
                                    <motion.div
                                        key={image.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (idx % 3) * 0.1 }}
                                        className="group relative h-[400px] md:h-[500px] overflow-hidden border border-white/5 cursor-pointer bg-zinc-900"
                                        onClick={() => openLightbox(image.id)}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.title}
                                            fill
                                            className="object-cover transition-transform duration-[1.5s] ease-out lg:group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h4 className="text-xl md:text-2xl font-anton uppercase text-white mb-2 leading-tight">{image.title}</h4>
                                            <div className="flex items-center gap-4 text-[9px] font-black text-accent tracking-[0.2em] uppercase">
                                                <span>{image.location}</span>
                                                <div className="w-1 h-1 bg-white/30 rounded-full" />
                                                <span className="text-white/40">RESULT DRIVEN</span>
                                            </div>
                                        </div>
                                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Maximize2 size={16} className="text-white/60" />
                                        </div>
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* SECTION 6: CTA – END OF PAGE */}
            <section className="py-32 md:py-48 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image src="/ring.png" alt="CTA Background" fill className="object-cover" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto"
                    >
                        <h2 className="text-5xl xs:text-6xl md:text-8xl lg:text-9xl font-anton uppercase mb-12 md:mb-16 leading-[1.1] md:leading-[1.05] tracking-tight">
                            READY TO BE <br /> PART OF <br className="hidden xs:block md:hidden" /> THE GALLERY?
                        </h2>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10">
                            <Link href="/#contact" className="w-full sm:w-auto bg-accent text-white px-10 md:px-16 py-5 md:py-6 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] shadow-[0_20px_60px_rgba(67,67,209,0.3)] hover:bg-white hover:text-black transition-all duration-500 transform hover:-translate-y-2">
                                GET YOUR FIRST CLASS
                            </Link>
                            <Link href="/#contact" className="w-full sm:w-auto border-2 border-accent/40 text-white px-10 md:px-16 py-5 md:py-6 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] hover:bg-accent hover:border-accent transition-all duration-500 transform hover:-translate-y-2">
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
                        className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-2xl flex items-center justify-center"
                    >
                        {/* Desktop Navigation Buttons */}
                        <div className="absolute inset-y-0 left-0 w-24 flex items-center justify-center z-[210] hidden lg:flex">
                            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="text-white/20 hover:text-accent transition-all transform hover:scale-125 p-6 group">
                                <ChevronLeft size={80} strokeWidth={1} className="group-hover:opacity-100 opacity-40" />
                            </button>
                        </div>
                        <div className="absolute inset-y-0 right-0 w-24 flex items-center justify-center z-[210] hidden lg:flex">
                            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="text-white/20 hover:text-accent transition-all transform hover:scale-125 p-6 group">
                                <ChevronRight size={80} strokeWidth={1} className="group-hover:opacity-100 opacity-40" />
                            </button>
                        </div>

                        {/* Close Button - Moved down and higher Z for top priority */}
                        <button
                            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-all z-[300] p-4 bg-black/50 rounded-full border border-white/10 hover:border-accent/40"
                        >
                            <X size={28} />
                        </button>

                        <div
                            className="absolute inset-0 z-0"
                            onClick={closeLightbox}
                        />

                        {/* Image Container with Swipe */}
                        <motion.div
                            key={currentIndex}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(_, info) => {
                                if (info.offset.x > 100) prevImage();
                                else if (info.offset.x < -100) nextImage();
                            }}
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            exit={{ opacity: 0, scale: 1.1, x: -50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative w-full h-[80vh] flex flex-col items-center justify-center px-4 z-10"
                        >
                            <div className="relative w-full max-w-6xl h-full">
                                <Image
                                    src={galleryData[currentIndex].src}
                                    alt={galleryData[currentIndex].title}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-6 md:bottom-20 left-4 md:left-24 right-4 text-left max-w-6xl mx-auto pointer-events-none"
                            >
                                <span className="inline-block text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.3em] bg-accent/10 border border-accent/20 px-3 py-1 mb-4">
                                    {galleryData[currentIndex].category}
                                </span>
                                <div className="flex flex-col md:flex-row md:items-end md:justify-between w-full gap-2">
                                    <h4 className="text-3xl md:text-6xl font-anton uppercase text-white leading-none tracking-wide">
                                        {galleryData[currentIndex].title}
                                    </h4>
                                    <p className="text-[10px] md:text-sm font-black text-white/40 tracking-[0.4em] uppercase">
                                        LOCATION: {galleryData[currentIndex].location}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Mobile Swipe Indicator */}
                        <div className="absolute bottom-4 left-0 w-full text-center lg:hidden pointer-events-none">
                            <span className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em] animate-pulse">
                                Swipe to Navigate
                            </span>
                        </div>
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
