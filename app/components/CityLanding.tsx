import Image from 'next/image'

export default function CityLanding({ city }: any) {
  return (
    <main className="pt-32 pb-24 bg-gradient-to-b from-slate-100 to-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{city.h1}</h1>

          <p className="mt-6 text-lg text-slate-600">
            Looking to <strong>{city.keyword}</strong>? Tricity Self Drive Cars offers affordable, driver-free rentals across {city.name} including {city.areas.join(', ')}.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="https://wa.me/919803954174" className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition">
              WhatsApp Now
            </a>
            <a href="tel:+919803954174" className="px-8 py-4 rounded-xl border border-slate-300 font-semibold">
              Call Now
            </a>
          </div>
        </div>

        <Image src="/cars/tiago.png" alt={`Self drive car rental in ${city.name}`} width={520} height={320} className="rounded-2xl" priority />
      </section>

      {/* TRUST STRIP */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-4 gap-6">
          {['No Driver', 'No Deposit', 'Unlimited KM', '24x7 Support'].map((item) => (
            <div key={item} className="bg-white p-6 rounded-2xl shadow text-center font-semibold">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CARS */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-bold mb-10">Available Self Drive Cars in {city.name}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Tata Tiago', price: '₹2199/day', img: '/desire.png' },
            { name: 'Maruti Swift', price: '₹2499/day', img: '/car2.png' },
            { name: 'Dzire', price: '₹2699/day', img: '/cars/dzire.png' }
          ].map((car) => (
            <div key={car.name} className="bg-white rounded-2xl shadow-lg hover:scale-105 transition">
              <Image src={car.img} alt={`${car.name} self drive car in ${city.name}`} width={400} height={260} />
              <div className="p-6">
                <h3 className="font-bold text-xl">{car.name}</h3>
                <p className="text-slate-600 mt-1">{car.price}</p>
                <a href="https://wa.me/919803954174" className="block mt-4 text-center py-3 rounded-xl bg-blue-600 text-white font-semibold">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOCAL SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-6 mt-24 text-slate-700">
        <h2 className="text-2xl font-bold mb-4">Car Rental Service in {city.name}</h2>
        <p>
          Our self drive car rental service in {city.name} is ideal for daily commute, weekend trips and outstation travel. We serve all major residential and commercial areas including {city.areas.join(', ')}.
        </p>
      </section>
    </main>
  )
}
