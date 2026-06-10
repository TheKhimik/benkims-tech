import { services } from "@/lib/servicesData";

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {services.map((service) => (
          <div key={service.title} className="rounded-xl overflow-hidden shadow-lg group">

            {/* show first image */}
            <div
              className="h-56 bg-cover bg-center group-hover:scale-105 transition"
              style={{ backgroundImage: `url(${service.images[0]})` }}
            />

            <div className="p-4">
              <h3 className="font-bold text-xl">{service.title}</h3>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}