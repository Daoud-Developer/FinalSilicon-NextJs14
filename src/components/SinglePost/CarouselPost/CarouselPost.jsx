"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';


function CarouselPost() {
  return (
    <Swiper 
    className='swiper mx-n2'
    modules={[Pagination]}
    spaceBetween={8}
    slidesPerView={1}
    pagination={{
      className: ".swiper-pagination",
      clickable: true, 
    }}
    breakpoints={{
      500: {
        slidesPerView: 2
      },
      1000: {
        slidesPerView: 3
      }}}>

    <div className="swiper-wrapper">
   
    
    <SwiperSlide>
             {/* <!-- Item --> */}
             <div className="swiper-slide h-auto pb-3">
              <article className="card border-0 shadow-sm h-100 mx-2">
                <div className="position-relative">
                 <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                 <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                    <i className="bx bx-bookmark"></i>
                 </Link>
                  <Image src="/assets/img/blog/01.jpg" width={800} height={800} className="card-img-top" alt="Image"/>
                </div>
                <div className="card-body pb-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                   <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Business</Link>
                    <span className="fs-sm text-muted">May 19, 2023</span>
                  </div>
                  <h3 className="h5 mb-0">
                   <Link href="//blog/singlepost/1">5 Bad Landing Page Examples &amp; How We Would Fix Them</Link>
                  </h3>
                </div>
                <div className="card-footer py-4">
                 <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                    <Image src="/assets/img/avatar/01.jpg" className="rounded-circle me-3" width={48} height={48} alt="Avatar"/>
                    Jerome Bell
                 </Link>
                </div>
              </article>
            </div>
    </SwiperSlide>
    
    <SwiperSlide>      
            {/* <!-- Item --> */}
            <div className="swiper-slide h-auto pb-3">
              <article className="card border-0 shadow-sm h-100 mx-2">
                <div className="position-relative">
                 <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                 <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" 
                  data-bs-toggle="tooltip" 
                  data-bs-placement="left"
                   title="Read later" 
                   aria-label="Read later">
                    <i className="bx bx-bookmark"></i>
                 </Link>
                  <Image src="/assets/img/blog/06.jpg" width={800} height={800} className="card-img-top" alt="Image"/>
                </div>
                <div className="card-body pb-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                   <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Marketing</Link>
                    <span className="fs-sm text-muted">Apr 2, 2023</span>
                  </div>
                  <h3 className="h5 mb-0">
                   <Link href="/blog/singlepost/1">How Agile is Your Forecasting Process?</Link>
                  </h3>
                </div>
                <div className="card-footer py-4">
                 <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                    <Image src="/assets/img/avatar/05.jpg" className="rounded-circle me-3" width={48} height={48} alt="Avatar"/>
                    Albert Flores
                 </Link>
                </div>
              </article>
            </div>
    </SwiperSlide>
    
    <SwiperSlide>     
            {/* <!-- Item --> */}
            <div className="swiper-slide h-auto pb-3">
              <article className="card border-0 shadow-sm h-100 mx-2">
                <div className="position-relative">
                 <Link href="/blog-single" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                 <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                    <i className="bx bx-bookmark"></i>
                 </Link>
                  <Image src="/assets/img/blog/03.jpg" width={800} height={800} className="card-img-top" alt="Image"/>
                </div>
                <div className="card-body pb-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                   <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Business</Link>
                    <span className="fs-sm text-muted">Sep 16, 2023</span>
                  </div>
                  <h3 className="h5 mb-0">
                   <Link href="/blog/singlepost/1">This Week in Search: New Limits and Exciting Features</Link>
                  </h3>
                </div>
                <div className="card-footer py-4">
                 <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                    <Image src="/assets/img/avatar/02.jpg" className="rounded-circle me-3" width={48} height={48} alt="Avatar"/>
                    Ralph Edwards
                 </Link>
                </div>
              </article>
            </div>
    </SwiperSlide>

    </div>
   
  </Swiper>
  
);
}
export default CarouselPost