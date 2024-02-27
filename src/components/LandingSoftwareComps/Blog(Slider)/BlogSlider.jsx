"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function BlogSlider() {
  return (
    <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1} // Default to 1 view
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
          className: '.swiper-pagination',
        }}
        className="swiper mb-xl-3 text-sm-start text-center"
      >
        {/* SwiperSlide items */}
        <SwiperSlide className="swiper-slide h-auto">
       {/* <!-- Swiper item --> */}
          <article className="card h-100 border-0 bg-transparent">
            <div className="position-relative">
              <Link href="#" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
              <Image src="/assets/img/blog/05.jpg" width={800} height={800} className="rounded-3" alt="Image"/>
            </div>
            <div className="card-body pb-0 px-0">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Business</Link>
                <span className="fs-sm text-muted">12 hours ago</span>
              </div>
              <h3 className="h5 mb-0 fw-semibold">
                <Link href="#">How to check the website before releasing?</Link>
              </h3>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide h-auto">
       {/* <!-- Swiper item --> */}
       <article className="card h-100 border-0 bg-transparent">
            <div className="position-relative">
              <Link href="#" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
              <Image src="/assets/img/blog/07.jpg" width={800} height={800} className="rounded-3" alt="Image"/>
            </div>
            <div className="card-body pb-0 px-0">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Digital</Link>
                <span className="fs-sm text-muted">11 hours ago</span>
              </div>
              <h3 className="h5 mb-0 fw-semibold">
                <Link href="#">Inclusive Marketing: Why and How Does it Work?</Link>
              </h3>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide h-auto">
       {/* <!-- Swiper item --> */}
       <article className="card h-100 border-0 bg-transparent">
            <div className="position-relative">
              <Link href="#" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
              <Image src="/assets/img/blog/08.jpg" width={800} height={800} className="rounded-3" alt="Image"/>
            </div>
            <div className="card-body pb-0 px-0">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Development</Link>
                <span className="fs-sm text-muted">10 hours ago</span>
              </div>
              <h3 className="h5 mb-0 fw-semibold">
                <Link href="#">Your Guide to Optimising A JavaScript-enabled Website</Link>
              </h3>
            </div>
          </article>
        </SwiperSlide>
     {/* <!-- Swiper pagination --> */}
     <div className="swiper-pagination position-static mt-4 pt-lg-3 pt-2"></div>
      </Swiper>
      {/* Swiper pagination is automatically generated */}
    </section>
  );
}

export default BlogSlider;
