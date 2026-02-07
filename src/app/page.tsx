import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Studios from "@/components/Studios";
import PreFooter from "@/components/PreFooter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Hero Section */}
      <Hero />

      {/* Brand Marquee for brand continuity */}
      <Marquee />

      {/* About Section - The Philosophy */}
      <About />

      {/* Programs Section - The Action */}
      <Programs />

      {/* Testimonials Section - Social Proof */}
      <Testimonials />

      {/* Studios Section - Physical Locations */}
      <Studios />

      {/* Pre-Footer Section - Conversion & Quick Links */}
      <PreFooter />

      {/* Final Brand Footer Bar */}
      <footer className="bg-black py-12 px-6 border-t border-white/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center opacity-40 text-[10px] font-bold uppercase tracking-[0.2em] gap-8">
          <div className="flex items-center gap-4">
            <div className="relative w-8 h-8 opacity-60">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <span>BOXXERA GYM © 2024</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">Twitter</a>
            <a href="#" className="hover:text-accent transition-colors">Youtube</a>
          </div>
          <span>Built for the <span className="text-accent underline decoration-2 underline-offset-4">elite</span></span>
        </div>
      </footer>
    </main>
  );
}
