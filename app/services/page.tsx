import Image from "next/image";
import { getMergedServices, MergedService } from "@/lib/mergedServices";

export default async function ServicesPage() {
  const mergedServices = await getMergedServices();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">Our Professional Services</h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        We provide reliable, affordable and high-quality technical and creative services across Ololulung'a and Narok, helping individuals and businesses grow.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mergedServices.map((service: MergedService, index) => {
          const isFirstRow = index < 3;

          return (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100 overflow-hidden"
            >
              <div className="h-56 relative">
                <Image
                  src={service.image_url}
                  alt={`${service.title} service`}
                  fill
                  priority={isFirstRow}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h2>

                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}