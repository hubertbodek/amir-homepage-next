import React from 'react'
import Teaser from '../components/shared/Teaser'

export default function Services() {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/spaw.jpeg', alternativeText: 'Perforacja' }}
        title="Skorzystaj z naszego doświadczenia"
        label="Usługi"
      />
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: { pageData: {} },
  }
}
