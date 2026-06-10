"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
  <Image
    src="/images/logo.png"
    alt="Benkims Tech Logo"
    width={50}
    height={50}
    priority
  />

  <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-blue-700">
    Benkims Tech
  </h1>
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm md:text-base">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
  className="md:hidden text-2xl font-bold"
  onClick={() => setOpen(!open)}
  aria-label="Toggle Menu"
>
  {open ? "✕" : "☰"}
</button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-4 sm:px-6 pb-4 text-sm">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}