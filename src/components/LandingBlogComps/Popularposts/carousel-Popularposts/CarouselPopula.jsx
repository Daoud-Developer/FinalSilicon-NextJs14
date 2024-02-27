"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from 'swiper/modules';
import 'swiper/css';

// import './carousel.module.css';
const Carousel = () => {


  return (
      <Swiper 
      modules={[Pagination]}
      centeredSlides={true}
      slidesPerView={1}
      loop={true}
      pagination={{
        className: ".swiper-pagination",
        clickable: true, 
        // dynamicBullets: true, 
      }}
      breakpoints={{
        0: {
          slidesPerView: 1
        },
        576: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4
        }

      }}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} 
    >
     
      <SwiperSlide>
                 {/* <!-- Item --> */}
              <div className="swiper-slide h-auto px-2">
                <article className="card border-0 h-100 mx-1">
                  <div className="position-relative">
                     <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                     <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                      <i className="bx bx-bookmark"></i>
                    </Link>
                    <Image src="/assets/img/blog/01.jpg" width={500} height={300} className="card-img-top" alt="Image"/>
                  </div>
                  <div className="card-body pb-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                       <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Web design</Link>
                      <span className="fs-sm text-muted">May 19, 2023</span>
                    </div>
                    <h3 className="h5 mb-0">
                       <Link href="/blog/singlepost/1">5 Bad Landing Page Examples &amp; How We Would Fix Them</Link>
                    </h3>
                  </div>
                  <div className="card-footer py-4">
                     <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                      <Image src="/assets/img/avatar/06.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                      Annette Black
                    </Link>
                  </div>
                </article>
              </div>
      </SwiperSlide>
      <SwiperSlide>
              {/* <!-- Item --> */}
              <div className="swiper-slide h-auto px-2">
                <article className="card border-0 h-100 mx-1">
                  <div className="position-relative">
                     <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                     <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                      <i className="bx bx-bookmark"></i>
                    </Link>
                    <Image src="/assets/img/blog/03.jpg" width={500} height={300} className="card-img-top" alt="Image"/>
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
                      <Image src="/assets/img/avatar/02.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                      Ralph Edwards
                    </Link>
                  </div>
                </article>
              </div>          
      </SwiperSlide>
      <SwiperSlide>   
              {/* <!-- Item --> */}
              <div className="swiper-slide h-auto px-2">
                <article className="card border-0 h-100 mx-1">
                  <div className="position-relative">
                     <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                     <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                      <i className="bx bx-bookmark"></i>
                    </Link>
                    <Image src="/assets/img/blog/03.jpg" width={500} height={300} className="card-img-top" alt="Image"/>
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
                      <Image src="/assets/img/avatar/02.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                      Ralph Edwards
                    </Link>
                  </div>
                </article>
              </div>

      </SwiperSlide>
      <SwiperSlide>
                  {/* <!-- Item --> */}
              <div className="swiper-slide h-auto px-2">
                <article className="card border-0 h-100 mx-1">
                  <div className="position-relative">
                     <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                     <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                      <i className="bx bx-bookmark"></i>
                    </Link>
                    <Image src="/assets/img/blog/04.jpg" width={500} height={300} className="card-img-top" alt="Image"/>
                  </div>
                  <div className="card-body pb-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                       <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Processes &amp; Tools</Link>
                      <span className="fs-sm text-muted">12 hours ago</span>
                    </div>
                    <h3 className="h5 mb-0">
                       <Link href="/blog/singlepost/1">Five Effective Lead Generation Techniques For Your Business</Link>
                    </h3>
                  </div>
                  <div className="card-footer py-4">
                     <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                      <Image src="/assets/img/avatar/03.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                      Esther Howard
                    </Link>
                  </div>
                </article>
              </div>
      </SwiperSlide>
      <SwiperSlide>
   {/* <!-- Item --> */}
   <div className="swiper-slide h-auto px-2">
                <article className="card border-0 h-100 mx-1">
                  <div className="position-relative">
                     <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                     <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                      <i className="bx bx-bookmark"></i>
                    </Link>
                    <Image src="/assets/img/blog/05.jpg" width={500} height={300} className="card-img-top" alt="Image"/>
                  </div>
                  <div className="card-body pb-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                       <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Digital</Link>
                      <span className="fs-sm text-muted">Oct 9, 2023</span>
                    </div>
                    <h3 className="h5 mb-0">
                       <Link href="/blog/singlepost/1">Inclusive Marketing: Why and How Does it Work?</Link>
                    </h3>
                  </div>
                  <div className="card-footer py-4">
                     <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                      <Image src="/assets/img/avatar/04.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                      Jane Cooper
                    </Link>
                  </div>
                </article>
              </div>

      </SwiperSlide>
      <SwiperSlide>
 
              {/* <!-- Item --> */}
              <div className="swiper-slide h-auto px-2">
                <article className="card border-0 h-100 mx-1">
                  <div className="position-relative">
                     <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                     <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                      <i className="bx bx-bookmark"></i>
                    </Link>
                    <Image src="/assets/img/blog/06.jpg" width={500} height={300} className="card-img-top" alt="Image"/>
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
                      <Image src="/assets/img/avatar/05.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                      Albert Flores
                    </Link>
                  </div>
                </article>
              </div>

      </SwiperSlide>
             <SwiperSlide>
   {/* <!-- Item --> */}
   <div className="swiper-slide h-auto px-2">
                <article className="card border-0 h-100 mx-1">
                  <div className="position-relative">
                     <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                     <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                      <i className="bx bx-bookmark"></i>
                    </Link>
                    <Image src="/assets/img/blog/07.jpg" width={500} height={300} className="card-img-top" alt="Image"/>
                  </div>
                  <div className="card-body pb-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                       <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Processes &amp; Tools</Link>
                      <span className="fs-sm text-muted">Sep 3, 2023</span>
                    </div>
                    <h3 className="h5 mb-0">
                       <Link href="/blog/singlepost/1">Your Guide to Optimising A JavaScript-enabled Website</Link>
                    </h3>
                  </div>
                  <div className="card-footer py-4">
                     <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                      <Image src="/assets/img/avatar/02.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                      Ralph Edwards
                    </Link>
                  </div>
                </article>
              </div>
      </SwiperSlide>
      <div className="swiper-pagination position-relative pt-1 pt-sm-3 mt-5 d-xl-none d-flex"></div>
    </Swiper>
    
  );
}

export default Carousel;

