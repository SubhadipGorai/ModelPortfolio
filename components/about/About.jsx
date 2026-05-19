"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  {
    number: "04+",
    label: "Years Experience",
  },
  {
    number: "20+",
    label: "Fashion Projects",
  },
  {
    number: "10+",
    label: "Collaborations",
  },
];

export default function About() {
  return (
    <section id="about" className="section-spacing bg-black text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="relative"
          >
            <div className="overflow-hidden">
              <img
                src="/images/sabeki/rima/1.webp"
                alt="Fashion Model"
                className="
                  w-full
                  h-[650px]
                  object-cover
                  hover:scale-105
                  transition
                  duration-700
                "
              />
            </div>

            {/* Floating Box */}
            <div
              className="
                absolute
                bottom-8
                right-8
                bg-white
                text-black
                px-6
                py-5
                backdrop-blur-xl
              "
            >
              <p className="text-3xl font-semibold">FAIR ROUND FACE</p>
              <p className="text-sm uppercase tracking-[0.2em]">
                Height 5.5 Slim
              </p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            {/* Section Label */}
            <p
              className="
                uppercase
                tracking-[0.4em]
                text-xs
                text-gray-400
                mb-6
              "
            >
              About Model
            </p>

            {/* Heading */}
            <h2
              className="
                text-4xl
                md:text-6xl
                leading-tight
                mb-8
              "
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              Defining Fashion Through Timeless Visual Expression
            </h2>

            {/* Description */}
            <p
              className="
                text-gray-300
                leading-relaxed
                mb-6
              "
            >
              Versatile Bengali and western fashion model with a strong camera
              presence, expressive styling sense, and confidence in both
              traditional and contemporary looks. Passionate about editorial,
              commercial, lifestyle, and brand shoots, with the ability to adapt
              to diverse creative concepts while maintaining professionalism and
              elegance. Open to collaborations, fashion campaigns, runway
              assignments, and creative projects that value originality, style,
              and impactful visual storytelling.
            </p>


            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-8">
              {stats.map((item, index) => (
                <div key={index}>
                  <h3
                    className="
                      text-4xl
                      md:text-5xl
                      mb-2
                    "
                    style={{
                      fontFamily: "var(--font-playfair)",
                    }}
                  >
                    {item.number}
                  </h3>

                  <p
                    className="
                      uppercase
                      tracking-[0.2em]
                      text-xs
                      text-gray-400
                    "
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
