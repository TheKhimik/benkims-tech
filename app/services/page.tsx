const services = [
  {
    title: "Electrical Services",
    description:
      "Domestic wiring, commercial installations, maintenance and fault diagnosis.",
  },
  {
    title: "CCTV Installation",
    description:
      "Professional surveillance systems for homes, businesses and institutions.",
  },
  {
    title: "Landscaping",
    description:
      "Garden design, lawn establishment and compound beautification.",
  },
  {
    title: "Nursery Plants",
    description:
      "Fruit seedlings, ornamental plants and indigenous trees.",
  },
  {
    title: "Plumbing",
    description:
      "Water systems, drainage, repairs and maintenance.",
  },
  {
    title: "Construction",
    description:
      "Building projects, renovations and finishing works.",
  },
];

export default function ServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

      <h1 className="text-5xl font-bold text-center mb-12">
        Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold mb-4">
              {service.title}
            </h2>

            <p>{service.description}</p>
          </div>
        ))}

      </div>

    </main>
  );
}