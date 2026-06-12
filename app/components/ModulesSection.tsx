"use client";

import { motion } from "framer-motion";
import {
  ShoppingBag, ChefHat, CreditCard, Truck, Package, Users as UsersIcon,
  ShoppingCart, Trash2, BarChart3, DollarSign, TrendingUp, Clock,
  Calendar, Banknote, Building2, PieChart, Zap
} from "lucide-react";

const moduleGroups = [
  {
    label: "Operations",
    color: "blue",
    borderColor: "border-blue-500/20",
    headerBg: "bg-blue-600/10",
    iconColor: "text-blue-400",
    modules: [
      { icon: ShoppingBag, name: "Order Management" },
      { icon: ChefHat, name: "Kitchen Management" },
      { icon: CreditCard, name: "POS Integration" },
      { icon: Truck, name: "Delivery Management" },
    ],
  },
  {
    label: "Inventory",
    color: "orange",
    borderColor: "border-orange-500/20",
    headerBg: "bg-orange-600/10",
    iconColor: "text-orange-400",
    modules: [
      { icon: Package, name: "Stock Tracking" },
      { icon: UsersIcon, name: "Vendor Management" },
      { icon: ShoppingCart, name: "Purchase Orders" },
      { icon: Trash2, name: "Waste Monitoring" },
    ],
  },
  {
    label: "Finance",
    color: "green",
    borderColor: "border-green-500/20",
    headerBg: "bg-green-600/10",
    iconColor: "text-green-400",
    modules: [
      { icon: BarChart3, name: "Revenue Analytics" },
      { icon: DollarSign, name: "Expense Tracking" },
      { icon: TrendingUp, name: "Profitability Analysis" },
    ],
  },
  {
    label: "Workforce",
    color: "purple",
    borderColor: "border-purple-500/20",
    headerBg: "bg-purple-600/10",
    iconColor: "text-purple-400",
    modules: [
      { icon: Clock, name: "Attendance" },
      { icon: Calendar, name: "Shift Planning" },
      { icon: Banknote, name: "Payroll" },
    ],
  },
  {
    label: "Management",
    color: "cyan",
    borderColor: "border-cyan-500/20",
    headerBg: "bg-cyan-600/10",
    iconColor: "text-cyan-400",
    modules: [
      { icon: Building2, name: "Multi-Outlet Control" },
      { icon: PieChart, name: "Business Intelligence" },
      { icon: Zap, name: "Performance Dashboards" },
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: "from-blue-500/10 to-transparent border-blue-500/20",
  orange: "from-orange-500/10 to-transparent border-orange-500/20",
  green: "from-green-500/10 to-transparent border-green-500/20",
  purple: "from-purple-500/10 to-transparent border-purple-500/20",
  cyan: "from-cyan-500/10 to-transparent border-cyan-500/20",
};

export default function ModulesSection() {
  const totalModules = moduleGroups.reduce((sum, g) => sum + g.modules.length, 0);

  return (
    <section id="modules" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,60,180,0.06), transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/50 text-xs font-medium mb-5">
            Complete Platform
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Complete Restaurant{" "}
            <span className="gradient-text">Operating System</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg">
            {totalModules} modules across 5 core business areas — unified under one intelligent platform.
          </p>
        </motion.div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {moduleGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border ${group.borderColor} bg-gradient-to-b ${colorMap[group.color]} overflow-hidden group transition-all duration-300`}
            >
              {/* Group header */}
              <div className={`px-5 py-4 ${group.headerBg} border-b ${group.borderColor}`}>
                <h3 className={`text-sm font-semibold ${group.iconColor}`}>{group.label}</h3>
                <p className="text-[11px] text-white/30 mt-0.5">{group.modules.length} modules</p>
              </div>

              {/* Module list */}
              <div className="p-4 space-y-2">
                {group.modules.map((mod, mi) => (
                  <motion.div
                    key={mod.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.05 + mi * 0.06 }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-200 cursor-default"
                  >
                    <mod.icon className={`w-4 h-4 ${group.iconColor} opacity-70`} />
                    <span className="text-xs text-white/60">{mod.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: `${totalModules}+`, label: "Platform Modules" },
            { value: "1", label: "Unified Platform" },
            { value: "Real-time", label: "Data Sync" },
            { value: "AI-first", label: "Architecture" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <p className="text-2xl font-bold gradient-text-blue">{stat.value}</p>
              <p className="text-xs text-white/30 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
