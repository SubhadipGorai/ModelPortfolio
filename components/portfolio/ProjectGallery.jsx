"use client";

import { useState } from "react";

import Image from "next/image";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

export default function ProjectGallery({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  return (
    <section className="pb-20">
      <div className="container-custom">
        {/* Main Image */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{
                opacity: 0,
                scale: 1.05,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="relative"
            >
              <Image
                src={project.images[activeIndex]}
                alt={project.title}
                width={1600}
                height={2200}
                className="
                  w-full
                  h-auto
                  object-cover
                "
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="
               absolute
  left-3
  md:left-6
  top-1/2
  -translate-y-1/2
  w-10
  h-10
  md:w-12
  md:h-12
  rounded-full
  bg-black/40
  backdrop-blur-md
  flex
  items-center
  justify-center
  hover:bg-white
  hover:text-black
  transition
  z-10
            "
          >
            <FaArrowLeft />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="
              absolute
  right-3
  md:right-6
  top-1/2
  -translate-y-1/2
  w-10
  h-10
  md:w-12
  md:h-12
  rounded-full
  bg-black/40
  backdrop-blur-md
  flex
  items-center
  justify-center
  hover:bg-white
  hover:text-black
  transition
  z-10
            "
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Thumbnails */}
        <div
          className="
           flex
            gap-3
            md:gap-4
            mt-6
            md:mt-8
            overflow-x-auto
            pb-2
            snap-x
            snap-mandatory
            scrollbar-hide
          "
        >
          {project.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                relative
                min-w-[100px]
                overflow-hidden
                border
                transition
                ${
                  activeIndex === index
                    ? "border-white"
                    : "border-transparent opacity-50"
                }
              `}
            >
              <Image
                src={image}
                alt="Thumbnail"
                width={200}
                height={250}
                className="
                 w-[80px]
                  h-[100px]
                  md:w-[100px]
                  md:h-[130px]
                  object-cover
                "
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
