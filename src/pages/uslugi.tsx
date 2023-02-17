import React from 'react'
import Teaser from '../components/shared/Teaser'

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

export const getStaticProps = async () => {
  return {
    props: { pageData: {} },
  }
}
