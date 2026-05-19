"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero.jpg"
          alt="Fashion Hero"
          fill
          priority
          className="
      object-cover
      object-left
      md:object-center
      scale-105
    "
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-4xl pt-24 md:pt-0">
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="uppercase tracking-[0.5em] text-xs md:text-sm mb-6 ml-2 text-gray-300"
            >
              Bengali • Western
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                  text-[52px]
                  leading-[0.95]
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[120px]
                  font-semibold
                "
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Professional
              <br />
              Fashion
              <br />
              Model
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="
                mt-8
                ml-2
                max-w-xl
                text-gray-300
                text-sm
                md:text-base
                leading-relaxed
              "
            >
              Versatile Bengali and western model with a strong sense of style, grace, and camera presence.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="
  mt-10
  flex
  flex-col
  sm:flex-row
  gap-4
  w-full
  sm:w-auto
"
            >
              {/* Primary Button */}
              <a
                href="#portfolio"
                className="
                    px-8
                    py-4
                    bg-white
                    text-black
                    uppercase
                    tracking-[0.2em]
                    text-sm
                    hover:bg-gray-200
                    transition
                    w-full
                    sm:w-auto
                    text-center
                  "
              >
                View Portfolio
              </a>

              {/* Secondary Button */}
              <a
                href="#contact"
                className="
                    px-8
                    py-4
                    border
                    border-white/30
                    backdrop-blur-md
                    uppercase
                    tracking-[0.2em]
                    text-sm
                    hover:bg-white
                    hover:text-black
                    transition
                    w-full
                    sm:w-auto
                    text-center
                  "
              >
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-3
        "
      >
        <div className="w-[1px] h-16 bg-white/40" />

        <p className="uppercase tracking-[0.3em] text-[10px] text-gray-400">
          Scroll
        </p>
      </motion.div>
    </section>
  );
}
