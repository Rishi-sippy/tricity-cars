'use server'

import { prisma } from '../src/lib/prisma'

export async function createBooking(data: { city: string; pickupDate: string; dropDate: string; source: string }) {
  await prisma.booking.create({
    data
  })
}
