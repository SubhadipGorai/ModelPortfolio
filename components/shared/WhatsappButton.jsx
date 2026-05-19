"use client";

import Link from "next/link";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {

  const phoneNumber = "917679233576"

  const message =
    "Hello, I would like to collaborate regarding a fashion project.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsappURL}
      target="_blank"
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        w-14
        h-14
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        shadow-lg
        hover:scale-110
        transition
        duration-300
      "
    >

      <FaWhatsapp
        size={30}
        className="text-white"
      />

    </Link>
  );
}