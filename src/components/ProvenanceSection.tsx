"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Trees, HandMetal, Flame, Box } from "lucide-react";

const STAGES = [
  {
    step: "01",
    title: "Conscious Material Sourcing",
    desc: "Responsibly harvested natural wild rattan from certified Sulawesi concessions, architectural reclaimed teak rescued from colonial-era Javanese joglo structures, and unglazed volcanic clay.",
    badge: "SVLK & FSC Regulated",
    badgeColor: "bg-tertiary-fixed text-on-tertiary-fixed",
    icon: Trees,
  },
  {
    step: "02",
    title: "Slow, Master Hand-Weaving",
    desc: "Traditional wicker, cane, and open octagonal webbing hand-woven over steam-bent structural rattan frames. Crafted entirely without toxic petroleum synthetic binders or chemical adhesives.",
    badge: "Zero Synthetic Resins",
    badgeColor: "bg-surface-container text-on-surface-variant",
    icon: HandMetal,
  },
  {
    step: "03",
    title: "Precision Kiln Seasoning",
    desc: "Computer-calibrated dehumidification drying chambers stabilizing core moisture content to 8–12% MC. Built to withstand dry continental winter HVAC without checking or structural warp.",
    badge: "8–12% MC Export Standard",
    badgeColor: "bg-surface-container text-on-surface-variant",
    icon: Flame,
  },
  {
    step: "04",
    title: "Export QA & Clean Crating",
    desc: "Triple-point joinery load testing, certified ISPM-15 heat-treated maritime timber crates, biodegradable honeycomb liners, and moisture-absorbing silica packets for container sea crossings.",
    badge: "ISPM-15 Phytosanitary Clean",
    badgeColor: "bg-secondary-fixed text-on-secondary-fixed",
    icon: Box,
  },
];

export default function ProvenanceSection() {
  return (
    <section id="story" className="w-full bg-surface-container-low/70 py-20 lg:py-28 border-y border-outline-variant/30">
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
              Provenance & Ethics
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-4xl text-primary font-normal tracking-tight leading-snug">
              Honoring Ancestral Heritage, Empowering Artisan Collectives
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
              By marrying age-old Indonesian handcraft traditions with Scandinavian minimalism and wabi-sabi silhouettes, Kala & Kayu builds heirloom-grade architectural living collections. Every piece is co-created with independent master guilds in Jepara, Cirebon, and Lombok under strict living wage guarantees and multi-generational knowledge transfers.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-1 text-on-surface">
              {[
                "Direct Trade (No Middlemen Brokers)",
                "FSC Reclaimed Teak Sourcing",
                "Non-Toxic Botanical Finishes",
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 4-Stage Craft Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.step}
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
                      {stage.step}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-primary">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg text-primary font-medium tracking-tight">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed font-light">
                    {stage.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[11px] uppercase tracking-wider font-medium ${stage.badgeColor}`}
                  >
                    {stage.badge}
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
