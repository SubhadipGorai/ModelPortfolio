import Link from "next/link";

import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">

      <div className="container-custom py-10">

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
          "
        >

          {/* Logo */}
          <div>

            <h2
              className="text-3xl tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              TRISHA DAWN
            </h2>

            <p className="text-gray-500 mt-3 text-center text-sm">
              Modern Fashion Model
            </p>

          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            {/* Email */}
            <Link
              href="mailto:trishadawn.official@gmail.com"
              className="
                w-12
                h-12
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-black
                transition
                duration-300
              "
            >
              <MdEmail size={20} />
            </Link>

            {/* Phone */}
            <Link
              href="tel:+915555555555"
              className="
                w-12
                h-12
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-black
                transition
                duration-300
              "
            >
              <FaPhoneAlt size={16} />
            </Link>

            {/* Instagram */}
            <Link
              href="https://instagram.com/_myself._trisha_"
              target="_blank"
              className="
                w-12
                h-12
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-black
                transition
                duration-300
              "
            >
              <FaInstagram size={18} />
            </Link>

            {/* Facebook */}
            <Link
              href="https://facebook.com/tr.sa.938436"
              target="_blank"
              className="
                w-12
                h-12
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:bg-white
                hover:text-black
                transition
                duration-300
              "
            >
              <FaFacebookF size={18} />
            </Link>

          </div>

        </div>

        {/* Bottom */}
        <div
          className="
            border-t
            border-white/10
            mt-10
            pt-6
            text-center
          "
        >
          <p className="text-sm text-gray-500">
            © 2026 Trisha Dawn. All rights reserved.
          </p>
        </div>

      </div>

    </footer>
  );
}
