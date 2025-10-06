"use client";

import { motion } from "framer-motion";
import { FaReact, FaNode, FaRobot, FaCloud, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPython } from "react-icons/si";

const skills = [
  { id: 1, name: "Agentic AI Agents", tag: "Autonomous Intelligence", icon: <FaRobot />, color: "from-pink-500 to-red-600" },
  { id: 2, name: "React & Next.js", tag: "Frontend Innovation", icon: <FaReact />, color: "from-cyan-400 to-blue-600" },
  { id: 3, name: "Python & AI Tools", tag: "Machine Learning Core", icon: <SiPython />, color: "from-sky-500 to-cyan-600" },
  { id: 4, name: "LLMs & Chatbots", tag: "Conversational Systems", icon: <SiNextdotjs />, color: "from-gray-700 to-black" },
  { id: 5, name: "Node.js & APIs", tag: "Backend Logic", icon: <FaNode />, color: "from-green-400 to-emerald-600" },
  { id: 6, name: "Cloud & DevOps", tag: "Infrastructure Wizardry", icon: <FaCloud />, color: "from-purple-500 to-indigo-600" },
  { id: 7, name: "Databases (SQL)", tag: "Data Architecture", icon: <FaDatabase />, color: "from-orange-500 to-yellow-600" },
  { id: 8, name: "Tailwind CSS", tag: "Design System Craft", icon: <SiTailwindcss />, color: "from-teal-400 to-cyan-500" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="uppercase text-sm font-bold tracking-wider text-emerald-600">
            My Expertise
          </span>
          <h2 className="text-4xl lg:text-6xl font-extrabold mt-4 text-gray-900">
            Skills & <span className="text-emerald-600 bg-clip-text">Technologies</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            A showcase of tools and technologies I use to build scalable, intelligent, and modern solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center border border-gray-100 group overflow-hidden"
            >
              {/* Animated Icon */}
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className={`relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-r ${skill.color} text-white text-3xl mb-6 shadow-lg`}
              >
                {skill.icon}
                {/* Glowing aura */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} blur-2xl opacity-40`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Skill Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.name}</h3>

              {/* Unique Tagline */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm text-emerald-600 font-medium tracking-wide mt-2"
              >
                {skill.tag}
              </motion.span>

              {/* Hover Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 blur-2xl transition`} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Aesthetic Blobs */}
      <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-[28rem] h-[28rem] bg-blue-300 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
}
