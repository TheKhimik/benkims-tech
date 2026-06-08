export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-20">

      <h1 className="text-5xl font-bold mb-12">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        <div>

          <h2 className="text-2xl font-bold mb-4">
            Contact Information
          </h2>

          <p>Benkims Tech Limited</p>

          <p className="mt-3">
            Ololulung'a, Narok County, Kenya
          </p>

          <p className="mt-3">
            +254 701 033 088
          </p>

          <p className="mt-3">
            WhatsApp: +254 701 033 088
          </p>

        </div>

        <form className="space-y-4">

          <input
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg"
          />

          <input
            placeholder="Phone Number"
            className="w-full border p-3 rounded-lg"
          />

          <input
            placeholder="Email Address"
            className="w-full border p-3 rounded-lg"
          />

          <textarea
            rows={5}
            placeholder="Message"
            className="w-full border p-3 rounded-lg"
          />

          <button
            className="bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-lg"
          >
            Send Message
          </button>

        </form>

      </div>

    </main>
  );
}