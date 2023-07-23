import Image from 'next/image'

import ContactFormWithMap from 'components/shared/sections/ContactFormWithMap'
import testImg from '@public/images/rys-dennice-koszykowe.jpg'

export default function OfferLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <section className="my-20 md:my-40 bg-white py-20">
        <h3 className="text-h3 block amir-container mb-10 font-bold text-blue-950">
          Podstawowe rodzaje oferowanych przez nas dennic
        </h3>
        <div className="amir-container grid grid-cols-fluid gap-y-8 gap-x-6">
          <h4 className="col-span-full text-h4 text-orange-950 font-semibold mt-12 -mb-6">
            Lorem ipsum dolor sit amet.
          </h4>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i}>
              <div className="h-28">
                <Image src={testImg} alt="Img" className="h-full w-auto mx-auto object-center" />
              </div>
              <p className="text-center">Koszykowe według DIN28013</p>
            </div>
          ))}
        </div>
        <div className="amir-container grid grid-cols-fluid gap-y-8 gap-x-6">
          <h4 className="col-span-full text-h4 text-orange-950 font-semibold mt-12 -mb-6">
            Lorem ipsum dolor sit amet.
          </h4>
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i}>
              <div className="h-28">
                <Image src={testImg} alt="Img" className="h-full w-auto mx-auto object-center" />
              </div>
              <p className="text-center">Koszykowe według DIN28013</p>
            </div>
          ))}
        </div>
        <div className="amir-container grid grid-cols-fluid gap-y-8 gap-x-6">
          <h4 className="col-span-full text-h4 text-orange-950 font-semibold mt-12 -mb-6">
            Lorem ipsum dolor sit amet.
          </h4>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i}>
              <div className="h-28">
                <Image src={testImg} alt="Img" className="h-full w-auto mx-auto object-center" />
              </div>
              <p className="text-center">Koszykowe według DIN28013</p>
            </div>
          ))}
        </div>
      </section>
      <ContactFormWithMap />
    </>
  )
}
