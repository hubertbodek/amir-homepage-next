import Image from 'next/image'

import Button from '@/src/shared/components/Button'
import useSideBySideTheme from '@/src/home/hooks/useSideBySideTheme'

export interface SideBySideItemProps {
  title: string
  description: string
  learnMoreUrl: string
  imageUrl: string
  index: number
}

export default function SideBySideItem({
  title,
  description,
  learnMoreUrl,
  imageUrl,
  index,
}: SideBySideItemProps) {
  const styles = useSideBySideTheme(index)
  return (
    <div
      className={`grid grid-cols-1 items-center md:grid-cols-12 gap-8 min-h-[240px] text-left ${styles.text}`}
    >
      <div className={`${styles.textContainer}`}>
        <h3 className="text-2xl md:text-5xl mb-4 text-neutral-100 font-bold">{title}</h3>
        <p className="text-lg md:text-2xl mb-4 font-light text-neutral-300">{description}</p>
        <Button theme="secondary" href={learnMoreUrl} arrow>
          Dowiedz sie wiecej
        </Button>
      </div>
      <div className={`${styles.imageContainer} h-64 md:h-[668px] relative`}>
        <div className="absolute top-0 h-full w-full shadow-2xl shadow-secondary-100/20">
          <Image src={imageUrl} alt="Produkt" fill className="object-cover object-center" />
        </div>
      </div>
    </div>
  )
}
