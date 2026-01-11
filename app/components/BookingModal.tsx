'use client'
import { useState } from 'react'

export default function BookingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [city, setCity] = useState('')
  const [pickup, setPickup] = useState('')
  const [drop, setDrop] = useState('')

  if (!open) return null

  const handleSubmit = () => {
    const message = `Hi, I want to book a self drive car.
City: ${city}
Pickup Date: ${pickup}
Drop Date: ${drop}`

    window.open(`https://wa.me/919803954174?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl relative">
        {/* CLOSE */}
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 text-xl">
          ✕
        </button>

        <h3 className="text-xl font-bold mb-6">Book Your Car</h3>

        {/* CITY */}
        <div className="mb-4">
          <label className="text-sm font-medium">Pickup City</label>
          <select className="w-full mt-1 p-3 border rounded-xl" value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Select city</option>
            <option>Chandigarh</option>
            <option>Mohali</option>
            <option>Zirakpur</option>
            <option>Panchkula</option>
          </select>
        </div>

        {/* PICKUP */}
        <div className="mb-4">
          <label className="text-sm font-medium">Pickup Date</label>
          <input type="date" className="w-full mt-1 p-3 border rounded-xl" value={pickup} onChange={(e) => setPickup(e.target.value)} />
        </div>

        {/* DROP */}
        <div className="mb-6">
          <label className="text-sm font-medium">Drop Date</label>
          <input type="date" className="w-full mt-1 p-3 border rounded-xl" value={drop} onChange={(e) => setDrop(e.target.value)} />
        </div>

        {/* CTA */}
        <button onClick={handleSubmit} className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold">
          Continue on WhatsApp
        </button>
      </div>
    </div>
  )
}
