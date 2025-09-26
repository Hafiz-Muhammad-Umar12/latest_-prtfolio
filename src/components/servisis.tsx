"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  Code,
  Database,
  Rocket,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    title: "Agentic AI & AI Agents",
    icon: <Bot className="w-8 h-8 text-emerald-600" />,
    description:
      "Designing next-gen AI agents with reasoning, memory, and autonomy using OpenAI Agents SDK, LangChain, and custom workflows.",
  },
  {
    title: "AI Automations",
    icon: <Workflow className="w-8 h-8 text-emerald-600" />,
    description:
      "Building intelligent automation pipelines to streamline tasks, integrate APIs, and supercharge productivity with AI-driven workflows.",
  },
  {
    title: "Full-Stack Web Applications",
    icon: <Code className="w-8 h-8 text-emerald-600" />,
    description:
      "Developing scalable and modern web applications using Next.js, React, Node.js, and databases with pixel-perfect UI/UX.",
  },
  {
    title: "Backend & APIs",
    icon: <Database className="w-8 h-8 text-emerald-600" />,
    description:
      "Engineering secure and optimized backend systems with REST APIs, authentication, and real-time capabilities.",
  },
  {
    title: "Deployment & Scaling",
    icon: <Rocket className="w-8 h-8 text-emerald-600" />,
    description:
      "Deploying production-ready apps with CI/CD pipelines, Docker, and cloud platforms like Vercel for seamless scaling.",
  },
  {
    title: "Chatbot Development",
    icon: <MessageSquare className="w-8 h-8 text-emerald-600" />,
    description:
      "Building AI-powered chatbots for websites and apps with natural conversations, context awareness, and real-time integrations.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-gray-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900"
        >
          My <span className="text-emerald-600">Services</span>
        </motion.h2>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-200 
                         shadow-md hover:shadow-xl transition-all duration-500 p-8"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 mb-6 group-hover:rotate-6 transition-transform duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{service.description}</p>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-emerald-500/50 transition duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute -top-20 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}
