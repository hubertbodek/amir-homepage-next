import Teaser from 'components/shared/Teaser'
import getAboutUsPage from '@sanity/api/services/getAboutUs'
import BlockMapper from 'components/blocks/Block'
import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'

export default async function About() {
  const aboutUsData = await getAboutUsPage()

  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/perforation.webp', alt: 'Wzór' }}
        label="O nas"
        title={aboutUsData.title}
      />
      <section className="my-20 amir-container">
        <h2 className="text-h2 max-w-3xl text-left">{aboutUsData.description}</h2>
      </section>
      <BlockMapper blocks={aboutUsData.blocks} />
      <ContactFormWithMap />
    </>
  )
}
