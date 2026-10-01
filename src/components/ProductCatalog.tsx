"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X, MessageCircle, Sparkles, Check } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  category: "kursi-meja" | "lampu-dekorasi" | "wadah-aksesoris";
  origin: string;
  material: string;
  description: string;
  dimensions: string;
  finish: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "The Batur Rattan Pendant",
    category: "lampu-dekorasi",
    origin: "Rotan Cirebon",
    material: "Rotan Alami & Fitting Kuningan",
    description:
      "Lampu gantung dengan anyaman bel rotan alami yang memberikan pendaran cahaya hangat dan estetis untuk ruang makan atau ruang keluarga.",
    dimensions: "Diameter 65cm × Tinggi 70cm",
    finish: "Natural Honey Split Cane",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAL5ND74DVo7rt4jBmCxpJLg_WKMYK8b48W7xwPLrgYyLUMFcE9gtmI2kWwlIrr2UeZerB41VRd6NZyUmoRvJ2PnFb8upehK9Yv27Dk3F0btR3AugY1eKgyrucT0sWNdBqWY23Pw9smuFuP1WpA5YcXrgJoDX6va9_Ejz4cD1eLo2x-amaL3Kj2fchdyiwFT5viUhCEirxy4cXjm3p4o85nUynn5c9YOFYhm-9Q2uthPnLEuicwYnek",
  },
  {
    id: "prod-2",
    name: "Jepara Monolith Coffee Table",
    category: "kursi-meja",
    origin: "Kayu Jati Jepara",
    material: "Kayu Jati Solid Pilihan",
    description:
      "Meja kopi minimalis dengan balok kayu jati utuh berpola serat alami unik, diselesaikan dengan lilin lebah alami yang halus dan tahan gores.",
    dimensions: "150cm × 70cm × 38cm",
    finish: "Natural Beeswax Solid Teak",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQwPypn_hkaHJSGALMz4QtWRYitXD5VZ4B-3oGOeMLy0kpY7Ik1OAZA1PA4HpjdwNSppo2LslUzmjZaUIY1TMGTfPQoIW5cZyu5dEVK8roE6Tbflvw6hkP0wzi2c8GHQhzxJPfEIibF3U9K0snurHdXqJUiw3_HOyzM95oHK6Gu_pbIsBLUMDPCnSDbmS-6GCJI1pvWQhYFHXtU1lOeTu5I2d7S98PIgrXndvRQhXKlLiJQfxmLYdj",
  },
  {
    id: "prod-3",
    name: "Penida Twined Seagrass Vessel",
    category: "wadah-aksesoris",
    origin: "Kerajinan Lombok",
    material: "Serat Seagrass & Gerabah Tanah Liat",
    description:
      "Vas dan wadah dekoratif yang memadukan anyaman serat rumput laut alami dengan vas gerabah tanah liat untuk aksen ruang tamu yang tenang.",
    dimensions: "Diameter 38cm × Tinggi 55cm",
    finish: "Raw Terracotta & Natural Seagrass",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMMyfJGl83UOZnv75KOXIlU0wFIygCn-KTFYY3Dfm_1FspbzAgf59MfHhgAXm1z-Td9kZjGRYZ-Bm4qBo2NshQu9vBN7YVDNRsgAHQ8ojSy32yl4Hg_9VkSk-c9Tnc7y2YHkFScFafSzGmCmiT4bfR9SUJS5oVoeAsB2_Zs4MlZLzyFBHcw_SXjzPSy2L3nqz-6WUs6feiDlEJcSRNc0GU7w0FN98QFGdH_JY4OZbjFBTgSdW7K6g_",
  },
  {
    id: "prod-4",
    name: "Toraja Relief Wall Screen",
    category: "lampu-dekorasi",
    origin: "Ukir Toraja & Jepara",
    material: "Kayu Solid Mahoni / Jati",
    description:
      "Panel dekorasi dinding dengan ukiran motif geometris tradisional yang elegan, memberikan aksen kemewahan etnik pada dinding ruangan.",
    dimensions: "120cm × 220cm × 4cm",
    finish: "Charcoal Scorched & Clear Matte",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBoS3GBh92_PPRwqZH7LcteAL6rSUxtLf7gxpcE1U5HoUwc4r7GasOzietccfwMnl0uy0v69DgeP4DueDLbiM9p2wiBp_NrRtGS09UUtyD2W1svSEZNqFTxNqb1XNVpbPzvxNJOjpZQ7vqux78UbdIr0bVYBjn7yGxXnkTig9iCv6luyRNTdRLF7xzyckUtxgbuKZpm1AuvgWwb444rA2qbtha2OL_vDYHyCpOlpVytCRoxPxrPsmYY",
  },
  {
    id: "prod-5",
    name: "Senja Sculptural Lounge Chair",
    category: "kursi-meja",
    origin: "Kayu Jati Jepara",
    material: "Rangka Jati & Anyaman Rotan Alami",
    description:
      "Kursi santai ergonomis dengan sudut sandaran 108 derajat yang nyaman, dipadu anyaman rotan heksagonal ganda yang lentur dan sejuk saat diduduki.",
    dimensions: "78cm × 82cm × 74cm",
    finish: "Aged Honey Teak & Octagonal Cane",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnO8tgVpg3-ivFOx2SpLhtkX7R1MJZpNuRj7yg_BUiSX3ta_CyCYEKflLQFxfUn2PW8p-O-tDrUpiYlUfuIa45kXPR613EAvRR1h-wDH8t0SKQ9jHK4FHgsO_bOC8SUPA-FjzAzXYZ-Au2nT2EK2hSpWJ-gU8bJ_G9Ngz9en0-Ill8ry7UToRT4O1sneyl3Dcwuj1Ht54Z1gds_P6EuEer8_RjGiYyZc1pOsLXNyITD5a3q9qvaLZ6",
  },
  {
    id: "prod-6",
    name: "Ubud Living Ambient Ottoman Set",
    category: "kursi-meja",
    origin: "Pengrajin Bali & Jepara",
    material: "Kayu Jati Solid & Ottoman Sisal",
    description:
      "Paket bangku santai dan ottoman pelengkap yang serasi, dirancang untuk ruang santai keluarga, teras tertutup, mau pun sudut membaca.",
    dimensions: "62cm × 48cm × 38cm (Ottoman)",
    finish: "Smoked Teak & Natural Fiber",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAkznJX2an7_LVBSBtQPg_SwHuY2bbrYuF6argmBgGoq9Cxcm-eCl7MlIGqcXoXWZmByWH9gRCePO6RL8zwaT8o8XAaYewYTbO91tudX54POWybp4MlClj-kasLRZH2a4_W-0HbWDeiEIH7hzQjORKsU2TRsGmmOfss-zDVb_0oygVcTry3ZUgtBoZRC3rgLrUaPSRjcBmQ-QUv3TRFbAw1gcGE5K_I6XIFA8LC-fhJKFH76Ghyxny",
  },
];

