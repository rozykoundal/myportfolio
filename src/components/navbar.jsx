"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center bg-black bg-opacity-90 backdrop-blur-md z-50 shadow-[0_4px_20px_rgba(255,255,255,0.5)]">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-pink-400 tracking-tight">
        <Link href="/">Rozy Koundal</Link>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden sm:flex space-x-12 font-medium">
        <Link
          href="/about"
          className="text-pink-300 hover:text-pink-500 transition"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-pink-300 hover:text-pink-500 transition"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="text-pink-300 hover:text-pink-500 transition"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="text-pink-300 hover:text-pink-500 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed sm:hidden top-16 right-4 w-[85vw] max-w-sm h-[35vh] bg-gradient-to-b from-black via-blue-900 to-pink-700 bg-opacity-90 backdrop-blur-xl border border-pink-400 rounded-xl shadow-2xl p-6 flex flex-col justify-center items-center space-y-6 transition-all duration-300 ease-in-out z-40 ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <Link
          href="/about"
          onClick={() => setIsOpen(false)}
          className="text-lg font-medium text-pink-300 hover:text-pink-500 transition"
        >
          About
        </Link>
        <Link
          href="/projects"
          onClick={() => setIsOpen(false)}
          className="text-lg font-medium text-pink-300 hover:text-pink-500 transition"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          onClick={() => setIsOpen(false)}
          className="text-lg font-medium text-pink-300 hover:text-pink-500 transition"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
