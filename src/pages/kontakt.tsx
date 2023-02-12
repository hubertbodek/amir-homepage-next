import type { InferGetStaticPropsType } from 'next'

import ContactFormWithMap from 'shared/components/sections/ContactFormWithMap'
import Teaser from 'shared/components/Teaser'

export default function Contact({ pageData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/metal-pattern.jpeg', alternativeText: 'Perforacja' }}
        title="Kontakt"
        specific
      />
      <ContactFormWithMap />
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: { pageData: {} },
  }
}
