import React from 'react'
import ServiceCard from '@/src/services/components/ServiceCard'
import Teaser from '../shared/components/Teaser'

export default function Services() {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/spaw.jpeg', alternativeText: 'Perforacja' }}
        title="Usługi"
        specific
      />
    </>
  )
}
