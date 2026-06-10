const services = [
  {
    title: "Electrical Services",
    description:
      "Domestic wiring, commercial installations, maintenance, solar connections and fault diagnosis across residential and industrial projects.",
  },
  {
    title: "CCTV Installation",
    description:
      "Professional surveillance systems for homes, businesses and institutions with remote monitoring setup and maintenance.",
  },
  {
    title: "Landscaping",
    description:
      "Garden design, lawn establishment, irrigation systems and complete compound beautification for homes and businesses.",
  },
  {
    title: "Nursery Plants",
    description:
      "High-quality fruit seedlings, ornamental plants and indigenous trees for farming and landscaping projects.",
  },
  {
    title: "Plumbing",
    description:
      "Water systems installation, drainage solutions, leak repairs and full plumbing maintenance services.",
  },
  {
    title: "Construction",
    description:
      "Residential and commercial building projects, renovations, finishing works and site management services.",
  },
  {
    title: "Branding",
    description:
      "Business branding solutions including logos, corporate identity design, shop branding and visual marketing materials.",
  },
  {
    title: "Printing",
    description:
      "High-quality printing services including business cards, flyers, posters, banners, brochures and promotional materials.",
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

      <h1 className="text-5xl font-bold text-center mb-12">
        Our Professional Services
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        We provide reliable, affordable and high-quality technical and creative
        services across Ololulung'a and Narok, helping individuals and businesses grow.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {service.title}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}

      </div>
    </main>
  );
}