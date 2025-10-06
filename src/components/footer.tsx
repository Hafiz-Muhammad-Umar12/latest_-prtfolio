"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Cpu,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: <Github />, link: "https://github.com/Hafiz-Muhammad-Umar12" },
    { icon: <Linkedin />, link: "https://www.linkedin.com/in/muhammad-umar-u786/" },
    { icon: <Twitter />, link: "https://x.com/muhaammad_umar_" },
    { icon: <Instagram />, link: "https://instagram.com" },
    { icon: <Facebook />, link: "https://facebook.com" },
    { icon: <Youtube />, link: "https://youtube.com" },
    { icon: <Mail />, link: "mailto:umarshabbir.ai@gmail.com" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-gray-900 text-gray-300 pt-20 pb-10 border-t border-gray-800">
      {/* 🌌 Animated 3D Gradient Orbs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[200%] h-[200%] bg-[conic-gradient(at_top_right,_#10b981,_#2563eb,_#9333ea,_#ec4899,_#10b981)] opacity-25 blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 relative z-10">
        {/* 🧠 Brand Identity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <Cpu className="text-emerald-400 w-6 h-6 animate-pulse" />
            <h2 className="text-2xl font-extrabold text-white">
              Muhammad Umar
            </h2>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Crafting the future with{" "}
            <span className="text-emerald-400 font-semibold">
              Agentic AI
            </span>{" "}
            and scalable Next.js systems. Building intelligent digital
            ecosystems for the new web.
          </p>
        </motion.div>

        {/* ⚡ Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 🌍 Connect / Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 8 }}
                className="p-3 rounded-full bg-gray-800 hover:bg-emerald-600 
                  transition shadow-md hover:shadow-[0_0_20px_#10b981]"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 🧾 Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl"
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Get the latest insights on AI, Next.js, and innovation.
          </p>
          <form className="flex bg-gray-900/60 rounded-lg overflow-hidden border border-gray-700 focus-within:border-emerald-500 transition">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm bg-transparent text-white outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 
                transition text-white text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* ⚙️ Footer Base Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 text-center text-xs text-gray-500 tracking-wide"
      >
        © {new Date().getFullYear()} Muhammad Umar  Built with{" "}
        <span className="text-emerald-400">Next.js + Agentic AI</span>.
      </motion.div>
    </footer>
  );
}
