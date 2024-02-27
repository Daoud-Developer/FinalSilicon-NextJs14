"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

function CoursesSlider() {
  return (
    <div className="col-lg-9 col-md-8">
     
      {/* <!-- Title + prev/next buttons --> */}
      <div className="d-flex align-items-center justify-content-between pb-4 mb-3">
        <h2 className="h1 mb-0 me-3">Popular Courses</h2>
        <div className="d-flex">
          <button type="button" id="popular-prev" className="btn btn-prev btn-icon btn-sm me-2" aria-label="Previous">
            <i className="bx bx-chevron-left"></i>
          </button>
          <button type="button" id="popular-next" className="btn btn-next btn-icon btn-sm ms-2" aria-label="Next">
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* <!-- Courses slider --> */}
      <Swiper  
      modules={[Pagination, Navigation]}
      className="swiper swiper-nav-onhover mx-n2"
      slidesPerView={1}
      spaceBetween={8}
      pagination={{
       className: ".swiper-pagination",
       clickable: true,}}
       navigation={{
          prevEl:"#popular-prev",
          nextEl: "#popular-next",
        }}
        breakpoints= {{
          560:{
            "slidesPerView": 2
          },
          768: {
            "slidesPerView": 1
          },
          850: {
            "slidesPerView": 2
          },
          1200: {
            "slidesPerView": 3
          }
          }}>
    <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide h-auto pb-3" >
             {/* <!-- Item --> */}
            <article className="card h-100 border-0 shadow-sm mx-2">
              <div className="position-relative">
                  <Link href="/landing-courses/portfolio-courses/portfolio-single" className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link">  </Link>
                <span className="badge bg-success position-absolute top-0 start-0 zindex-2 mt-3 ms-3">Best Seller</span>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/portfolio/courses/01.jpg" width={300} height={200} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-3">
                <h3 className="h5 mb-2">
                    <Link href="/landing-courses/portfolio-courses/portfolio-single">
                  Fullstack Web Developer Course from Scratch  </Link>
                </h3>
                <p className="fs-sm mb-2">By Albert Flores</p>
                <p className="fs-lg fw-semibold text-primary mb-0">$12.50</p>
              </div>
              <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                <div className="d-flex align-items-center me-4">
                  <i className="bx bx-time fs-xl me-1"></i>
                  220 hours
                </div>
                <div className="d-flex align-items-center">
                  <i className="bx bx-like fs-xl me-1"></i>
                  94% (4.2K)
                </div>
              </div>
            </article>
        </SwiperSlide>
      
      <SwiperSlide className="swiper-slide h-auto pb-3" >
                  
          {/* <!-- Item --> */}
   
            <article className="card h-100 border-0 shadow-sm mx-2">
              <div className="position-relative">
                  <Link href="/landing-courses/portfolio-courses/portfolio-single" className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link">  </Link>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/portfolio/courses/02.jpg" width={300} height={200} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-3">
                <h3 className="h5 mb-2">
                    <Link href="/landing-courses/portfolio-courses/portfolio-single">HTML, CSS, JavaScript Web Developer  </Link>
                </h3>
                <p className="fs-sm mb-2">By Jenny Wilson &amp; Marvin McKinney</p>
                <p className="fs-lg fw-semibold text-primary mb-0">$15.99</p>
              </div>
              <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                <div className="d-flex align-items-center me-4">
                  <i className="bx bx-time fs-xl me-1"></i>
                  160 hours
                </div>
                <div className="d-flex align-items-center">
                  <i className="bx bx-like fs-xl me-1"></i>
                  92% (3.1K)
                </div>
              </div>
            </article>

      
      </SwiperSlide>

      <SwiperSlide className="swiper-slide h-auto pb-3" >
                  {/* <!-- Item --> */}
        
            <article className="card h-100 border-0 shadow-sm mx-2">
              <div className="position-relative">
                  <Link href="/landing-courses/portfolio-courses/portfolio-single" className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link">  </Link>
                <span className="badge bg-danger position-absolute top-0 start-0 zindex-2 mt-3 ms-3">Sale!</span>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/portfolio/courses/03.jpg" width={300} height={200} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-3">
                <h3 className="h5 mb-2">
                    <Link href="/landing-courses/portfolio-courses/portfolio-single">HTML, CSS, JavaScript Web Developer  </Link>
                </h3>
                <p className="fs-sm mb-2">By Robert Fox</p>
                <p className="text-muted mb-0"><span className="fs-lg fw-semibold text-danger me-2">$9.99</span><del>$44.99</del></p>
              </div>
              <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                <div className="d-flex align-items-center me-4">
                  <i className="bx bx-time fs-xl me-1"></i>
                  210 hours
                </div>
                <div className="d-flex align-items-center">
                  <i className="bx bx-like fs-xl me-1"></i>
                  98% (2.7K)
                </div>
              </div>
            </article>
      </SwiperSlide>

      <SwiperSlide >
                 {/* <!-- Item --> */}
          <div className="swiper-slide h-auto pb-3">
            <article className="card h-100 border-0 shadow-sm mx-2">
              <div className="position-relative">
                  <Link href="/landing-courses/portfolio-courses/portfolio-single" className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link">  </Link>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/portfolio/courses/05.jpg"  width={300} height={200} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-3">
                <h3 className="h5 mb-2">
                    <Link href="/landing-courses/portfolio-courses/portfolio-single">Data Science &amp; Machine Learning with Python  </Link>
                </h3>
                <p className="fs-sm mb-2">By Esther Howard</p>
                <p className="fs-lg fw-semibold text-primary mb-0">$13.99</p>
              </div>
              <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                <div className="d-flex align-items-center me-4">
                  <i className="bx bx-time fs-xl me-1"></i>
                  170 hours
                </div>
                <div className="d-flex align-items-center">
                  <i className="bx bx-like fs-xl me-1"></i>
                  96% (3.8K)
                </div>
              </div>
            </article>
          </div>
      </SwiperSlide>

      <SwiperSlide className="swiper-slide h-auto pb-3" >
                   {/* <!-- Item --> */}
            <article className="card h-100 border-0 shadow-sm mx-2">
              <div className="position-relative">
                  <Link href="/landing-courses/portfolio-courses/portfolio-single" className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link">  </Link>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/portfolio/courses/08.jpg" width={300} height={200} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-3">
                <h3 className="h5 mb-2">
                    <Link href="/landing-courses/portfolio-courses/portfolio-single">The Ultimate Guide to Unity Game Development  </Link>
                </h3>
                <p className="fs-sm mb-2">By Albert Flores</p>
                <p className="fs-lg fw-semibold text-primary mb-0">$29.99</p>
              </div>
              <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
                <div className="d-flex align-items-center me-4">
                  <i className="bx bx-time fs-xl me-1"></i>
                  250 hours
                </div>
                <div className="d-flex align-items-center">
                  <i className="bx bx-like fs-xl me-1"></i>
                  95% (5.4K)
                </div>
              </div>
            </article>
      </SwiperSlide>
      </div>
     
        {/* <!-- Pagination (bullets) --> */}
        <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
              <Link href="portfolio-courses.html" className="btn btn-outline-primary btn-lg w-100 d-md-none mt-3">
        See all courses
        <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
              </Link>
      </Swiper>
      </div>
    
    
  )
}

export default CoursesSlider