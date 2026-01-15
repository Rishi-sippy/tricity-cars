import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Self Drive Cars in Tricity',
    template: '%s | Tricity Self Drive Cars'
  },
  description: 'Self drive car rental in Chandigarh, Mohali, Zirakpur & Panchkula',

  verification: {
    google: 'ePt54RID_-pQzEDwZATKKUWEJoZGK5MDT2pIG0X5Pro'
  },

  alternates: {
    canonical: 'https://tricitycarselfdrive.in'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        {/* STRUCTURED DATA – DOES NOT AFFECT DESIGN */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CarRental',
              name: 'Tricity Self Drive Cars',
              url: 'https://tricitycarselfdrive.in',
              telephone: '+91-9803954174',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Chandigarh',
                addressCountry: 'IN'
              },
              areaServed: ['Chandigarh', 'Mohali', 'Zirakpur', 'Panchkula']
            })
          }}
        />

        {/* APP CONTENT */}
        {children}
      </body>
    </html>
  )
}
