'use client'

import dynamic from 'next/dynamic'
import { useRef } from 'react'

import ContactForm from 'components/contact/ContactForm'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import MapLoader from '../map/MapLoader'

const DynamicMap = dynamic(() => import('../map/Map'), {
  loading: () => <MapLoader />,
})

export default function ContactFormWithMap() {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting

  return (
    <div
      ref={ref}
      id="contact-form"
      className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] amir-container gap-x-4 my-24"
    >
      <div className="py-12 mx-auto px-4">
        <h2 className="text-h2 font-semibold text-sky-900 mb-8 uppercase">
          Skontaktuj się z nami!
        </h2>
        <p className="text-subtitle text-gray-600 mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, minima dignissimos error
          fugit placeat sit.
        </p>
        <ContactForm />
      </div>
      <div className="h-full w-full p-4">
        <div className="h-full w-full overflow-hidden shadow-xl rounded-md max-md:min-h-[192px]">
          {isVisible && <DynamicMap />}
        </div>
      </div>
    </div>
  )
}
