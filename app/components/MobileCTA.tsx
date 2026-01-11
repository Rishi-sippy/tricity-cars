export default function MobileCTA({ onBook }: { onBook: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white/90 backdrop-blur border-t px-4 py-3">
        <div className="flex gap-3 max-w-md mx-auto">
          <button onClick={onBook} className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold">
            Book Now
          </button>

          <a href="https://wa.me/919803954174" target="_blank" className="flex-1 py-3 rounded-xl border border-green-500 text-green-600 font-semibold text-center">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
