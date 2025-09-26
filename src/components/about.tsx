"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const About = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesOptions = {
    background: { color: { value: "#ffffff" } },
    particles: {
      number: { value: 120, density: { enable: true, area: 800 } },
      color: { value: "#10b981" },
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: { min: 1, max: 4 } },
      links: {
        enable: true,
        distance: 150,
        color: "#10b981",
        opacity: 0.3,
        width: 1,
      },
      move: { enable: true, speed: 1.2, outModes: "out" as const },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 150 },
        push: { quantity: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <section
      id="about"
      className="relative py-24 min-h-screen flex items-center font-[Inter] overflow-hidden"
    >
      {/* Background Particles */}
      <Particles
        id="tsparticles-about"
        options={particlesOptions}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left - Code Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-emerald-500/20 bg-white/70 backdrop-blur-lg shadow-lg shadow-emerald-500/20 overflow-hidden"
        >
          {/* Code Editor Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-emerald-500/20">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <span className="text-xs text-gray-500">about.tsx</span>
          </div>

          {/* Typing Code Block */}
          <div className="p-6 font-mono text-sm text-gray-800">
            <pre className="leading-relaxed">
              <code>
                <Typewriter
                  words={[
                    `const profile = {
  name: "Hafiz Muhammad Umar",
  role: ["Agentic AI Engineer", "Full-Stack Developer"],
  experience: "2+ years",
  mission: "Building scalable & intelligent systems",
};`,
                  ]}
                  loop={false}
                  typeSpeed={40}
                  deleteSpeed={0}
                  delaySpeed={4000}
                />
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Right - About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 p-8 bg-white/80 backdrop-blur-lg border border-emerald-500/20 rounded-2xl shadow-lg shadow-emerald-500/20"
        >
          <h2 className="text-5xl font-extrabold text-gray-900">
            About{" "}
            <span className="text-emerald-600 relative inline-block">
              Me
              <span className="absolute left-0 -bottom-1 w-full h-1 rounded-md bg-gradient-to-r from-green-500 to-emerald-600"></span>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed tracking-wide">
            Hi, I’m{" "}
            <span className="font-semibold text-gray-900">
              Hafiz Muhammad Umar
            </span>
            , an{" "}
            <span className="text-emerald-600 font-semibold">
              Agentic AI Engineer
            </span>{" "}
            who blends{" "}
            <span className="text-gray-900 font-medium">
              full-stack engineering
            </span>{" "}
            with{" "}
            <span className="text-emerald-600 font-medium">
              intelligent AI-driven systems
            </span>
            . My passion is to craft{" "}
            <span className="italic">scalable, high-performance</span>{" "}
            applications that deliver real-world impact and{" "}
            <span className="font-medium text-gray-900">
              exceptional user experiences
            </span>
            .
          </p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-emerald-600 text-white font-semibold text-lg rounded-xl shadow-md hover:bg-emerald-500 transition"
          >
            🚀 Explore My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
