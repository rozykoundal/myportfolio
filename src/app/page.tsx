"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "React Developer"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900 text-white relative overflow-hidden backdrop-blur-md">
        {/* ✅ Hero Section */}
        <div className="flex items-center justify-center pt-5 lg:pt-22 px-6 sm:px-12 max-w-7xl mx-auto min-h-screen">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-10">
            {/* ✅ Text Content */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Hello! I&apos;m a
                <br />
                <span className="text-pink-400">
                  {text}
                  <Cursor cursorColor="#EC4899" />
                </span>
              </h1>

              <p className="text-lg text-gray-300 max-w-xl mb-8 mx-auto lg:mx-0">
                Frontend Developer (6 months) present in tricky websolution
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-pink-700 transition duration-300 hover:scale-105"
                >
                  🚀 Hire Me
                </Link>
                <Link
                  href="/Rozy-cv.pdf"
                  download
                  className="border-2 border-pink-400 text-pink-400 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 hover:text-black transition duration-300 hover:scale-105"
                >
                  📄 Download Resume
                </Link>
              </div>
            </motion.div>

            {/* ✅ Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/myimg1.jpeg" // <-- Add your image path here
                alt="Profile Image"
                width={300}
                height={300}
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
