'use client'

import { createBooking } from '@/app/actions/createBooking'
import { useState } from 'react'

export default function BookingModal({ open, onClose }: any) {
  const [city, setCity] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [dropDate, setDropDate] = useState('')

  if (!open) return null

  const handleSubmit = async () => {
    const message = `Hi, I want to book a self drive car.
City: ${city}
Pickup Date: ${pickupDate}
Drop Date: ${dropDate}`

    await createBooking({
      city,
      pickupDate,
      dropDate,
      source: 'booking_modal'
    })

    window.open(`https://wa.me/919803954174?text=${encodeURIComponent(message)}`, '_blank')

    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-xl">
          ×
        </button>

        <h3 className="text-xl font-bold mb-4">Book Your Car</h3>

        <select className="w-full mb-3 p-3 border rounded" onChange={(e) => setCity(e.target.value)}>
          <option value="">Select City</option>
          <option>Chandigarh</option>
          <option>Mohali</option>
          <option>Zirakpur</option>
          <option>Panchkula</option>
        </select>

        <input type="date" className="w-full mb-3 p-3 border rounded" onChange={(e) => setPickupDate(e.target.value)} />

        <input type="date" className="w-full mb-4 p-3 border rounded" onChange={(e) => setDropDate(e.target.value)} />

        <button onClick={handleSubmit} className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Continue on WhatsApp
        </button>
      </div>
    </div>
  )
}
