'use client'

import { cars } from '../src/data/cars'

export default function Cars({ onBook }: { onBook: () => void }) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* SECTION HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Available Self Drive Cars in Tricity</h2>
          <p className="mt-3 text-slate-600">Choose from our well-maintained fleet at the cheapest prices</p>
        </div>

        {/* CAR GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div key={car.id} className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
              {/* IMAGE */}
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900">{car.name}</h3>

                <p className="mt-1 text-blue-600 font-semibold">{car.price}</p>

                <div className="mt-3 flex gap-4 text-sm text-slate-600">
                  <span>⛽ {car.fuel}</span>
                  <span>👥 {car.seats} Seats</span>
                </div>

                <button onClick={onBook} className="mt-5 w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
