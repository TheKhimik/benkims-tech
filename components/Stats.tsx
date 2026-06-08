export default function Stats() {
  const stats = [
    "100+ Projects",
    "24/7 Support",
    "6 Service Areas",
    "Trusted Team",
  ];

  return (
    <section className="py-20 bg-gray-100">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {stats.map((item) => (
          <div
            key={item}
            className="bg-white p-8 text-center shadow rounded-xl"
          >
            <h3 className="text-2xl font-bold">
              {item}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}