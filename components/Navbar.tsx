"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-xl md:text-2xl text-blue-700">
          Benkims Tech
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm md:text-base">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/branding">Branding</Link>
          <Link href="/printing">Printing</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 sm:px-6 pb-4 text-sm">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/branding" onClick={() => setOpen(false)}>Branding</Link>
          <Link href="/printing" onClick={() => setOpen(false)}>Printing</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}