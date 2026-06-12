"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function getTargetDate(): Date {
  const target = new Date();
  target.setMonth(target.getMonth() + 2);
  return target;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function FlipUnit({ value, label }: { value: string; label: string }) {
  const [prev, setPrev] = useState(value);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    if (value !== prev) {
      setFlip(true);
      const t = setTimeout(() => {
        setPrev(value);
        setFlip(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [value, prev]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 sm:w-20 md:w-24">
        {/* Card */}
        <div className="relative h-16 sm:h-20 md:h-24 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#161B22] to-[#0D1117] border border-white/[0.08]" />

          {/* Gloss line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Number */}
          <motion.div
            key={value}
            initial={flip ? { y: -8, opacity: 0.6 } : { y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white font-mono">
              {value}
            </span>
          </motion.div>

          {/* Blue glow on top */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent pointer-events-none" />
        </div>

        {/* Divider line */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-px flex items-center gap-1">
          <div className="flex-1 h-px bg-black/60" />
          <div className="w-1 h-1 rounded-full bg-white/10" />
          <div className="flex-1 h-px bg-black/60" />
        </div>
      </div>

      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/30 font-medium">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [targetDate] = useState(getTargetDate);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const compute = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1_000),
      });
    };
    compute();
    const id = setInterval(compute, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const units = [
    { value: pad(timeLeft.days), label: "Days" },
    { value: pad(timeLeft.hours), label: "Hours" },
    { value: pad(timeLeft.minutes), label: "Minutes" },
    { value: pad(timeLeft.seconds), label: "Seconds" },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,60,180,0.08), transparent)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/40 text-xs mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Expected Launch
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            Launch Countdown
          </h2>
        </motion.div>

        {/* Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-start justify-center gap-3 sm:gap-6"
        >
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-start gap-3 sm:gap-6">
              <FlipUnit value={unit.value} label={unit.label} />
              {i < units.length - 1 && (
                <div className="flex flex-col gap-3 pt-4 sm:pt-5 md:pt-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 max-w-lg mx-auto"
        >
          <div className="flex justify-between text-xs text-white/30 mb-2">
            <span>Development Progress</span>
            <span>~82%</span>
          </div>
          <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "82%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
