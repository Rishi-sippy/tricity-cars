import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://tricitycarselfdrive.in'),

  title: {
    default: 'Self Drive Cars in Tricity | Chandigarh, Mohali, Panchkula',
    template: '%s | Tricity Self Drive Cars'
  },

  description: 'Book affordable self drive cars in Chandigarh, Mohali, Zirakpur & Panchkula. No driver, no hidden charges. Cheapest car rental in Tricity.',

  keywords: ['self drive cars in tricity', 'self drive cars chandigarh', 'self drive cars mohali', 'self drive cars panchkula', 'car rental tricity', 'rent a car chandigarh', 'cheap self drive car'],

  authors: [{ name: 'Tricity Self Drive Cars' }],

  verification: {
    google: 'ePt54RID_-pQzEDwZATKKUWEJoZGK5MDT2pIG0X5Pro'
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large'
    }
  },

  openGraph: {
    title: 'Self Drive Cars in Tricity',
    description: 'Affordable self drive car rentals in Chandigarh, Mohali & Panchkula.',
    url: 'https://tricitycarselfdrive.in',
    siteName: 'Tricity Self Drive Cars',
    images: [
      {
        url: '/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Self Drive Cars in Tricity'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Self Drive Cars in Tricity',
    description: 'Book affordable self drive cars in Chandigarh, Mohali & Panchkula.',
    images: ['/og-cover.jpg']
  },

  alternates: {
    canonical: 'https://tricitycarselfdrive.in'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* STRUCTURED DATA */}
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
                addressRegion: 'CH',
                addressCountry: 'IN'
              },
              areaServed: ['Chandigarh', 'Mohali', 'Zirakpur', 'Panchkula'],
              priceRange: '₹₹'
            })
          }}
        />

        {children}
      </body>
    </html>
  )
}
