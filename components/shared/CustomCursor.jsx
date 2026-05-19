"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseEnter = () => setIsHovering(true);
    const mouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", mouseMove);

    const hoverElements = document.querySelectorAll(
      "a, button"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter);
      el.addEventListener("mouseleave", mouseLeave);
    });

    return () => {

      window.removeEventListener("mousemove", mouseMove);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", mouseEnter);
        el.removeEventListener("mouseleave", mouseLeave);
      });

    };

  }, []);

  return (

    <motion.div
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: isHovering ? 2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      className="
        hidden
        md:block
        fixed
        top-0
        left-0
        w-6
        h-6
        rounded-full
        bg-white
        mix-blend-difference
        pointer-events-none
        z-[9999]
      "
    />

  );
}