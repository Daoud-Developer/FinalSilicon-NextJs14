"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function BenefitsSlider() {
  return (
    <section className="container mb-lg-5 mb-4 pb-3">
      <h2 className="h1 mb-lg-5 mb-4 pb-lg-0 pb-md-2 text-center">Our Benefits</h2>

      {/* Swiper slider */}
      <Swiper className="swiper mb-xl-3 text-sm-start text-center"
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        pagination={{
          className: '.swiper-pagination',
          clickable: true,
        }}
        
      >
        <SwiperSlide  className="swiper-slide">
              <div className="mx-sm-0 mx-auto" style={{maxWidth: "19.125rem"}}>
                <h4 className="h5 mb-3">Prototype in 24 hrs</h4>
                <p className="mb-0">Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida id. Imperdiet elit integer elit.</p>
              </div>
        </SwiperSlide>

        {/* Repeat for other benefits */}
        <SwiperSlide  className="swiper-slide">
              <div className="mx-sm-0 mx-auto" style={{maxWidth: "19.125rem"}}>
                <h4 className="h5 mb-3">MVP within two weeks</h4>
                <p className="mb-0">Purus netus eget facilisis morbi pellentesque. Fermentum mi sit a mi ebentot pellentesque.</p>
              </div>
        </SwiperSlide>
        
        <SwiperSlide  className="swiper-slide">
              <div className="mx-sm-0 mx-auto" style={{maxWidth: "19.125rem"}}>
                <h4 className="h5 mb-3">Kickstart development</h4>
                <p className="mb-0">Purus netus eget facilisis morbi pellentesque. Fermentum mi sit a mi ebentot pellentesque.</p>
              </div>
        </SwiperSlide>
        <SwiperSlide  className="swiper-slide">
              <div className="mx-sm-0 mx-auto" style={{maxWidth: "19.125rem"}}>
                <h4 className="h5 mb-3">24/7 Tech support</h4>
                <p className="mb-0">Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida id. Imperdiet elit integer elit.</p>
              </div>
        </SwiperSlide>

      </Swiper>
    </section>
  );
}

export default BenefitsSlider;
