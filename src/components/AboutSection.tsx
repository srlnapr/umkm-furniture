"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Trees, Sparkles, Flame, ShieldCheck } from "lucide-react";

const VALUES = [
  {
    step: "01",
    title: "Kayu Jati Solid Pilihan",
    desc: "Menggunakan kayu jati berkualitas tinggi dengan serat kayu matang dan kokoh, serta rotan alami pilihan tanpa campuran bahan kimia sintetis berbahaya.",
    badge: "100% Kayu Legal & Berkualitas",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    icon: Trees,
  },
  {
    step: "02",
    title: "Sentuhan Pengrajin Ahli",
    desc: "Dikerjakan dengan ketelitian tangan para pengrajin lokal berpengalaman puluhan tahun, memadukan teknik sambungan kayu tradisional yang kuat dan rapi.",
    badge: "Keahlian Asli Pengrajin",
    badgeColor: "bg-surface-container text-on-surface-variant",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Kayu Oven Kering Terstandar",
    desc: "Melalui proses pengeringan kiln-dried untuk memastikan kadar air kayu stabil, sehingga perabot tidak mudah susut, melengkung, ataupun retak.",
    badge: "Kadar Air Stabil & Tahan Lama",
    badgeColor: "bg-surface-container text-on-surface-variant",
    icon: Flame,
  },
  {
    step: "04",
    title: "Finishing Halus & Ramah Lingkungan",
    desc: "Menggunakan lilin lebah alami (natural beeswax) dan pelapis ramah lingkungan yang aman untuk keluarga serta menonjolkan keindahan serat alami kayu.",
    badge: "Aman & Tahan Cuaca",
    badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
    icon: ShieldCheck,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-surface-container-low/70 py-20 lg:py-28 border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-2.5"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
              Tentang Kami
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-4xl text-primary font-normal tracking-tight leading-snug">
              Melestarikan Kriya Kayu Nusantara untuk Kenyamanan Hunian Anda
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-6 justify-center"
          >
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed font-light">
              Berawal dari kecintaan terhadap keahlian pertukangan kayu di Jepara, <strong>Kala & Kayu</strong> hadir untuk menghadirkan furniture berkualitas tinggi yang memadukan kehangatan kayu jati solid dan anyaman rotan alami dengan desain modern yang tak lekang oleh waktu.
            </p>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-light">
              Setiap karya diciptakan dengan dedikasi tinggi oleh pengrajin lokal berbakat. Kami percaya bahwa perabot yang baik tidak hanya mempercantik ruangan, tetapi juga memberikan kenyamanan sejati dan dapat diwariskan dari generasi ke generasi.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-1 text-on-surface">
              {[
                "Langsung dari Pengrajin Lokal",
                "Kayu Jati & Rotan Pilihan",
                "Bisa Custom Ukuran & Model",
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 4-Stage Craft / Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-surface rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md border border-outline-variant/30 flex flex-col justify-between transition-all"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
                    <span className="font-serif text-3xl font-light text-secondary">
                      {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg text-primary font-medium tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-medium ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
