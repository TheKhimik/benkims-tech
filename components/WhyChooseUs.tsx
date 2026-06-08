export default function WhyChooseUs() {
  const reasons = [
    "Professional Team",
    "Affordable Pricing",
    "Reliable Service",
    "Quality Materials",
    "Timely Delivery",
    "Customer Satisfaction",
  ];

  return (
    <section className="bg-green-50 py-20">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {reasons.map((reason) => (
            <div
              key={reason}
              className="bg-white p-6 rounded-xl shadow"
            >
              {reason}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}