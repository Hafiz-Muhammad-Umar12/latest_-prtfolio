"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-300 pt-16">
      {/* Animated Gradient Waves Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[200%] h-[200%] animate-[spin_30s_linear_infinite] bg-[conic-gradient(at_top_right,_#4f46e5,_#9333ea,_#ec4899,_#f97316,_#4f46e5)] opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center md:text-left relative z-10">
        {/* Branding */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-white mb-3">
            Muhammad Umar
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Building the future with{" "}
            <span className="text-indigo-400 font-semibold">Agentic AI</span>, 
            automations, and full-stack web solutions that transform businesses.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-indigo-400 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            {[
              { icon: <Github className="w-5 h-5" />, link: "https://github.com" },
              { icon: <Linkedin className="w-5 h-5" />, link: "https://linkedin.com" },
              { icon: <Twitter className="w-5 h-5" />, link: "https://twitter.com" },
              { icon: <Mail className="w-5 h-5" />, link: "mailto:youremail@gmail.com" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                whileHover={{ scale: 1.2, rotate: 6 }}
                className="p-3 rounded-full bg-gray-800 hover:bg-indigo-500 transition shadow-md"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe for latest updates on AI, Web & Automation.
          </p>
          <form className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm bg-transparent outline-none text-white"
            />
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 transition text-white text-sm font-medium">
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500 relative z-10">
        © {new Date().getFullYear()} Muhammad Umar. All rights reserved
      </div>
    </footer>
  );
}
