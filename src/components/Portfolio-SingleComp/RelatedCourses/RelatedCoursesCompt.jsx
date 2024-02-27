"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';

function RelatedCoursesCompt() {
  return (
      <section  className="bg-secondary pt-5 pb-4 pb-lg-5">
      <div  className="container py-2 pt-lg-4 pb-lg-0">
        <h2  className="h1 text-center pb-4">More courses like this</h2>
        <Swiper 
            className="swiper mx-n2" 
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={8}
            pagination={{
                  "type": "bullets",
                  "clickable": true
                  }}
            breakpoints={{
                  "560": {
                        "slidesPerView": 2
                        },
                  "1000": {
                        "slidesPerView": 3
                        },}}>
          <div  className="swiper-wrapper">

          <SwiperSlide className="swiper-slide h-auto pb-3">

            {/* <!-- Item --> */}
        
              <article  className="card h-100 border-0 shadow-sm mx-2">
                <div  className="position-relative">
                  <Link href="#"  className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link"></Link>
                  <Link href="#"  className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
                    <i  className="bx bx-bookmark"></i>
                  </Link>
                  <Image src="/assets/img/portfolio/courses/02.jpg"  width={800} height={800} className="card-img-top" alt="Image"/>
                </div>
                <div  className="card-body pb-3">
                  <h3  className="h5 mb-2">
                    <Link href="#">HTML, CSS, JavaScript Web Developer</Link>
                  </h3>
                  <p  className="fs-sm mb-2">By Jenny Wilson &amp; Marvin McKinney</p>
                  <p  className="fs-lg fw-semibold text-primary mb-0">$15.99</p>
                </div>
                <div  className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                  <div  className="d-flex align-items-center me-4">
                    <i  className="bx bx-time fs-xl me-1"></i>
                    160 hours
                  </div>
                  <div  className="d-flex align-items-center">
                    <i  className="bx bx-like fs-xl me-1"></i>
                    92% (3.1K)
                  </div>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide h-auto pb-3">

            {/* <!-- Item --> */}
              <article  className="card h-100 border-0 shadow-sm mx-2">
                <div  className="position-relative">
                  <Link href="#"  className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link"></Link>
                  <span  className="badge bg-danger position-absolute top-0 start-0 zindex-2 mt-3 ms-3">Sale!</span>
                  <Link href="#"  className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
                    <i  className="bx bx-bookmark"></i>
                  </Link>
                  <Image src="/assets/img/portfolio/courses/03.jpg"  width={800} height={800} className="card-img-top" alt="Image"/>
                </div>
                <div  className="card-body pb-3">
                  <h3  className="h5 mb-2">
                    <Link href="#">HTML, CSS, JavaScript Web Developer</Link>
                  </h3>
                  <p  className="fs-sm mb-2">By Robert Fox</p>
                  <p  className="text-muted mb-0"><span  className="fs-lg fw-semibold text-danger me-2">$9.99</span><del>$44.99</del></p>
                </div>
                <div  className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                  <div  className="d-flex align-items-center me-4">
                    <i  className="bx bx-time fs-xl me-1"></i>
                    210 hours
                  </div>
                  <div  className="d-flex align-items-center">
                    <i  className="bx bx-like fs-xl me-1"></i>
                    98% (2.7K)
                  </div>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide h-auto pb-3">

            {/* <!-- Item --> */}
              <article  className="card h-100 border-0 shadow-sm mx-2">
                <div  className="position-relative">
                  <Link href="#"  className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link"></Link>
                  <Link href="#"  className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
                    <i  className="bx bx-bookmark"></i>
                  </Link>
                  <Image src="/assets/img/portfolio/courses/09.jpg"  width={800} height={800} className="card-img-top" alt="Image"/>
                </div>
                <div  className="card-body pb-3">
                  <h3  className="h5 mb-2">
                    <Link href="#">Learn JMETER from Scratch on Live Apps-Performance Testing</Link>
                  </h3>
                  <p  className="fs-sm mb-2">By Jenny Wilson</p>
                  <p  className="fs-lg fw-semibold text-primary mb-0">$14.50</p>
                </div>
                <div  className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                  <div  className="d-flex align-items-center me-4">
                    <i  className="bx bx-time fs-xl me-1"></i>
                    120 hours
                  </div>
                  <div  className="d-flex align-items-center">
                    <i  className="bx bx-like fs-xl me-1"></i>
                    92% (3.8K)
                  </div>
                </div>
              </article>
            </SwiperSlide>
          </div>

          {/* <!-- Pagination (bullets) --> */}
          <div  className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
            </Swiper>
        </div>
    </section>
  )
}

export default RelatedCoursesCompt