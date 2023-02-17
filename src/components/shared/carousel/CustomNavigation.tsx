import { useSwiper } from 'swiper/react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const commonArrowClass =
  'h-10 w-10 rounded-full bg-gray-200 p-3 shadow-inner max-md:border max-md:border-gray-400'

function NavigationArrowNext() {
  const swiper = useSwiper()

  return (
    <button
      aria-label="next slide"
      className={`nav-arrow-next ${commonArrowClass}`}
      onClick={() => swiper.slideNext()}
    >
      <ChevronRightIcon className="h-full w-full text-gray-900" />
    </button>
  )
}

function NavigationArrowPrev() {
  const swiper = useSwiper()

  return (
    <button
      aria-label="previous slide"
      className={`nav-arrow-prev rotate-180 ${commonArrowClass}`}
      onClick={() => swiper.slidePrev()}
    >
      <ChevronRightIcon className="h-full w-full text-gray-900" />
    </button>
  )
}

function NavigationBottom() {
  const swiper = useSwiper()

  return (
    <div className="flex items-center justify-center py-10">
      <button className="rotate-180" onClick={() => swiper.slidePrev()}>
        x
      </button>
      <div className="custom-pagination !relative !mx-4 !w-20" />
      <button onClick={() => swiper.slideNext()}></button>
    </div>
  )
}

export { NavigationArrowNext, NavigationArrowPrev, NavigationBottom }
