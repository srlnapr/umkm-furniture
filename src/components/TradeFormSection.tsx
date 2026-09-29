"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Layers,
  Clock,
  PhoneCall,
  Send,
  CheckCircle2,
  Lock,
  Sparkles,
} from "lucide-react";

const ORG_TYPES = [
  "Interior Architect / Studio",
  "Retail Store / Boutique Chain",
  "Hospitality / Resort Developer",
  "Global Furniture Distributor",
];

export default function TradeFormSection() {
  const [selectedRole, setSelectedRole] = useState(ORG_TYPES[0]);
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    scope: "lcl",
    port: "",
    notes: "",
    swatchKit: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="trade-inquiry" className="w-full bg-surface-container-low/70 py-20 lg:py-28 border-b border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Editorial Guidance Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
                Trade Account Accreditation
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl text-primary font-normal tracking-tight leading-snug">
                Request 2025 Wholesale Price List & Bespoke Specifier Kit
              </h2>
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                We partner directly with registered commercial entities, licensed interior designers, hospitality developers, and vetted home decor retailers worldwide.
              </p>

              {/* Spec Benefits */}
              <div className="mt-4 flex flex-col gap-5">
                {[
                  {
                    icon: BookOpen,
                    title: "Comprehensive 2025 Lookbook",
                    desc: "148-page high-resolution PDF with full unpriced architectural photography and material specs for client presentations.",
                  },
                  {
                    icon: Layers,
                    title: "Physical Material Box Dispatch",
                    desc: "Hand-cut teak swatches, 6 weave cane disks, and unglazed terracotta biscuit tiles shipped via DHL Express to your studio.",
                  },
                  {
                    icon: Clock,
                    title: "24-Hour Spec Desk Response",
                    desc: "Direct liaison with our Export Director in Semarang for container nesting optimization and landed CIF quotes.",
                  },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-secondary flex-shrink-0 shadow-xs border border-outline-variant/30">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <h4 className="font-serif text-sm font-medium text-primary">
                          {item.title}
                        </h4>
                        <p className="text-xs text-on-surface-variant font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Direct WhatsApp Callout */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-surface border border-outline-variant/30 flex items-center gap-4 shadow-xs"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center flex-shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-outline font-medium">
                  Direct WhatsApp Export Hotline
                </span>
                <span className="font-serif text-base font-semibold text-primary">
                  +62 811 2940 8820 (Jepara Desk)
                </span>
              </div>
            </motion.div>
          </div>

          {/* Form Module (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-surface rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-outline-variant/30 flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Organization Type Selector Pills */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-wider text-outline font-semibold">
                  Your Organization Type *
                </label>
                <div className="flex flex-wrap gap-2">
                  {ORG_TYPES.map((type) => {
                    const isSelected = selectedRole === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedRole(type)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs transition-colors duration-200 ${
                          isSelected
                            ? "bg-primary-container text-on-primary font-medium shadow-xs"
                            : "bg-surface-container text-on-surface hover:bg-surface-container-high font-normal"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Two Column: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-outline font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Helena Vance"
                    className="w-full bg-surface-container-low px-4 py-2.5 rounded-xl text-xs sm:text-sm text-on-surface placeholder:text-outline/70 border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-outline font-medium">
                    Company & Tax/VAT ID *
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    placeholder="Studio Vance Living Ltd."
                    className="w-full bg-surface-container-low px-4 py-2.5 rounded-xl text-xs sm:text-sm text-on-surface placeholder:text-outline/70 border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface transition-all"
                  />
                </div>
              </div>

              {/* Two Column: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-outline font-medium">
                    Corporate Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="h.vance@studiovance.com"
                    className="w-full bg-surface-container-low px-4 py-2.5 rounded-xl text-xs sm:text-sm text-on-surface placeholder:text-outline/70 border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-outline font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+44 20 7946 0912"
                    className="w-full bg-surface-container-low px-4 py-2.5 rounded-xl text-xs sm:text-sm text-on-surface placeholder:text-outline/70 border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface transition-all"
                  />
                </div>
              </div>

              {/* Two Column: Scope & Port */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-outline font-medium">
                    Project Volume Scope
                  </label>
                  <select
                    value={formState.scope}
                    onChange={(e) => setFormState({ ...formState, scope: e.target.value })}
                    className="w-full bg-surface-container-low px-4 py-2.5 rounded-xl text-xs sm:text-sm text-on-surface border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface transition-all"
                  >
                    <option value="lcl">LCL Mixed Consignment ($5k–$20k)</option>
                    <option value="fcl-20">20ft FCL Single Container</option>
                    <option value="fcl-40">40ft High Cube Container</option>
                    <option value="sample">Architectural Sample / Mockup Order</option>
                    <option value="hospitality">Contract Hospitality Fit-out (&gt;$100k)</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] uppercase tracking-wider text-outline font-medium">
                    Destination Port / City
                  </label>
                  <input
                    type="text"
                    value={formState.port}
                    onChange={(e) => setFormState({ ...formState, port: e.target.value })}
                    placeholder="e.g. Port of Rotterdam / Sydney"
                    className="w-full bg-surface-container-low px-4 py-2.5 rounded-xl text-xs sm:text-sm text-on-surface placeholder:text-outline/70 border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface transition-all"
                  />
                </div>
              </div>

              {/* Project Notes */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] uppercase tracking-wider text-outline font-medium">
                  Project Notes or Custom OEM Specifications
                </label>
                <textarea
                  rows={3}
                  value={formState.notes}
                  onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                  placeholder="Tell us about your upcoming residential collection, hospitality villa timeline, or custom dimensions required..."
                  className="w-full bg-surface-container-low px-4 py-2.5 rounded-xl text-xs sm:text-sm text-on-surface placeholder:text-outline/70 border border-outline-variant/30 focus:outline-none focus:border-secondary focus:bg-surface transition-all resize-none"
                />
              </div>

              {/* Swatch Kit Checkbox */}
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formState.swatchKit}
                  onChange={(e) => setFormState({ ...formState, swatchKit: e.target.checked })}
                  className="w-4 h-4 rounded text-secondary focus:ring-0 accent-secondary"
                />
                <span className="text-xs text-on-surface leading-tight">
                  Dispatch physical sample material kit (teak cuts, cane weaves & terracotta glaze samples) to our studio address
                </span>
              </label>

              {/* Submit Button & Micro-interaction */}
              <div className="pt-2">
                {!isSubmitted ? (
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-container text-on-primary hover:bg-secondary py-3.5 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Sparkles className="w-4 h-4 animate-spin" />
                        <span>Verifying & Transmitting Credentials...</span>
                      </span>
                    ) : (
                      <>
                        <span>Request 2025 Trade Lookbook & Price List</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed text-center flex items-center justify-center gap-2 text-xs sm:text-sm font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#2c3d18] flex-shrink-0" />
                    <span>
                      Thank you. Your trade verification request has been logged. Our export director will transmit credentials and PDF catalogs within 24 business hours.
                    </span>
                  </motion.div>
                )}
              </div>
            </form>

            <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between text-[11px] text-outline font-medium">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-secondary" />
                Encrypted B2B Portal Transmission
              </span>
              <span>SVLK & Sedex SMETA Audited</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
