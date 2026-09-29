"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Verified,
  Sparkles,
  MapPin,
  Sparkle,
  Download,
  Check,
  RotateCw,
  Compass,
} from "lucide-react";

const THUMBNAILS = [
  {
    id: 0,
    title: "Full Perspective View",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnO8tgVpg3-ivFOx2SpLhtkX7R1MJZpNuRj7yg_BUiSX3ta_CyCYEKflLQFxfUn2PW8p-O-tDrUpiYlUfuIa45kXPR613EAvRR1h-wDH8t0SKQ9jHK4FHgsO_bOC8SUPA-FjzAzXYZ-Au2nT2EK2hSpWJ-gU8bJ_G9Ngz9en0-Ill8ry7UToRT4O1sneyl3Dcwuj1Ht54Z1gds_P6EuEer8_RjGiYyZc1pOsLXNyITD5a3q9qvaLZ6",
    caption: "Hero frontal studio portrait of Senja chair & ottoman",
  },
  {
    id: 1,
    title: "Ambient Sisal Setting",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAkznJX2an7_LVBSBtQPg_SwHuY2bbrYuF6argmBgGoq9Cxcm-eCl7MlIGqcXoXWZmByWH9gRCePO6RL8zwaT8o8XAaYewYTbO91tudX54POWybp4MlClj-kasLRZH2a4_W-0HbWDeiEIH7hzQjORKsU2TRsGmmOfss-zDVb_0oygVcTry3ZUgtBoZRC3rgLrUaPSRjcBmQ-QUv3TRFbAw1gcGE5K_I6XIFA8LC-fhJKFH76Ghyxny",
    caption: "Front angle perspective of Senja teak and cane lounge chair on sisal rug",
  },
  {
    id: 2,
    title: "Tenon Joinery Macro",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXGtLPOx1LkMQJclvlWdOla0jgBFOHcu7ZvWC1MlAF2xGGlAxMsdCKXJ77gZaean2swpg7w8SD6fH1JVMPVkNt6n_8tQ1-Buofg1c3OMZc8_r3SdveDEoJRDsc9tOkH6CH6iU5J3ORxVJVUR5cew54Uz6NF5IZU4kbygxsvaPfy2Cr-Jzfw357MKExJ2IFG1-XnpU8IFt5vCpYNmmEFvaru1gmT7pGdBztnn_AeAZrRFdZykT4UX3s",
    caption: "Macro close-up of mortise and tenon wood joinery and natural teak grain",
  },
  {
    id: 3,
    title: "Hexagonal Cane Webbing",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe-4ON1os1gQOxr4ToGYO5EUuYYdX-hyJsGfE6v7kf8sRAqihcs_14SKqEjtMJrn99EK6cIPultXXO8wcZmTs7j4HrsnLuS12SIm2VjoQryvRGWcOffzUOkwy3Uvu-rL07YErAp1WXpmimfktEYd7QGKX0E1aQ8foRJ1G3HzMzT2kxtLG5wdGkBSpbkLKFF5cQRwt_URgXlTo1xoGk5JacDxvOqfSqdOO2g2KfejCPcKJuiJWiiZXj",
    caption: "Double-woven hexagonal natural rattan open webbing pattern",
  },
  {
    id: 4,
    title: "108° Ergonomic Rake",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTCJDWT8NPljELsmyNoU6ouJLYCxJdPjQ3MHkb0icjQFAfRC2q7jOFaAc9FffYmf6Vr6HbPRTYdftDfQMj7TmXHxG7Cy_BUAtk-DygLQLp9A8NY5I6Jef0JE9grTVleDCNe_iNh0Lgxtskoh6JAriT-mVoBvMUyC_Xk7dP4qLU7_DELwTlxOLzB3Z5y5Ez-6ZSQASl8J-dU_rDQrkv8J0OYfVaypst7-w_EptD9Fk0yciQrzLf-zP3",
    caption: "Side profile architectural view showing ergonomic 108-degree back rake angle",
  },
];

