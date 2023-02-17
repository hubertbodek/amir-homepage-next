import { Swiper } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import {
  NavigationArrowNext,
  NavigationArrowPrev,
} from 'components/shared/carousel/CustomNavigation'
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
        pagination={{
          el: '.custom-pagination',
        }}
        modules={[Pagination]}
        className="mobile-carousel block overflow-x-clip md:hidden"
      >
        {renderSlides(slides)}
        <div className="my-8 flex items-center justify-center">
          <NavigationArrowPrev />
          <div className="custom-pagination !mx-4 !inline-block !w-auto" />
          <NavigationArrowNext />
        </div>
      </Swiper>
    </div>
  )
}
