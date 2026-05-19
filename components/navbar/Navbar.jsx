"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl md:text-3xl tracking-[0.2em] font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            TRISHA DAWN
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="uppercase text-sm tracking-[0.2em] hover:text-gray-300 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden z-[60]"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>

  {menuOpen && (

    <motion.div
      initial={{
        opacity: 0,
        y: "-100%",
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: "-100%",
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        fixed
        inset-0
        z-40
        bg-black/95
        backdrop-blur-2xl
        flex
        flex-col
        justify-center
        px-8
      "
    >

      <div className="space-y-8">

        {navLinks.map((link, index) => (

          <motion.div
            key={link.name}
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.1,
            }}
          >

            <Link
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
                block
                text-4xl
                uppercase
                tracking-[0.15em]
                border-b
                border-white/10
                pb-4
              "
              style={{
                fontFamily:
                  "var(--font-playfair)",
              }}
            >
              {link.name}
            </Link>

          </motion.div>

        ))}

      </div>

    </motion.div>

  )}

</AnimatePresence>
    </>
  );
}