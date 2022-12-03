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
      className={`grid grid-cols-1 md:grid-cols-2 gap-x-8 min-h-[240px] text-left ${styles.text}`}
    >
      <div className={`${styles.textContainer}`}>
        <h3 className="text-h3 mb-4 font-bold">{title}</h3>
        <p className="subtitle mb-4">{description}</p>
        <Button theme="secondary" href={learnMoreUrl} arrow>
          Dowiedz sie wiecej
        </Button>
      </div>
      <div className={`${styles.imageContainer} h-96 md:h-auto relative`}>
        <div className="absolute top-0 h-full w-full">
          <Image
            src={imageUrl}
            alt="Produkt"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  )
}
