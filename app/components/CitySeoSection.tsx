type Props = {
  city: string
  description: string
}

export default function CitySeoSection({ city, description }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-10">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Self Drive Cars in {city}</h1>

        <p className="text-slate-600 text-lg leading-relaxed">{description}</p>
      </div>

      <div className="bg-slate-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-4">Why Rent a Self Drive Car in {city}?</h2>

        <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
          <li>✔ Cheapest self drive car rentals in {city}</li>
          <li>✔ No driver, full privacy</li>
          <li>✔ Perfect for city & outstation travel</li>
          <li>✔ Flexible daily & weekly rentals</li>
          <li>✔ Easy booking via WhatsApp</li>
          <li>✔ Trusted by local customers</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3">Affordable Self Drive Car Rental in {city}</h3>
        <p className="text-slate-600 leading-relaxed">
          Our self drive car rental service in {city} is designed for travelers who want freedom, flexibility, and affordability. Choose from well-maintained cars and enjoy transparent pricing with no hidden costs.
        </p>
      </div>
    </section>
  )
}
