"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description:
      "A full-stack platform with authentication, payments, and order tracking. Built for scalability with Next.js, Tailwind, and MongoDB.",
    image: "/img1.png",
    tech: ["Next.js", "Tailwind", "MongoDB", "Stripe"],
    live: "https://adaayah-e-libaas.vercel.app/",
    github: "https://adaayah-e-libaas.vercel.app/",
  },
  {
    id: "chatbot",
    title: "AI Chatbot",
    description:
      "A conversational AI powered by OpenAI, enabling real-time intelligent customer support with memory persistence.",
    image: "/conf.PNG",
    tech: ["Next.js", "OpenAI", "Node.js"],
    live: "https://food-navy-six-49.vercel.app/",
    github: "https://food-navy-six-49.vercel.app/",
  },
  {
    id: "honeybee",
    title: "Honey Bee ",
    description:
      "A creative and educational website spreading awareness about honey bees, their importance in our ecosystem, and interactive sections with modern UI/UX.",
    image: "/hony.png",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    live: "https://honey-bee-website-by-using-html-css-and-javascript.vercel.app",
    github: "https://food-navy-six-49.vercel.app/",
  },
];


export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gray-50 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-gray-900 font-extrabold text-center mb-16"
        >
          Featured <span className="text-emerald-600">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-2xl overflow-hidden 
                         bg-white/80 backdrop-blur-md 
                         border border-gray-200 
                         shadow-md hover:shadow-xl 
                         transition-all duration-500"
            >
              {/* Image Section */}
              <div className="h-56 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-emerald-100 text-emerald-700 rounded-full border border-emerald-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 bg-emerald-600 text-white rounded-xl font-medium shadow-md hover:bg-emerald-700 transition"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 bg-gray-800 text-white rounded-xl font-medium shadow-md hover:bg-gray-700 transition"
                  >
                    GitHub
                  </motion.a>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      href={`/projects/${project.id}`}
                      className="px-4 py-2  bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium shadow-md hover:opacity-90 transition"
                    >
                      Details
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow (Bottom Right Only) */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
    </section>
  );
}
