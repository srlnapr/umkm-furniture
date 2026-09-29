"use client";

import { useState } from "react";
import {
  CheckCircle,
  TreeDeciduous,
  Handshake,
  Box,
  Truck,
  Send,
  Check,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-20 pb-12 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-outline-variant/20">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-medium text-primary">
                Kala & Kayu
              </span>
              <span className="text-[10px] uppercase tracking-widest text-secondary font-semibold border-l border-outline-variant/40 pl-2">
                Export Atelier
              </span>
            </div>

            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light max-w-sm">
              Curating heirloom architectural woodwork, hand-carved teak, raw terracotta, and organic botanical textiles from master Indonesian craft sanctuaries for international trade.
            </p>

            <div className="mt-2 flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-wider text-outline font-medium">
                Artisanal Origin Hubs
              </span>
              <div className="flex flex-wrap gap-2 text-xs text-on-surface">
                <span className="hover:text-secondary transition-colors cursor-default">
                  Jepara (Teak)
                </span>
                <span className="text-outline-variant">•</span>
                <span className="hover:text-secondary transition-colors cursor-default">
                  Cirebon (Rattan)
                </span>
                <span className="text-outline-variant">•</span>
                <span className="hover:text-secondary transition-colors cursor-default">
                  Bali (Stone & Clay)
                </span>
                <span className="text-outline-variant">•</span>
                <span className="hover:text-secondary transition-colors cursor-default">
                  Lombok (Pottery)
                </span>
              </div>
            </div>
          </div>

          {/* Trade Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif text-base text-primary font-medium">
              Trade & Specifier Inquiry
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-on-surface-variant font-light">
              <li>
                <a href="#trade-program" className="hover:text-primary transition-colors">
                  B2B Trade Application
                </a>
              </li>
              <li>
                <a href="#inspection" className="hover:text-primary transition-colors">
                  Interactive Spec Library (CAD & 3D)
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-primary transition-colors">
                  Curated Hospitality Collections
                </a>
              </li>
              <li>
                <a href="#trade-inquiry" className="hover:text-primary transition-colors">
                  Request Commercial FCL/LCL Quote
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-primary transition-colors">
                  Artisan Guild Provenance
                </a>
              </li>
            </ul>
          </div>

          {/* ESG & Compliance (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-serif text-base text-primary font-medium">
              ESG & Compliance
            </h4>
            <p className="text-xs text-on-surface-variant font-light leading-relaxed">
              Every piece conforms to responsible stewardship, ethical living wages, and certified forestry custody.
            </p>
            <div className="flex flex-col gap-2 pt-1 text-xs text-on-surface font-light">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>SVLK Certified (Indonesian Timber Legality)</span>
              </div>
              <div className="flex items-center gap-2">
                <TreeDeciduous className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>FSC 100% Recycled & Managed Teak</span>
              </div>
              <div className="flex items-center gap-2">
                <Handshake className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>Sedex SMETA 4-Pillar Audited Fair Trade</span>
              </div>
              <div className="flex items-center gap-2">
                <Box className="w-3.5 h-3.5 text-secondary flex-shrink-0" />
                <span>Zero-Plastics Biodegradable Crating</span>
              </div>
            </div>
          </div>

          {/* Trade Journal Newsletter (2 cols / full on mobile) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-serif text-base text-primary font-medium">
              The Trade Journal
            </h4>
            <p className="text-xs text-on-surface-variant font-light leading-relaxed">
              Private seasonal dispatch covering kiln schedules and collection previews.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-1">
              <div className="flex items-center bg-surface rounded-xl p-1 border border-outline-variant/30 shadow-xs">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="trade@atelier.com"
                  required
                  className="w-full bg-transparent px-2.5 py-1 text-xs text-on-surface placeholder:text-outline/70 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary-container text-on-primary hover:bg-secondary p-1.5 rounded-lg transition-colors"
                  aria-label="Subscribe"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>
              <span className="text-[10px] text-outline">
                {subscribed ? "Subscribed to Trade Journal." : "Dispatched biannually. Unsubscribe anytime."}
              </span>
            </form>
          </div>
        </div>

        {/* Legal & Shipping Strip */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <div className="flex items-center gap-2 text-center lg:text-left">
            <Truck className="w-4 h-4 text-secondary flex-shrink-0" />
            <span>
              Incoterms 2020: FOB Tanjung Emas (Semarang) & Tanjung Perak (Surabaya) • Global CIF Sea & Air Freight Fulfillment
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span>© 2025 PT Kala Kayu Nusantara. All rights reserved.</span>
            <a href="#" className="hover:text-primary transition-colors">
              Privacy & Terms
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Export Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
