import './globals.css'

export const metadata = {
  title: 'Self Drive Cars in Tricity',
  description: 'Self drive car rental in Chandigarh, Mohali, Zirakpur & Panchkula'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
