import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

      <h1 className="text-4xl font-bold text-center mb-12">
        Our Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <ProjectCard
          title="Electrical Installation"
          image="/images/electrical1.jpg"
          href="/projects/electrical"
          category="Electrical"
          badgeColor="bg-blue-600"
        />

        <ProjectCard
          title="CCTV Installation"
          image="/images/cctv1.jpg"
          href="/projects/cctv"
          category="Security"
          badgeColor="bg-green-600"
        />

        <ProjectCard
          title="Plumbing Work"
          image="/images/plumbing1.jpg"
          href="/projects/plumbing"
          category="Plumbing"
          badgeColor="bg-cyan-600"
        />

        <ProjectCard
          title="Construction Project"
          image="/images/construction1.jpg"
          href="/projects/construction"
          category="Construction"
          badgeColor="bg-yellow-600"
        />

        <ProjectCard
          title="Landscaping Work"
          image="/images/landscape1.jpg"
          href="/projects/landscape"
          category="Landscaping"
          badgeColor="bg-green-700"
        />

        <ProjectCard
          title="Nursery Project"
          image="/images/nursery1.jpg"
          href="/projects/nursery"
          category="Nursery"
          badgeColor="bg-pink-600"
        />

        <ProjectCard
          title="Branding Project"
          image="/images/branding1.jpg"
          href="/projects/branding"
          category="Branding"
          badgeColor="bg-purple-600"
        />

        <ProjectCard
          title="Printing Project"
          image="/images/printing1.jpg"
          href="/projects/printing"
          category="Printing"
          badgeColor="bg-red-600"
        />

      </div>

    </main>
  );
}