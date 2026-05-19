"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import collaboratorsData from "@/data/collaboratorsData";

export default function Collaborators() {
  return (
    <section className="section-spacing bg-[#0c0c0c] text-white">

      <div className="container-custom">

        {/* Header */}
        <div className="mb-16 text-center">

          <p
            className="
              uppercase
              tracking-[0.4em]
              text-xs
              text-gray-400
              mb-6
            "
          >
            Collaborations
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              leading-tight
              max-w-3xl
              mx-auto
            "
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            Creative Professionals
            I’ve Worked With
          </h2>

        </div>

        {/* Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >

          {collaboratorsData.map((item) => (

            <SwiperSlide key={item.id}>

              <div
                className="
                  p-8
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-md
                  hover:border-white/20
                  transition
                  text-center
                  h-full
                "
              >

                {/* Image */}
                <div
                  className="
                    relative
                    w-28
                    h-28
                    mx-auto
                    rounded-full
                    overflow-hidden
                    mb-6
                  "
                >

                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />

                </div>

                {/* Name */}
                <h3
                  className="
                    text-2xl
                    mb-2
                  "
                  style={{
                    fontFamily:
                      "var(--font-playfair)",
                  }}
                >
                  {item.name}
                </h3>

                {/* Role */}
                <p
                  className="
                    text-gray-400
                    mb-6
                  "
                >
                  {item.role}
                </p>

                {/* Contact */}
                <Link
                  href={`tel:${item.phone}`}
                  className="
                    inline-block
                    px-6
                    py-3
                    border
                    border-white/20
                    hover:bg-white
                    hover:text-black
                    transition
                    text-sm
                    tracking-[0.2em]
                    uppercase
                  "
                >
                  {item.phone}
                </Link>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}