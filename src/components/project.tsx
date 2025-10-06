"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  demo: string;
  status: "Live" | "In Progress" | "Completed";
};

const projects: Project[] = [
  {
    title: "AI Agent Dashboard",
    description: "Autonomous AI agents with real-time project updates and analytics.",
    techStack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "OpenAI API"],
    github: "https://github.com/Hafiz-Muhammad-Umar12?tab",
    demo: "#",
    status: "In Progress",
  },
  {
    title: "Food web AI Integration",
    description: "Food ordering platform with AI-powered recommendations and dynamic assistant.",
    techStack: ["Next.js", "Tailwind", "TypeScript", "AI Agents"],
    github: "https://github.com/Hafiz-Muhammad-Umar12?tab",
    demo: "https://food-navy-six-49.vercel.app/",
    status: "Live",
  },
  {
    title: "HealthCare Agentic AI Platform",
    description: "AI agent assists in scheduling, diagnosis suggestions, and patient management.",
    techStack: ["Next.js", "React", "Tailwind", "AI Agents"],
    github: "https://github.com/Hafiz-Muhammad-Umar12?tab",
    demo: "https://neuronest-healthcare.vercel.app/",
    status: "Live",
  },
  {
    title: "Full E-Commerce Website",
    description: "Fully responsive e-commerce platform with payment gateway integration.",
    techStack: ["Next.js", "Stripe", "Prisma", "Tailwind", "TypeScript"],
    github: "https://github.com/Hafiz-Muhammad-Umar12?tab",
    demo: "https://adaayah-e-libaas.vercel.app/",
    status: "Completed",
  },
  {
    title: "Services Website",
    description: "Dynamic multi-page services website showcasing offerings and contact system.",
    techStack: ["Next.js", "Tailwind", "React"],
    github: "https://github.com/Hafiz-Muhammad-Umar12?tab",
    demo: "https://zumax-seven.vercel.app/",
    status: "Completed",
  },
  {
    title: "Blog Website",
    description: "Modern blog website with CMS integration and optimized SEO.",
    techStack: ["Next.js", "Markdown", "Tailwind", "TypeScript"],
    github: "https://github.com/Hafiz-Muhammad-Umar12?tab",
    demo: "https://blog-website-by-hafiz-muhammad-umar.vercel.app/",
    status: "Live",
  },
];

export default function ExpertProjectSection() {
  const [activeIndices, setActiveIndices] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndices((prev) =>
        prev.map((i) => (i + 1) % projects.length)
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const positions = ["top-center", "bottom-left", "bottom-right"];

  const getPositionClasses = (pos: string) => {
    switch (pos) {
      case "top-center":
        return "top-16 left-1/2 transform -translate-x-1/2";
      case "bottom-left":
        return "bottom-16 left-16";
      case "bottom-right":
        return "bottom-16 right-16";
      default:
        return "";
    }
  };

  return (
    <section id="projects" className="relative w-full h-screen  bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Section Heading */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-center z-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-2">
          Featured <span className="text-emerald-600 bg-clip-text ">Works</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          A showcase of my expert-level AI & Web Development projects
        </p>
      </div>

      {positions.map((pos, idx) => {
        const project = projects[activeIndices[idx]];
        return (
          <AnimatePresence key={idx}>
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className={`absolute w-80 h-80 p-6 mt-20 rounded-3xl shadow-2xl bg-white dark:bg-gray-800 flex flex-col justify-between ${getPositionClasses(
                pos
              )}`}
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span
                  className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Live"
                      ? "bg-green-500 text-white"
                      : project.status === "In Progress"
                      ? "bg-yellow-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </section>
  );
}
