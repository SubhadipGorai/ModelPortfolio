"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);

  }, []);

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="
            fixed
            inset-0
            z-[999]
            bg-black
            flex
            items-center
            justify-center
          "
        >

          {/* Loader Content */}
          <div className="text-center overflow-hidden">

            {/* Brand Name */}
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              className="
                text-5xl
                md:text-7xl
                tracking-[0.3em]
                text-white
              "
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              TRISHA
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 1,
              }}
              className="
                mt-6
                uppercase
                tracking-[0.4em]
                text-xs
                text-gray-400
              "
            >
              Professional Model
            </motion.p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}