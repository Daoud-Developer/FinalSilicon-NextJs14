"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import Image from 'next/image';

function IndustriesSlider() {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide index

  const industryImages = [
    "/assets/img/landing/software-agency-3/industries/01.jpg",
    "/assets/img/landing/software-agency-3/industries/02.jpg",
    "/assets/img/landing/software-agency-3/industries/03.jpg"
  ];

  return (
    <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
      <h2 className="h1 mb-4 text-center d-lg-none">Industries We Serve</h2>
      <div className="row gy-md-5 gy-4 mb-xl-3">
        <div className="col-xl-4 col-lg-5 d-flex flex-column order-2 order-lg-1">
          <h2 className="h1 mb-4 pb-3 pt-2 d-none d-lg-block">Industries We Serve</h2>

          {/* Swiper slider */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            loop={true}
            navigation={{
              prevEl: '#prev-industry',
              nextEl: '#next-industry',
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update the active index on slide change
            className="swiper mx-0"
          >
            <SwiperSlide>
              <h3 className="h5 mb-lg-4 mb-3">Finance and insurance</h3>
              <p>Risus massa fames metus lectus diam maecenas dui. Nibh morbi id purus eget tellus diam, integer blandit.
               Ac condimentum a nisl sagittis, interdum. Et viverra maecenas quis cras sed gravida volutpat, cursus enim. 
               </p>
            </SwiperSlide>
            <SwiperSlide>
              <h3 className="h5 mb-lg-4 mb-3">Startup and technology</h3>
              <p>
              Interdum amet lobortis viverra et sapien aliquam nunc amet.
              Bibendum eu pellentesque sit risus leo commodo.
              Nibh dictum tellus lectus in risus eget cursus
              vitae nisi lacinia aliquam utuismod cras pellentesque.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <h3 className="h5 mb-lg-4 mb-3">E-commerce</h3>
              <p>
              Egestas nunc eleifend lacinia suspendisse bibendum ultrices risus.
              Facilisis neque eleifend diam orci id.
              Iaculis dignissim sed malesuada porttitor 
              ac iaculis nullam donec sed 
              volutpat quis vulputate sollicitudin tincidunt.
               </p>
            </SwiperSlide>
          </Swiper>

          {/* Swiper controls (Prev / next buttons) */}
          <div className="d-flex justify-content-center justify-content-lg-start mt-2 mt-lg-auto">
            <button type="button" id="prev-industry" className="btn btn-prev btn-icon btn-sm me-2" aria-label="Previous">
              <i className="bx bx-chevron-left"></i>
            </button>
            <button type="button" id="next-industry" className="btn btn-next btn-icon btn-sm ms-2" aria-label="Next">
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="col-lg-7 offset-xl-1 order-1 order-lg-2">
          {/* Swiper tabs (Industry images) */}
          <div className="swiper-tabs">
            <Image src={industryImages[activeIndex]} width={800} height={800} className="rounded-3 shadow-lg" alt="Image description" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesSlider;

