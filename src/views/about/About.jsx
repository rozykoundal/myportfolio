"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiBootstrap,
} from "react-icons/si";

const skills = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React.js", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Bootstrap", icon: SiBootstrap },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function AboutContent() {
  return (
    <div className="w-full min-h-screen px-4 sm:px-6 md:px-10 py-16 bg-gradient-to-br from-black via-gray-900 to-pink-900 text-white pt-30">
      <div className="space-y-16">

        {/* ✅ Image + Intro */}
        <motion.section
          className="space-y-6 border-b border-gray-700 pb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <motion.div
              className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-xl ring-2 ring-pink-500/50"
              variants={sectionVariant}
            >
              <Image
                src="/myimg.jpeg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div className="flex-1 space-y-4 text-center md:text-left" variants={sectionVariant}>
              <h1 className="text-3xl sm:text-4xl font-bold text-pink-400">About Me</h1>
              <p className="text-base sm:text-lg text-gray-300">
                I'm a Frontend Developer skilled in <strong>React</strong> and{" "}
                <strong>Next.js</strong>, with backend proficiency gained through a full{" "}
                <strong>Frontend</strong> internship.
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                I build fully responsive UIs using Tailwind CSS and Bootstrap. I also work with APIs and focus on clean, scalable code.
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                Passionate about writing clean code, building scalable
                architectures, and delivering high-performance web solutions.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ✅ Experience Section */}
        <motion.section
          className="space-y-6 border-b border-gray-700 pb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-pink-400">Experience</h2>
          <div className="space-y-6">
            <motion.div variants={sectionVariant}>
              <h3 className="text-xl font-bold">Frontend Developer – Tricky WebSolutions</h3>
              <p className="text-sm text-gray-400">Feb - June 2025</p>
              <p className="text-gray-300 text-base">
                Worked on a full-fledged MLM Dashboard using React.js, Next.js, Tailwind CSS, and Bootstrap. Built modern, responsive UIs and integrated APIs using scalable architecture.
              </p>
            </motion.div>

            <motion.div variants={sectionVariant}>
              <h3 className="text-xl font-bold">Frontend Developer – Tricky WebSolutions</h3>
              <p className="text-sm text-gray-400">Feb - August 2025</p>
              <p className="text-gray-300 text-base">
                Focused on frontend development, responsive apps, and API integration. Enhanced JavaScript, Git, and team collaboration skills.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ✅ Education Section */}
        <motion.section
          className="space-y-6 border-b border-gray-700 pb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-pink-400">Education</h2>
          <div className="space-y-6">
            <motion.div variants={sectionVariant}>
              <h3 className="text-xl font-bold">Lovely Professional University</h3>
              <p className="text-sm text-gray-400">Master of Computer Applications – 2023 - 2025</p>
              <p className="text-gray-300 text-base">
                Focused on software development, databases, and system design. Built real-world projects applying advanced programming concepts.
              </p>
            </motion.div>

            <motion.div variants={sectionVariant}>
              <h3 className="text-xl font-bold">Panjab University</h3>
              <p className="text-sm text-gray-400">Bachelor of Science – 2020 - 2023 | Grade: A</p>
              <p className="text-gray-300 text-base">
                Studied computer science fundamentals, programming, web development, and networking.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ✅ Skills Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-pink-400 mb-6">Skills & Tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map(({ name, icon: Icon }, index) => (
              <motion.div
                key={index}
                className="px-4 py-6 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-center shadow-md hover:shadow-pink-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center mb-2 text-pink-400">
                  <Icon size={32} />
                </div>
                <p className="text-gray-200 text-sm font-medium">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
