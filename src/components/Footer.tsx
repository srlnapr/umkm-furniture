"use client";

import {
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Heart,
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
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

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-16 pb-12 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-outline-variant/20">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-medium text-primary">
                Kala & Kayu
              </span>
              <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold border-l border-outline-variant/40 pl-2">
                Mebel & Kerajinan
              </span>
            </div>

            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light max-w-sm">
              Menghadirkan karya furniture kayu jati solid pilihan dan anyaman rotan alami berkualitas tinggi langsung dari sentuhan pengrajin Jepara untuk menciptakan kenyamanan di setiap sudut hunian Anda.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/6281129408820?text=Halo%20Kala%20%26%20Kayu%2C%20saya%20ingin%20konsultasi%20furniture."
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface hover:bg-emerald-600 hover:text-white flex items-center justify-center text-primary shadow-xs transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface hover:bg-rose-600 hover:text-white flex items-center justify-center text-primary shadow-xs transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:halo@kalakayu.com"
                className="w-9 h-9 rounded-full bg-surface hover:bg-secondary hover:text-white flex items-center justify-center text-primary shadow-xs transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif text-base text-primary font-medium">
              Navigasi Halaman
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-on-surface-variant font-light">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  Katalog Produk
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-primary transition-colors">
                  Keunggulan & Galeri
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Kontak & Lokasi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h4 className="font-serif text-base text-primary font-medium">
              Kontak & Workshop
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-on-surface-variant font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span>Jl. Pemuda No. 45, Tahunan, Jepara, Jawa Tengah 59411</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="https://wa.me/6281129408820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +62 811-2940-8820 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="mailto:halo@kalakayu.com" className="hover:text-primary transition-colors">
                  halo@kalakayu.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Senin – Sabtu: 08.00 – 17.00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-outline">
          <p>© {new Date().getFullYear()} Kala & Kayu. Hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Dibuat dengan dedikasi kriya Indonesia</span>
            <Heart className="w-3.5 h-3.5 text-secondary fill-secondary" />
          </div>
        </div>
      </div>
    </footer>
  );
}
