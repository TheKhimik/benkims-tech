import Link from "next/link";

type ProjectCardProps = {
  title: string;
  image: string;
  href: string;
  category: string;
  badgeColor?: string;
};

export default function ProjectCard({
  title,
  image,
  href,
  category,
  badgeColor = "bg-blue-600",
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <div className="rounded-xl overflow-hidden shadow-lg group relative cursor-pointer">

        {/* Image */}
        <div
          className="h-60 bg-cover bg-center group-hover:scale-105 transition duration-300"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <h3 className="text-white text-xl font-bold text-center px-4">
            {title}
          </h3>
        </div>

        {/* Badge */}
        <div className={`absolute top-3 left-3 text-white text-xs px-3 py-1 rounded-full ${badgeColor}`}>
          {category}
        </div>

      </div>
    </Link>
  );
}