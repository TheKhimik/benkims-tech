import { notFound } from "next/navigation";

type ProjectParams = {
  slug: string;
};

const projects: Record<string, any> = {
  electrical: {
    title: "Electrical Installation",
    images: [
      "/images/electrical1.jpg",
      "/images/electrical2.jpg",
    ],
    description:
      "We provide safe and professional electrical installation services.",
  },

  cctv: {
    title: "CCTV Installation",
    images: [
      "/images/cctv1.jpg",
      "/images/cctv2.jpg",
    ],
    description:
      "Professional CCTV installation for homes and businesses.",
  },

  plumbing: {
    title: "Plumbing Services",
    images: [
      "/images/plumbing1.jpg",
      "/images/plumbing2.jpg",
    ],
    description:
      "Reliable plumbing installation and repair services.",
  },

  construction: {
    title: "Construction Projects",
    images: [
      "/images/construction1.jpg",
      "/images/construction2.jpg",
    ],
    description:
      "High-quality building and construction services.",
  },

  landscape: {
    title: "Landscaping Services",
    images: [
      "/images/landscape1.jpg",
      "/images/landscape2.jpg",
    ],
    description:
      "Creative landscaping and outdoor design solutions.",
  },

  nursery: {
    title: "Nursery Plants",
    images: [
      "/images/nursery1.jpg",
      "/images/nursery2.jpg",
    ],
    description:
      "Quality nursery plants for gardens and farms.",
  },

  branding: {
    title: "Branding Services",
    images: [
      "/images/branding1.jpg",
      "/images/branding2.jpg",
    ],
    description:
      "High-quality branding solutions including banners, stickers, vehicle branding, shop signage and promotional materials.",
  },

  printing: {
    title: "Printing Services",
    images: [
      "/images/printing1.jpg",
      "/images/printing2.jpg",
    ],
    description:
      "Professional printing services including business cards, brochures, flyers, posters and branded materials.",
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

      <p className="text-lg text-gray-700 mb-8">
        {project.description}
      </p>

      {/* Project Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {project.images.map((image: string, index: number) => (
          <div
            key={index}
            className="h-72 rounded-xl bg-cover bg-center shadow-lg hover:scale-105 transition"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      <a
        href="https://wa.me/254701033088"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-block"
      >
        Request This Service on WhatsApp
      </a>

    </main>
  );
}