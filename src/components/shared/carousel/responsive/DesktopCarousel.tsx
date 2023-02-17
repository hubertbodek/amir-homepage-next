import { Pagination } from 'swiper'
import { Swiper } from 'swiper/react'
import 'swiper/css'

import {
  NavigationArrowNext,
  NavigationArrowPrev,
  NavigationBottom,
} from 'components/shared/carousel/CustomNavigation'
import renderSlides from 'components/shared/carousel/RenderSlides'
import type { CarouselProps } from 'components/shared/carousel/Carousel'

export default function DesktopCarousel({ children: slides, options }: CarouselProps) {
  return (
    <div className="carousel-wrapper">
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        loop={options?.isLooped}
        centeredSlides={true}
        className={`hidden !overflow-visible md:block ${
          options?.isBottomNavigation ? 'desktop-bottom-nav-carousel' : 'desktop-carousel'
        }`}
        pagination={{
          el: '.custom-pagination',
          type: 'progressbar',
        }}
        modules={[Pagination]}
      >
        {renderSlides(slides)}
        {options?.isBottomNavigation ? (
          <NavigationBottom />
        ) : (
          <>
            <NavigationArrowPrev />
            <NavigationArrowNext />
          </>
        )}
      </Swiper>
    </div>
  )
}
