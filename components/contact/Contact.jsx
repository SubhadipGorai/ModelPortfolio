"use client";

import { motion } from "framer-motion";

import { useState } from "react";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleWhatsApp = (e) => {

    e.preventDefault();

    const phoneNumber = "919999999999";

    const text = `
Hello, I would like to contact you.

Name: ${formData.name}

Email: ${formData.email}

Project Details:
${formData.message}
    `;

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        text
      )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section
      id="contact"
      className="section-spacing bg-[#0a0a0a] text-white"
    >

      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >

            <p
              className="
                uppercase
                tracking-[0.4em]
                text-xs
                text-gray-400
                mb-6
              "
            >
              Contact
            </p>

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
              Let’s Create
              Something
              Timeless
            </h2>

            <p
              className="
                text-gray-300
                leading-relaxed
                max-w-lg
              "
            >
              Available for editorial shoots,
              campaigns, commercial collaborations,
              fashion events, and creative projects.
            </p>

          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleWhatsApp}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleChange}
              className="
                w-full
                bg-transparent
                border-b
                border-white/20
                py-4
                outline-none
                placeholder:text-gray-500
                focus:border-white
                transition
              "
            />

            {/* Email */}
            <input
              type="text"
              name="Look"
              placeholder="what is the Look"
              required
              onChange={handleChange}
              className="
                w-full
                bg-transparent
                border-b
                border-white/20
                py-4
                outline-none
                placeholder:text-gray-500
                focus:border-white
                transition
              "
            />

            {/* Message */}
            <textarea
              rows="5"
              name="message"
              placeholder="Tell me about your project..."
              required
              onChange={handleChange}
              className="
                w-full
                bg-transparent
                border-b
                border-white/20
                py-4
                outline-none
                placeholder:text-gray-500
                focus:border-white
                transition
                resize-none
              "
            />

            {/* Button */}
            <button
              type="submit"
              className="
                px-8
                py-4
                border
                border-white
                uppercase
                tracking-[0.2em]
                text-sm
                hover:bg-white
                hover:text-black
                transition
                duration-300
              "
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}