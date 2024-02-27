"use client";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function TestimonialsComp() {
  return (
    <section className="container py-5 my-2 my-md-4 my-lg-5">
        <div className="row pt-2 py-xl-3">
          <div className="col-lg-3 col-md-4">
            <h2 className="h1 text-center text-md-start mx-auto mx-md-0 pt-md-2" style={{maxWidth: "300px"}}>
            What <br className="d-none d-md-inline"/>
            People Say 
            <br className="d-none d-md-inline"/>
            About App:
            </h2>

            {/* <!-- Slider controls (Prev / next buttons) --> */}
            <div className="d-flex justify-content-center justify-content-md-start pb-4 mb-2 pt-2 pt-md-4 mt-md-5">
              <button type="button" id="prev-testimonial" className="btn btn-prev btn-icon btn-sm me-2" aria-label="Previous">
                <i className="bx bx-chevron-left"></i>
              </button>
              <button type="button" id="next-testimonial" className="btn btn-next btn-icon btn-sm ms-2" aria-label="Next">
                <i className="bx bx-chevron-right"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <Swiper 
              modules= {[Navigation]} 
              className="swiper mx-n2" 
              slidesPerView={1}
              spaceBetween= {8}
              loop= {true}
              navigation= {{
                prevEl: "#prev-testimonial",
                nextEl: "#next-testimonial"
              }}
              breakpoints= {{
                500: {
                  "slidesPerView": 2
                },
                1000: {
                  "slidesPerView": 2
                },
                1200: {
                  "slidesPerView": 3
                }
              }}>
              <div className="swiper-wrapper">
               <SwiperSlide className="swiper-slide h-auto pt-4">
                {/* <!-- Item --> */}
              
                  <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                    <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <i className="bx bxs-quote-left"></i>
                      </span>
                      <blockquote className="card-body pb-3 mb-0">
                        <p className="mb-0">Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.</p>
                      </blockquote>
                      <div className="card-footer border-0 text-nowrap pt-0">
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bx-star text-muted opacity-75"></i>
                        <i className="bx bx-star text-muted opacity-75"></i>
                      </div>
                    </div>
                    <figcaption className="d-flex align-items-center ps-4 pt-4">
                      <Image src="/assets/img/avatar/16.jpg" width={48} height={48} className="rounded-circle" alt="Robert Fox"/>
                      <div className="ps-3">
                        <h6 className="fs-sm fw-semibold mb-0">Robert Fox</h6>
                        <span className="fs-xs text-muted">Founder of Lorem Company</span>
                      </div>
                    </figcaption>
                  </figure>
                  </SwiperSlide>
  
                {/* <!-- Item --> */}
                <SwiperSlide className="swiper-slide h-auto pt-4">
                  <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                    <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <i className="bx bxs-quote-left"></i>
                      </span>
                      <blockquote className="card-body pb-3 mb-0">
                        <p className="mb-0">Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes commodo.</p>
                      </blockquote>
                      <div className="card-footer border-0 text-nowrap pt-0">
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                      </div>
                    </div>
                    <figcaption className="d-flex align-items-center ps-4 pt-4">
                      <Image src="/assets/img/avatar/08.jpg" width={48} height={48} className="rounded-circle" alt="Annette Black"/>
                      <div className="ps-3">
                        <h6 className="fs-sm fw-semibold mb-0">Annette Black</h6>
                        <span className="fs-xs text-muted">CEO of Ipsum Company</span>
                      </div>
                    </figcaption>
                  </figure>
                  </SwiperSlide>
  
                {/* <!-- Item --> */}
                <SwiperSlide className="swiper-slide h-auto pt-4">
                  <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                    <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <i className="bx bxs-quote-left"></i>
                      </span>
                      <blockquote className="card-body pb-3 mb-0">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna.</p>
                      </blockquote>
                      <div className="card-footer border-0 text-nowrap pt-0">
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bx-star text-muted opacity-75"></i>
                      </div>
                    </div>
                    <figcaption className="d-flex align-items-center ps-4 pt-4">
                      <Image src="/assets/img/avatar/13.jpg" width={48} height={48} className="rounded-circle" alt="Jerome Bell"/>
                      <div className="ps-3">
                        <h6 className="fs-sm fw-semibold mb-0">Jerome Bell</h6>
                        <span className="fs-xs text-muted">Founder of the Agency </span>
                      </div>
                    </figcaption>
                  </figure>
                  </SwiperSlide>
  
                {/* <!-- Item --> */}
                <SwiperSlide className="swiper-slide h-auto pt-4">
                  <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0 mx-2">
                    <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                        <i className="bx bxs-quote-left"></i>
                      </span>
                      <blockquote className="card-body pb-3 mb-0">
                        <p className="mb-0">Pellentesque finibus congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam pulvinar at maecenas.</p>
                      </blockquote>
                      <div className="card-footer border-0 text-nowrap pt-0">
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                      </div>
                    </div>
                    <figcaption className="d-flex align-items-center ps-4 pt-4">
                      <Image src="/assets/img/avatar/09.jpg" width={48} height={48} className="rounded-circle" alt="Albert Flores"/>
                      <div className="ps-3">
                        <h6 className="fs-sm fw-semibold mb-0">Albert Flores</h6>
                        <span className="fs-xs text-muted">CEO of Dolor Ltd.</span>
                      </div>
                    </figcaption>
                  </figure>
                  </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
  )
}

export default TestimonialsComp