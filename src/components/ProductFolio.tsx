"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, ArrowRight, Sparkles } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: "lighting" | "furniture" | "vessels" | "textiles";
  origin: string;
  sku: string;
  description: string;
  dimensions: string;
  moq: string;
  image: string;
  leadTime: string;
  finish: string;
}

const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "The Batur Rattan Pendant",
    category: "lighting",
    origin: "Cirebon Rattan",
    sku: "KK-LT-018",
    description:
      "Organic woven bell silhouette in honey-toned split cane. Fitted with CE/UL certified antique solid brass electrical mount and hand-braided linen cord.",
    dimensions: "Dia 65cm × H 70cm",
    moq: "MOQ 5 pcs",
    leadTime: "3-4 Weeks",
    finish: "Natural Honey Split Cane",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAL5ND74DVo7rt4jBmCxpJLg_WKMYK8b48W7xwPLrgYyLUMFcE9gtmI2kWwlIrr2UeZerB41VRd6NZyUmoRvJ2PnFb8upehK9Yv27Dk3F0btR3AugY1eKgyrucT0sWNdBqWY23Pw9smuFuP1WpA5YcXrgJoDX6va9_Ejz4cD1eLo2x-amaL3Kj2fchdyiwFT5viUhCEirxy4cXjm3p4o85nUynn5c9YOFYhm-9Q2uthPnLEuicwYnek",
  },
  {
    id: "prod-2",
    name: "Jepara Monolith Coffee Table",
    category: "furniture",
    origin: "Jepara Teak",
    sku: "KK-TB-104",
    description:
      "Sculptural solid reclaimed teak timber with natural beeswax and organic walnut-husk wash. Soft pillowed chamfer edge profile with exposed butterfly keys.",
    dimensions: "150cm × 70cm × 38cm",
    moq: "MOQ 3 pcs",
    leadTime: "4-6 Weeks",
    finish: "Beeswax Reclaimed Teak",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQwPypn_hkaHJSGALMz4QtWRYitXD5VZ4B-3oGOeMLy0kpY7Ik1OAZA1PA4HpjdwNSppo2LslUzmjZaUIY1TMGTfPQoIW5cZyu5dEVK8roE6Tbflvw6hkP0wzi2c8GHQhzxJPfEIibF3U9K0snurHdXqJUiw3_HOyzM95oHK6Gu_pbIsBLUMDPCnSDbmS-6GCJI1pvWQhYFHXtU1lOeTu5I2d7S98PIgrXndvRQhXKlLiJQfxmLYdj",
  },
  {
    id: "prod-3",
    name: "Penida Twined Seagrass Vessel",
    category: "vessels",
    origin: "Lombok Pottery",
    sku: "KK-VS-042",
    description:
      "Textured coiled coastal seagrass twined seamlessly around an earthenware terracotta reservoir. Completely waterproof inner glaze for botanical styling.",
    dimensions: "Dia 38cm × H 55cm",
    moq: "MOQ 12 pcs",
    leadTime: "2-3 Weeks",
    finish: "Raw Terracotta & Natural Seagrass",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMMyfJGl83UOZnv75KOXIlU0wFIygCn-KTFYY3Dfm_1FspbzAgf59MfHhgAXm1z-Td9kZjGRYZ-Bm4qBo2NshQu9vBN7YVDNRsgAHQ8ojSy32yl4Hg_9VkSk-c9Tnc7y2YHkFScFafSzGmCmiT4bfR9SUJS5oVoeAsB2_Zs4MlZLzyFBHcw_SXjzPSy2L3nqz-6WUs6feiDlEJcSRNc0GU7w0FN98QFGdH_JY4OZbjFBTgSdW7K6g_",
  },
  {
    id: "prod-4",
    name: "Toraja Relief Wall Screen",
    category: "textiles",
    origin: "Toraja Woodcraft",
    sku: "KK-PN-089",
    description:
      "Ancestral geometric motifs carved into solid plantation mahogany with natural vegetable charcoal stain and invisible brass cleat hanging system.",
    dimensions: "120cm × 220cm × 4cm",
    moq: "MOQ 2 pcs",
    leadTime: "4-5 Weeks",
    finish: "Yakisugi Charcoal Scorched",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoS3GBh92_PPRwqZH7LcteAL6rSUxtLf7gxpcE1U5HoUwc4r7GasOzietccfwMnl0uy0v69DgeP4DueDLbiM9p2wiBp_NrRtGS09UUtyD2W1svSEZNqFTxNqb1XNVpbPzvxNJOjpZQ7vqux78UbdIr0bVYBjn7yGxXnkTig9iCv6luyRNTdRLF7xzyckUtxgbuKZpm1AuvgWwb444rA2qbtha2OL_vDYHyCpOlpVytCRoxPxrPsmYY",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Objects" },
  { id: "lighting", label: "Sculptural Lighting" },
  { id: "furniture", label: "Solid Wood Furniture" },
  { id: "vessels", label: "Vessels & Storage" },
  { id: "textiles", label: "Wall Art & Panels" },
];

