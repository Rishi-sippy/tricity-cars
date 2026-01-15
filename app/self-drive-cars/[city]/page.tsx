import CityLanding from '@/app/components/CityLanding'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { cities, CitySlug } from '@/app/src/data/cities'

type PageProps = {
  params: {
    city: CitySlug
  }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const city = cities[params.city]

  return {
    title: `${city.h1} | Tricity Self Drive Cars`,
    description: `Book affordable self drive cars in ${city.name}. Available in ${city.areas.join(', ')}.`,
    alternates: {
      canonical: `https://tricitycarselfdrive.in/self-drive-cars/${params.city}`
    }
  }
}

export default function Page({ params }: PageProps) {
  const city = cities[params.city]
  if (!city) notFound()

  return <CityLanding city={city} />
}
