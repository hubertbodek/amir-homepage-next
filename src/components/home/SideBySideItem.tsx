'use client'

import Image from 'next/image'
import { useMemo, useRef } from 'react'

import type { ImageData } from '@sanity/schemas/objects/image-data'
import Button from 'components/shared/Button'
import useSideBySideTheme from 'hooks/themes/useSideBySideTheme'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import getImageSizes from 'utlis/getImageSizes'
import { prepareImg } from 'lib/prepareImg'
import { twMerge } from 'tailwind-merge'

export interface SideBySideItemProps {
  title: string
  description: string
  learnMoreUrl: string
  image: string | ImageData
  index: number
  light?: boolean
}

export default function SideBySideItem({
  title,
  description,
  learnMoreUrl,
  image,
  index,
  light = false,
}: SideBySideItemProps) {
  const styles = useSideBySideTheme(index)
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, { threshold: 0.4, freezeOnceVisible: true })
  const isVisible = !!entry?.isIntersecting
  const isReversed = index % 2 === 0
  const imageTypeofString = typeof image === 'string'
  const isContained = !imageTypeofString && image.contain

  const animationClass = useMemo(() => {
    let translate = 'md:translate-x-28'

    if (isReversed) {
      translate = 'md:-translate-x-28'
    }

    const baseClass = 'transition-all duration-1000 ease-out'
    const varClass = isVisible ? 'transition-all ease-out' : `${translate} opacity-0`

    return `${baseClass} ${varClass}`
  }, [isReversed, isVisible])

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 items-center md:grid-cols-12 gap-8 min-h-[240px] text-left ${styles.text} ${animationClass}`}
    >
      <div className={`${styles.textContainer}`}>
        <h3
          className={`text-2xl md:text-5xl mb-4 font-bold ${
            light ? 'text-neutral-800' : 'text-neutral-100'
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-base md:text-2xl mb-4 font-light ${
            light ? 'text-neutral-600' : 'text-neutral-300'
          }`}
        >
          {description}
        </p>
        {!!learnMoreUrl && (
          <Button theme={light ? 'primary' : 'secondary'} href={learnMoreUrl} arrow>
            Dowiedz sie wiecej
          </Button>
        )}
      </div>
      <div className={`${styles.imageContainer} h-64 md:h-[668px] relative`}>
        <div
          className={twMerge(
            'absolute top-0 h-full w-full',
            !isContained && 'shadow-2xl shadow-secondary-100/20'
          )}
        >
          <Image
            src={imageTypeofString ? image : prepareImg(image, 'Produkt').source.src}
            alt={imageTypeofString ? 'Produkt' : prepareImg(image, 'Produkt').source.alt}
            sizes={getImageSizes('98vw', '30vw', '510px')}
            fill
            className={twMerge('object-center', isContained ? 'object-contain' : 'object-cover')}
          />
        </div>
      </div>
    </div>
  )
}
