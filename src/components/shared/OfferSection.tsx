import Button from 'components/shared/Button'
import Image from 'next/image'
import img from '@public/images/marketing/ogrod.jpg'

export default function OfferSection() {
  return (
    <div className="bg-2-colors-to-vertical">
      <section className="amir-container mx-auto py-24 px-4 flex flex-col items-center">
        <h2 className="text-h2 text-center mx-auto font-bold text-primary md:mb-4 space-x-6">
          Twój partner w Metalurgii.
        </h2>
        <p className="text-md text-center max-w-prose mx-auto">
          Nasze zaawansowane technologie i pasja do metalu kształtują innowacyjne produkty, które
          odpowiadają na szeroką gamę zastosowań. Przeglądaj naszą ofertę, aby znaleźć wytrzymałe i
          estetyczne rozwiązania metalowe dopasowane do Twoich projektów
        </p>
        <Button theme="primary" className="px-6 my-8 mx-auto" href="/oferta">
          Zobacz ofertę
        </Button>
        <Image src={img} quality={75} alt="Ogród" className="rounded shadow-xl brightness-95" />
      </section>
    </div>
  )
}
