'use client'
import Image from 'next/image'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState, useEffect, useRef } from 'react'

const Banner = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const el = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (el.current) {
      setIsLoading(false)
    }
  }, [el.current])

  return (
    <section
      ref={el}
      className={`flex gap-[10px] mt-2 sm:mt-0 transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'
        }`}
    >
      <div className='w-full md:w-[65%] lg:w-[510px] relative'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          modules={[Autoplay, Pagination]}
          pagination={{ el: '.swiper-pagination', clickable: true }}
        >
          <SwiperSlide>

            <div
              className='bg-no-repeat bg-cover w-full h-[260px] md:h-[380px] bg-top md:bg-center'
              style={{
                backgroundImage: `url('banner1.png')`
              }}
            />

          </SwiperSlide>
          <SwiperSlide>

            <div
              className='bg-no-repeat bg-cover w-full h-[260px] md:h-[380px] bg-bottom md:bg-center'
              style={{
                backgroundImage: `url('banner2.png')`
              }}
            />

          </SwiperSlide>
          <SwiperSlide>

            <div
              className='bg-no-repeat bg-cover w-full h-[260px] md:h-[380px] bg-top md:bg-center'
              style={{
                backgroundImage: `url('banner3.png')`
              }}
            />
          </SwiperSlide>
        </Swiper>
        <div
          id='swiper-banner-pagination'
          className='swiper-pagination right-0 bottom-[2px_!important]'
        />
      </div>
      <div className='flex-shrink-0 hidden md:grid grid-cols-6 gap-[10px] flex-1'>
        <div className='col-span-6 flex lg:flex-row flex-col items-center gap-[10px]'>

          <p
            className='bg-no-repeat bg-cover w-full h-full bg-center'
            style={{
              backgroundImage: `url('banner4.png')`
            }}
          />

          <p
            className='bg-no-repeat bg-cover w-full h-full bg-center'
            style={{
              backgroundImage: `url('banner5.png')`
            }}
          />

        </div>
        <div className='col-span-6 items-center gap-[10px] md:hidden lg:flex'>

          <p
            className='bg-no-repeat bg-cover w-full h-full'
            style={{
              backgroundImage: `url('banner6.png')`
            }}
          />

          <p
            className='bg-no-repeat bg-cover w-full h-full'
            style={{
              backgroundImage: `url('banner7.png')`
            }}
          />

          <p
            className='bg-no-repeat bg-cover w-full h-full'
            style={{
              backgroundImage: `url('banner8.png')`
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
