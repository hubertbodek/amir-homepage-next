import Teaser from 'components/shared/Teaser'
import type { InferGetStaticPropsType } from 'next'
import React from 'react'

export default function Offer({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/metal-pattern.jpeg', alternativeText: 'Perforacja' }}
        title="Wybierz to, czego potrzebujesz"
        label="Oferta"
      />
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: { pageData: {} },
  }
}
