"use client";

import portfolioData from "@/data/portfolioData";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="section-spacing bg-black text-white"
    >

      <div className="container-custom">

        {/* Header */}
        <div className="mb-20">

          <p
            className="
              uppercase
              tracking-[0.4em]
              text-xs
              text-gray-400
              mb-6
            "
          >
            Portfolio
          </p>

          <h2
            className="
              text-4xl
              md:text-6xl
              max-w-3xl
              leading-tight
            "
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            Selected Fashion &
            Editorial Projects
          </h2>

        </div>

        {/* Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

          {portfolioData.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}