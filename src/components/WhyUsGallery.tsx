"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Maximize2,
  Truck,
  MessageCircle,
  Eye,
  CheckCircle2,
} from "lucide-react";

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: "Kayu Jati Pilihan & Kering Oven",
    desc: "Bahan kayu jati solid berkualitas dengan proses pengeringan terukur sehingga kayu stabil, awet, dan tahan terhadap perubahan cuaca.",
  },
  {
    icon: Sparkles,
    title: "Konstruksi Purus & Pasak Kuat",
    desc: "Menggunakan teknik sambungan kayu tradisional mortise & tenon yang kokoh, rapi, dan tahan dipakai hingga puluhan tahun.",
  },
  {
    icon: Maximize2,
    title: "Bisa Custom Model & Ukuran",
    desc: "Melayani pembuatan furniture sesuai denah ruangan, selera desain, warna finishing, serta pilihan kain pelapis Anda.",
  },
  {
    icon: Truck,
    title: "Packing Rapi & Pengiriman Aman",
    desc: "Setiap pesanan dilapisi pelindung busa dan packing kayu kuat agar sampai ke rumah Anda dalam kondisi aman dan prima.",
  },
];

const GALLERY_PHOTOS = [
  {
    id: 0,
    title: "Senja Sculptural Lounge Chair",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnO8tgVpg3-ivFOx2SpLhtkX7R1MJZpNuRj7yg_BUiSX3ta_CyCYEKflLQFxfUn2PW8p-O-tDrUpiYlUfuIa45kXPR613EAvRR1h-wDH8t0SKQ9jHK4FHgsO_bOC8SUPA-FjzAzXYZ-Au2nT2EK2hSpWJ-gU8bJ_G9Ngz9en0-Ill8ry7UToRT4O1sneyl3Dcwuj1Ht54Z1gds_P6EuEer8_RjGiYyZc1pOsLXNyITD5a3q9qvaLZ6",
    caption: "Tampilan utuh kursi santai jati dengan perpaduan anyaman rotan alami yang elegan",
    tag: "Koleksi Kursi",
  },
  {
    id: 1,
    title: "Inspirasi Ruang Santai Hangat",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAkznJX2an7_LVBSBtQPg_SwHuY2bbrYuF6argmBgGoq9Cxcm-eCl7MlIGqcXoXWZmByWH9gRCePO6RL8zwaT8o8XAaYewYTbO91tudX54POWybp4MlClj-kasLRZH2a4_W-0HbWDeiEIH7hzQjORKsU2TRsGmmOfss-zDVb_0oygVcTry3ZUgtBoZRC3rgLrUaPSRjcBmQ-QUv3TRFbAw1gcGE5K_I6XIFA8LC-fhJKFH76Ghyxny",
    caption: "Suasana ruang santai dengan karpet serat alami dan mebel kayu jati bernuansa hangat",
    tag: "Penataan Ruang",
  },
  {
    id: 2,
    title: "Detail Sambungan Kayu (Joinery)",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXGtLPOx1LkMQJclvlWdOla0jgBFOHcu7ZvWC1MlAF2xGGlAxMsdCKXJ77gZaean2swpg7w8SD6fH1JVMPVkNt6n_8tQ1-Buofg1c3OMZc8_r3SdveDEoJRDsc9tOkH6CH6iU5J3ORxVJVUR5cew54Uz6NF5IZU4kbygxsvaPfy2Cr-Jzfw357MKExJ2IFG1-XnpU8IFt5vCpYNmmEFvaru1gmT7pGdBztnn_AeAZrRFdZykT4UX3s",
    caption: "Presisi sambungan purus dan pasak kayu jati dengan serat alami yang terlihat jelas",
    tag: "Ketelitian Pengerjaan",
  },
  {
    id: 3,
    title: "Anyaman Rotan Heksagonal",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe-4ON1os1gQOxr4ToGYO5EUuYYdX-hyJsGfE6v7kf8sRAqihcs_14SKqEjtMJrn99EK6cIPultXXO8wcZmTs7j4HrsnLuS12SIm2VjoQryvRGWcOffzUOkwy3Uvu-rL07YErAp1WXpmimfktEYd7QGKX0E1aQ8foRJ1G3HzMzT2kxtLG5wdGkBSpbkLKFF5cQRwt_URgXlTo1xoGk5JacDxvOqfSqdOO2g2KfejCPcKJuiJWiiZXj",
    caption: "Anyaman rotan alami dua lapis yang lentur, sejuk, dan memberikan sirkulasi udara yang nyaman",
    tag: "Anyaman Alami",
  },
  {
    id: 4,
    title: "Kemiringan Ergonomis 108°",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTCJDWT8NPljELsmyNoU6ouJLYCxJdPjQ3MHkb0icjQFAfRC2q7jOFaAc9FffYmf6Vr6HbPRTYdftDfQMj7TmXHxG7Cy_BUAtk-DygLQLp9A8NY5I6Jef0JE9grTVleDCNe_iNh0Lgxtskoh6JAriT-mVoBvMUyC_Xk7dP4qLU7_DELwTlxOLzB3Z5y5Ez-6ZSQASl8J-dU_rDQrkv8J0OYfVaypst7-w_EptD9Fk0yciQrzLf-zP3",
    caption: "Desain sudut sandaran yang disesuaikan dengan postur tubuh untuk kenyamanan relaksasi",
    tag: "Kenyamanan",
  },
];

