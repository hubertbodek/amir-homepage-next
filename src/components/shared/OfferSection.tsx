import Button from 'components/shared/Button'
import Image from 'next/image'
import img from '@public/images/marketing/ogrod.jpg'

export default function OfferSection() {
  return (
    <div className="bg-2-colors-to-vertical">
      <section className="amir-container mx-auto flex flex-col items-center px-4 py-24">
        <h2 className="text-h2 mx-auto space-x-6 text-center font-bold text-primary md:mb-4">
          Twój partner w Metalurgii.
        </h2>
        <p className="text-md mx-auto max-w-prose text-center">
          Nasze zaawansowane technologie i pasja do metalu kształtują innowacyjne produkty, które
          odpowiadają na szeroką gamę zastosowań. Przeglądaj naszą ofertę, aby znaleźć wytrzymałe i
          estetyczne rozwiązania metalowe dopasowane do Twoich projektów
        </p>
        <Button theme="primary" className="mx-auto my-8 px-6" href="/oferta">
          Zobacz ofertę
        </Button>
        <Image src={img} quality={75} alt="Ogród" className="rounded shadow-xl brightness-95" />
      </section>
    </div>
  )
}