const CATEGORIES = [
  { id: "all", label: "Semua Produk" },
  { id: "kursi-meja", label: "Kursi & Meja" },
  { id: "lampu-dekorasi", label: "Lampu & Dinding" },
  { id: "wadah-aksesoris", label: "Wadah & Dekorasi" },
];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const getWhatsAppLink = (productName: string) => {
    const text = encodeURIComponent(
      `Halo Kala & Kayu, saya tertarik dan ingin bertanya mengenai produk "${productName}". Apakah produk ini masih tersedia atau bisa dibuatkan custom?`
    );
    return `https://wa.me/6281129408820?text=${text}`;
  };

  return (
    <section id="products" className="w-full bg-surface py-14 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Responsive Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
              Katalog Produk Pilihan
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-primary font-normal tracking-tight mt-1.5 leading-snug">
              Koleksi Mebel & Dekorasi Rumah Berkualitas
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant font-light mt-2">
              Karya asli pengrajin nusantara dengan material kayu jati pilihan dan anyaman alami. Tersedia ready stock maupun pemesanan custom ukuran.
            </p>
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

        {/* Dynamic Responsive Products Grid (Max 6 Products) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
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
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
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
                      title="Lihat Detail Produk"
                      aria-label={`Lihat detail ${prod.name}`}
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Card Details */}
                  <div className="p-5 flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-secondary font-semibold">
                      {prod.material}
                    </span>

                    <h3 className="font-serif text-lg sm:text-xl text-primary font-medium tracking-tight group-hover:text-secondary transition-colors line-clamp-1">
                      {prod.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-2 font-light">
                      {prod.description}
                    </p>

                    <div className="pt-2 text-xs text-outline flex items-center gap-1.5">
                      <span className="font-medium text-primary">Dimensi:</span>
                      <span className="truncate">{prod.dimensions}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-5 pt-0 flex items-center gap-2 border-t border-outline-variant/15 mt-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(prod)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-surface border border-outline-variant/40 hover:bg-surface-container text-xs font-medium text-primary text-center transition-colors"
                  >
                    Detail Produk
                  </button>

                  <a
                    href={getWhatsAppLink(prod.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-xl bg-primary-container hover:bg-secondary text-on-primary text-xs font-medium text-center transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#ffdbcb]" />
                    <span>Pesan WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal with Framer Motion */}
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
              className="relative w-full sm:max-w-2xl bg-surface rounded-t-3xl sm:rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-surface/90 backdrop-blur-md text-primary hover:bg-surface-container flex items-center justify-center shadow-md transition-colors"
                aria-label="Tutup modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 overflow-y-auto max-h-[85vh]">
                {/* Modal Visual */}
                <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[340px] bg-surface-container">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-primary/80 backdrop-blur-md rounded text-[11px] uppercase tracking-wider text-on-primary font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#ffdbcb]" />
                    <span>{selectedProduct.origin}</span>
                  </div>
                </div>

                {/* Modal Info */}
                <div className="p-6 sm:p-7 flex flex-col justify-between gap-5 bg-surface">
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-secondary font-semibold">
                      {selectedProduct.material}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-primary font-medium tracking-tight">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light mt-1">
                      {selectedProduct.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-outline-variant/20 flex flex-col gap-2 text-xs">
                      <div className="flex justify-between py-0.5">
                        <span className="text-outline uppercase tracking-wider text-[11px]">Dimensi:</span>
                        <span className="font-medium text-primary text-right">{selectedProduct.dimensions}</span>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-outline uppercase tracking-wider text-[11px]">Finishing:</span>
                        <span className="font-medium text-primary text-right">{selectedProduct.finish}</span>
                      </div>
                      <div className="flex justify-between py-0.5">
                        <span className="text-outline uppercase tracking-wider text-[11px]">Ketersediaan:</span>
                        <span className="font-semibold text-emerald-700 text-right">Ready / Custom Order</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 pt-2">
                    <a
                      href={getWhatsAppLink(selectedProduct.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center bg-primary-container hover:bg-secondary text-on-primary py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 text-[#ffdbcb]" />
                      <span>Pesan / Tanya via WhatsApp</span>
                    </a>
                    <p className="text-[11px] text-center text-outline">
                      Bisa konsultasi ukuran khusus & pengiriman ke seluruh kota di Indonesia
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