const FINISHES = [
  { name: "Natural Beeswax Teak", color: "#B88746", code: "Finishing Alami Madu" },
  { name: "Smoked Charcoal Teak", color: "#4A3222", code: "Cokelat Gelap Elegan" },
  { name: "Driftwood Bleached Teak", color: "#D1BEA8", code: "Nuansa Abu Alami" },
  { name: "Antique Walnut Wash", color: "#855B32", code: "Walnut Klasik Hangat" },
];

export default function WhyUsGallery() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0]);

  return (
    <section id="gallery" className="w-full bg-surface-container-low/70 py-20 lg:py-28 border-y border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col gap-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
            Keunggulan & Galeri Usaha
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-primary font-normal tracking-tight mt-1.5 leading-snug">
            Mengapa Memilih Kami & Melihat Lebih Dekat Karya Kami
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant font-light mt-3 leading-relaxed">
            Kombinasi antara komitmen kualitas material, keterampilan tangan pengrajin, dan keterbukaan dokumentasi proses pembuatan furniture untuk kenyamanan Anda.
          </p>
        </div>

        {/* 4 Keunggulan Bisnis Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-surface rounded-2xl p-6 border border-outline-variant/30 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-4 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-lg text-primary font-medium tracking-tight mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-outline-variant/20 flex items-center gap-1.5 text-xs text-secondary font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Jaminan Standar Kualitas</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Galeri & Dokumentasi Studio Box */}
        <div className="bg-surface rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-outline-variant/30 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-outline-variant/20">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
                Galeri Workshop & Detail Produk
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-primary font-medium tracking-tight mt-1">
                Koleksi Dokumentasi Studio Kala & Kayu
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs text-outline font-medium">
              <Eye className="w-3.5 h-3.5 text-secondary" />
              Klik foto kecil untuk melihat detail
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Interactive Showcase (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/20 shadow-inner">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImg}
                    src={GALLERY_PHOTOS[selectedImg].src}
                    alt={GALLERY_PHOTOS[selectedImg].title}
                    initial={{ opacity: 0.4, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.4 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none gap-2">
                  <span className="bg-primary-container/90 text-on-primary backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide truncate">
                    {GALLERY_PHOTOS[selectedImg].caption}
                  </span>
                  <span className="bg-surface/90 text-primary backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider font-semibold whitespace-nowrap">
                    {GALLERY_PHOTOS[selectedImg].tag}
                  </span>
                </div>
              </div>

              {/* Thumbnails row */}
              <div className="grid grid-cols-5 gap-2.5">
                {GALLERY_PHOTOS.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedImg(idx)}
                    className={`relative rounded-xl overflow-hidden aspect-video bg-surface-container transition-all duration-200 ${
                      selectedImg === idx
                        ? "ring-2 ring-secondary ring-offset-2 ring-offset-surface scale-102"
                        : "opacity-60 hover:opacity-100"
                    }`}
                    title={p.title}
                  >
                    <img
                      src={p.src}
                      alt={p.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Info & Finishing Swatches (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <span className="text-[11px] uppercase tracking-widest text-secondary font-semibold">
                  Sorotan Dokumentasi
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-primary font-medium tracking-tight">
                  {GALLERY_PHOTOS[selectedImg].title}
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                  {GALLERY_PHOTOS[selectedImg].caption}. Kami senantiasa memastikan setiap bagian permukaan kayu dihaluskan sempurna dan sambungan konstruksi rapi sehingga nyaman dan aman digunakan sehari-hari.
                </p>

                {/* Finishing Swatches Box */}
                <div className="mt-2 p-4 sm:p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider text-outline font-semibold">
                      Pilihan Warna Finishing Kayu
                    </span>
                    <span className="text-[11px] text-secondary font-medium">
                      {selectedFinish.code}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
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

                  <span className="font-serif text-sm font-medium text-primary">
                    Warna terpilih: {selectedFinish.name}
                  </span>
                  <p className="text-[11px] text-outline font-light">
                    *Tersedia juga opsi custom finishing sesuai permintaan warna interior rumah Anda.
                  </p>
                </div>
              </div>

              {/* Action Callout */}
              <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-3">
                <h5 className="font-serif text-base text-primary font-medium">
                  Punya Pertanyaan atau Model Impian Sendiri?
                </h5>
                <p className="text-xs text-on-surface-variant font-light">
                  Kirimkan foto referensi atau ukuran ruangan Anda, tim pengrajin kami akan membantu menghitung perkiraan dan memberikan saran terbaik.
                </p>
                <a
                  href="https://wa.me/6281129408820?text=Halo%20Kala%20%26%20Kayu%2C%20saya%20tertarik%20dengan%20furniture%20dan%20ingin%20konsultasi%20model%20custom."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary-container text-on-primary hover:bg-secondary py-3 rounded-xl text-xs uppercase tracking-wider font-semibold text-center transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#ffdbcb]" />
                  <span>Konsultasi Model via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
