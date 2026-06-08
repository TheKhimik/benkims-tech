export default function GalleryPage() {
  const images = [
    "/images/electrical.jpg",
    "/images/cctv.jpg",
    "/images/plumbing.jpg",
    "/images/construction.jpg",
    "/images/landscape.jpg",
    "/images/nursery.jpg",
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

      <h1 className="text-4xl font-bold text-center mb-12">
        Our Gallery
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={img}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}

      </div>

    </main>
  );
}