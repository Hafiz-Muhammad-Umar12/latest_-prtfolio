'use client';

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { FaLinkedin, FaTwitter, FaComments } from "react-icons/fa";
import { SiUpwork, SiFiverr } from "react-icons/si";

const Hero = () => {
  const [, setInit] = useState(false);

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
      number: { value: 150, density: { enable: true, area: 800 } },
      color: { value: "#10b981" }, // emerald green
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: { min: 1, max: 4 } },
      links: {
        enable: true,
        distance: 180,
        color: "#10b981",
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none" as const,
        outModes: "out" as const,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        repulse: { distance: 180 },
        push: { quantity: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <section className="relative min-h-screen mt-32 flex items-center justify-center text-center overflow-hidden font-[Inter] mx-auto max-w-screen-2xl px-6">
      {/* Background Particles */}
      <Particles
        id="tsparticles"
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

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-600">
          👋 Hello, I am
        </h2>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          Hafiz{" "}
          <span className="text-emerald-600 relative inline-block">
            Muhammad Umar
            <span className="absolute left-0 -bottom-2 w-full h-1 rounded-md bg-gradient-to-r from-green-500 to-emerald-600"></span>
          </span>
        </h1>

        <h3 className="mt-2 text-3xl md:text-4xl font-bold text-gray-700">
          🚀 Expert{" "}
          <span className="text-emerald-600">Agentic AI Engineer</span>
        </h3>

        <p className="max-w-2xl mt-4 text-lg md:text-xl text-gray-600 leading-relaxed tracking-wide">
          I design and build intelligent, scalable systems that merge{" "}
          <span className="font-semibold text-gray-800">Full-stack development</span>{" "}
          with <span className="font-semibold text-emerald-600">cutting-edge AI</span>, 
          creating solutions that drive innovation and real world impact.
        </p>

        {/* Social Bar */}
        <div className="mt-8 flex gap-5 p-3 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
          {[
            { icon: <FaLinkedin />, link: "https://linkedin.com", color: "hover:text-[#0A66C2]" },
            { icon: <SiUpwork />, link: "https://upwork.com", color: "hover:text-green-600" },
            { icon: <SiFiverr />, link: "https://fiverr.com", color: "hover:text-[#1DBF73]" },
            { icon: <FaTwitter />, link: "https://twitter.com", color: "hover:text-[#1DA1F2]" },
            { icon: <FaComments />, link: "#chat", color: "hover:text-emerald-600" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-emerald-600/10 text-gray-700 text-xl transition transform hover:scale-110 ${item.color}`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
