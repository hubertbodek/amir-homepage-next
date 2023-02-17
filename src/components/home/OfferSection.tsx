import Button from 'components/shared/Button'
import Image from 'next/image'
import React, { useState } from 'react'

export default function OfferSection() {
  const [activeItem, setActiveItem] = useState<number>(0)

  return (
    <section className="amir-container mx-auto py-24 px-4">
      <h2 className="text-h2 text-left uppercase font-bold text-primary-100 md:mb-8 flex items-center space-x-6">
        Nasze produkty
        <span className="h-0.5 bg-gray-900/80 flex-1 ml-8" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-9 gap-y-8 py-4">
        <aside className="md:col-span-3 flex flex-col justify-between items-start">
          <ul className="md:space-y-2 max-md:flex flex-wrap max-md:text-sm gap-x-3">
            {offers.map((offer, idx) => (
              <li key={`${idx}--${offer.title}`}>
                <button
                  onClick={() => setActiveItem(idx)}
                  className={`btn-secondary py-2 ${idx === activeItem ? 'btn-active' : ''}`}
                >
                  {offer.title}
                </button>
              </li>
            ))}
          </ul>
          <Button theme="primary" className="max-md:hidden px-6" href="/oferta">
            Zobacz więcej
          </Button>
        </aside>
        <div className="md:col-span-9 relative h-[440px] overflow-hidden">
          {offers.map((offer, idx) => (
            <div
              key={`offerimage-${idx}`}
              className={`absolute top-0 py-2 left-0 h-full w-full duration-700 transition ${
                activeItem === idx ? 'translate-x-0' : 'translate-x-[150%]'
              }`}
            >
              <Image src={offer.imageUrl} alt={offer.title} fill className="shadow-xl y-4" />
            </div>
          ))}
        </div>
      </div>
      <Button theme="primary" className="md:hidden px-6 w-full" href="/oferta">
        Zobacz więcej
      </Button>
    </section>
  )
}

const offers = [
  {
    title: 'Siatki zgrzewane',
    url: '/oferta',
    imageUrl: '/images/marketing/perf-sheet.webp',
  },
  {
    title: 'Siatki zgrzewane',
    url: '/oferta',
    imageUrl: '/images/marketing/perf-sheet-2.webp',
  },
  {
    title: 'Siatki zgrzewane',
    url: '/oferta',
    imageUrl: '/images/marketing/corten.webp',
  },
  {
    title: 'Siatki zgrzewane',
    url: '/oferta',
    imageUrl: '/images/marketing/siatka.png',
  },
  {
    title: 'Siatki zgrzewane',
    url: '/oferta',
    imageUrl: '/images/marketing/siatki.jpeg',
  },
  {
    title: 'Siatki zgrzewane',
    url: '/oferta',
    imageUrl: '/images/marketing/wall.jpeg',
  },
]
