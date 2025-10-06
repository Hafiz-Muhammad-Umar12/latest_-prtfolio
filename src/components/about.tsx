"use client";

import { motion } from "framer-motion";
import { FaBrain, FaCode, FaRocket, FaNetworkWired } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaBrain size={28} />,
    title: "AI-First Approach",
    desc: "We integrate intelligence into every layer of the stack — from frontend to backend automation.",
  },
  {
    id: 2,
    icon: <FaCode size={28} />,
    title: "Fullstack Mastery",
    desc: "Hands-on with React, Next.js, Node.js, and scalable cloud-native microservices.",
  },
  {
    id: 3,
    icon: <FaRocket size={28} />,
    title: "Future-Ready Skills",
    desc: "From automation workflows to AI-driven pipelines, get prepared for the $100T AI revolution.",
  },
  {
    id: 4,
    icon: <FaNetworkWired size={28} />,
    title: "Connected Ecosystem",
    desc: "Join a global network of engineers shaping tomorrow’s intelligent platforms.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-5xl lg:text-6xl font-extrabold tracking-tight"
        >
          About <span className="bg-gradient-to-r text-emerald-600 bg-clip-text ">
            Agentic AI Fullstack & Automation
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          We are reimagining software engineering by blending modern frontend, 
          intelligent backends, and automation-first workflows. 
          Our mission is to equip developers with the mindset and skills to architect 
          scalable, production-ready AI platforms.
        </motion.p>

        {/* Features Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/10 group overflow-hidden"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-white mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition">
                {f.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {f.desc}
              </p>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}
