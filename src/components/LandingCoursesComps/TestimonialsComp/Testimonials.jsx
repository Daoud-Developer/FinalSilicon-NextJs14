"use client";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation } from 'swiper/modules';
import 'swiper/css';

function Testimonials() {
  return (
      <section className="container pt-md-2 pb-5">
      <div className="row">
        <div className="col-md-5">
          <div className="card h-100 border-0 overflow-hidden px-md-4">
            <span className="bg-gradient-primary position-absolute top-0 start-0 w-100 h-100 opacity-10 d-none d-md-block"></span>
            <div className="card-body d-flex flex-column align-items-center justify-content-center position-relative zindex-2 p-0 pb-2 p-lg-4">
              <h2 className="h1 text-center text-md-start p-lg-4">What Our Students Say About Online Courses</h2>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card border-0 shadow-sm p-4 p-xxl-5">
            <div className="d-flex justify-content-between pb-4 mb-2">
              <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
                <i className="bx bxs-quote-left"></i>
              </span>
              
              {/* <!-- Btn Next & Prev --> */}
              <div className="d-flex">
                <button type="button" id="testimonials-prev" className="btn btn-prev btn-icon btn-sm me-2" aria-label="Previous">
                  <i className="bx bx-chevron-left"></i>
                </button>
                <button type="button" id="testimonials-next" className="btn btn-next btn-icon btn-sm ms-2" aria-label="Next">
                  <i className="bx bx-chevron-right"></i>
                </button>
              </div>
            </div>
            
            {/* <!-- Slider --> */}
            <Swiper 
            modules={[Pagination,Navigation]}
            className="swiper mx-0 mb-md-n2 mb-xxl-n3" 
              spaceBetween={24}
              loop={true}
              pagination={ {
                className: ".swiper-pagination",
                clickable: true
              }}
              navigation={{
                "prevEl": "#testimonials-prev",
                "nextEl": "#testimonials-next"
              }}>

              <div className="swiper-wrapper">

              <SwiperSlide className="swiper-slide h-auto">
                {/* <!-- Item --> */}
                  <figure className="card h-100 position-relative border-0 bg-transparent">
                    <blockquote className="card-body p-0 mb-0">
                      <p className="fs-lg mb-0">Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.</p>
                    </blockquote>
                    <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
                      <Image src="/assets/img/avatar/13.jpg" width={60} height={60} className="rounded-circle" alt="Ralph Edwards"/>
                      <div className="ps-3">
                        <h6 className="fw-semibold lh-base mb-0">Ralph Edwards</h6>
                        <span className="fs-sm text-muted">Head of Marketing at Lorem Ltd. </span>
                      </div>
                    </figcaption>
                  </figure>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide h-auto">
                {/* <!-- Item --> */}   
                  <figure className="card h-100 position-relative border-0 bg-transparent">
                    <blockquote className="card-body p-0 mb-0">
                      <p className="fs-lg mb-0">Mi semper risus ultricies orci pulvinar in at enim orci. Quis facilisis nunc pellentesque in ullamcorper sit. Lorem blandit arcu sapien, senectus libero, amet dapibus cursus quam. Eget pellentesque eu purus volutpat adipiscing malesuada. Purus nisi, tortor vel lacus.</p>
                    </blockquote>
                    <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
                      <Image src="/assets/img/avatar/14.jpg" width={60} height={60} className="rounded-circle" alt="Annette Black"/>
                      <div className="ps-3">
                        <h6 className="fw-semibold lh-base mb-0">Annette Black</h6>
                        <span className="fs-sm text-muted">Strategic Advisor at Company LLC</span>
                      </div>
                    </figcaption>
                  </figure>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide h-auto">
                {/* <!-- Item --> */}
                  <figure className="card h-100 position-relative border-0 bg-transparent">
                    <blockquote className="card-body p-0 mb-0">
                      <p className="fs-lg mb-0">Ac at sed sit senectus massa. Massa ante amet ultrices magna porta tempor. Aliquet diam in et magna ultricies mi at. Lectus enim, vel enim egestas nam pellentesque et leo. Elit mi faucibus laoreet aliquam pellentesque sed aliquet integer massa. Orci leo tortor ornare.</p>
                    </blockquote>
                    <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
                      <Image src="/assets/img/avatar/11.jpg" width={60} height={60} className="rounded-circle" alt="Darrell Steward"/>
                      <div className="ps-3">
                        <h6 className="fw-semibold lh-base mb-0">Darrell Steward</h6>
                        <span className="fs-sm text-muted">Project Manager at Ipsum Ltd.</span>
                      </div>
                    </figcaption>
                  </figure>
                  </SwiperSlide>

              </div>
              {/* <!-- Pagination (bullets) --> */}
              <div className="swiper-pagination position-relative mt-5"></div>
            </Swiper>
            </div> 
                   
          </div>
      </div>
    </section>
  )
}

export default Testimonials