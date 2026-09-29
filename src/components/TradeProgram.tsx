"use client";

import { motion } from "framer-motion";
import {
  Package,
  Compass,
  Ship,
  Check,
  ShieldCheck,
  Building2,
  FileCheck2,
} from "lucide-react";

const PILLARS = [
  {
    icon: Package,
    title: "Flexible Order Consignments",
    tagline: "FOB Semarang / Surabaya",
    desc: "Whether you are curating a single boutique showroom or spec’ing a 120-villa beachfront resort in the Maldives:",
    points: [
      {
        bold: "LCL Mixed Pallets:",
        text: "Low entry threshold starting at $3,500 USD consolidated crate.",
      },
      {
        bold: "20ft GP Containers:",
        text: "Accommodates 28–30 CBM (~60–80 mixed furniture items).",
      },
      {
        bold: "40ft High Cube (HC):",
        text: "Accommodates 68–72 CBM with 18% to 28% volume margin relief.",
      },
    ],
  },
  {
    icon: Compass,
    title: "OEM & Bespoke Architecture",
    tagline: "Full In-House Engineering",
    desc: "Our in-house design studio translates your hospitality renderings and architectural CAD into handcrafted Indonesian masterworks:",
    points: [
      {
        bold: "Custom 3D CAD & Prototypes:",
        text: "Rapid joinery sample mockups within 14 business days.",
      },
      {
        bold: "Private Label Branding:",
        text: "Laser-etched brass backplates, debossed leather labels, custom tags.",
      },
      {
        bold: "Contract Textiles:",
        text: "COM (Customer's Own Material) & Sunbrella outdoor grade matching.",
      },
    ],
  },
  {
    icon: Ship,
    title: "Turnkey Global Freight Routing",
    tagline: "Full Marine Cargo Insurance",
    desc: "Direct ocean sailings from Indonesia's deepest container terminals with seamless door-to-port or CIF clearing:",
    points: [
      {
        bold: "North America:",
        text: "Long Beach (22 days), Oakland, Savannah, New York / Newark.",
      },
      {
        bold: "Europe & UK:",
        text: "Rotterdam (28 days), Hamburg, Le Havre, Felixstowe.",
      },
      {
        bold: "Oceania & Middle East:",
        text: "Sydney / Melbourne (14 days), Jebel Ali Dubai (16 days).",
      },
    ],
  },
];

export default function TradeProgram() {
  return (
    <section id="trade-program" className="w-full bg-surface py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
              Global Export Standards
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-primary font-normal tracking-tight mt-1.5 leading-snug">
              Commercial B2B Logistics, OEM Tailoring & Container Fulfillment
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant font-light mt-4 leading-relaxed">
              Built for contract furniture dealers, interior architecture practices, and luxury lifestyle brands requiring consistent container volumes, compliant documentation, and bespoke adaptation.
            </p>
          </motion.div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-surface-container-low/70 rounded-2xl p-6 sm:p-8 border border-outline-variant/30 flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-6 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl text-primary font-medium tracking-tight mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-on-surface-variant font-light leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  <ul className="flex flex-col gap-3 text-xs sm:text-sm text-on-surface">
                    {pillar.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="font-light leading-snug">
                          <strong className="font-medium text-primary">{pt.bold} </strong>
                          {pt.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-outline-variant/20 text-[11px] uppercase tracking-wider text-outline font-medium">
                  {pillar.tagline}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trade Certification & Compliance Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container/70 rounded-2xl p-5 sm:p-6 border border-outline-variant/30 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-secondary flex-shrink-0" />
            <span className="font-serif text-sm sm:text-base font-medium text-primary">
              Export Compliance & Phytosanitary Assurance:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-on-surface-variant">
            <span className="font-medium text-on-surface">SVLK V-Legal License</span>
            <span className="text-outline-variant">•</span>
            <span>ISPM-15 Heat Fumigation Certified</span>
            <span className="text-outline-variant">•</span>
            <span>Form A / COO (Certificate of Origin)</span>
            <span className="text-outline-variant">•</span>
            <span>CBI Netherlands Import Vetted</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
