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
      className="amir-container grid grid-cols-1 gap-x-4 md:min-h-[600px] md:grid-cols-2 lg:my-24"
    >
      <div className="mx-auto py-12 lg:px-4">
        <h2 className="text-h2 mb-8 font-semibold uppercase text-sky-900">
          Skontaktuj się z nami!
        </h2>
        <p className="text-subtitle mb-5 text-gray-600">
          Skontaktuj się z nami, aby dowiedzieć się więcej o naszych usługach i produktach. Nasz
          zespół jest zawsze gotowy, aby pomóc Ci z każdym pytaniem!
        </p>
        <ContactForm />
      </div>
      <div className="h-full w-full p-4">
        <div className="h-full w-full overflow-hidden rounded-md shadow-xl max-md:min-h-[192px]">
          {isVisible && <DynamicMap />}
        </div>
      </div>
    </div>
  )
}
