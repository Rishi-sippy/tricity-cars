'use client'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cars from './components/Cars'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import BookingModal from './components/BookingModal'

// export const metadata = {
//   title: 'Self Drive Cars in Chandigarh, Mohali & Panchkula',
//   description: 'Rent self drive cars in Tricity at cheapest prices. Easy booking, no driver, unlimited freedom.'
// }
;<meta name="google-site-verification" content="ePt54RID_-pQzEDwZATKKUWEJoZGK5MDT2pIG0X5Pro" />
export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Navbar />

      <Hero onBook={() => setOpen(true)} />
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        {/* H1 */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Self Drive Cars in Tricity</h1>
          <p className="text-slate-600 text-lg">Rent affordable self drive cars in Chandigarh, Mohali, Zirakpur and Panchkula. No driver. No hidden charges. Complete freedom to travel your way.</p>
        </div>

        {/* H2 – Chandigarh */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Self Drive Cars in Chandigarh</h2>
          <p className="text-slate-600 leading-relaxed">
            Looking for self drive cars in Chandigarh? We provide reliable, well-maintained rental cars at the cheapest prices in the city. Whether you need a car for daily travel, a weekend getaway, or a long road trip, our self drive cars give you
            full flexibility without any driver dependency.
          </p>
        </div>

        {/* H2 – Mohali */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Self Drive Cars in Mohali</h2>
          <p className="text-slate-600 leading-relaxed">
            Our self drive car rental service in Mohali is perfect for professionals, families and travelers. Choose from a wide range of cars with transparent pricing and simple booking. Pick up your car in Mohali and drive anywhere across Punjab,
            Himachal or nearby states.
          </p>
        </div>

        {/* H2 – Zirakpur */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Self Drive Cars in Zirakpur</h2>
          <p className="text-slate-600 leading-relaxed">
            Need a self drive car in Zirakpur? We offer quick delivery, flexible rental durations and budget-friendly options. Our service is ideal for airport pickups, business trips, and highway travel without paying extra driver charges.
          </p>
        </div>

        {/* H2 – Panchkula */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Self Drive Cars in Panchkula</h2>
          <p className="text-slate-600 leading-relaxed">Rent self drive cars in Panchkula and explore nearby destinations with ease. From city travel to hill station trips, our cars are regularly serviced and ready for safe, comfortable journeys.</p>
        </div>

        {/* TRUST SECTION */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4">Why Choose Our Self Drive Car Rental?</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
            <li>✔ Cheapest self drive car rentals in Tricity</li>
            <li>✔ No driver, no restrictions</li>
            <li>✔ Well-maintained and sanitized cars</li>
            <li>✔ Easy booking via WhatsApp</li>
            <li>✔ Flexible daily & weekly plans</li>
            <li>✔ Trusted by local & outstation travelers</li>
          </ul>
        </div>
      </section>

      <Cars onBook={() => setOpen(true)} />

      <Footer />

      <MobileCTA onBook={() => setOpen(true)} />

      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
