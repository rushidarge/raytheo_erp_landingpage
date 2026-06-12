"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3, Package, Users, Brain, TrendingUp, AlertCircle,
  CheckCircle2, Clock, Zap, ArrowUp, ArrowDown
} from "lucide-react";

function ExecutiveDashboard() {
  return (
    <div className="w-full h-full bg-[#0A0F1A] rounded-xl p-4 space-y-3">
      {/* KPIs */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Monthly Revenue", value: "₹38.4L", change: "+14%", up: true },
          { label: "Net Profit", value: "₹9.2L", change: "+8.3%", up: true },
          { label: "Food Cost %", value: "28.1%", change: "-2.1%", up: true },
        ].map((k) => (
          <div key={k.label} className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06]">
            <p className="text-[9px] text-white/30 mb-1">{k.label}</p>
            <p className="text-sm font-bold text-white">{k.value}</p>
            <div className={`flex items-center gap-0.5 ${k.up ? "text-green-400" : "text-red-400"}`}>
              {k.up ? <ArrowUp className="w-2.5 h-2.5" /> : <ArrowDown className="w-2.5 h-2.5" />}
              <span className="text-[9px]">{k.change}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Chart placeholder */}
      <div className="p-3 rounded-lg bg-white/[0.04] border border-white/[0.06]">
        <p className="text-[10px] text-white/40 mb-2">Revenue vs Target — Last 30 days</p>
        <div className="flex items-end gap-1 h-20">
          {[55,62,48,70,65,80,72,88,75,92,85,95].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-stretch gap-0.5">
              <div
                className="rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i >= 10 ? "linear-gradient(180deg,#3B82F6,#7C3AED)" : "rgba(59,130,246,0.3)"
                }}
              />
              <div
                className="rounded-t-sm border-t-2 border-dashed border-white/10 opacity-40"
                style={{ height: `${Math.min(100-h, 30)}%` }}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Outlet performance */}
      <div className="grid grid-cols-2 gap-2">
        {["Bandra", "Andheri", "Juhu", "Worli"].map((outlet, i) => (
          <div key={outlet} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.04] flex items-center justify-between">
            <span className="text-[10px] text-white/40">{outlet}</span>
            <div className="flex items-center gap-1">
              <div className={`w-1.5 h-1.5 rounded-full ${i < 2 ? "bg-green-400" : "bg-yellow-400"}`} />
              <span className={`text-[10px] font-medium ${i < 2 ? "text-green-400" : "text-yellow-400"}`}>
                {["↑18%","↑12%","↑5%","↓3%"][i]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InventoryDashboard() {
  const items = [
    { name: "Chicken", stock: 82, unit: "kg", status: "ok", ai: "Order 15kg by Thursday" },
    { name: "Paneer", stock: 18, unit: "kg", status: "low", ai: "Critical — order now" },
    { name: "Tomatoes", stock: 45, unit: "kg", status: "ok", ai: "Sufficient for 4 days" },
    { name: "Cream", stock: 62, unit: "L", status: "ok", ai: "Reduce next order by 10%" },
    { name: "Flour", stock: 12, unit: "kg", status: "low", ai: "Order 50kg immediately" },
    { name: "Rice", stock: 90, unit: "kg", status: "ok", ai: "Well stocked" },
  ];
  return (
    <div className="w-full h-full bg-[#0A0F1A] rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-white">Inventory Intelligence</p>
          <p className="text-[10px] text-white/30">AI-monitored · Real-time</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-600/10 border border-orange-500/20">
          <AlertCircle className="w-3 h-3 text-orange-400" />
          <span className="text-[10px] text-orange-400">2 alerts</span>
        </div>
      </div>
      <div className="space-y-1.5">
        {items.map((item) => (
          <div key={item.name} className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.04]">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] text-white/70 font-medium">{item.name}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                item.status === "low"
                  ? "bg-red-500/20 text-red-400"
                  : "bg-green-500/20 text-green-400"
              }`}>
                {item.stock}{item.unit}
              </span>
            </div>
            <div className="h-1 bg-white/[0.06] rounded-full mb-1.5">
              <div
                className={`h-full rounded-full ${item.status === "low" ? "bg-red-400" : "bg-green-400"}`}
                style={{ width: `${item.stock}%` }}
              />
            </div>
            <p className="text-[9px] text-white/25 flex items-center gap-1">
              <Zap className="w-2.5 h-2.5 text-blue-400" />{item.ai}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StaffDashboard() {
  const shifts = [
    { name: "Ravi K.", role: "Head Chef", time: "6AM–2PM", status: "active" },
    { name: "Priya M.", role: "Manager", time: "10AM–6PM", status: "active" },
    { name: "Amit S.", role: "Server", time: "12PM–8PM", status: "scheduled" },
    { name: "Sunita R.", role: "Cashier", time: "2PM–10PM", status: "scheduled" },
    { name: "Dev T.", role: "Delivery", time: "4PM–12AM", status: "scheduled" },
  ];
  return (
    <div className="w-full h-full bg-[#0A0F1A] rounded-xl p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-white">Staff Management</p>
          <p className="text-[10px] text-white/30">Today · 14 scheduled</p>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-600/10 border border-green-500/20">
          <CheckCircle2 className="w-3 h-3 text-green-400" />
          <span className="text-[10px] text-green-400">Optimal staffing</span>
        </div>
      </div>
      <div className="p-3 rounded-lg bg-blue-600/10 border border-blue-500/20">
        <p className="text-[10px] text-blue-300 font-medium mb-1">AI Workforce Insight</p>
        <p className="text-[9px] text-blue-200/60">Add 1 server for 7–9 PM peak. Expected covers: 42 (↑28% vs avg). Consider calling Meera as backup.</p>
      </div>
      <div className="space-y-1.5">
        {shifts.map((s) => (
          <div key={s.name} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.04]">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600/40 to-purple-600/40 flex items-center justify-center text-[10px] font-bold text-white">
              {s.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] text-white/70 font-medium">{s.name}</p>
              <p className="text-[9px] text-white/30">{s.role} · {s.time}</p>
            </div>
            <div className={`w-1.5 h-1.5 rounded-full ${s.status === "active" ? "bg-green-400 animate-pulse" : "bg-white/20"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AICopilotDashboard() {
  const messages = [
    { from: "ai", text: "Good morning! Revenue is tracking 12% above yesterday. Paneer stock is low — should I auto-generate a PO?" },
    { from: "user", text: "Yes, go ahead. Also check weekend forecast." },
    { from: "ai", text: "PO created for 25kg paneer (Raj Dairy, ₹180/kg). Weekend forecast: +34% covers Friday, +28% Saturday. Recommend adding 2 servers Fri 7–10 PM." },
    { from: "user", text: "What's today's best-performing dish?" },
    { from: "ai", text: "Butter Chicken Bowl — 142 orders, ₹87 net profit each. Running out at current pace by 6 PM. Suggest prep 40 more portions." },
  ];
  return (
    <div className="w-full h-full bg-[#0A0F1A] rounded-xl p-4 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
          <Brain className="w-3.5 h-3.5 text-white" />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-white">AI Copilot</p>
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[9px] text-green-400">Online</span>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-2 overflow-hidden">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] px-3 py-2 rounded-xl text-[10px] leading-relaxed ${
              m.from === "user"
                ? "bg-blue-600 text-white rounded-tr-sm"
                : "bg-white/[0.06] text-white/70 rounded-tl-sm"
            }`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const screens = [
  { id: "executive", label: "Executive Dashboard", icon: BarChart3, component: ExecutiveDashboard, color: "blue" },
  { id: "inventory", label: "Inventory Intelligence", icon: Package, component: InventoryDashboard, color: "orange" },
  { id: "staff", label: "Staff Management", icon: Users, component: StaffDashboard, color: "purple" },
  { id: "ai", label: "AI Copilot", icon: Brain, component: AICopilotDashboard, color: "pink" },
];

export default function ProductScreens() {
  const [activeId, setActiveId] = useState("executive");
  const active = screens.find((s) => s.id === activeId)!;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(124,58,237,0.05), transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/50 text-xs font-medium mb-5">
            🔒 Sneak Peek
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Production-Ready{" "}
            <span className="gradient-text">UI Previews</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg">
            These are real screens from our current build — not mockups or design files.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {screens.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeId === s.id
                  ? "bg-white/[0.08] text-white border border-white/15"
                  : "text-white/40 hover:text-white/60 hover:bg-white/[0.04]"
              }`}
            >
              <s.icon className="w-4 h-4" />
              {s.label}
            </button>
          ))}
        </div>

        {/* Screen preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl" />
          <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#0D1117] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="px-4 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs text-white/30 font-mono">
                  app.restaurantos.ai/{activeId}
                </div>
              </div>
            </div>
            <div className="min-h-[380px] bg-[#080D14]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="p-4"
                >
                  <active.component />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
