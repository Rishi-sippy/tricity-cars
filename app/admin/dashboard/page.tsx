import { prisma } from '@/app/src/lib/prisma'
import type { Booking } from '@prisma/client'

export default async function Dashboard() {
  const bookings: Booking[] = await prisma.booking.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Bookings</h1>

      <table className="w-full border">
        <thead>
          <tr className="border-b bg-slate-100">
            <th className="p-2">City</th>
            <th className="p-2">Pickup</th>
            <th className="p-2">Drop</th>
            <th className="p-2">Source</th>
            <th className="p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id} className="border-b text-center">
              <td className="p-2">{b.city}</td>
              <td className="p-2">{b.pickupDate}</td>
              <td className="p-2">{b.dropDate}</td>
              <td className="p-2">{b.source}</td>
              <td className="p-2">{new Date(b.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
