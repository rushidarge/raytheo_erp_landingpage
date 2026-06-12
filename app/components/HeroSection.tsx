"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Package, ChefHat, Brain, BarChart3, Zap } from "lucide-react";
import { CONFIG } from "@/lib/config";

function DashboardMockup() {
  const metrics = [
    { label: "Today's Revenue", value: "₹1,24,580", change: "+12.4%", positive: true },
    { label: "Orders", value: "847", change: "+8.1%", positive: true },
    { label: "Avg. Order", value: "₹147", change: "+3.2%", positive: true },
    { label: "Food Cost %", value: "28.4%", change: "-1.8%", positive: true },
  ];

  const aiInsights = [
    { text: "Chicken tikka demand ↑ 23% this weekend", dot: "blue" },
    { text: "Reorder paneer — stock at 18%", dot: "orange" },
    { text: "Peak hour shift gap detected at 8 PM", dot: "purple" },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Outer glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl" />

      {/* Dashboard shell */}
      <div className="relative bg-[#0D1117] rounded-2xl border border-white/[0.08] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.6)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0A0F1A]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="px-4 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs text-white/40 font-mono">
              app.restaurantos.ai/dashboard
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-green-400 font-mono">LIVE</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-4 space-y-4">
          {/* Metrics row */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3"
              >
                <p className="text-[10px] text-white/40 mb-1">{m.label}</p>
                <p className="text-sm font-bold text-white">{m.value}</p>
                <p className={`text-[10px] font-medium mt-0.5 ${m.positive ? "text-green-400" : "text-red-400"}`}>
                  {m.change}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Chart area */}
          <div className="grid grid-cols-3 gap-2">
            {/* Revenue chart */}
            <div className="col-span-2 bg-white/[0.04] border border-white/[0.06] rounded-xl p-3">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-[11px] text-white/40">Revenue Trend</p>
                  <p className="text-sm font-semibold text-white">Last 7 days</p>
                </div>
                <div className="flex items-center gap-1 text-blue-400">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="text-xs">+18%</span>
                </div>
              </div>
              {/* Mini chart bars */}
              <div className="flex items-end gap-1 h-16">
                {[45, 62, 55, 78, 69, 88, 95].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                    className="flex-1 rounded-t-sm"
                    style={{
                      background: i === 6
                        ? "linear-gradient(180deg, #3B82F6, #7C3AED)"
                        : "rgba(59, 130, 246, 0.3)",
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <span key={i} className="flex-1 text-center text-[9px] text-white/30">{d}</span>
                ))}
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3">
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-5 h-5 rounded-md bg-purple-600/20 flex items-center justify-center">
                  <Brain className="w-3 h-3 text-purple-400" />
                </div>
                <span className="text-[11px] font-medium text-white/70">AI Insights</span>
              </div>
              <div className="space-y-2">
                {aiInsights.map((insight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.2 }}
                    className="flex items-start gap-1.5"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${
                      insight.dot === "blue" ? "bg-blue-400" :
                      insight.dot === "orange" ? "bg-orange-400" : "bg-purple-400"
                    }`} />
                    <p className="text-[9px] text-white/50 leading-tight">{insight.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: Package, label: "Inventory", value: "94 items", sub: "3 low stock", color: "text-blue-400", bg: "bg-blue-600/10" },
              { icon: ChefHat, label: "Kitchen", value: "12 active", sub: "Avg 8.2 min", color: "text-orange-400", bg: "bg-orange-600/10" },
              { icon: BarChart3, label: "AI Score", value: "91/100", sub: "Excellent", color: "text-green-400", bg: "bg-green-600/10" },
            ].map((card, i) => (
              <div key={i} className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3">
                <div className={`w-6 h-6 rounded-md ${card.bg} flex items-center justify-center mb-2`}>
                  <card.icon className={`w-3.5 h-3.5 ${card.color}`} />
                </div>
                <p className="text-[10px] text-white/40">{card.label}</p>
                <p className="text-sm font-semibold text-white">{card.value}</p>
                <p className={`text-[9px] ${card.color}`}>{card.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI indicator pulse */}
        <div className="absolute top-3 right-16 flex items-center gap-1.5">
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-purple-400"
          />
          <span className="text-[10px] text-purple-400 font-mono">AI ACTIVE</span>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial from-blue-950/30 via-transparent to-transparent" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,60,180,0.2), transparent)" }} />
      <div className="absolute inset-0 bg-gradient-radial" style={{ background: "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(124,58,237,0.08), transparent)" }} />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[8%] w-64 h-64 rounded-full bg-blue-600/5 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[8%] w-80 h-80 rounded-full bg-purple-600/5 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-600/10 text-blue-400 text-xs font-medium mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Under Active Development — Launching in 2 Months
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-5xl text-balance"
          >
            The Future of{" "}
            <span className="gradient-text">Restaurant Operations</span>
            {" "}is Being Built
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed text-balance"
          >
            An AI-native Restaurant ERP designed to automate operations, optimize profits,
            and empower restaurant teams through intelligent decision-making.{" "}
            <span className="text-white/70 font-medium">Launching in 2 Months.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="flex flex-col sm:flex-row items-center gap-3 mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" })}
              className="relative flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <span className="relative z-10">Join Early Access</span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector("#roadmap")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 bg-white/[0.03] hover:bg-white/[0.06]"
            >
              <Play className="w-3.5 h-3.5" />
              View Roadmap
            </motion.button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8 text-xs text-white/30"
          >
            <span>Built for modern restaurants</span>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <span>AI-powered from day one</span>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <span>Enterprise-grade security</span>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-white/20">
              by <span className="text-white/40 font-medium">{CONFIG.companyName}</span>
            </span>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
            className="w-full mt-16 mb-4"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
