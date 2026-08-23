import Image from "next/image";
import { getMergedServices, MergedService } from "@/lib/mergedServices";

export default async function ServicesSection() {
  const services = await getMergedServices();

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service: MergedService) => (
          <div key={service.title} className="rounded-xl overflow-hidden shadow-lg group">
            <div className="h-56 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Image
                src={service.image_url}
                alt={`${service.title} service`}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-bold text-xl">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}