export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center text-white overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/images/hero.jpg')] bg-cover bg-center" />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6">

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Benkims Tech Limited
        </h1>

        <p className="text-xl mt-6 max-w-2xl text-gray-100">
          Professional Electrical, CCTV, Landscaping, Nursery Plants, Plumbing, Construction, Branding and Printing Services.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/contact"
            className="bg-green-600 px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Get Quote
          </a>

          <a
            href="https://wa.me/254701033088"
            className="bg-white text-black px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            WhatsApp Us
          </a>
        </div>

      </div>

    </section>
  );
}