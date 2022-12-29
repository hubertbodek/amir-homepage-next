import { useMemo } from 'react'
import { SwiperSlide } from 'swiper/react'

export default function RenderSlides(slides: React.ReactNode[]) {
  return useMemo(
    () =>
      slides
        .filter((slide) => slide)
        .map((slide, idx) => <SwiperSlide key={`slide-${idx}`}>{slide}</SwiperSlide>),
    [slides]
  )
}
