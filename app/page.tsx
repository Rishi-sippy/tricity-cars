'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cars from './components/Cars'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'
import BookingModal from './components/BookingModal'

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Navbar />

      <Hero onBook={() => setOpen(true)} />

      <Cars onBook={() => setOpen(true)} />

      <Footer />

      <MobileCTA onBook={() => setOpen(true)} />

      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
