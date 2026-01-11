const locations = ['Chandigarh', 'Mohali', 'Zirakpur', 'Panchkula']

export default function Locations() {
  return (
    <section className="py-20 bg-black">
      <h2 className="text-4xl font-bold text-center mb-10">We Serve In</h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {locations.map((loc) => (
          <span key={loc} className="px-6 py-3 border border-white/10 rounded-full">
            {loc}
          </span>
        ))}
      </div>
    </section>
  )
}
