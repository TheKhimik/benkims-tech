import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-2xl text-blue-700">
          Benkims Tech
        </h1>

        <div className="flex gap-6 text-gray-700 font-medium">
  <Link href="/" className="hover:text-blue-600">Home</Link>
  <Link href="/about" className="hover:text-blue-600">About</Link>
  <Link href="/services" className="hover:text-blue-600">Services</Link>
  <Link href="/projects" className="hover:text-blue-600">Projects</Link>
  <Link href="/gallery" className="hover:text-blue-600">Gallery</Link>
  <Link href="/branding" className="hover:text-blue-600">Branding</Link>
  <Link href="/contact" className="hover:text-blue-600">Contact</Link>
</div>

      </div>
    </nav>
  );
}