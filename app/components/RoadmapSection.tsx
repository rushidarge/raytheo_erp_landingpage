"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, Rocket } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Core ERP",
    desc: "Order management, kitchen display, POS integration, basic reporting.",
    status: "completed" as const,
    completion: 100,
    items: ["Order flow engine", "KDS integration", "Multi-POS support", "Basic reporting"],
  },
  {
    phase: "Phase 2",
    title: "Inventory Engine",
    desc: "Real-time stock tracking, vendor management, purchase orders, waste monitoring.",
    status: "completed" as const,
    completion: 100,
    items: ["Stock tracking", "Vendor management", "Purchase orders", "Waste logging"],
  },
  {
    phase: "Phase 3",
    title: "AI Recommendation Engine",
    desc: "Purchase recommendations, menu optimization, AI business assistant.",
    status: "in-progress" as const,
    completion: 72,
    items: ["Purchase AI", "Menu optimizer", "AI assistant", "Insight engine"],
  },
  {
    phase: "Phase 4",
    title: "Forecasting Engine",
    desc: "Revenue forecasting, demand prediction, workforce planning AI.",
    status: "in-progress" as const,
    completion: 45,
    items: ["Revenue forecasting", "Demand prediction", "Staff optimizer", "Event modeling"],
  },
  {
    phase: "Phase 5",
    title: "Beta Launch",
    desc: "Closed beta with selected restaurant partners. Feedback-driven refinement.",
    status: "upcoming" as const,
    completion: 0,
    items: ["Partner onboarding", "Beta testing", "Performance tuning", "UX refinement"],
  },
  {
    phase: "Phase 6",
    title: "Public Launch",
    desc: "Full public availability. Enterprise features. Multi-outlet expansion.",
    status: "coming-soon" as const,
    completion: 0,
    items: ["Public release", "Enterprise tier", "API marketplace", "Partner integrations"],
  },
];

const statusConfig = {
  completed: {
    label: "Completed",
    icon: CheckCircle2,
    color: "text-green-400",
    bg: "bg-green-600/10",
    border: "border-green-500/30",
    dotColor: "bg-green-400",
    lineColor: "bg-green-400",
  },
  "in-progress": {
    label: "In Progress",
    icon: Clock,
    color: "text-blue-400",
    bg: "bg-blue-600/10",
    border: "border-blue-500/30",
    dotColor: "bg-blue-400",
    lineColor: "bg-gradient-to-b from-blue-400 to-white/10",
  },
  upcoming: {
    label: "Upcoming",
    icon: Circle,
    color: "text-white/40",
    bg: "bg-white/[0.04]",
    border: "border-white/10",
    dotColor: "bg-white/20",
    lineColor: "bg-white/10",
  },
  "coming-soon": {
    label: "Coming Soon",
    icon: Rocket,
    color: "text-purple-400",
    bg: "bg-purple-600/10",
    border: "border-purple-500/30",
    dotColor: "bg-purple-400",
    lineColor: "bg-white/10",
  },
};

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(0,60,180,0.06), transparent)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/50 text-xs font-medium mb-5">
            Our Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Development{" "}
            <span className="gradient-text">Progress</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg">
            6 phases from zero to enterprise-grade AI restaurant platform.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-5 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-white/[0.06]" />

          <div className="space-y-8">
            {phases.map((phase, i) => {
              const cfg = statusConfig[phase.status];
              const isRight = i % 2 === 0;

              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: isRight ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isRight ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                      className={`w-4 h-4 rounded-full ${cfg.dotColor} border-2 border-black`}
                    />
                    {phase.status === "in-progress" && (
                      <div className={`absolute inset-0 rounded-full ${cfg.dotColor} animate-ping opacity-40`} />
                    )}
                  </div>

                  {/* Card — left or right */}
                  <div className={`ml-12 sm:ml-0 w-full sm:w-[calc(50%-2rem)] ${isRight ? "sm:pr-8" : "sm:pl-8"}`}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      className={`p-5 rounded-2xl border ${cfg.border} ${cfg.bg} group transition-all duration-300`}
                    >
                      {/* Top row */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <span className="text-[11px] text-white/30 uppercase tracking-wider font-medium">{phase.phase}</span>
                          <h3 className="text-[15px] font-semibold text-white mt-0.5">{phase.title}</h3>
                        </div>
                        <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${cfg.border} ${cfg.bg}`}>
                          <cfg.icon className={`w-3 h-3 ${cfg.color}`} />
                          <span className={`text-[10px] font-medium ${cfg.color}`}>{cfg.label}</span>
                        </div>
                      </div>

                      <p className="text-sm text-white/40 leading-relaxed mb-4">{phase.desc}</p>

                      {/* Progress bar */}
                      {phase.completion > 0 && (
                        <div className="mb-4">
                          <div className="flex justify-between text-[10px] text-white/30 mb-1.5">
                            <span>Progress</span>
                            <span>{phase.completion}%</span>
                          </div>
                          <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${phase.completion}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                              className={`h-full rounded-full ${
                                phase.status === "completed"
                                  ? "bg-green-400"
                                  : "bg-gradient-to-r from-blue-500 to-purple-500"
                              }`}
                            />
                          </div>
                        </div>
                      )}

                      {/* Items */}
                      <div className="grid grid-cols-2 gap-1.5">
                        {phase.items.map((item) => (
                          <div key={item} className="flex items-center gap-1.5">
                            <div className={`w-1 h-1 rounded-full ${cfg.dotColor} opacity-60`} />
                            <span className="text-[11px] text-white/35">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden sm:block w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
