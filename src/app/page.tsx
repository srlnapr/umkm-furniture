import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProvenanceSection from "@/components/ProvenanceSection";
import ProductFolio from "@/components/ProductFolio";
import StudioInspection from "@/components/StudioInspection";
import TradeProgram from "@/components/TradeProgram";
import TradeFormSection from "@/components/TradeFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Refined, Uncrowded Sticky Navbar with Framer Motion */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full flex flex-col">
        {/* Hero Section with Ambient Glows & Trade Metrics */}
        <HeroSection />

        {/* Provenance & Sustainable Craft Journey */}
        <ProvenanceSection />

        {/* Curated Trade Folio with Animated Category Switcher */}
        <ProductFolio />

        {/* Interactive Studio Inspection with Finish Swatches & Dimensions */}
        <StudioInspection />

        {/* Wholesale & Trade Program (Logistics, OEM & Compliance) */}
        <TradeProgram />

        {/* Contact & Trade Partnership Application Form */}
        <TradeFormSection />
      </main>

      {/* Refined Footer */}
      <Footer />
    </div>
  );
}
