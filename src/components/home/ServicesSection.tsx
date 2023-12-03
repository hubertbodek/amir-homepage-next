import Image from 'next/image'
import servicesImg from '@public/images/marketing/uslugi.webp'
import Button from 'components/shared/Button'

export default function ServicesSection() {
  return (
    <div className="h-[684px] relative text-light bg-primary">
      <div className="md:mb-12 h-full w-full relative">
        <div className="image-overlay absolute top-0 left-0 h-full w-full z-10">
          <Image
            src={servicesImg}
            alt="Spawacz"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="amir-container mx-auto !px-0 lg:!px-16 relative flex h-full items-center justify-center md:justify-end z-30">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl lg:text-6xl font-bold uppercase tracking-wide">Usługi</h3>
            <span className="text-base uppercase block mb-4 text-neutral-300">
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