export default function ProductFolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="collections" className="w-full bg-surface py-14 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Responsive Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
              Curated Trade Folio
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary font-normal tracking-tight mt-1.5 leading-snug">
              Architectural Collections for Discerning Interiors
            </h2>
          </div>

          {/* Smooth Scrollable / Wrap Filter Pills on Mobile */}
          <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="inline-flex items-center gap-1.5 bg-surface-container-low p-1.5 rounded-2xl border border-outline-variant/30 min-w-max">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative px-3.5 sm:px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-xl whitespace-nowrap transition-colors duration-200 select-none ${
                      isActive ? "text-on-primary" : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    <span className="relative z-10">{cat.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 bg-primary-container rounded-xl shadow-xs"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Responsive Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((prod) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={prod.id}
                className="group bg-surface-container-low rounded-2xl overflow-hidden border border-outline-variant/30 hover:border-outline-variant shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badges & Responsive Aspect Ratio */}
                  <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden bg-surface-container">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-surface/90 backdrop-blur-md rounded-md text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold text-primary shadow-xs">
                      {prod.origin}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedProduct(prod)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary shadow-sm transition-all duration-200 hover:scale-110 active:scale-95"
                      title="Inspect Spec Sheet"
                      aria-label={`Inspect ${prod.name}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Details */}
                  <div className="p-4 sm:p-5 flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-secondary font-semibold">
                        SKU: {prod.sku}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-outline sm:hidden">
                        {prod.moq}
                      </span>
                    </div>

                    <h3 className="font-serif text-base sm:text-lg text-primary font-medium tracking-tight group-hover:text-secondary transition-colors line-clamp-1">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-2 sm:line-clamp-3 font-light">
                      {prod.description}
                    </p>
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className="p-4 sm:p-5 pt-0 flex items-center justify-between text-xs text-outline border-t border-outline-variant/15 mt-1 sm:mt-2">
                  <span className="text-[11px] sm:text-xs truncate mr-2">{prod.dimensions}</span>
                  <span className="text-primary font-semibold hidden sm:inline whitespace-nowrap">
                    {prod.moq}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(prod)}
                    className="sm:hidden text-secondary font-medium text-[11px] uppercase tracking-wider hover:underline"
                  >
                    Quick Spec
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Responsive Spec Inspection Modal with Framer Motion */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 lg:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-primary/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              className="relative w-full sm:max-w-2xl bg-surface rounded-t-3xl sm:rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden z-10 max-h-[88vh] sm:max-h-[90vh] flex flex-col my-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-surface/90 backdrop-blur-md text-primary hover:bg-surface-container flex items-center justify-center shadow-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 overflow-y-auto max-h-[85vh]">
                {/* Modal Visual */}
                <div className="relative aspect-[16/10] sm:aspect-auto sm:min-h-[320px] bg-surface-container">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-primary/80 backdrop-blur-md rounded text-[10px] sm:text-[11px] uppercase tracking-wider text-on-primary font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#ffdbcb]" />
                    <span>{selectedProduct.origin} Guild</span>
                  </div>
                </div>

                {/* Modal Info & Spec Table */}
                <div className="p-5 sm:p-7 flex flex-col justify-between gap-5 bg-surface">
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-secondary font-semibold">
                      SKU: {selectedProduct.sku}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-primary font-medium tracking-tight">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed font-light mt-1">
                      {selectedProduct.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-outline-variant/20 flex flex-col gap-2 text-xs">
                      <div className="flex justify-between py-0.5">
                        <span className="text-outline uppercase tracking-wider text-[11px]">Dimensions:</span>
                        <span className="font-medium text-primary text-right">{selectedProduct.dimensions}</span>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-outline uppercase tracking-wider text-[11px]">Default Finish:</span>
                        <span className="font-medium text-primary text-right">{selectedProduct.finish}</span>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-outline uppercase tracking-wider text-[11px]">Production Lead:</span>
                        <span className="font-medium text-primary text-right">{selectedProduct.leadTime}</span>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-outline uppercase tracking-wider text-[11px]">Minimum Order:</span>
                        <span className="font-semibold text-secondary text-right">{selectedProduct.moq}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-2">
                    <a
                      href="#trade-inquiry"
                      onClick={() => setSelectedProduct(null)}
                      className="w-full text-center bg-primary-container hover:bg-secondary text-on-primary py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Inquire About This Object</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <p className="text-[10px] text-center text-outline">
                      SVLK Certified Indonesian Forestry Documentation included
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
