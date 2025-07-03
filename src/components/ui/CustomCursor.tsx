"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        "a, button, input, textarea, select, label"
      );
      if (isInteractive && cursorRef.current) {
        cursorRef.current.classList.add("scale-150", "opacity-60");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        "a, button, input, textarea, select, label"
      );
      if (isInteractive && cursorRef.current) {
        cursorRef.current.classList.remove("scale-150", "opacity-60");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-6 h-6 rounded-full bg-indigo-500 opacity-30 pointer-events-none z-[9999] transition-transform duration-150 ease-out transform -translate-x-1/2 -translate-y-1/2"
    />
  );
}
