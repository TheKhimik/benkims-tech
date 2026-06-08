import { notFound } from "next/navigation";

type ProjectParams = {
  slug: string;
};

const projects: Record<string, any> = {
  electrical: {
    title: "Electrical Installation",
    image: "/images/electrical.jpg",
    description: "We provide safe and professional electrical installation services.",
  },

  cctv: {
    title: "CCTV Installation",
    image: "/images/cctv.jpg",
    description: "Professional CCTV installation for homes and businesses.",
  },

  plumbing: {
    title: "Plumbing Services",
    image: "/images/plumbing.jpg",
    description: "Reliable plumbing installation and repair services.",
  },

  construction: {
    title: "Construction Projects",
    image: "/images/construction.jpg",
    description: "High-quality building and construction services.",
  },

  landscape: {
    title: "Landscaping Services",
    image: "/images/landscape.jpg",
    description: "Creative landscaping and outdoor design solutions.",
  },

  nursery: {
    title: "Nursery Plants",
    image: "/images/nursery.jpg",
    description: "Quality nursery plants for gardens and farms.",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<ProjectParams>;
}) {
  const { slug } = await params;

  const project = projects[slug];

  if (!project) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16">

      <h1 className="text-4xl font-bold mb-6">
        {project.title}
      </h1>

      <div
        className="h-96 bg-cover bg-center rounded-xl mb-6"
        style={{ backgroundImage: `url(${project.image})` }}
      />

      <p className="text-lg text-gray-700 mb-8">
        {project.description}
      </p>

      <a
        href="https://wa.me/254701033088"
        className="bg-green-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold inline-block"
      >
        Request This Service on WhatsApp
      </a>

    </main>
  );
}