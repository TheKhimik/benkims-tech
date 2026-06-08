export default function ServicesSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* Electrical */}
        <div className="rounded-xl overflow-hidden shadow-lg group">
          <div className="h-56 bg-[url('/images/electrical.jpg')] bg-cover bg-center group-hover:scale-105 transition" />
          <div className="p-4">
            <h3 className="font-bold text-xl">Electrical Services</h3>
          </div>
        </div>

        {/* CCTV */}
        <div className="rounded-xl overflow-hidden shadow-lg group">
          <div className="h-56 bg-[url('/images/cctv.jpg')] bg-cover bg-center group-hover:scale-105 transition" />
          <div className="p-4">
            <h3 className="font-bold text-xl">CCTV Installation</h3>
          </div>
        </div>

        {/* Plumbing */}
        <div className="rounded-xl overflow-hidden shadow-lg group">
          <div className="h-56 bg-[url('/images/plumbing.jpg')] bg-cover bg-center group-hover:scale-105 transition" />
          <div className="p-4">
            <h3 className="font-bold text-xl">Plumbing</h3>
          </div>
        </div>

        {/* Landscaping */}
        <div className="rounded-xl overflow-hidden shadow-lg group">
          <div className="h-56 bg-[url('/images/landscape.jpg')] bg-cover bg-center group-hover:scale-105 transition" />
          <div className="p-4">
            <h3 className="font-bold text-xl">Landscaping</h3>
          </div>
        </div>

        {/* Nursery */}
        <div className="rounded-xl overflow-hidden shadow-lg group">
          <div className="h-56 bg-[url('/images/nursery.jpg')] bg-cover bg-center group-hover:scale-105 transition" />
          <div className="p-4">
            <h3 className="font-bold text-xl">Nursery Plants</h3>
          </div>
        </div>

        {/* Construction */}
        <div className="rounded-xl overflow-hidden shadow-lg group">
          <div className="h-56 bg-[url('/images/construction.jpg')] bg-cover bg-center group-hover:scale-105 transition" />
          <div className="p-4">
            <h3 className="font-bold text-xl">Construction</h3>
          </div>
        </div>

      </div>
    </section>
  );
}