const FINISHES = [
  { name: "Natural Raw Beeswax Teak", color: "#B88746", code: "NT-01" },
  { name: "Smoked Espresso Charcoal Teak", color: "#4A3222", code: "EC-04" },
  { name: "Sun-Bleached Driftwood Teak", color: "#D1BEA8", code: "DW-07" },
  { name: "Aged Antique Walnut Wash", color: "#855B32", code: "AW-02" },
];

export default function StudioInspection() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0]);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCad = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="inspection" className="w-full bg-surface-container-low/60 py-20 lg:py-28 border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Tagline */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
              Studio Inspection Specimen
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-primary font-normal tracking-tight mt-1">
              The Senja Sculptural Lounge Chair & Ottoman
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-semibold">
              <Verified className="w-3.5 h-3.5" />
              <span>SVLK Certified Legal Timber</span>
            </span>
            <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider px-3 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold">
              Batch #2025-Q2
            </span>
          </div>
        </div>

        {/* Inspection Layout: Split Gallery & Spec Module */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-surface rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-outline-variant/30">
          {/* Visuals Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Main Hero Zoom View */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/20 shadow-inner">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImg}
                  src={THUMBNAILS[selectedImg].src}
                  alt={THUMBNAILS[selectedImg].caption}
                  initial={{ opacity: 0.4, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="bg-primary-container/90 text-on-primary backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-medium tracking-wide">
                  {THUMBNAILS[selectedImg].caption}
                </span>
                <span className="bg-surface/80 text-primary backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider font-semibold">
                  Macro Studio Cam
                </span>
              </div>
            </div>

            {/* Thumbnails Selector Row */}
            <div className="grid grid-cols-5 gap-2.5">
              {THUMBNAILS.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedImg(idx)}
                  className={`relative rounded-xl overflow-hidden aspect-video bg-surface-container transition-all duration-200 ${
                    selectedImg === idx
                      ? "ring-2 ring-secondary ring-offset-2 ring-offset-surface scale-102"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={t.src}
                    alt={t.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Material Finish Swatches Selector */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface-container-low/80 border border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-outline font-medium">
                  Selected Atelier Wood Finish
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-serif text-sm sm:text-base font-medium text-primary">
                    {selectedFinish.name}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface border border-outline-variant/30 text-outline">
                    {selectedFinish.code}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                {FINISHES.map((f) => (
                  <button
                    key={f.name}
                    type="button"
                    onClick={() => setSelectedFinish(f)}
                    style={{ backgroundColor: f.color }}
                    className={`w-9 h-9 rounded-full shadow-inner transition-transform ${
                      selectedFinish.name === f.name
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-surface scale-110"
                        : "ring-1 ring-outline-variant hover:scale-105"
                    }`}
                    title={f.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Technical Specs & Commercial Details Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              {/* SKU & Provenance Stamp */}
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-outline">
                    Collection Reference
                  </span>
                  <span className="font-mono text-base font-semibold text-primary">
                    KK-2025-LC04
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full text-[11px] uppercase tracking-wider text-on-surface font-medium">
                  <MapPin className="w-3.5 h-3.5 text-secondary" />
                  <span>Jepara Guild, Central Java</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                Engineered specifically for high-traffic luxury boutique resorts and refined private residences. The Senja chair pairs sculpted Grade-A Indonesian plantation teak frames with resilient double-walled octagonal core cane webbing that yields gentle ergonomic contouring without synthetic tensioning.
              </p>

              {/* Material Breakdown Tag Pills */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Solid Reclaimed Teak",
                  "Natural Core Rattan",
                  "Low-VOC Organic Beeswax",
                  "Brass Joint Pins",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-surface-container text-[11px] uppercase tracking-wider font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Interactive Metric / Imperial Unit Toggle */}
              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-sm font-medium text-primary">
                    Architectural Dimensions
                  </span>
                  <div className="inline-flex p-0.5 rounded-lg bg-surface border border-outline-variant/30 text-xs">
                    <button
                      type="button"
                      onClick={() => setUnit("metric")}
                      className={`px-2.5 py-1 rounded-md uppercase font-semibold text-[10px] transition-colors ${
                        unit === "metric"
                          ? "bg-primary-container text-on-primary"
                          : "text-outline hover:text-primary"
                      }`}
                    >
                      Metric (CM)
                    </button>
                    <button
                      type="button"
                      onClick={() => setUnit("imperial")}
                      className={`px-2.5 py-1 rounded-md uppercase font-semibold text-[10px] transition-colors ${
                        unit === "imperial"
                          ? "bg-primary-container text-on-primary"
                          : "text-outline hover:text-primary"
                      }`}
                    >
                      Imperial (IN)
                    </button>
                  </div>
                </div>

                {/* Specs Grid dynamically switched */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-surface rounded-xl p-2.5 border border-outline-variant/20 flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-outline">
                      Overall Chair
                    </span>
                    <span className="font-semibold text-primary mt-0.5">
                      {unit === "metric" ? "78W × 82D × 74H cm" : '30.7"W × 32.3"D × 29.1"H'}
                    </span>
                  </div>
                  <div className="bg-surface rounded-xl p-2.5 border border-outline-variant/20 flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-outline">
                      Seat Height
                    </span>
                    <span className="font-semibold text-primary mt-0.5">
                      {unit === "metric" ? "40 cm" : "15.7 inches"}
                    </span>
                  </div>
                  <div className="bg-surface rounded-xl p-2.5 border border-outline-variant/20 flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-outline">
                      Ottoman Spec
                    </span>
                    <span className="font-semibold text-primary mt-0.5">
                      {unit === "metric" ? "62W × 48D × 38H cm" : '24.4"W × 18.9"D × 15.0"H'}
                    </span>
                  </div>
                  <div className="bg-surface rounded-xl p-2.5 border border-outline-variant/20 flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-outline">
                      Packed Volume
                    </span>
                    <span className="font-semibold text-primary mt-0.5">
                      {unit === "metric" ? "0.48 m³ (14.2 kg)" : "16.9 ft³ (31.3 lbs)"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Material Longevity Notice */}
              <div className="p-3.5 rounded-xl bg-surface-container/60 border border-outline-variant/20 flex items-start gap-3 text-xs text-on-surface-variant font-light">
                <Sparkle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="font-medium text-primary">Material Longevity:</strong> Dust weekly with dry microfibre. For outdoor covered verandas, re-apply organic beeswax conditioning oil annually. Resistant to sea-spray air.
                </p>
              </div>
            </div>

            {/* B2B Commercial Callout & Action */}
            <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-outline font-medium">
                    Trade Export Tiers
                  </span>
                  <div className="font-serif text-sm sm:text-base font-semibold text-primary">
                    Tier 1 MOQ 10 pcs • Tier 2 Container FCL
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-secondary font-semibold">
                    Production Lead
                  </span>
                  <div className="text-xs text-outline font-mono">4-6 Weeks</div>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href="#trade-inquiry"
                  className="flex-1 bg-primary text-on-primary hover:bg-secondary py-3 rounded-xl text-xs uppercase tracking-wider font-semibold text-center transition-colors shadow-sm"
                >
                  Add to Specifier Quotation
                </a>
                <button
                  type="button"
                  onClick={handleDownloadCad}
                  className="px-4 py-3 rounded-xl bg-surface hover:bg-surface-container text-primary border border-outline-variant/40 text-xs uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-colors"
                  title="Download 3D CAD (.DWG, .OBJ, .3DS)"
                >
                  {downloadSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">CAD Sent</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-secondary" />
                      <span>CAD 3D</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
