import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import GalleryPreview from "@/components/GalleryPreview";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Studios from "@/components/Studios";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";

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

      {/* Gallery Preview - Visual Energy */}
      <GalleryPreview />

      {/* Testimonials Section - Social Proof */}
      <Testimonials />

      {/* Contact Section - The Transformation Start */}
      <Contact />

      {/* Studios Section - Physical Locations */}
      <Studios />

      {/* Pre-Footer Section - Conversion & Quick Links */}
      <PreFooter />

      {/* Final Brand Footer Bar */}
      <Footer />

    </main>
  );
}
