import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

          {/* BRAND */}
      <div className="flex items-center gap-3">
        <Image
           src="/images/logo.png"
           alt="Benkims Tech Logo"
           width={75}
           height={75}
       />

  <h1 className="text-2xl font-bold">
    Benkims Tech Limited
  </h1>

            <p className="mt-4 text-gray-300 text-sm leading-relaxed">
              Professional Electrical, CCTV, Landscaping, Nursery,
              Plumbing, Construction, Branding and Printing Services
              across Kenya.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-300 text-sm">
              <Link href="/" className="hover:text-white">
                Home
              </Link>

              <Link href="/about" className="hover:text-white">
                About
              </Link>

              <Link href="/services" className="hover:text-white">
                Services
              </Link>

              <Link href="/projects" className="hover:text-white">
                Projects
              </Link>

              <Link href="/gallery" className="hover:text-white">
                Gallery
              </Link>

              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact
            </h3>

            <div className="text-gray-300 text-sm space-y-3">

              <p>📞 +254 701 033 088</p>

              <a
                href="mailto:worldtechololulunga@gmail.com"
                className="block hover:text-blue-400"
              >
                ✉️ worldtechololulunga@gmail.com
              </a>

              <p>📍 Ololulung'a, Narok County</p>

              <a
                href="https://wa.me/254701033088"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white text-sm"
              >
                WhatsApp Us
              </a>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Benkims Tech Limited. All rights reserved.
          </p>

          <p className="mt-3 sm:mt-0 text-center sm:text-right">
            Electrical, CCTV, Construction, Branding & Printing Services in Kenya
          </p>

        </div>

      </div>
    </footer>
  );
}