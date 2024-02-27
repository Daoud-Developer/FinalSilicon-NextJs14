"use client";
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

function BrandsCarousel() {
  return (
    <Swiper 
      modules={[Autoplay]}
      className="swiper mx-n2 mt-lg-5 mt-sm-2 mt-md-4 pt-4"
         slidesPerView ={2}
         loop={true}
         autoplay={{
            autoplay: true,
            "delay": 2500,
            "disableOnInteraction": false
         }}
         breakpoints={{
           500: {
             "slidesPerView": 3,
             "spaceBetween": 8
           },
           650: {
             "slidesPerView": 4,
             "spaceBetween": 8
           },
           900: {
             "slidesPerView": 5,
             "spaceBetween": 8
           },
           1100: {
             "slidesPerView": 6,
             "spaceBetween": 8
           }
         }}>
         <div className="swiper-wrapper">

                  <SwiperSlide className="swiper-slide py-3">
           {/* <!-- Item --> */}

             <Link href="#" className="card card-body bg-none border-0 px-2 mx-2">
               <Image src="/assets/img/brands/01.svg" className="d-block mx-auto my-2" width={154} height={154} alt="Brand"/>
             </Link>
             </SwiperSlide>

              <SwiperSlide className="swiper-slide py-3">

           {/* <!-- Item --> */}

             <Link href="#" className="card card-body bg-none border-0 px-2 mx-2">
               <Image src="/assets/img/brands/02.svg" className="d-block mx-auto my-2" width={154} height={154} alt="Brand"/>
             </Link>
                  </SwiperSlide>

           {/* <!-- Item --> */}
            <SwiperSlide className="swiper-slide py-3">
             <Link href="#" className="card card-body bg-none border-0 px-2 mx-2">
               <Image src="/assets/img/brands/03.svg" className="d-block mx-auto my-2" width={154} height={154} alt="Brand"/>
             </Link>
             </SwiperSlide>

           {/* <!-- Item --> */}
            <SwiperSlide className="swiper-slide py-3">
             <Link href="#" className="card card-body bg-none border-0 px-2 mx-2">
               <Image src="/assets/img/brands/04.svg" className="d-block mx-auto my-2" width={154} height={154} alt="Brand"/>
             </Link>
                  </SwiperSlide>

           {/* <!-- Item --> */}
            <SwiperSlide className="swiper-slide py-3">
             <Link href="#" className="card card-body bg-none border-0 px-2 mx-2">
               <Image src="/assets/img/brands/05.svg" className="d-block mx-auto my-2" width={154} height={154} alt="Brand"/>
             </Link>
             </SwiperSlide>

           {/* <!-- Item --> */}
            <SwiperSlide className="swiper-slide py-3">
             <Link href="#" className="card card-body bg-none border-0 px-2 mx-2">
               <Image src="/assets/img/brands/06.svg" className="d-block mx-auto my-2" width={154} height={154} alt="Brand"/>
             </Link>
                  </SwiperSlide>
                  </div>

         {/* <!-- Pagination (bullets) --> */}
         <div className="swiper-pagination position-relative pt-2 mt-4"></div>
      </Swiper>
  )
}

export default BrandsCarousel