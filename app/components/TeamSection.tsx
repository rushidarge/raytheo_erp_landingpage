"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Layers, TrendingUp } from "lucide-react";

const progressItems = [
  { label: "Backend Platform", value: 92, color: "from-blue-500 to-blue-600" },
  { label: "AI Forecasting", value: 78, color: "from-purple-500 to-purple-600" },
  { label: "Inventory Intelligence", value: 85, color: "from-orange-500 to-orange-600" },
  { label: "Frontend Experience", value: 88, color: "from-green-500 to-green-600" },
  { label: "AI Assistant", value: 71, color: "from-pink-500 to-pink-600" },
  { label: "Analytics Engine", value: 80, color: "from-cyan-500 to-cyan-600" },
];

const teams = [
  {
    name: "Product Team",
    icon: Layers,
    color: "text-blue-400",
    bg: "bg-blue-600/10",
    border: "border-blue-500/20",
    desc: "Designing the future of restaurant operations UX. Obsessed with intuitive, fast workflows that actually match how restaurants work.",
    members: 4,
    focus: ["UX Research", "Product Strategy", "User Testing", "Roadmapping"],
  },
  {
    name: "Engineering Team",
    icon: Code2,
    color: "text-green-400",
    bg: "bg-green-600/10",
    border: "border-green-500/20",
    desc: "Building high-performance backend systems, real-time data pipelines, and bulletproof integrations with POS and delivery platforms.",
    members: 6,
    focus: ["Backend Systems", "API Design", "POS Integration", "Real-time Data"],
  },
  {
    name: "AI & Data Team",
    icon: Brain,
    color: "text-purple-400",
    bg: "bg-purple-600/10",
    border: "border-purple-500/20",
    desc: "Building and fine-tuning ML models for forecasting, demand prediction, and the restaurant-specific LLM that powers the AI assistant.",
    members: 3,
    focus: ["ML Models", "Forecasting", "NLP", "Data Science"],
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 40% at 30% 50%, rgba(0,60,180,0.05), transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/50 text-xs font-medium mb-5">
            The Builders
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Building the Future of{" "}
            <span className="gradient-text">Restaurant Intelligence</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg">
            A focused team with deep roots in restaurant operations, enterprise software, and applied AI.
          </p>
        </motion.div>

        {/* Teams */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {teams.map((team, i) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl border ${team.border} bg-white/[0.02] transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${team.bg} flex items-center justify-center mb-5`}>
                <team.icon className={`w-6 h-6 ${team.color}`} />
              </div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-[15px] font-semibold text-white">{team.name}</h3>
                <span className={`text-[11px] px-2 py-0.5 rounded-full ${team.bg} ${team.color} border ${team.border}`}>
                  {team.members} members
                </span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed mb-4">{team.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {team.focus.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] text-white/35 border border-white/[0.06]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-[15px] font-semibold text-white">Development Progress</h3>
              <p className="text-xs text-white/30">Real-time build progress across all workstreams</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {progressItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex justify-between text-xs mb-2">
                  <span className="text-white/60 font-medium">{item.label}</span>
                  <span className="text-white/40">{item.value}%</span>
                </div>
                <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.08 + 0.2, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
