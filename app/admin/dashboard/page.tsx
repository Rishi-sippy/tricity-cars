import StatCard from '@/app/components/StatCard'
import { prisma } from '@/app/src/lib/prisma'

type BookingRow = {
  id: string
  createdAt: Date
  city: string
  pickupDate: string
  dropDate: string
  source: string
}

export default async function Dashboard() {
  const bookings = (await prisma.booking.findMany({
    orderBy: { createdAt: 'desc' }
  })) as BookingRow[]

  const total = bookings.length
  const today = bookings.filter(({ createdAt }) => new Date(createdAt).toDateString() === new Date().toDateString()).length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 text-white">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-slate-400 mt-1">Self-Drive Tricity – Live Bookings</p>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Bookings" value={total} glow="cyan" />
        <StatCard title="Today" value={today} glow="emerald" />
        <StatCard title="Last City" value={bookings[0]?.city ?? '—'} glow="violet" />
        <StatCard title="Source" value={bookings[0]?.source ?? '—'} glow="orange" />
      </div>

      {/* TABLE */}
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/10 sticky top-0">
            <tr>
              {['City', 'Pickup', 'Drop', 'Source', 'Date'].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-medium text-slate-300">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t border-white/10 hover:bg-white/10 transition">
                <td className="px-4 py-3">{b.city}</td>
                <td className="px-4 py-3">{b.pickupDate}</td>
                <td className="px-4 py-3">{b.dropDate}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300 text-xs">{b.source}</span>
                </td>
                <td className="px-4 py-3 text-slate-400">{new Date(b.createdAt).toLocaleString()}</td>
              </tr>
            ))}

            {bookings.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center py-10 text-slate-400">
                  No bookings yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
