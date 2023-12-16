import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import renderSlides from 'components/shared/carousel/RenderSlides'
import type { CarouselProps } from 'components/shared/carousel/Carousel'

export default function MobileCarousel({ children: slides, options }: CarouselProps) {
  const slideWidth = options?.autoWidth ? 'auto' : '87vw'

  return (
    <div
      className="carousel-wrapper"
      style={{ '--slide-width': `${slideWidth}` } as React.CSSProperties}
    >
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={options?.centered}
        spaceBetween={16}
        className="mobile-carousel block overflow-x-clip md:hidden"
      >
        {renderSlides(slides)}
      </Swiper>
    </div>
  )
}
