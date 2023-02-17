import type { InferGetStaticPropsType } from 'next'

import Teaser from 'components/shared/Teaser'

import aboutData from 'data/about.json'

export default function About({
  pageData: { headline },
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Teaser
        image={{ src: '/images/marketing/perforation.webp', alternativeText: 'Wzór' }}
        label="O nas"
        title="Poznaj nas i naszą historię"
      />
      <section className="my-20 amir-container">
        <h2 className="text-h2 max-w-3xl text-left">{headline}</h2>
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: { pageData: aboutData },
  }
}
