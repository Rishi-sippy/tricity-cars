export default function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section
      className="relative min-h-screen w-full
      bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 pt-40 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="text-white">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
            Self Drive Cars
            <br />
            <span className="text-blue-100">in Tricity</span>
          </h1>

          <p className="mt-6 text-lg opacity-90">Chandigarh • Mohali • Zirakpur • Panchkula</p>

          <div className="inline-flex gap-3 mt-6 px-5 py-2 rounded-full bg-white/25 backdrop-blur">💰 Cheapest in Tricity • 🚗 Unlimited KM</div>

          <div className="flex gap-4 mt-10">
            <button onClick={onBook} className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl">
              Book Now
            </button>
            <button onClick={() => window.open('https://wa.me/919803954174', '_blank')} className="px-8 py-3 border border-white/40 rounded-xl text-white">
              WhatsApp
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <img src="/carimg.png" alt="Self Drive Car" className="w-full max-w-xl mx-auto" />

          <div className="absolute top-[-25px] right-0 bg-white rounded-xl md:px-4 px-2  md:py-3 py-2 shadow-lg md:text-[18px] text-[12px]">🚗 Instant Pickup</div>

          <div className="absolute bottom-2 left-0 bg-white rounded-xl md:px-4 px-2  md:py-3 py-2 shadow-lg text-[12px] md:text-[18px] ">📍 All Tricity Areas</div>
        </div>
      </div>
    </section>
  )
}
