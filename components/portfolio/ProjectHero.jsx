export default function ProjectHero({ project }) {
  return (
    <section className="pt-32 md:pt-40 pb-16 md:pb-20">
      <div className="container-custom">
        {/* Category */}
        <p
          className="
            uppercase
            tracking-[0.3em]
            text-xs
            text-gray-400
            mb-6
          "
        >
          {project.category}
        </p>

        {/* Title */}
        <h1
          className="
            text-4xl
sm:text-5xl
md:text-7xl
leading-[1]
          "
          style={{
            fontFamily: "var(--font-playfair)",
          }}
        >
          {project.title}
        </h1>

        {/* Description */}
        <p
          className="
            max-w-2xl
            text-gray-300
            leading-relaxed
          "
        >
          {project.description}
        </p>
      </div>
    </section>
  );
}
