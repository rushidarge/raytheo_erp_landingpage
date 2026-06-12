"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "When will the product launch?",
    a: "We're targeting a public launch in approximately 2 months. We'll begin a closed beta with selected restaurant partners before the full public release. Join the waitlist to be among the first to get access.",
  },
  {
    q: "Who is RestaurantOS AI designed for?",
    a: "RestaurantOS AI is built for serious restaurant operators — from single-outlet independents to multi-location chains and cloud kitchens. Whether you're doing 50 covers a day or 500, the platform scales to your needs. It's also well-suited for restaurant investors and hospitality groups looking for portfolio-level visibility.",
  },
  {
    q: "Will AI features be included in all plans?",
    a: "Yes. AI is not an add-on — it's the core of the platform. Every plan includes AI forecasting, AI inventory intelligence, and the AI business assistant. Advanced capabilities like custom ML model training and white-label AI branding are available in enterprise plans.",
  },
  {
    q: "Will multi-outlet restaurants be supported?",
    a: "Absolutely. Multi-outlet management is a first-class feature. You can manage all outlets from a single dashboard, compare performance across locations, centralize procurement, and roll out menu and pricing changes across the entire chain instantly.",
  },
  {
    q: "Can I join the beta testing program?",
    a: "Yes! When you join the waitlist, you'll be considered for our closed beta program. Beta participants get early access, direct feedback sessions with our product team, and lifetime discounts on their subscription. We'll contact beta candidates directly before the public launch.",
  },
  {
    q: "How does the AI learn about my specific restaurant?",
    a: "RestaurantOS AI learns from your historical data — sales patterns, inventory consumption, staff performance, customer behavior, and more. The longer you use it, the smarter it gets. Within the first 30 days, the forecasting accuracy typically improves by 40% over baseline.",
  },
  {
    q: "Does it integrate with my existing POS system?",
    a: "We are building native integrations with the most popular POS systems in India and Southeast Asia. We also provide a universal API that any POS vendor can integrate with. If your current POS isn't yet supported, let us know — we prioritize integrations based on customer demand.",
  },
];

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={`rounded-xl border transition-all duration-200 ${
        open ? "border-blue-500/25 bg-blue-600/[0.04]" : "border-white/[0.06] bg-white/[0.02]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 p-5 text-left"
        aria-expanded={open}
      >
        <span className={`text-sm font-medium transition-colors duration-200 ${open ? "text-white" : "text-white/70"}`}>
          {item.q}
        </span>
        <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
          open ? "bg-blue-600 text-white" : "bg-white/[0.06] text-white/40"
        }`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              <div className="h-px bg-white/[0.06] mb-4" />
              <p className="text-sm text-white/50 leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 100% 50%, rgba(0,60,180,0.05), transparent)" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/50 text-xs font-medium mb-5">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Common Questions
          </h2>
          <p className="text-white/40 text-base">
            Everything you need to know about RestaurantOS AI.
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} item={faq} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-white/30 mb-3">Still have questions?</p>
          <a
            href={`mailto:hello@restaurantos.ai`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-sm text-white/60 hover:text-white hover:bg-white/[0.07] transition-all duration-200"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
