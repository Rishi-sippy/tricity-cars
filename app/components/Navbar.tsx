'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl">
        <div className="flex items-center justify-between px-6 py-4 rounded-full bg-white/80 backdrop-blur-md shadow-lg">
          <div className="font-extrabold text-lg">SelfDrive</div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a>Home</a>
            <a>Cars</a>
            <a>Locations</a>
            <a>Contact</a>
          </nav>

          {/* DESKTOP CTA */}
          <button className="hidden md:block px-6 py-2 rounded-full bg-blue-600 text-white">Book Now</button>

          {/* MOBILE HAMBURGER */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-slate-800" />
              <span className="block w-6 h-0.5 bg-slate-800" />
              <span className="block w-6 h-0.5 bg-slate-800" />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[92%] bg-white rounded-2xl shadow-xl p-6 space-y-4">
            <a className="block">Home</a>
            <a className="block">Cars</a>
            <a className="block">Locations</a>
            <a className="block">Contact</a>

            <button className="w-full mt-4 py-3 rounded-xl bg-blue-600 text-white">Book Now</button>
          </div>
        </div>
      )}
    </>
  )
}
