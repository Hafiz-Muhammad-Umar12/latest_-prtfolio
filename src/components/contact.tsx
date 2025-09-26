"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

// ✅ Validation Schema
const schema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short"),
});

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Message sent successfully 🚀");
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-white text-gray-900 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-40 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          Let’s <span className="text-emerald-600">Connect</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-emerald-600" />
                <a
                  href="mailto:your@email.com"
                  className="hover:text-emerald-600 transition font-medium"
                >
                  your@email.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-emerald-600" />
                <a
                  href="tel:+123456789"
                  className="hover:text-emerald-600 transition font-medium"
                >
                  +123 456 789
                </a>
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-emerald-600" />
                <span className="font-medium">Karachi, Pakistan</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-8 flex gap-6">
              <a
                href="#"
                className="p-3 rounded-full bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-600 transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-600 transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-100 hover:bg-emerald-100 text-gray-700 hover:text-emerald-600 transition"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <div className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name")}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  {...register("message")}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition"
              >
                <Send className="w-5 h-5" /> Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* Optional Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-gray-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28937.51258090054!2d67.0011!3d24.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e3aa3b38d2d%3A0x5e6f3ec9ff3a8e5!2sKarachi!5e0!3m2!1sen!2s!4v123456789"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
