import React from 'react'
import servicesImg from '@/public/images/marketing/uslugi.webp'
import Image from 'next/image'
import Button from '@/src/shared/components/Button'

export default function ServicesSection() {
  return (
    <div className="amir-container !px-0 lg:!px-16 h-[684px] relative md:my-12">
      <div className="h-full w-full relative">
        <div className="image-overlay absolute top-0 left-0 h-full w-full md:w-3/4 z-10">
          <Image
            src={servicesImg}
            alt="Spawacz"
            fill
            className="object-cover md:object-contain object-center md:object-left"
          />
        </div>
        <div className="relative md:absolute top-0 right-0 lg:right-36 flex h-full flex-col items-center justify-center z-30">
          <h3 className="text-4xl lg:text-6xl font-bold uppercase tracking-widest">
            Uslugi
          </h3>
          <span className="text-lx lg:text-2xl uppercase block mb-4">
            Na najwyzszym poziomie
          </span>
          <div className="flex flex-col items-stretch">
            <Button theme="filled" href="/" className="mb-4 w-full">
              Spawanie TIG i GTAW
            </Button>
            <Button theme="filled" href="/" className="mb-4 w-full">
              Spawanie MIG i MAg
            </Button>
            <Button theme="filled" href="/" className="mb-4 w-full">
              Laserowe ciecie blach
            </Button>
          </div>
          <Button theme="primary" href="/">
            Sprawdz uslugi
          </Button>
        </div>
      </div>
    </div>
  )
}
