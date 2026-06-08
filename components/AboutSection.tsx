export default function AboutSection() {
  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center">

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            About Benkims Tech
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Benkims Tech Limited is a professional service company specializing in
            electrical installations, CCTV systems, plumbing, landscaping, nursery
            plants, and construction services.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            We are committed to delivering reliable, high-quality workmanship
            for both residential and commercial clients across Kenya.
          </p>
        </div>

        {/* Image */}
        <div className="h-80 rounded-xl bg-[url('/images/construction.jpg')] bg-cover bg-center shadow-lg" />

      </div>

    </section>
  );
}