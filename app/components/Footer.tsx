export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* TOP GRID */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        {/* BRAND */}
        <div>
          <h3 className="text-xl font-extrabold">Self Drive Cars Tricity</h3>
          <p className="mt-4 text-sm text-slate-600">Affordable self drive car rental in Chandigarh, Mohali, Zirakpur and Panchkula. Drive anywhere with freedom.</p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Home</li>
            <li>Available Cars</li>
            <li>Pricing</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* LOCATIONS (SEO GOLD) */}
        <div>
          <h4 className="font-semibold mb-4">Service Locations</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Self Drive Cars in Chandigarh</li>
            <li>Self Drive Cars in Mohali</li>
            <li>Self Drive Cars in Zirakpur</li>
            <li>Self Drive Cars in Panchkula</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>📞 +91 9XXXXXXXXX</li>
            <li>💬 WhatsApp Available</li>
            <li>📧 support@selfdrivetricity.com</li>
            <li>⏰ 24x7 Support</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-slate-500 flex flex-col md:flex-row gap-4 justify-between">
          <span>© {new Date().getFullYear()} Self Drive Cars Tricity. All rights reserved.</span>

          <span className="flex gap-4">
            <a className="hover:text-blue-600">Privacy Policy</a>
            <a className="hover:text-blue-600">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
