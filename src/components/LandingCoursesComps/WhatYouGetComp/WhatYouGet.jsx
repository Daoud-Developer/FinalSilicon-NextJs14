"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
import 'swiper/css';

function WhatYouGet() {
  return (
      <section className="container pt-1 pt-xl-3 pb-5">
      <h2 className="h1 text-center pb-3 pb-md-0 mb-md-5">What You Get</h2>
      <Swiper 
            className="swiper swiper-nav-onhover mt-n3 mx-n2"
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={8}
            pagination={{ 
            className: ".swiper-pagination",
            clickable: true 
            }}
            breakpoints= {{
          600: {
            "slidesPerView": 2
          },
          1000: {
            "slidesPerView": 3
          }}}>

      
        <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide h-auto py-3">
          {/* <!-- Item --> */}
            <div className="card card-hover h-100 mx-2">
              <div className="card-body">
                <div className="d-table position-relative p-3 mb-4">
                  <Image src="/assets/img/landing/online-courses/icons/01.svg" 
                  className="position-relative zindex-2" width={32} height={32} alt="Icon"/>
                  <span className="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-circle opacity-8"></span>
                </div>
                <h3 className="h5 pb-1 mb-2">25K+ Online Video Courses</h3>
                <p className="mb-0">Leo condimentum dignissim venenatis sit dignissim vel. Adipiscing tristique dictum vitae elementum neque.</p>
              </div>
            </div>
              </SwiperSlide>

              <SwiperSlide  className="swiper-slide h-auto py-3">
          {/* <!-- Item --> */}   
            <div className="card card-hover h-100 mx-2">
              <div className="card-body">
                <div className="d-table position-relative p-3 mb-4">
                  <Image src="/assets/img/landing/online-courses/icons/02.svg" width={32} height={32} 
                  className="position-relative zindex-2"  alt="Icon"/>
                  <span className="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-circle opacity-8"></span>
                </div>
                <h3 className="h5 pb-1 mb-2">Mentor-Based Learning</h3>
                <p className="mb-0">Ac dapibus lacus, malesuada ridiculus donec condimentum nunc vestibulum. Mi feugiat tellus faucibus fermentum mattis ultrices.</p>
              </div>
            </div>
                  </SwiperSlide>
                  <SwiperSlide  className="swiper-slide h-auto py-3">
          {/* <!-- Item --> */}    
            <div className="card card-hover h-100 mx-2">
              <div className="card-body">
                <div className="d-table position-relative p-3 mb-4">
                  <Image src="/assets/img/landing/online-courses/icons/03.svg" width={32} height={32} 
                  className="position-relative zindex-2"  alt="Icon"/>
                  <span className="bg-primary position-absolute top-0 start-0 w-100 h-100 rounded-circle opacity-8"></span>
                </div>
                <h3 className="h5 pb-1 mb-2">Lifetime Access</h3>
                <p className="mb-0">Donec interdum risus convallis tristique quis elit. Sapien turpis enim, viverra cursus facilisis dignissim condimentum.</p>
              </div>
            </div>
                  </SwiperSlide>
        </div>

        {/* <!-- Pagination (bullets) --> */}
        <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
      </Swiper>
    </section>
  )
}

export default WhatYouGet