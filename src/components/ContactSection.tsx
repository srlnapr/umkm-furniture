"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  ExternalLink,
} from "lucide-react";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo Kala & Kayu,\nNama saya: ${formData.name || "Pengunjung"}\nNo. HP: ${
        formData.phone || "-"
      }\n\nPesan:\n${formData.message || "Saya ingin konsultasi mengenai furniture."}`
    );
    window.open(`https://wa.me/6281129408820?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="w-full bg-surface py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
                Kontak & Lokasi
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-primary font-normal tracking-tight mt-1.5 leading-snug">
                Konsultasikan Kebutuhan Furniture Anda
              </h2>
              <p className="text-sm text-on-surface-variant font-light mt-3 leading-relaxed">
                Kami siap membantu Anda memilih perabot terbaik, berdiskusi mengenai ukuran custom, atau menyambut kedatangan Anda langsung di workshop kami.
              </p>
            </div>

            {/* Contact Cards List */}
            <div className="flex flex-col gap-3.5 pt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/6281129408820?text=Halo%20Kala%20%26%20Kayu%2C%20saya%20ingin%20konsultasi%20furniture."
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center text-emerald-600 shadow-xs group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-outline font-medium">
                      WhatsApp Resmi
                    </span>
                    <span className="font-serif text-base font-medium text-primary">
                      +62 811-2940-8820
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-secondary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Chat Sekarang <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center text-rose-600 shadow-xs group-hover:scale-105 transition-transform">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-outline font-medium">
                      Instagram
                    </span>
                    <span className="font-serif text-base font-medium text-primary">
                      @kalakayu.furniture
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-secondary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Follow <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:halo@kalakayu.com"
                className="group p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 flex items-center justify-between transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center text-secondary shadow-xs group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-outline font-medium">
                      Email
                    </span>
                    <span className="font-serif text-base font-medium text-primary">
                      halo@kalakayu.com
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-secondary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Kirim Email <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Alamat & Jam Operasional */}
              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col gap-3">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center text-primary flex-shrink-0 shadow-xs">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-outline font-medium">
                      Lokasi Workshop & Galeri
                    </span>
                    <p className="text-xs sm:text-sm text-primary font-medium mt-0.5 leading-snug">
                      Jl. Pemuda No. 45, RT 02 / RW 04, Tahunan, Kabupaten Jepara, Jawa Tengah 59411
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-outline-variant/20 flex items-center gap-2 text-xs text-on-surface-variant font-light">
                  <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span>Senin – Sabtu: 08.00 – 17.00 WIB (Minggu dengan janji temu)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map & Quick Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Google Maps Embed Frame */}
            <div className="bg-surface rounded-3xl overflow-hidden border border-outline-variant/30 shadow-md">
              <div className="p-4 border-b border-outline-variant/20 flex items-center justify-between bg-surface-container-low">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-secondary" />
                  <span className="font-serif text-sm font-medium text-primary">
                    Peta Lokasi Workshop Jepara
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Jepara,Central+Java"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-secondary hover:underline flex items-center gap-1 font-medium"
                >
                  Buka di Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative aspect-[16/9] w-full bg-surface-container">
                <iframe
                  title="Peta Lokasi Kala & Kayu Jepara"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63435.68832968393!2d110.64506527457788!3d-6.602555776269925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e711ef8ea5a8d9b%3A0x4027a76e3531b20!2sJepara%2C%20Jepara%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Quick Contact Form to WhatsApp */}
            <div className="bg-surface rounded-3xl p-6 sm:p-8 shadow-lg border border-outline-variant/30 flex flex-col gap-4">
              <div>
                <h3 className="font-serif text-xl text-primary font-medium tracking-tight">
                  Kirim Pesan Langsung
                </h3>
                <p className="text-xs text-on-surface-variant font-light mt-1">
                  Isi formulir singkat di bawah ini untuk memulai obrolan langsung via WhatsApp dengan customer service kami.
                </p>
              </div>

              <form onSubmit={handleSendWhatsApp} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-outline font-medium">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full bg-surface-container-low px-4 py-2.5 rounded-xl text-xs sm:text-sm text-on-surface placeholder:text-outline/70 border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] uppercase tracking-wider text-outline font-medium">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Contoh: 08123456789"
                      className="w-full bg-surface-container-low px-4 py-2.5 rounded-xl text-xs sm:text-sm text-on-surface placeholder:text-outline/70 border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-outline font-medium">
                    Pesan / Rencana Furniture *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan produk yang diminati, ukuran custom yang diinginkan, atau pertanyaan lainnya..."
                    className="w-full bg-surface-container-low px-4 py-2.5 rounded-xl text-xs sm:text-sm text-on-surface placeholder:text-outline/70 border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-container text-on-primary hover:bg-secondary py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#ffdbcb]" />
                  <span>Kirim Pesan ke WhatsApp</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
