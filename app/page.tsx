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

      <Cars onBook={() => setOpen(true)} />

      <Footer />

      <MobileCTA onBook={() => setOpen(true)} />

      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
