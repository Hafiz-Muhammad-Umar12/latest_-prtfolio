"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [displayText, setDisplayText] = useState("");
  const greeting = "Bridging innovation and intelligence through collaboration ⚡";

  // Typewriter Effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(greeting.slice(0, index));
      index++;
      if (index > greeting.length) clearInterval(interval);
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("⏳ Sending your message...");
    setTimeout(() => {
      setStatus("✅ Message delivered! I’ll connect with you soon.");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 overflow-hidden px-6 py-24">
      {/* ===== Background Grid ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06),transparent_70%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ===== Header ===== */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold mb-4 text-center"
      >
        Let’s <span className="text-emerald-600">Collaborate</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-500 text-center max-w-2xl mb-14"
      >
        Whether it’s <span className="text-emerald-600 font-medium">AI systems</span>, intelligent automation, or modern web experiences 
        let’s connect ideas that move technology forward.
      </motion.p>

      {/* ===== Contact Container ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-5xl bg-white border border-gray-200 
        rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] overflow-hidden 
        grid md:grid-cols-2 gap-10 p-10"
      >
        {/* ===== LEFT SECTION ===== */}
        <div className="flex flex-col justify-center pr-0 md:pr-6">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold mb-4 text-gray-900"
          >
            Let’s Build <span className="text-emerald-600">Something Great</span>
          </motion.h2>

          <p className="text-gray-500 mb-6 leading-relaxed">
            I design and develop intelligent digital ecosystems — 
            merging <strong>Next.js</strong> architecture with <strong>Agentic AI</strong> 
            to deliver automation and scalability.
          </p>

          {/* Typewriter Animation */}
          <p className="text-emerald-600 font-mono text-sm h-6 mb-6">{displayText}</p>

          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl">
            <a
              href="mailto:umarshabbir.ai@gmail.com"
              className="hover:text-emerald-600 transition-transform hover:scale-110"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-umar-u786/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Hafiz-Muhammad-Umar12"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/muhaammad_umar_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 transition-transform hover:scale-110"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* ===== RIGHT SECTION (FORM) ===== */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-5"
        >
          {["name", "email", "message"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                {field === "email" ? "Email Address" : field}
              </label>
              {field === "message" ? (
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your idea or project..."
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 
                    text-gray-800 placeholder-gray-400 text-sm focus:ring-2 
                    focus:ring-emerald-600 focus:outline-none transition"
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={`Enter your ${field}`}
                  required
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 
                    text-gray-800 placeholder-gray-400 text-sm focus:ring-2 
                    focus:ring-emerald-600 focus:outline-none transition"
                />
              )}
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-emerald-600 py-3 rounded-xl font-semibold text-white 
              shadow-md hover:bg-emerald-700 transition-all duration-300"
          >
            Send Message
          </motion.button>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-blue-600 mt-3"
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
