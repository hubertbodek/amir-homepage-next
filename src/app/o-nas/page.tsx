import Teaser from 'components/shared/Teaser'
import aboutData from './data.json'

const { headline } = aboutData

export default function About() {
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
