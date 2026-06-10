import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold">
              Benkims Tech Limited
            </h2>

            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Professional Electrical, CCTV, Landscaping, Nursery, Plumbing,
              Construction, Branding and Printing Services across Kenya.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-2 text-gray-300 text-sm">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/branding">Branding</Link>
              <Link href="/printing">Printing</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <div className="text-gray-300 text-sm space-y-2">
              <p>📞 +254 701 033 088</p>
              <p>📍 Ololulung'a, Narok County</p>

              <a
                href="https://wa.me/254701033088"
                target="_blank"
                className="inline-block mt-3 bg-green-600 px-4 sm:px-6 py-2 rounded-md text-white text-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} Benkims Tech Limited. All rights reserved.
          </p>

          <p className="mt-3 sm:mt-0">
            Built for quality • Trusted in Kenya
          </p>

        </div>

      </div>

    </footer>
  );
}