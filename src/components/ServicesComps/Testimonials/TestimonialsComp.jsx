"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';
import Image from 'next/image';

function TestimonialsComp() {
   const [activeIndex, setActiveIndex] = useState(0); 
   
   const clientsSayImg = [
    "/assets/img/testimonials/01.jpg",
    "/assets/img/testimonials/02.jpg",
    "/assets/img/testimonials/03.jpg"
  ];
  return (
    <section className="container pb-5 mb-2 mb-lg-4" style={{marginTop: "-228px"}}>
        <h2 className="h1 pb-3 pb-lg-4">What Our Clients Say</h2>
        <div className="row">
          <div className="col-md-4 d-none d-md-block">

            {/* <!-- Swiper tabs (Author images) --> */}
            <div className="swiper-tabs">

              {/* <!-- Author 1 image --> */}
              <div id="author-1" className="card bg-transparent border-0 swiper-tab active">
                <Image src={clientsSayImg[activeIndex]} alt="Darrell Steward" 
                className="card-body p-0 rounded-3 bg-size-cover bg-repeat-0 bg-position-top-center"
                width={400} height={400} />
              </div>

            </div>
          </div>
          <div className="col-md-8">
            <div className="position-relative ms-xxl-5">
              <div className="d-none d-dark-mode-block bg-dark position-absolute top-0 start-0 w-100 h-100 rounded-3"></div>
              <div className="card border-light shadow-sm zindex-2 mt-4 pt-5 p-4 p-xxl-5">
                <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none position-absolute top-0 translate-middle-y">
                  <i className="bx bxs-quote-left"></i>
                </span>
  
                
                {/* <!-- Slider --> */}
                <Swiper  
                  modules={[Navigation]}
                  className="swiper mx-0 mb-md-n2 mb-xxl-n3"
                  spaceBetween= {24}
                  loop= {true}
                  tabs={true}
                  navigation= {{
                    prevEl: "#prev",
                    nextEl: "#next"
                  }}
                      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Update the active index on slide change
                  >
                  <div className="swiper-wrapper">

                   <SwiperSlide className="swiper-slide h-auto" data-swiper-tab="#author-1">
                    {/* <!-- Item --> */}
                      <figure className="card h-100 position-relative border-0 bg-transparent">
                        <blockquote className="card-body p-0 mb-0">
                          <p className="fs-lg mb-0">Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare id mattis auctor aliquam volutpat aliquet. Odio lectus viverra eu blandit nunc malesuada vitae eleifend pulvinar. In ac fermentum sit in orci.</p>
                        </blockquote>
                        <figcaption className="card-footer border-0 d-sm-flex w-100 pb-2">
                          <div className="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                            <Image src="/assets/img/avatar/01.jpg" width={48} height={48} className="d-md-none rounded-circle" alt="Darrell Steward"/>
                            <div className="ps-3 ps-md-0">
                              <h5 className="fw-semibold lh-base mb-0">Darrell Steward</h5>
                              <span className="fs-sm text-muted">Project Manager</span>
                            </div>
                          </div>
                          <Image src="/assets/img/brands/04.svg" width={160} height={160} className="d-block mt-2 ms-5 mt-sm-0 ms-sm-0" alt="Company logo"/>
                        </figcaption>
                      </figure>
                    </SwiperSlide>

  
                    {/* <!-- Item --> */}
                    <SwiperSlide className="swiper-slide h-auto" data-swiper-tab="#author-2">
                      <figure className="card h-100 position-relative border-0 bg-transparent">
                        <blockquote className="card-body p-0 mb-0">
                          <p className="fs-lg mb-0">Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus. Donec diam molestie ultrices vitae eget pulvinar fames. Velit lacus mi purus velit justo, amet. Nascetur lobortis diam, duis orci.</p>
                        </blockquote>
                        <figcaption className="card-footer border-0 d-sm-flex w-100 pb-2">
                          <div className="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                            <Image src="/assets/img/avatar/06.jpg" width={48} height={48} className="d-md-none rounded-circle" alt="Annette Black"/>
                            <div className="ps-3 ps-md-0">
                              <h5 className="fw-semibold lh-base mb-0">Annette Black</h5>
                              <span className="fs-sm text-muted">Strategic Advisor</span>
                            </div>
                          </div>
                          <Image src="/assets/img/brands/02.svg" width={160} height={160} className="d-block mt-2 ms-5 mt-sm-0 ms-sm-0" alt="Company logo"/>
                        </figcaption>
                      </figure>
                        </SwiperSlide>
                      
                    {/* <!-- Item --> */}
                    <SwiperSlide className="swiper-slide h-auto" data-swiper-tab="#author-3">
                      <figure className="card h-100 position-relative border-0 bg-transparent">
                        <blockquote className="card-body p-0 mb-0">
                          <p className="fs-lg mb-0">Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa.</p>
                        </blockquote>
                        <figcaption className="card-footer border-0 d-sm-flex w-100 pb-2">
                          <div className="d-flex align-items-center border-end-sm pe-sm-4 me-sm-2">
                            <Image src="/assets/img/avatar/05.jpg" width={48} height={48} className="d-md-none rounded-circle" alt="Ralph Edwards"/>
                            <div className="ps-3 ps-md-0">
                              <h5 className="fw-semibold lh-base mb-0">Ralph Edwards</h5>
                              <span className="fs-sm text-muted">Head of Marketing</span>
                            </div>
                          </div>
                          <Image src="/assets/img/brands/01.svg" width={160} height={160} className="d-block mt-2 ms-5 mt-sm-0 ms-sm-0" alt="Company logo"/>
                        </figcaption>
                      </figure>
                        </SwiperSlide>
                  </div>
               </Swiper>       
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Slider Prev / Next buttons --> */}
        <div className="d-flex justify-content-center justify-content-md-start pt-3 mt-2 mt-md-3">
          <button type="button" id="prev" className="btn btn-prev btn-icon btn-sm me-2" aria-label="Previous">
            <i className="bx bx-chevron-left"></i>
          </button>
          <button type="button" id="next" className="btn btn-next btn-icon btn-sm ms-2" aria-label="Next">
            <i className="bx bx-chevron-right"></i>
          </button>
        </div>
      </section>
  )
}

export default TestimonialsComp