import Image from 'next/image'
import servicesImg from '@public/images/marketing/uslugi.webp'
import Button from 'components/shared/Button'

export default function ServicesSection() {
  return (
    <div className="text-light bg-primary relative h-[684px]">
      <div className="relative h-full w-full md:mb-12">
        <div className="image-overlay absolute left-0 top-0 z-10 h-full w-full">
          <Image
            src={servicesImg}
            alt="Spawacz"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="amir-container relative z-30 mx-auto flex h-full items-center justify-center !px-0 md:justify-end lg:!px-16">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold uppercase tracking-wide lg:text-6xl">Usługi</h3>
            <span className="mb-4 block text-base uppercase text-neutral-300">
              Na najwyzszym poziomie
            </span>
            <div className="flex flex-col items-stretch">
              <Button
                theme="filled"
                href="/uslugi/spawanie-tig-i-gtaw-mig-mag"
                className="mb-4 w-full"
              >
                Spawanie
              </Button>
              <Button theme="filled" href="/uslugi/laserowe-ciecie-blach" className="mb-4 w-full">
                Laserowe ciecie blach
              </Button>
            </div>
            <Button theme="secondary" href="/uslugi">
              Sprawdz uslugi
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
