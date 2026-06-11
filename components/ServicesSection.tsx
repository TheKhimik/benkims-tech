import { services } from "@/lib/servicesData";

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {services.map((service) => {
          const firstImage = service.images?.[0];

          return (
            <div key={service.title} className="rounded-xl overflow-hidden shadow-lg group">

              {/* show first image or fallback */}
              <div
                className={`h-56 ${firstImage ? "bg-cover bg-center" : "bg-gray-100"} group-hover:scale-105 transition`}
                style={firstImage ? { backgroundImage: `url(${firstImage})` } : undefined}
              />

              <div className="p-4">
                <h3 className="font-bold text-xl">{service.title}</h3>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}