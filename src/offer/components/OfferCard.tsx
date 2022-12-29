import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OfferCard() {
  return (
    <article>
      <Link href="/">
        <h3 className="text-h3 text-center font-semibold uppercase">
          <span className="text-hover-effect">Siatki zgrzewane</span>
        </h3>
        <div className="group relative h-56 md:h-80 hover:scale-105 transition duration-300">
          <Image src="/images/marketing/tkanina.png" alt="tkanina" fill />
        </div>
      </Link>
    </article>
  )
}
