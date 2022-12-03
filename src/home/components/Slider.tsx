import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Pagination, Navigation } from 'swiper'
import Image from 'next/image'

export default function Slider() {
  return (
    <section className="relative">
      <div className="absolute top-12 left-0 w-full z-20">
        <h2 className="text-5xl amir-container uppercase tracking-widest">
          Dlaczego my?
        </h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[720px] flex container px-4 lg:px-16 py-16">
            <div className="mt-20 flex-1">
              <h3 className="text-h3 font-bold mb-4">Kompleksowość</h3>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                fuga odit assumenda autem dolorem quisquam iure dolor corrupti
                rerum vero voluptate quos tempora quis obcaecati voluptatibus,
                maxime earum, ut eum delectus. Eveniet omnis similique ullam
                quae maxime quo, deleniti saepe!
              </p>
            </div>
            <div className="flex-1 relative h-full w-full">
              <div className="h-full w-[80%] mx-auto relative">
                <Image
                  src="/images/icons/icon-kompleksowosc.svg"
                  alt="Kompleksowość"
                  fill
                  className="object-scale-down object-center"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[720px] flex container px-4 lg:px-16 py-16">
            <div className="mt-20 flex-1">
              <h3 className="text-h3 font-bold mb-4">Kompleksowość</h3>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                fuga odit assumenda autem dolorem quisquam iure dolor corrupti
                rerum vero voluptate quos tempora quis obcaecati voluptatibus,
                maxime earum, ut eum delectus. Eveniet omnis similique ullam
                quae maxime quo, deleniti saepe!
              </p>
            </div>
            <div className="flex-1 relative h-full w-full">
              <div className="h-full lg:w-[80%] mx-auto relative">
                <Image
                  src="/images/icons/icon-elastycznosc.svg"
                  alt="Kompleksowość"
                  fill
                  className="object-scale-down object-center"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  )
}
