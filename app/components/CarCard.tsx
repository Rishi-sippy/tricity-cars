import Image from 'next/image'

type Props = {
  name: string
  image: string
  price: string
}

export default function CarCard({ name, image, price }: Props) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
      <div className="relative h-44">
        <Image src={image} alt={`${name} self drive car`} fill className="object-cover" />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-slate-600 text-sm">
          Starting from <span className="font-bold">{price}</span> / day
        </p>

        <button className="w-full mt-2 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition">Book Now</button>
      </div>
    </div>
  )
}
