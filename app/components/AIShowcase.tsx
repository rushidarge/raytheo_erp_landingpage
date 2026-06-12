"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Send, Sparkles, TrendingUp, Package, BarChart3 } from "lucide-react";

const conversations = [
  {
    user: "What should I order this week?",
    ai: "Based on historical consumption patterns and upcoming weekend demand, I recommend: increase chicken by 12%, vegetables by 8%, and reduce dairy orders by 5%. Expected savings: ₹4,200.",
    followUp: "Also — there's a cricket match on Sunday. Stock up on beverages +18%.",
  },
  {
    user: "Why did sales drop yesterday?",
    ai: "Sales were down 14% vs your Tuesday average. Three contributing factors: heavy rain reduced walk-ins by ~23%, the lunch special ran out by 1:15 PM, and your highest-AOV table section was closed for repairs.",
    followUp: "Rain forecast again Thursday — I'd recommend running a delivery-focused promotion.",
  },
  {
    user: "Which menu item gives highest profit?",
    ai: "Your top profit item is the Butter Chicken Bowl (38.2% margin, ₹87 net profit per order). It's also your 2nd most ordered item. Promoting it more aggressively could add ₹24,000/month.",
    followUp: "Your lowest-margin item is the Veg Platter. Consider repricing or removing it.",
  },
];

function TypingText({ text, onDone }: { text: string; onDone?: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
        onDone?.();
      }
    }, 18);
    return () => clearInterval(id);
  }, [text]);

  return (
    <span>
      {displayed}
      {!done && <span className="inline-block w-0.5 h-4 bg-blue-400 ml-0.5 animate-pulse" />}
    </span>
  );
}

export default function AIShowcase() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [phase, setPhase] = useState<"user" | "ai" | "follow">("user");
  const [showFollowUp, setShowFollowUp] = useState(false);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const conv = conversations[currentIdx];

  useEffect(() => {
    setPhase("user");
    setShowFollowUp(false);

    const t1 = setTimeout(() => setPhase("ai"), 800);
    return () => clearTimeout(t1);
  }, [currentIdx]);

  const handleAIDone = () => {
    setTimeout(() => setShowFollowUp(true), 400);
    setTimeout(() => {
      setCurrentIdx((p) => (p + 1) % conversations.length);
    }, 5000);
  };

  const stats = [
    { icon: TrendingUp, label: "Queries/day", value: "2,400+", color: "text-blue-400" },
    { icon: Package, label: "Avg response", value: "< 1.2s", color: "text-green-400" },
    { icon: BarChart3, label: "Accuracy", value: "96.8%", color: "text-purple-400" },
  ];

  return (
    <section id="ai-engine" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.06), transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-600/10 text-purple-400 text-xs font-medium mb-5">
            <Sparkles className="w-3 h-3" />
            Live Demo
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Meet Your{" "}
            <span className="gradient-text">AI Copilot</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg">
            A business intelligence engine that understands your restaurant's context and answers any question in seconds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Chat interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-[#0D1117] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              {/* Title bar */}
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[0.06] bg-[#0A0F1A]">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">AI Business Assistant</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[11px] text-green-400">Active · Learning from your data</span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div ref={containerRef} className="p-5 space-y-5 min-h-[280px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    {/* User message */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-end"
                    >
                      <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-tr-sm bg-blue-600 text-sm text-white">
                        {conv.user}
                      </div>
                    </motion.div>

                    {/* AI typing */}
                    {(phase === "ai" || phase === "follow") && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start gap-2.5"
                      >
                        <div className="w-7 h-7 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Brain className="w-3.5 h-3.5 text-purple-400" />
                        </div>
                        <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-sm bg-white/[0.04] border border-white/[0.06] text-sm text-white/80 leading-relaxed">
                          <TypingText text={conv.ai} onDone={handleAIDone} />
                        </div>
                      </motion.div>
                    )}

                    {/* Follow up */}
                    <AnimatePresence>
                      {showFollowUp && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-start gap-2.5"
                        >
                          <div className="w-7 h-7 rounded-lg bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                          </div>
                          <div className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-sm bg-purple-600/10 border border-purple-500/20 text-sm text-purple-200 leading-relaxed">
                            💡 {conv.followUp}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Input area */}
              <div className="px-5 pb-5">
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08]">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything about your restaurant..."
                    className="flex-1 bg-transparent text-sm text-white placeholder-white/25 outline-none"
                  />
                  <button className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors">
                    <Send className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
                <p className="text-[10px] text-white/20 mt-2 text-center">
                  Powered by restaurant-trained LLM · Context-aware · Always learning
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Stats */}
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center">
                  <s.icon className={`w-5 h-5 ${s.color}`} />
                </div>
                <div>
                  <p className="text-[11px] text-white/30 mb-0.5">{s.label}</p>
                  <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Capability list */}
            <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Capabilities</p>
              <div className="space-y-2.5">
                {[
                  "Revenue & sales analysis",
                  "Inventory Q&A",
                  "Staff performance insights",
                  "Purchase recommendations",
                  "Trend detection & alerts",
                  "Profit & loss explanation",
                ].map((cap) => (
                  <div key={cap} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="text-sm text-white/50">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversation selector */}
            <div className="p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <p className="text-xs text-white/30 mb-3">Try these conversations</p>
              <div className="space-y-1.5">
                {conversations.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
                      currentIdx === i
                        ? "bg-blue-600/20 text-blue-300 border border-blue-500/30"
                        : "text-white/40 hover:text-white/60 hover:bg-white/[0.04]"
                    }`}
                  >
                    "{c.user}"
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
