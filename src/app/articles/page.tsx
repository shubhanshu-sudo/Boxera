"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import { articles, featuredArticle, Article } from "@/data/articles";

const categories = ["ALL", "MEDIA", "INTERVIEWS", "COMMUNITY", "TRANSFORMATION"];

function MediaLogo({ src, alt, color, className }: { src?: string; alt: string; color?: string; className?: string }) {
    const [error, setError] = useState(!src);

    if (error || !src) {
        return (
            <div className={`flex items-center gap-2 ${className}`}>
                <div className="w-1.5 h-6" style={{ backgroundColor: color || '#4343D1' }} />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{alt}</span>
            </div>
        );
    }

    return (
        <div className={`relative ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                className="object-contain object-left filter brightness-110"
                onError={() => setError(true)}
                unoptimized
            />
        </div>
    );
}

export default function ArticlesPage() {
    const [activeCategory, setActiveCategory] = useState("ALL");

    const filteredArticles = activeCategory === "ALL"
        ? articles.filter(a => a.id !== featuredArticle.id)
        : articles.filter(a => a.category === activeCategory && a.id !== featuredArticle.id);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">

            {/* SECTION 1: HERO */}
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/hero.png" // Using existing hero image
                        alt="Articles Hero"
                        fill
                        className="object-cover opacity-30 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
                    <div className="absolute inset-0 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-accent text-[10px] md:text-xs font-black uppercase tracking-[0.6em] mb-8 block"
                    >
                        Boxxera Press Archive
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[clamp(4rem,15vw,10rem)] font-anton uppercase leading-[0.85] tracking-tighter text-white drop-shadow-[0_0_30px_rgba(67,67,209,0.3)]"
                    >
                        ARTICLES
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="max-w-2xl mx-auto mt-8 text-white/40 text-xs md:text-sm font-bold uppercase tracking-[0.3em] leading-relaxed"
                    >
                        Media coverage • brand stories • transformational journeys
                    </motion.p>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 48 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="w-[1px] bg-gradient-to-b from-accent to-transparent"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 2: FEATURED STORY */}
            <section className="py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/5] md:aspect-video lg:aspect-[4/5] overflow-hidden group cursor-pointer"
                        >
                            <Image
                                src="/training.png" // Placeholder for Jeeth image
                                alt={featuredArticle.headline}
                                fill
                                className="object-cover grayscale group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-accent text-white text-[10px] font-black uppercase tracking-widest mb-8">
                                FEATURED
                            </span>
                            <h2 className="text-4xl md:text-6xl lg:text-8xl font-anton uppercase leading-[1.0] mb-10 tracking-tighter">
                                {featuredArticle.headline.split(':').length > 1 ? (
                                    <>
                                        {featuredArticle.headline.split(':')[0]} :<br />
                                        <span className="text-accent">{featuredArticle.headline.split(':')[1].trim()}</span>
                                    </>
                                ) : (
                                    featuredArticle.headline
                                )}
                            </h2>

                            <div className="text-white/60 text-base md:text-lg mb-12 leading-relaxed max-w-2xl whitespace-pre-line space-y-4">
                                {featuredArticle.excerpt}
                            </div>


                            <div className="flex items-center gap-6 mb-12">
                                <MediaLogo
                                    src={featuredArticle.sourceLogo}
                                    alt={featuredArticle.source}
                                    color={featuredArticle.brandColor}
                                    className="h-10 w-56"
                                />
                                <div className="w-1 h-1 rounded-full bg-accent" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{featuredArticle.year}</span>
                            </div>

                            <Link
                                href={featuredArticle.link}
                                target="_blank"
                                className="group inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-accent pb-2 hover:text-accent transition-colors"
                            >
                                READ FULL STORY <MoveRight className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: CATEGORY FILTER */}
            <section className="py-12 sticky top-20 md:top-24 bg-black/90 backdrop-blur-md z-40 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative py-2 ${activeCategory === cat ? "text-accent" : "text-white/40 hover:text-white"
                                    }`}
                            >
                                {cat}
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="active-cat"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: ARTICLES GRID */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-16"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredArticles.map((article) => (
                                <motion.article
                                    key={article.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative flex flex-col h-full border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent/40 transition-all duration-500 p-8 pt-10"
                                >
                                    {/* Accent Line */}
                                    <div className="absolute top-0 left-0 w-[2px] h-0 group-hover:h-full bg-accent transition-all duration-500" />

                                    <div className="flex justify-between items-center mb-10">
                                        <MediaLogo
                                            src={article.sourceLogo}
                                            alt={article.source}
                                            color={article.brandColor}
                                            className="h-6 w-28"
                                        />
                                        <div className="flex flex-col items-end gap-1">
                                            <span className="text-[9px] font-black tracking-widest text-accent/60 px-2 py-0.5 border border-accent/20">
                                                {article.category}
                                            </span>
                                            <span className="text-[9px] font-bold text-white/20 tracking-widest">
                                                {article.year}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-anton uppercase leading-[1.1] mb-6 group-hover:text-accent transition-colors tracking-tight">
                                        {article.headline}
                                    </h3>

                                    <p className="text-white/40 text-sm leading-relaxed mb-10 flex-grow font-medium">
                                        {article.excerpt}
                                    </p>

                                    <Link
                                        href={article.link}
                                        target="_blank"
                                        className="group/btn inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] mt-auto transition-all text-white/60 hover:text-white"
                                    >
                                        READ FULL ARTICLE <ArrowUpRight size={14} className="text-accent group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </Link>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 5: BRAND STATEMENT STRIP */}
            <section className="py-32 border-y border-white/5 bg-black relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                <div className="container mx-auto px-6 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white text-3xl md:text-5xl lg:text-7xl font-anton uppercase leading-[1.3] tracking-tighter max-w-5xl mx-auto"
                    >
                        “<span className="text-accent">Boxxera</span> isn’t just a gym. It’s a movement built on discipline, resilience, and transformation.”

                    </motion.p>
                </div>
            </section>

            {/* SECTION 6: CTA – JOIN THE MOVEMENT */}
            <section className="py-32 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-anton uppercase mb-4 tracking-tighter leading-[1.2]">
                        Read the stories.<br />Train with purpose.
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                        <Link href="/#contact" className="w-full sm:w-auto bg-accent text-white px-12 py-5 font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all text-center">
                            JOIN BOXXERA
                        </Link>
                        <Link href="/#coaches" className="w-full sm:w-auto border-2 border-white/20 text-white px-12 py-5 font-black uppercase tracking-widest text-xs hover:border-accent hover:text-accent transition-all text-center">
                            MEET THE COACHES
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
