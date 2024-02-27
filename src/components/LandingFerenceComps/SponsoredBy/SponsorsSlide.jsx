"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from 'swiper/modules';
import 'swiper/css';

function SponsorsSlide() {
  return (

    <div className="container position-relative zindex-5 pt-1 pt-md-2 pb-lg-2 pt-lg-4">
    <h2 className="h3 text-light text-center text-lg-start mb-4 mb-lg-5">Sponsored by:</h2>

   <Swiper 
      className="swiper ms-xxl-n5 me-xxl-n4" 
      modules={[Pagination]}
      spaceBetween={24}
      slidesPerView={2}
      pagination={{
      className: ".swiper-pagination",
        clickable: true}}
      breakpoints={{
        500: {
          slidesPerView: 3
        },
        650: {
          slidesPerView: 4
        },
        900: {
          slidesPerView: 5
        },
        1000: {
              slidesPerView: 6
            }

      }}

      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)} 
    >
     <div className="swiper-wrapper">

     <SwiperSlide>

       {/* <!-- Item --> */}
       <div className="swiper-slide">
          <Link href="#" className="d-block py-3">
          <Image src="/assets/img/brands/01.svg" width={154} height={154} className="d-block mx-auto" alt="Brand"/>
         </Link>
       </div>
            </SwiperSlide>

            <SwiperSlide>

       {/* <!-- Item --> */}
       <div className="swiper-slide">
          <Link href="#" className="d-block py-3">
          <Image src="/assets/img/brands/02.svg" width={154} height={154} className="d-block mx-auto" alt="Brand"/>
         </Link>
       </div>
            </SwiperSlide>

            <SwiperSlide>

       {/* <!-- Item --> */}
       <div className="swiper-slide">
          <Link href="#" className="d-block py-3">
          <Image src="/assets/img/brands/03.svg" width={154} height={154} className="d-block mx-auto" alt="Brand"/>
         </Link>
       </div>

            </SwiperSlide>

            <SwiperSlide>

       {/* <!-- Item --> */}
       <div className="swiper-slide">
          <Link href="#" className="d-block py-3">
          <Image src="/assets/img/brands/04.svg" width={154} height={154} className="d-block mx-auto" alt="Brand"/>
         </Link>
       </div>

            </SwiperSlide>

            <SwiperSlide>
       {/* <!-- Item --> */}
       <div className="swiper-slide">
          <Link href="#" className="d-block py-3">
          <Image src="/assets/img/brands/05.svg" width={154} height={154} className="d-block mx-auto" alt="Brand"/>
         </Link>
       </div>

            </SwiperSlide>

            <SwiperSlide>
       {/* <!-- Item --> */}
       <div className="swiper-slide">
          <Link href="#" className="d-block py-3">
          <Image src="/assets/img/brands/06.svg" width={154} height={154} className="d-block mx-auto" alt="Brand"/>
         </Link>
       </div>
            </SwiperSlide>

     </div>
     
     {/* <!-- Pagination (bullets) --> */}
     {/* <div className="swiper-pagination position-relative pt-2 mt-4"></div>
   </div>   */}
</Swiper>
</div>
  )
}

export default SponsorsSlide