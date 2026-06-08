export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

      <h1 className="text-5xl font-bold mb-8">
        About Benkims Tech Limited
      </h1>

      <p className="text-lg leading-8 mb-8">
        Benkims Tech Limited is a Kenyan company providing professional
        electrical services, CCTV installation, landscaping, nursery plants,
        plumbing and construction solutions for residential, commercial and
        institutional clients.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mt-16">

        <div className="bg-white shadow-lg p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>

          <p>
            To provide reliable, innovative and affordable technical solutions
            while maintaining the highest standards of quality, safety and
            customer satisfaction.
          </p>
        </div>

        <div className="bg-white shadow-lg p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>

          <p>
            To become one of Kenya's most trusted providers of electrical,
            security, landscaping and construction services.
          </p>
        </div>

      </div>

      <div className="mt-20">

        <h2 className="text-4xl font-bold mb-8">
          Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Integrity",
            "Professionalism",
            "Quality",
            "Innovation",
            "Reliability",
            "Customer Focus",
          ].map((item) => (
            <div
              key={item}
              className="bg-blue-50 p-6 rounded-xl shadow"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </main>
  );
}