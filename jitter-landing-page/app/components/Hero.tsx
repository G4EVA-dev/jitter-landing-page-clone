"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        delay: 0.3,
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen flex flex-col items-center justify-center bg-black text-white"
    >
      <motion.h1
        className="hero-title text-5xl font-bold"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Super Fast Motion For Every Team
      </motion.h1>
      <p className="hero-subtitle mt-4 text-lg opacity-80">
        Over 20,000 creative teams use Jitter to create stunning animations
        online.
      </p>
    </div>
  );
}
