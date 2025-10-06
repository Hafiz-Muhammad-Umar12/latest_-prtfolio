"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";

type Cert = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  logo: string;
  image: string; // image preview ke liye new field
  pdfLink: string;
};

const CERTS: Cert[] = [
  {
    id: 1,
    title: "Introduction to AI in the Data Center",
    issuer: "NVIDIA",
    date: "2025",
    logo: "/data center ai.webp",
    image: "/data center ai.webp",
    pdfLink: "/certificates/intro-ai-nvidia.pdf",
  },
  {
    id: 2,
    title: "Fundamentals of Deep Learning for Computer",
    issuer: "NVIDIA",
    date: "2025",
    logo: "/deeplearning.jpg",
    image: "/deeplearning.jpg",
    pdfLink: "/certificates/deep-learning-vision.pdf",
  },
  {
    id: 3,
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan",
    date: "2025",
    logo: "/python.webp",
    image: "/python.webp",
    pdfLink: "/certificates/using-python-access-web-data.pdf",
  },
  {
    id: 4,
    title: "Model Context Protocol – Advanced Topics",
    issuer: "Anthropic",
    date: "2025",
    logo: "/CompleateMCP.PNG",
    image: "/CompleateMCP.PNG",
    pdfLink: "/certificates/anthropic-model-context.pdf",
  },
  {
    id: 5,
    title: "HackFest 3.0 – Certificate of Participation",
    issuer: "Remotebase",
    date: "2025",
    logo: "/remote.PNG",
    image: "/remote.PNG",
    pdfLink: "/certificates/hackfest-3.pdf",
  },
  {
    id: 6,
    title: "Nasa Space Apps Challenge – Certificate of Participation",
    issuer: "Remotebase",
    date: "2025",
    logo: "/nasa.PNG",
    image: "/nasa.PNG",
    pdfLink: "/certificates/hackfest-3.pdf",
  },
];

export default function CertificationPage() {
  const [preview, setPreview] = useState<Cert | null>(null);

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3">
            Certifications
          </h1>
          <p className="text-gray-600 text-lg">
            Verified achievements from industry leaders & global universities.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {CERTS.map((c, i) => (
              <motion.article
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <Image
                    src={c.logo}
                    alt={c.issuer}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                    <p className="text-sm text-gray-500">
                      {c.issuer} • {c.date}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setPreview(c)}
                    className="px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700"
                  >
                    Preview
                  </button>
                  <a
                    href={c.pdfLink}
                    download
                    className="px-3 py-2 rounded-md border border-gray-200 text-sm hover:bg-gray-50"
                  >
                    <FaDownload />
                  </a>

                  {/* Common Verify Link */}
                  <a
                    href="https://www.linkedin.com/in/muhammad-umar-u786/details/certifications"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex items-center gap-1 text-sm text-emerald-600 hover:underline"
                  >
                    Verify <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Preview modal */}
        <AnimatePresence>
          {preview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
            >
              <motion.div
                initial={{ y: 30, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 10, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Image src={preview.logo} alt={preview.issuer} width={28} height={28} />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{preview.title}</h4>
                      <p className="text-sm text-gray-500">{preview.issuer} • {preview.date}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setPreview(null)}
                    className="p-2 rounded-md hover:bg-gray-100"
                  >
                    <FaTimes />
                  </button>
                </div>
                {/* Just Image Preview */}
                <div className="w-full h-[80vh] bg-gray-50 relative">
                  <Image
                    src={preview.image}
                    alt={preview.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
