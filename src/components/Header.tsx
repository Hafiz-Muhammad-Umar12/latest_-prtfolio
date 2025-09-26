"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ borderRadius: "0px", height: "100vh" }}
      animate={{
        borderRadius: scrolled ? "30px" : "0px",
        height: scrolled ? "80px" : "100vh",
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.8)"
          : "rgba(255,255,255,0.15)",
        backdropFilter: "blur(20px)",
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 shadow-lg px-6 flex flex-col items-center justify-center"
    >
      {/* Hero Content (only when not scrolled) */}
      {!scrolled && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6">
            Welcome to <span className="text-emerald-600">My Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            I’m a Full-Stack Developer crafting modern web applications,
            AI-powered agents, and seamless digital experiences.
          </p>
        </motion.div>
      )}

      {/* Navbar (always visible but shrinks on scroll) */}
      <nav
        className={`flex items-center justify-center gap-6 transition-all ${
          scrolled ? "mt-0" : "mt-10"
        }`}
      >
        {navLinks.map((link,) => (
          <motion.div
            key={link.name}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href={link.href}
              className="text-gray-800 font-medium hover:text-emerald-600 transition"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
}
