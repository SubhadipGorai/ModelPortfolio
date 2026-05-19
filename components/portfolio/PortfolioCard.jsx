"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PortfolioCard({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden mb-6"
    >
      <Link href={`/portfolio/${item.slug}`}>
        {/* Image Wrapper */}
        <div className="relative overflow-hidden">
          <Image
            src={item.coverImage}
            alt={item.title}
            width={1000}
            height={1400}
            className="
              w-full
              h-auto
              object-cover
              group-hover:scale-110
              transition
              duration-700
            "
          />
        </div>

        {/* Overlay */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            absolute
            inset-0
            bg-gradient-to-t from-black/90 via-black/20 to-transparent
            opacity-100
            md:opacity-0
            md:group-hover:opacity-100
            transition
            duration-500
            flex items-end p-4 md:p-6
          "
        >
          <div>
            <p
              className="
                uppercase
                tracking-[0.3em]
                text-xs
                text-gray-300
                mb-2
              "
            >
              {item.category}
            </p>

            <h3
              className="text-3xl"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              {item.title}
            </h3>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
