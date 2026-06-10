import { services } from "@/lib/servicesData";
import ImageLightbox from "@/components/ImageLightbox";

export default function GalleryPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold text-center mb-12">
        Our Project Gallery
      </h1>

      {services.map((service) => (
        <section key={service.title} className="mb-16">

          {/* Section Title */}
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-blue-600 pl-3">
            {service.title}
          </h2>

          {/* Premium Gallery Grid */}
          <ImageLightbox images={service.images} />

        </section>
      ))}

    </main>
  );
}