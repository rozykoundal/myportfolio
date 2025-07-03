"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "College Website",
    description: "Full-stack MERN College Portal with Dashboard.",
    image: "",
    link: "https://spn-production.up.railway.app",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Modern, responsive portfolio built with Next.js and Tailwind CSS, featuring GSAP animations and clean UI/UX.",
    image: "",
    link: "https://munish-portfolio-gamma.vercel.app",
  },
];

export default function ProjectsPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900 text-white pt-20 px-6 md:px-12 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-14 text-pink-400">
        My Projects
      </h1>

      <div className="relative space-y-12">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative border-b border-gray-700 pb-8"
          >
            <Link href={proj.link} target="_blank" className="block h-full">
              <div className="transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-300 mb-2">{proj.description}</p>
                <span className="text-pink-400 font-medium hover:underline">
                  🚀 View Project →
                </span>
              </div>
            </Link>

            {/* Hover Image */}
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-[100px] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-5 transition-all duration-300 z-10 pointer-events-none">
              <div className="w-72 h-44 rounded-xl overflow-hidden shadow-lg border border-pink-400/30">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={300}
                  height={180}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
