"use client";
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide} from 'swiper/react';
import {Scrollbar,Mousewheel} from 'swiper/modules';
// import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel';

function ArticlesSlider() {
  return (
      
        <Swiper 
          className="swiper overflow-hidden w-100 ms-n2 ms-md-0 pe-3 pe-sm-4" 
          style={{ maxHeight: "405px" }}
          modules={[Scrollbar,Mousewheel]}
          spaceBetween={20}
          direction="vertical"
          freeMode={true}
          slidesPerView="auto" 
          scrollbar={{className: ".swiper-scrollbar"}}
           mousewheel={{releaseOnEdges:true,}}

          
          >
            <SwiperSlide>
          
                        {/* <!-- Article --> */}
                        <div className="col">
                              <article className="card h-100 border-0 shadow-sm card-hover-primary">
                                    <div className="card-body pb-0">
                                          <div className="d-flex align-items-center justify-content-between mb-3">
                                                 <Link href="#" className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2">Digital  </Link>
                                                <span className="fs-sm text-muted">1 day ago</span>
                                          </div>
                                          <h3 className="h5 mb-0">
                                                 <Link href="/blog/singlepost/1" className="stretched-link">Mobile App Generates Data for the Energy Management  </Link>
                                          </h3>
                                    </div>
                                    <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                                          <div className="d-flex align-items-center me-3">
                                                <i className="bx bx-like fs-lg me-1"></i>
                                                <span className="fs-sm">8</span>
                                          </div>
                                          <div className="d-flex align-items-center me-3">
                                                <i className="bx bx-comment fs-lg me-1"></i>
                                                <span className="fs-sm">4</span>
                                          </div>
                                          <div className="d-flex align-items-center">
                                                <i className="bx bx-share-alt fs-lg me-1"></i>
                                                <span className="fs-sm">2</span>
                                          </div>
                                    </div>
                              </article>
                        </div>
                      
                  </SwiperSlide>
                  <SwiperSlide>
                        {/* <!-- Article --> */}
                        <div className="col">
                              <article className="card h-100 border-0 shadow-sm card-hover-primary">
                                    <div className="card-body pb-0">
                                          <div className="d-flex align-items-center justify-content-between mb-3">
                                                 <Link href="#" className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2">Business  </Link>
                                                <span className="fs-sm text-muted">May 24, 2023</span>
                                          </div>
                                          <h3 className="h5 mb-0">
                                                 <Link href="/blog/singlepost/1" className="stretched-link">How the Millennial Lifestyle Changes as Service Prices Rise  </Link>
                                          </h3>
                                    </div>
                                    <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                                          <div className="d-flex align-items-center me-3">
                                                <i className="bx bx-like fs-lg me-1"></i>
                                                <span className="fs-sm">2</span>
                                          </div>
                                          <div className="d-flex align-items-center me-3">
                                                <i className="bx bx-comment fs-lg me-1"></i>
                                                <span className="fs-sm">0</span>
                                          </div>
                                          <div className="d-flex align-items-center">
                                                <i className="bx bx-share-alt fs-lg me-1"></i>
                                                <span className="fs-sm">3</span>
                                          </div>
                                    </div>
                              </article>
                              
                        </div>
                  </SwiperSlide>
                  <SwiperSlide>
                        {/* <!-- Article --> */}
                        <div className="col">
                              <article className="card h-100 border-0 shadow-sm card-hover-primary">
                                    <div className="card-body pb-0">
                                          <div className="d-flex align-items-center justify-content-between mb-3">
                                                 <Link href="#" className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2">Digital  </Link>
                                                <span className="fs-sm text-muted">May 25, 2023</span>
                                          </div>
                                          <h3 className="h5 mb-0">
                                                 <Link href="/blog/singlepost/1" className="stretched-link">Inclusive Marketing: Why and How Does it Work?  </Link>
                                          </h3>
                                    </div>
                                    <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                                          <div className="d-flex align-items-center me-3">
                                                <i className="bx bx-like fs-lg me-1"></i>
                                                <span className="fs-sm">5</span>
                                          </div>
                                          <div className="d-flex align-items-center me-3">
                                                <i className="bx bx-comment fs-lg me-1"></i>
                                                <span className="fs-sm">0</span>
                                          </div>
                                          <div className="d-flex align-items-center">
                                                <i className="bx bx-share-alt fs-lg me-1"></i>
                                                <span className="fs-sm">2</span>
                                          </div>
                                    </div>
                              </article>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide>
                        {/* <!-- Article --> */}
                        <div className="col">
                              <article className="card h-100 border-0 shadow-sm card-hover-primary">
                                    <div className="card-body pb-0">
                                          <div className="d-flex align-items-center justify-content-between mb-3">
                                                 <Link href="#" className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2">Technology  </Link>
                                                <span className="fs-sm text-muted">May 26, 2023</span>
                                          </div>
                                          <h3 className="h5 mb-0">
                                                 <Link href="/blog/singlepost/1" className="stretched-link">A Study on Smartwatch Design Qualities and People’s Preferences  </Link>
                                          </h3>
                                    </div>
                                    <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                                          <div className="d-flex align-items-center me-3">
                                                <i className="bx bx-like fs-lg me-1"></i>
                                                <span className="fs-sm">7</span>
                                          </div>
                                          <div className="d-flex align-items-center me-3">
                                                <i className="bx bx-comment fs-lg me-1"></i>
                                                <span className="fs-sm">4</span>
                                          </div>
                                          <div className="d-flex align-items-center">
                                                <i className="bx bx-share-alt fs-lg me-1"></i>
                                                <span className="fs-sm">1</span>
                                          </div>
                                    </div>
                              </article>
                        </div>
                  </SwiperSlide>

                  <SwiperSlide>
                        {/* <!-- Article --> */}
                        <div className="col">
                              <article className="card h-100 border-0 shadow-sm card-hover-primary">
                                    <div className="card-body pb-0">
                                          <div className="d-flex align-items-center justify-content-between mb-3">
                                                 <Link href="#" className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2">Startups  </Link>
                                                <span className="fs-sm text-muted">May 27, 2023</span>
                                          </div>
                                          <h3 className="h5 mb-0">
                                                 <Link href="/blog/singlepost/1" className="stretched-link">Why UX Design Matters and How it Affects Ranking  </Link>
                                          </h3>
                                    </div>
                                    <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                                          <div className="d-flex align-items-center me-3">
                                                <i className="bx bx-like fs-lg me-1"></i>
                                                <span className="fs-sm">5</span>
                                          </div>
                                          <div className="d-flex align-items-center me-3">
                                                <i className="bx bx-comment fs-lg me-1"></i>
                                                <span className="fs-sm">3</span>
                                          </div>
                                          <div className="d-flex align-items-center">
                                                <i className="bx bx-share-alt fs-lg me-1"></i>
                                                <span className="fs-sm">9</span>
                                          </div>
                                    </div>
                              </article>
                        </div>
                  </SwiperSlide>

                  <SwiperSlide>
                        {/* <!-- Article --> */}
                        <div className="col">
                              <article className="card h-100 border-0 shadow-sm card-hover-primary">
                                    <div className="card-body pb-0">
                                          <div className="d-flex align-items-center justify-content-between mb-3">
                                                 <Link href="#" className="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2">Web  </Link>
                                                <span className="fs-sm text-muted">May 28, 2023</span>
                                          </div>
                                          <h3 className="h5 mb-0">
                                                 <Link href="/blog/singlepost/1" className="stretched-link">This Week in Search: New Limits and Exciting Features  </Link>
                                          </h3>
                                    </div>
                                    <div className="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                                          <div className="d-flex align-items-center me-3">
                                                <i className="bx bx-like fs-lg me-1"></i>
                                                <span className="fs-sm">3</span>
                                          </div>
                                          <div className="d-flex align-items-center me-3">
                                                <i className="bx bx-comment fs-lg me-1"></i>
                                                <span className="fs-sm">5</span>
                                          </div>
                                          <div className="d-flex align-items-center">
                                                <i className="bx bx-share-alt fs-lg me-1"></i>
                                                <span className="fs-sm">2</span>
                                          </div>
                                    </div>
                              </article>
                            
                        </div>
                         
                  </SwiperSlide> 
                  <div 
                  // style={{
                  // backgroundColor: "var(--si-carousel-scrollbar-bg)",
                  // color: "var(swiper-scrollbar-drag)",
                  // }}
                  className="swiper-scrollbar"
                  ></div>
        </Swiper>   
     
      
        
  );
}

export default ArticlesSlider;