const features = ['Cheapest in Tricity', 'Unlimited KM', 'No Driver Needed', 'Instant Pickup']

export default function WhyUs() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {features.map((item) => (
          <div key={item} className="p-6 border border-white/10 rounded-xl text-center">
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
