import portfolioData from "@/data/portfolioData";

import ProjectHero from "@/components/portfolio/ProjectHero";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import PageTransition from "@/components/shared/PageTransition";

export default async function ProjectPage({ params }) {

  const { slug } = await params;

  const project = portfolioData.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <div className="h-screen bg-black text-white flex items-center justify-center">
        Project not found
      </div>
    );
  }

  return (
    <PageTransition>

    <main className="bg-black text-white min-h-screen">

      <ProjectHero project={project} />

      <ProjectGallery project={project} />

    </main>

    </PageTransition>
  );
}