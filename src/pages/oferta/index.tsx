import OfferCard from '@/src/offer/components/OfferCard'
import CardSection from '@/src/shared/components/CardSection'
import Teaser from '@/src/shared/components/Teaser'
import React from 'react'

export default function Offer() {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/metal-pattern.jpeg', alternativeText: 'Perforacja' }}
        title="Oferta"
        specific
      />
    </>
  )
}
