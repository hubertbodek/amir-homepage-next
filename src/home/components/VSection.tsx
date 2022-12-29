import Button from '@/src/shared/components/Button'
import Image from 'next/image'
import React from 'react'

export default function VSection() {
  return (
    <section className="relative bg-gradient-to-b from-light to-neutral-200 pb-24 overflow-x-clip">
      <div className="absolute w-full h-28 mx-auto md:top-8 left-0 flex items-center justify-center">
        <h3 className="max-w-md text-2xl md:text-4xl text-center mx-auto absolute z-10 uppercase font-bold tracking-wider text-light">
          Osiagnac wiecej dzieki technologii
        </h3>
      </div>
      <div className="h-28 md:h-56 relative md:v-shape v-shape-overlay">
        <Image
          src="/images/marketing/siatka.png"
          alt="Siatka"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="text-primary amir-container grid grid-cols-1 md:grid-cols-2 mt-20 pb-12 md:divide-x divide-tertiary/80">
        <div className="md:pr-16 mb-8">
          <h4 className="text-h4 font-bold mb-2">Lorem ipsum dolor sit amet.</h4>
          <p className="mb-4 text-neutral-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim quos aliquam voluptatum
            ipsa similique aperiam adipisci assumenda ratione a.
          </p>
          <h4 className="text-h4 font-bold mb-2">Lorem ipsum dolor sit amet.</h4>
          <p className="text-neutral-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim quos aliquam voluptatum
            ipsa similique aperiam adipisci assumenda ratione a.
          </p>
        </div>
        <div className="md:text-right md:pl-16">
          <h4 className="text-h4 font-bold mb-2">Lorem ipsum dolor sit amet.</h4>
          <p className="mb-4 text-neutral-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim quos aliquam voluptatum
            ipsa similique aperiam adipisci assumenda ratione a.
          </p>
          <h4 className="text-h4 font-bold mb-2">Lorem ipsum dolor sit amet.</h4>
          <p className="text-neutral-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea enim quos aliquam voluptatum
            ipsa similique aperiam adipisci assumenda ratione a.
          </p>
        </div>
      </div>
      <div className="container mx-auto flex justify-center items-center">
        <Button theme="primary" href="/">
          Zobacz realizacje
        </Button>
      </div>
    </section>
  )
}
