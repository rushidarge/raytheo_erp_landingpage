"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle, FileText, Users, TrendingDown, ShoppingCart, Eye, ArrowRight
} from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Inventory Wastage",
    desc: "Restaurants lose 20–30% of food cost to spoilage, over-ordering, and poor stock visibility.",
    color: "text-orange-400",
    bg: "bg-orange-600/10",
    border: "border-orange-500/20",
  },
  {
    icon: FileText,
    title: "Manual Reporting",
    desc: "Hours wasted on spreadsheets. Owners lack real-time visibility into revenue, costs, and performance.",
    color: "text-red-400",
    bg: "bg-red-600/10",
    border: "border-red-500/20",
  },
  {
    icon: Users,
    title: "Staff Scheduling",
    desc: "Overstaffing during slow periods and understaffing during peak hours — both hurt profitability.",
    color: "text-yellow-400",
    bg: "bg-yellow-600/10",
    border: "border-yellow-500/20",
  },
  {
    icon: TrendingDown,
    title: "Demand Forecasting",
    desc: "Without data-driven forecasting, kitchens prep too much or too little — killing both profit and guests.",
    color: "text-purple-400",
    bg: "bg-purple-600/10",
    border: "border-purple-500/20",
  },
  {
    icon: ShoppingCart,
    title: "Vendor Management",
    desc: "Fragmented vendor relationships, missed deliveries, and lack of price tracking erode margins silently.",
    color: "text-blue-400",
    bg: "bg-blue-600/10",
    border: "border-blue-500/20",
  },
  {
    icon: Eye,
    title: "Profit Visibility",
    desc: "Most restaurant owners don't know their true net profit until month-end — by then, it's too late.",
    color: "text-pink-400",
    bg: "bg-pink-600/10",
    border: "border-pink-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function VisionSection() {
  return (
    <section id="vision" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 0% 50%, rgba(124,58,237,0.05), transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-600/10 text-purple-400 text-xs font-medium mb-5">
            Our Mission
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Why We Are Building{" "}
            <span className="gradient-text">RestaurantOS AI</span>
          </h2>
          <p className="text-base sm:text-lg text-white/50 leading-relaxed">
            The restaurant industry is massive — yet it still runs on intuition, whiteboards, and fragmented software.
            We're changing that by building an intelligent operating system that transforms data into decisions.
          </p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative p-6 rounded-2xl border ${problem.border} bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200 group`}
            >
              <div className={`w-10 h-10 rounded-xl ${problem.bg} flex items-center justify-center mb-4`}>
                <problem.icon className={`w-5 h-5 ${problem.color}`} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{problem.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{problem.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 p-8 sm:p-10 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                RestaurantOS AI solves all of this
              </h3>
              <p className="text-white/50 text-sm max-w-xl">
                Through intelligent automation, predictive analytics, and an AI assistant that understands your business
                — we turn every restaurant into a data-driven operation.
              </p>
            </div>
            <button
              onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
              className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/10 rounded-xl transition-all duration-200"
            >
              See AI Features
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
