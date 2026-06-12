"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Mail, User, Building2, Phone, Store, ArrowRight } from "lucide-react";
import { CONFIG } from "@/lib/config";

// Sub-tagline shown in the waitlist section
const COMPANY_CREDIT = `by ${CONFIG.companyName}`;

interface FormData {
  name: string;
  restaurantName: string;
  email: string;
  phone: string;
  outlets: string;
}

const initialForm: FormData = {
  name: "",
  restaurantName: "",
  email: "",
  phone: "",
  outlets: "1",
};

const outletOptions = ["1", "2–5", "6–10", "10+"];

const benefits = [
  "Priority access at launch",
  "Lifetime early-adopter pricing",
  "Dedicated onboarding support",
  "Direct line to our product team",
  "Influence the feature roadmap",
];

export default function WaitlistSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError("");
  };

  const validate = (): string => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.restaurantName.trim()) return "Please enter your restaurant name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.phone.trim()) return "Please enter your phone number.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(CONFIG.waitlistApiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Something went wrong.");
      }

      setSuccess(true);
      setForm(initialForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="waitlist" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,60,180,0.08), transparent)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 40% 40% at 80% 30%, rgba(124,58,237,0.06), transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-600/10 text-blue-400 text-xs font-medium mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Limited Early Access
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Get{" "}
            <span className="gradient-text">Early Access</span>
          </h2>
          <p className="text-white/50 text-base sm:text-lg">
            Join the waitlist and be among the first restaurants to experience
            the future of intelligent operations.
          </p>
          <p className="text-xs text-white/25 mt-2">{COMPANY_CREDIT}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Early access includes</h3>
              <div className="space-y-3">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-blue-400" />
                    </div>
                    <span className="text-sm text-white/60">{b}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <p className="text-xs text-white/30 mb-3 uppercase tracking-wider">Who is this for</p>
              {[
                "Restaurant owners & operators",
                "Multi-outlet chains",
                "Cloud kitchens",
                "Restaurant investors",
                "Hospitality groups",
              ].map((who) => (
                <div key={who} className="flex items-center gap-2 py-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                  <span className="text-sm text-white/50">{who}</span>
                </div>
              ))}
            </div>

            {/* Social proof counter */}
            <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-600/5">
              <p className="text-2xl font-bold gradient-text-blue mb-1">200+</p>
              <p className="text-sm text-white/40">restaurants already on the waitlist</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0D1117]">
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-green-600/20 border border-green-500/30 flex items-center justify-center mx-auto mb-5"
                    >
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                    <p className="text-white/50 text-sm">
                      We'll reach out with early access details before launch. Stay tuned.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-6 text-xs text-white/30 hover:text-white/50 transition-colors"
                    >
                      Submit another →
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5">Your Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            placeholder="Rahul Sharma"
                            className="w-full pl-9 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-white/20 outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                          />
                        </div>
                      </div>

                      {/* Restaurant name */}
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5">Restaurant Name</label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                          <input
                            type="text"
                            value={form.restaurantName}
                            onChange={(e) => handleChange("restaurantName", e.target.value)}
                            placeholder="Spice Garden"
                            className="w-full pl-9 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-white/20 outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="rahul@spicegarden.in"
                            className="w-full pl-9 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-white/20 outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs text-white/40 mb-1.5">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full pl-9 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-white/20 outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Outlets */}
                    <div>
                      <label className="block text-xs text-white/40 mb-1.5">
                        <Store className="w-3.5 h-3.5 inline mr-1 opacity-60" />
                        Number of Outlets
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {outletOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleChange("outlets", opt)}
                            className={`py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                              form.outlets === opt
                                ? "bg-blue-600 text-white border border-blue-500"
                                : "bg-white/[0.04] text-white/40 border border-white/[0.08] hover:bg-white/[0.07] hover:text-white/60"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Error */}
                    {error && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-red-400 text-center py-1"
                      >
                        {error}
                      </motion.p>
                    )}

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.01 }}
                      whileTap={{ scale: loading ? 1 : 0.99 }}
                      className="w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Joining Waitlist...
                        </>
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-[11px] text-white/20 text-center">
                      No spam. No credit card required. Cancel any time.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
