"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, ArrowRight } from "lucide-react";
import { CONFIG } from "@/lib/config";

const footerLinks = {
  Product: ["Features", "Roadmap", "AI Engine", "Modules", "Changelog"],
  Company: ["Vision", "Team", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "API Reference", "Integrations", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Security", "Cookie Policy"],
};

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const id = href.toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(id) || document.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,60,180,0.04), transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-1">
              <div className="relative w-10 h-10 flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="RestaurantOS AI Logo"
                  className="w-10 h-10 object-contain rounded-xl"
                />
              </div>
              <div>
                <span className="text-[15px] font-semibold text-white block leading-tight">{CONFIG.productName}</span>
                <span className="text-[11px] text-white/30 leading-tight">by {CONFIG.companyName}</span>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs mt-4">
              {CONFIG.tagline}. Intelligent automation for the modern restaurant operator.
            </p>
            {/* Social */}
            <div className="flex items-center gap-2">
              {[
                { icon: Twitter, href: CONFIG.social.twitter, label: "Twitter" },
                { icon: Linkedin, href: CONFIG.social.linkedin, label: "LinkedIn" },
                { icon: Github, href: CONFIG.social.github, label: "GitHub" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">{section}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => handleNav(link)}
                      className="text-sm text-white/35 hover:text-white/70 transition-colors duration-200 text-left"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-6 px-8 rounded-2xl border border-blue-500/15 bg-gradient-to-r from-blue-600/8 to-purple-600/8 flex flex-col sm:flex-row items-center justify-between gap-5 mb-10"
        >
          <div>
            <p className="text-sm font-semibold text-white">Ready to transform your restaurant?</p>
            <p className="text-xs text-white/40 mt-0.5">Join 200+ restaurants already on the waitlist.</p>
          </div>
          <button
            onClick={() => document.querySelector("#waitlist")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
          >
            Join Early Access
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/20">
            © {year} {CONFIG.productName} · <span className="text-white/30">{CONFIG.companyName}</span>. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Built with ❤️ for the restaurant industry
          </p>
        </div>
      </div>
    </footer>
  );
}
