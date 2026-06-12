"use client";

import { motion } from "framer-motion";
import { TrendingUp, Package, ShoppingCart, UtensilsCrossed, Users, MessageSquare } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "AI Revenue Forecasting",
    desc: "Predict sales using weather data, seasonality, local events, and 12+ months of historical trends. Know tomorrow's revenue before it happens.",
    tags: ["Predictive Analytics", "ML Models", "Real-time"],
    color: "from-blue-600/20 to-blue-600/5",
    iconBg: "bg-blue-600/20",
    iconColor: "text-blue-400",
    borderColor: "border-blue-500/15",
    glow: "hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
  },
  {
    icon: Package,
    title: "AI Inventory Intelligence",
    desc: "Predict stock shortages before they happen. Real-time consumption tracking, automatic depletion alerts, and zero blind spots across all outlets.",
    tags: ["Computer Vision", "IoT Ready", "Multi-outlet"],
    color: "from-orange-600/20 to-orange-600/5",
    iconBg: "bg-orange-600/20",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/15",
    glow: "hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(251,146,60,0.1)]",
  },
  {
    icon: ShoppingCart,
    title: "AI Purchase Recommendations",
    desc: "Automatically suggest optimal purchase quantities based on forecasted demand, current stock, lead times, and vendor pricing.",
    tags: ["Auto-ordering", "Cost Optimization", "Vendor Integration"],
    color: "from-green-600/20 to-green-600/5",
    iconBg: "bg-green-600/20",
    iconColor: "text-green-400",
    borderColor: "border-green-500/15",
    glow: "hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)]",
  },
  {
    icon: UtensilsCrossed,
    title: "AI Menu Optimization",
    desc: "Identify high-profit star items and underperforming menu gaps. Get AI recommendations to engineer your menu for maximum profitability.",
    tags: ["Menu Engineering", "Profit Analysis", "Trend Detection"],
    color: "from-purple-600/20 to-purple-600/5",
    iconBg: "bg-purple-600/20",
    iconColor: "text-purple-400",
    borderColor: "border-purple-500/15",
    glow: "hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(167,139,250,0.1)]",
  },
  {
    icon: Users,
    title: "AI Workforce Planning",
    desc: "Optimize staffing levels for every shift using predicted footfall, event calendars, and historical performance data. No more guesswork.",
    tags: ["Shift Optimization", "Demand Matching", "Cost Reduction"],
    color: "from-cyan-600/20 to-cyan-600/5",
    iconBg: "bg-cyan-600/20",
    iconColor: "text-cyan-400",
    borderColor: "border-cyan-500/15",
    glow: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]",
  },
  {
    icon: MessageSquare,
    title: "AI Business Assistant",
    desc: "Natural language insights for every level of your team. Ask questions in plain English and get instant, data-backed answers.",
    tags: ["Natural Language", "LLM-powered", "Always On"],
    color: "from-pink-600/20 to-pink-600/5",
    iconBg: "bg-pink-600/20",
    iconColor: "text-pink-400",
    borderColor: "border-pink-500/15",
    glow: "hover:border-pink-500/40 hover:shadow-[0_0_30px_rgba(244,114,182,0.1)]",
    featured: true,
  },
];

const chatExamples = [
  "Why did sales drop yesterday?",
  "Which menu item gives highest profit?",
  "What inventory should I order tomorrow?",
  "Show me this week's food cost breakdown",
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 100% 50%, rgba(0,60,180,0.05), transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-600/10 text-blue-400 text-xs font-medium mb-5">
            AI Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            AI Built Into{" "}
            <span className="gradient-text">Every Workflow</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg leading-relaxed">
            Six intelligent engines that continuously learn from your restaurant's data and
            make every operational decision smarter.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.slice(0, 5).map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`relative p-6 rounded-2xl border ${f.borderColor} bg-white/[0.02] transition-all duration-300 ${f.glow} group`}
            >
              <div className={`w-11 h-11 rounded-xl ${f.iconBg} flex items-center justify-center mb-5`}>
                <f.icon className={`w-5 h-5 ${f.iconColor}`} />
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed mb-4">{f.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {f.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.06] text-white/40 border border-white/[0.06]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* AI Assistant card — full width feature */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -4 }}
            className={`relative p-6 rounded-2xl border border-pink-500/15 bg-gradient-to-br from-[#1a0820] to-[#0D1117] transition-all duration-300 hover:border-pink-500/40 group`}
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-pink-600/10 blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-11 h-11 rounded-xl bg-pink-600/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-white">AI Business Assistant</h3>
                  <p className="text-[11px] text-pink-400">Natural Language · Always On</p>
                </div>
              </div>

              {/* Chat UI demo */}
              <div className="space-y-2 mb-4">
                {chatExamples.map((q, i) => (
                  <motion.div
                    key={q}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] cursor-pointer transition-colors"
                  >
                    <span className="text-xs text-white/50">"</span>
                    <span className="text-xs text-white/60">{q}</span>
                    <span className="text-xs text-white/50">"</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-xs text-white/30">Ask anything about your restaurant in plain English.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
