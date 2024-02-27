"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

function TestimonialsComp() {
      return (
            <div className="pt-2 pb-lg-4 pb-xl-5 mb-5">
                  <h2 className="h1 text-center pb-3 pb-md-4 pb-xl-5">Why students love this course</h2>
                  <div className="px-2 px-sm-0">
                        <Swiper className="swiper"
                              modules={[Pagination]}
                              slidesPerView={1}
                              centeredSlides={true}
                              spaceBetween={8}
                              loop={true}      
                              pagination={{
                              className: "swiper-pagination",
                              clickable: true,
                              }}
                              breakpoints={{
                                    500: {
                                          "slidesPerView": 2,
                                          "spaceBetween": 24
                                    },
                                    1000: {
                                          "slidesPerView": 4,
                                          "spaceBetween": 24

                                    },
                                    1500: {
                                          "slidesPerView": 6,
                                          "spaceBetween": 24
                                    }
                              }}>
                            
                            <div className="swiper-wrapper">

                                    <SwiperSlide className="swiper-slide h-auto pt-4">

                                          {/* <!-- Item --> */}
                                          <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
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
                                                      <Image src="/assets/img/avatar/03.jpg" width={48} height={48} className="rounded-circle" alt="Fannie Summers" />
                                                      <div className="ps-3">
                                                            <h6 className="fs-sm fw-semibold mb-0">Fannie Summers</h6>
                                                            <span className="fs-xs text-muted">Designer</span>
                                                      </div>
                                                </figcaption>
                                          </figure>
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide h-auto pt-4">

                                          {/* <!-- Item --> */}
                                          <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
                                                <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                                                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                                                            <i className="bx bxs-quote-left"></i>
                                                      </span>
                                                      <blockquote className="card-body pb-3 mb-0">
                                                            <p className="mb-0">Phasellus luctus nisi id orci condimentum, at cursus nisl vestibulum. Orci varius natoque penatibus et magnis dis parturient montes.</p>
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
                                                      <Image src="/assets/img/avatar/02.jpg" width={48} height={48} className="rounded-circle" alt="Robert Fox" />
                                                      <div className="ps-3">
                                                            <h6 className="fs-sm fw-semibold mb-0">Robert Fox</h6>
                                                            <span className="fs-xs text-muted">QA Engineer</span>
                                                      </div>
                                                </figcaption>
                                          </figure>
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide h-auto pt-4">
                                          {/* <!-- Item --> */}
                                          <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
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
                                                      <Image src="/assets/img/avatar/04.jpg" width={48} height={48} className="rounded-circle" alt="Annette Black" />
                                                      <div className="ps-3">
                                                            <h6 className="fs-sm fw-semibold mb-0">Annette Black</h6>
                                                            <span className="fs-xs text-muted">Project Manager</span>
                                                      </div>
                                                </figcaption>
                                          </figure>
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide h-auto pt-4">
                                          {/* <!-- Item --> */}

                                          <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
                                                <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                                                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                                                            <i className="bx bxs-quote-left"></i>
                                                      </span>
                                                      <blockquote className="card-body pb-3 mb-0">
                                                            <p className="mb-0">Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend.</p>
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
                                                      <Image src="/assets/img/avatar/05.jpg" width={48} height={48} className="rounded-circle" alt="Jerome Bell" />
                                                      <div className="ps-3">
                                                            <h6 className="fs-sm fw-semibold mb-0">Jerome Bell</h6>
                                                            <span className="fs-xs text-muted">Developer</span>
                                                      </div>
                                                </figcaption>
                                          </figure>

                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide h-auto pt-4">
                                          {/* <!-- Item --> */}
                                          <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
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
                                                            <i className="bx bx-star text-muted opacity-75"></i>
                                                      </div>
                                                </div>
                                                <figcaption className="d-flex align-items-center ps-4 pt-4">
                                                      <Image src="/assets/img/avatar/01.jpg" width={48} height={48} className="rounded-circle" alt="Albert Flores" />
                                                      <div className="ps-3">
                                                            <h6 className="fs-sm fw-semibold mb-0">Albert Flores</h6>
                                                            <span className="fs-xs text-muted">PR Director</span>
                                                      </div>

                                                </figcaption>
                                          </figure>
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide h-auto pt-4">
                                          {/* <!-- Item --> */}
                                          <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
                                                <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                                                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                                                            <i className="bx bxs-quote-left"></i>
                                                      </span>
                                                      <blockquote className="card-body pb-3 mb-0">
                                                            <p className="mb-0">Nulla volutpat consectetur congue egestas egestas uni suspendisse blandit parturient.</p>
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
                                                      <Image src="/assets/img/avatar/06.jpg" width={48} height={48} className="rounded-circle" alt="Jenny Wilson" />
                                                      <div className="ps-3">
                                                            <h6 className="fs-sm fw-semibold mb-0">Jenny Wilson</h6>
                                                            <span className="fs-xs text-muted">Marketing</span>
                                                      </div>
                                                </figcaption>
                                          </figure>
                                    </SwiperSlide>

                                    <SwiperSlide className="swiper-slide h-auto pt-4">

                                          {/* <!-- Item --> */}
                                          <figure className="d-flex flex-column h-100 px-2 px-sm-0 mb-0">
                                                <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                                                      <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                                                            <i className="bx bxs-quote-left"></i>
                                                      </span>
                                                      <blockquote className="card-body pb-3 mb-0">
                                                            <p className="mb-0">Vivamus iaculis facilisis pretium. Pellentesque vitae mi odio. Donec imperdiet pellentesque ipsum quis pharetra. Nullam dolor sem.</p>
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
                                                      <Image src="/assets/img/avatar/07.jpg" width={48} height={48} className="rounded-circle" alt="Cameron Williamson" />
                                                      <div className="ps-3">
                                                            <h6 className="fs-sm fw-semibold mb-0">Cameron Williamson</h6>
                                                            <span className="fs-xs text-muted">Illustrator</span>
                                                      </div>
                                                </figcaption>
                                          </figure>
                                    </SwiperSlide>
                                    </div>

                              {/* <!-- Pagination (bullets) --> */}
                            <div className="swiper-pagination position-relative pt-1 pt-sm-3 mt-5"></div>
                       
                        </Swiper>
                        </div>
            </div>
          
      )
}

export default TestimonialsComp