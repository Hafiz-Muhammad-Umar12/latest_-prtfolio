"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaServer, FaReact, FaTrophy } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Agentic AI",
    description:
      "Build and deploy autonomous AI agents with LLMs, automation pipelines, and real-time decision-making.",
    icon: <FaRobot size={28} />,
    btn: "Build AI Agent",
    color: "from-purple-500 to-indigo-500",
    pulseColor: "bg-purple-500/40",
  },
  {
    id: 2,
    title: "Fullstack Mastery",
    description:
      "Design robust backend & frontend systems with modern frameworks, scalable APIs, and cloud integration.",
    icon: <FaServer size={28} />,
    btn: "Explore Fullstack",
    color: "from-green-500 to-emerald-500",
    pulseColor: "bg-green-500/40",
  },
  {
    id: 3,
    title: "Frontend Excellence",
    description:
      "Craft stunning experiences using React, Next.js, Tailwind CSS, and cutting-edge UI systems.",
    icon: <FaReact size={28} />,
    btn: "Start Frontend",
    color: "from-blue-500 to-cyan-500",
    pulseColor: "bg-blue-500/40",
  },
  {
    id: 4,
    title: "Achievements",
    description:
      "Earn recognition, certificates, and rewards across AI & development projects.",
    icon: <FaTrophy size={28} />,
    btn: "View Achievements",
    color: "from-yellow-400 to-orange-400",
    pulseColor: "bg-yellow-500/40",
  },
];

export default function Skill_section_2() {
  const [activeStep, setActiveStep] = useState(steps[0]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const currentIndex = steps.findIndex((s) => s.id === prev.id);
        return steps[(currentIndex + 1) % steps.length];
      });
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      id="services"
      className="relative py-28 bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Future Ready <span className="text-emerald-600">Pathway</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Agentic AI Fullstack mastery and Frontend excellence all
            converging into your next big evolution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left side circular animation */}
          <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative w-80 h-80 rounded-full border-2 border-dashed border-gray-700 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative bg-gradient-to-br ${activeStep.color} shadow-2xl rounded-3xl p-8 text-center w-48 h-48 flex flex-col items-center justify-center text-white`}
                >
                  {/* Pulse ring effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl ${activeStep.pulseColor}`}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  />
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="text-4xl mb-2 drop-shadow-xl relative z-10"
                  >
                    {activeStep.icon}
                  </motion.div>
                  <span className="font-bold text-lg relative z-10">
                    {activeStep.title}
                  </span>
                </motion.div>
              </AnimatePresence>

              {steps.map((step, i) => {
                const angle = (i / steps.length) * 2 * Math.PI;
                const x = 140 * Math.cos(angle);
                const y = 140 * Math.sin(angle);
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step)}
                    className={`absolute flex items-center justify-center w-16 h-16 rounded-full shadow-xl transition-all duration-300 ${
                      activeStep.id === step.id
                        ? `bg-gradient-to-br ${step.color} text-white scale-110 shadow-lg`
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.4, rotate: 15 }}
                      className="flex items-center justify-center w-full h-full"
                    >
                      {step.icon}
                    </motion.div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side Details */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -40, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="bg-gray-900 shadow-2xl rounded-3xl p-10 border border-gray-800 relative hover:scale-[1.02] transition-transform duration-500"
              >
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Signal {activeStep.id}: Active Node
                </span>
                <h3 className="text-3xl font-bold text-white mt-3 mb-4">
                  {activeStep.title}
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  {activeStep.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  className={`px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r ${activeStep.color} shadow-lg hover:shadow-xl`}
                >
                  {activeStep.btn}
                </motion.button>

                {/* Glow aura effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-400/10 rounded-3xl blur-3xl -z-10"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
