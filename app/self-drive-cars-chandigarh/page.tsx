import CitySeoSection from '@/app/components/CitySeoSection'
import CarCard from '@/app/components/CarCard'

export const metadata = {
  title: 'Self Drive Cars in Chandigarh | Cheap Car Rental',
  description: 'Rent self drive cars in Chandigarh at cheapest prices. Hatchback, sedan & SUV available.'
}

export default function ChandigarhPage() {
  return (
    <>
      {/* SEO CONTENT (UNCHANGED, GOOGLE LOVES THIS) */}
      <CitySeoSection city="Chandigarh" description="Looking for self drive cars in Chandigarh? We offer affordable, well-maintained cars for city travel, weekend trips and long road journeys with complete freedom." />

      {/* CAR LISTING SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold mb-8">Available Self Drive Cars in Chandigarh</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CarCard name="Tata Tiago" image="/car2.png" price="₹1,499" />
          <CarCard name="Maruti Swift" image="/desire.png" price="₹1,599" />
          {/* <CarCard name="Hyundai i20" image="/cars/hyundai-i20.jpg" price="₹1,699" />
          <CarCard name="Maruti Dzire" image="/cars/maruti-dzire.jpg" price="₹1,799" />
          <CarCard name="Kia Sonet" image="/cars/kia-sonet.jpg" price="₹2,299" /> */}
        </div>
      </section>
    </>
  )
}
