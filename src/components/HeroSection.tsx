"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, MessageCircle, Users, TreePine, Sparkles, Truck } from "lucide-react";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative w-full overflow-hidden pt-28 sm:pt-32 pb-16 lg:pb-24">
      {/* Ambient Lighting Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.45, 0.35],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 right-12 w-96 h-96 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10"
        >
          {/* Eyebrow & Grid Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <motion.div variants={itemVariants} className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-secondary" />
                <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
                  Mebel Kayu Jati & Rotan Pilihan
                </span>
                <span className="text-outline-variant font-sans">•</span>
                <span className="text-xs uppercase tracking-wider text-outline font-medium">
                  Karya Pengrajin Jepara
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-primary leading-[1.12] tracking-tight font-normal"
              >
                Keindahan Mebel Kayu Jati & Rotan untuk Kenyamanan Hunian Anda
              </motion.h1>
            </div>

            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 flex flex-col justify-end gap-5"
            >
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-light">
                Kala & Kayu menghadirkan furniture artisanal berkualitas tinggi dari kayu jati solid pilihan dan anyaman rotan alami. Dibuat langsung oleh pengrajin lokal berpengalaman dengan ketelitian tinggi, desain hangat, dan daya tahan lintas generasi.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/6281129408820?text=Halo%20Kala%20%26%20Kayu%2C%20saya%20ingin%20konsultasi%20pemesanan%20furniture."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-container text-on-primary hover:bg-secondary text-xs uppercase tracking-wider font-semibold px-5 py-3.5 rounded-xl shadow-md transition-all group"
                >
                  <MessageCircle className="w-4 h-4 text-[#ffdbcb]" />
                  <span>Konsultasi via WhatsApp</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#products"
                  className="inline-flex items-center gap-2 bg-surface-container-low hover:bg-surface-container text-primary border border-outline-variant/50 text-xs uppercase tracking-wider font-semibold px-4 py-3.5 rounded-xl transition-all group"
                >
                  <span>Lihat Produk</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual Showcase with Plaque */}
          <motion.div
            variants={itemVariants}
            className="relative w-full rounded-2xl overflow-hidden bg-surface-container shadow-2xl group"
          >
            <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="w-full h-full object-cover object-center"
                alt="Ruang santai bernuansa hangat dengan perabot kayu jati dan rotan alami Kala dan Kayu"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKCt6Yo3ZGiOqEaXyCI-UkA11D3Zi-ugLcMhvpO7DD9j65P0S-qT8dHli5ZWksoyB_SDKrEFcYRGvpIXBy6c92hX9U_Sey0yPtaBjT4LhnQ4X4uvAotLsRFKgD4P-0e2WgpGhiY0LAcCMMnyzr9p5Qu8ywB-e89y7CRrqqI3k0lVbIYzrXINLBul8x_lHaXrans3ff3CxDn1DgY0fnjMvFPyomIt-ziJtgxqZicD-k48vVMek3l4cw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/25 to-transparent pointer-events-none" />

              {/* Plaque Placed Asymmetrically */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xl bg-surface/90 backdrop-blur-md rounded-xl p-4 sm:p-5 shadow-lg border border-surface-container-lowest/40 flex items-center justify-between gap-4"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-secondary font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Koleksi Favorit</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-primary font-medium tracking-tight">
                    The Sumba Lounge Sanctuary
                  </h3>
                  <p className="text-xs text-on-surface-variant font-light line-clamp-2">
                    Kombinasi rotan alami, kayu jati solid pilihan & bantalan linen yang sejuk. Dirancang dan dirakit teliti oleh pengrajin Jepara.
                  </p>
                </div>

                <div className="hidden sm:flex flex-col items-end flex-shrink-0 pl-4 border-l border-outline-variant/30">
                  <span className="text-[10px] uppercase tracking-wider text-outline">Status</span>
                  <span className="font-mono text-sm font-semibold text-primary">KK-SMB-01</span>
                  <span className="text-[11px] text-emerald-700 font-medium">Ready & Custom</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Strengths Metrics Band */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              {
                icon: TreePine,
                value: "100%",
                label: "Kayu Jati Solid Pilihan",
                sub: "Material legal & tahan lama",
              },
              {
                icon: Users,
                value: "25+",
                label: "Tahun Pengalaman Pengrajin",
                sub: "Keahlian turun-temurun",
              },
              {
                icon: Sparkles,
                value: "Alami",
                label: "Finishing Ramah Lingkungan",
                sub: "Aman untuk keluarga & anak",
              },
              {
                icon: Truck,
                value: "Aman",
                label: "Pengiriman se-Indonesia",
                sub: "Packing kayu rapi & bergaransi",
              },
            ].map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-surface-container-low/80 border border-outline-variant/30 rounded-xl p-4 sm:p-5 flex items-center gap-4 shadow-xs"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary flex-shrink-0 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-serif text-xl sm:text-2xl text-primary font-bold tracking-tight">
                      {metric.value}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-on-surface">
                      {metric.label}
                    </span>
                    <span className="text-[11px] text-outline font-light hidden sm:inline">
                      {metric.sub}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
