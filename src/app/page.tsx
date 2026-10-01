import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductCatalog from "@/components/ProductCatalog";
import WhyUsGallery from "@/components/WhyUsGallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections: Hero → About → Products → Why Choose Us/Gallery → Contact */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. Beranda / Hero Section */}
        <HeroSection />

        {/* 2. Tentang Kami / Cerita Usaha */}
        <AboutSection />

        {/* 3. Katalog Produk (Maksimal 6 Produk Statis) */}
        <ProductCatalog />

        {/* 4. Keunggulan & Galeri Workshop */}
        <WhyUsGallery />

        {/* 5. Kontak & Lokasi Google Maps */}
        <ContactSection />
      </main>

      {/* 6. Footer Profil & Sosial Media */}
      <Footer />
    </div>
  );
}
