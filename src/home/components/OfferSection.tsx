import Button from '@/src/shared/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const offers = [
  {
    title: 'Siatki zgrzewane',
    url: '/oferta',
    imageUrl: '/images/marketing/perf-sheet-2.jpeg',
  },
  {
    title: 'Siatki zgrzewane',
    url: '/oferta',
    imageUrl: '/images/marketing/perf-sheet-2.jpeg',
  },
  ,
  {
    title: 'Siatki zgrzewane',
    url: '/oferta',
    imageUrl: '/images/marketing/perf-sheet-2.jpeg',
  },
  ,
  {
    title: 'Siatki zgrzewane',
    url: '/oferta',
    imageUrl: '/images/marketing/perf-sheet-2.jpeg',
  },
  ,
  {
    title: 'Siatki zgrzewane',
    url: '/oferta',
    imageUrl: '/images/marketing/perf-sheet-2.jpeg',
  },
  ,
  {
    title: 'Siatki zgrzewane',
    url: '/oferta',
    imageUrl: '/images/marketing/perf-sheet-2.jpeg',
  },
]

export default function OfferSection() {
  return (
    <section className="amir-container mx-auto py-24 px-4">
      <h2 className="text-h2 text-left uppercase font-bold text-neutral-800 mb-8">
        Nasze produkty
      </h2>
      <div className="grid md:grid-cols-2 gap-x-9 gap-y-8">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="min-h-40 grid grid-cols-3 border-neutral-100 shadow-lg hover:shadow-xl transition rounded-sm"
          >
            <div className="col-span-1 h-full relative">
              <Image src={offer!.imageUrl} alt="Test" fill className="object-cover object-center" />
            </div>
            <div className="px-4 py-2 flex flex-col col-span-2 h-full items-start">
              <Link href={offer!.url}>
                <span className="text-h3 mb-4 inline-block">{offer!.title}</span>
              </Link>
              <p className="text-subtitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum fugiat tenetur
                aut.
              </p>
              <Button theme="secondary" className="!text-neutral-800" href={offer?.url}>
                Zobacz ofertę
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
