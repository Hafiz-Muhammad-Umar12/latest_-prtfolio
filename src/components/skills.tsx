"use client";

import { motion } from "framer-motion";
import { Code, Database, Cpu, Wrench } from "lucide-react";

const skills = [
  {
    category: "Frontend Development",
    icon: <Code className="w-6 h-6 text-emerald-600" />,
    items: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    category: "Backend Development",
    icon: <Database className="w-6 h-6 text-emerald-600" />,
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    category: "AI & Advanced",
    icon: <Cpu className="w-6 h-6 text-emerald-600" />,
    items: [
      "OpenAI API",
      "Agentic AI",
      "Python",
      "Open AI Agents SDK",
      "LangChain",
      "Machine Learning",
    ],
  },
  {
    category: "Tools & Others",
    icon: <Wrench className="w-6 h-6 text-emerald-600" />,
    items: ["Git/GitHub", "Docker", "Figma", "Vercel", "CI/CD"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900"
        >
          My <span className="text-emerald-600">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200 
                         shadow-lg hover:shadow-emerald-500/20 transition-all duration-500 p-8"
            >
              {/* Icon with glow */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-emerald-50 relative">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 opacity-30 blur-lg animate-pulse"></div>
                  <div className="relative z-10">{skill.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {skill.category}
                </h3>
              </div>

              {/* Skill Chips */}
              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-50 to-green-50 
                               text-emerald-700 font-medium rounded-xl border border-emerald-200 
                               shadow-sm cursor-pointer hover:shadow-md hover:from-emerald-100 
                               hover:to-green-100 transition-all duration-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow Effects */}
      {/* <div className="absolute -top-20 left-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-green-300/10 rounded-full blur-3xl"></div> */}
    </section>
  );
}
