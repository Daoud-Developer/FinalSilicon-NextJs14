"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from 'swiper/modules';
import 'swiper/css';

const CarouselComp = () => {


  return (
      <Swiper 
      modules={[Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      loop={true}
      pagination={{
      className: ".swiper-pagination",
        clickable: true, 
      }}
      breakpoints={{
        576: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1000: {
          slidesPerView: 3
        }
      }}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)} 
    >
     
    
      <SwiperSlide>
                  <article className="swiper-slide h-auto pb-3">
                  <div className="d-block position-relative rounded-3 mb-3">
                    <Link href="/blog/singlepdcast/1" className="btn btn-icon btn-light bg-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Listen later" aria-label="Read later">
                       <i className="bx bx-bookmark"></i>
                    </Link>
                   <Image src="/assets/img/avatar/06.jpg" 
                   className="position-absolute top-0 start-0 rounded-circle zindex-2 mt-3 ms-3" 
                   width={48}
                   height={48}
                   alt="Avatar"
                   />
                    <span className="badge bg-dark position-absolute bottom-0 end-0 zindex-2 mb-3 me-3">0:25:43</span>
                    <Link href="/blog/singlepdcast/1" className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3" aria-label="Listen podcast"></Link>
                    <Image 
                    width={500}
                    height={500} 
                    src="/assets/img/blog/podcasts/04.jpg" 
                    className="rounded-3" a
                    lt="Image"/>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Digital</Link>
                    <span className="fs-sm text-muted border-start ps-3 ms-3">2 hours ago</span>
                  </div>
                  <h3 className="h5">
                    <Link href="/blog/singlepdcast/1">IOS and the Changing landscape of Data Privacy</Link>
                  </h3>
                  <div className="d-flex align-items-center text-muted">
                    <div className="d-flex align-items-center me-3">
                      <i className="bx bx-like fs-lg me-1"></i>
                      <span className="fs-sm">4</span>
                    </div>
                    <div className="d-flex align-items-center me-3">
                      <i className="bx bx-comment fs-lg me-1"></i>
                      <span className="fs-sm">2</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bx bx-share-alt fs-lg me-1"></i>
                      <span className="fs-sm">0</span>
                    </div>
                  </div>
                  <Link href="/blog/singlepdcast/1" className="btn btn-link px-0 mt-3">
                    <i className="bx bx-play-circle fs-lg me-2"></i>
                    Listen now
                  </Link>
                  </article>
      </SwiperSlide>
      <SwiperSlide>
                  <article className="swiper-slide h-auto pb-3">
                  <div className="d-block position-relative rounded-3 mb-3">
                    <Link href="#" className="btn btn-icon btn-light bg-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Listen later" aria-label="Read later">
                      <i className="bx bx-bookmark"></i>
                    </Link>
                    <Image 
                    src="/assets/img/avatar/05.jpg" 
                    className="position-absolute top-0 start-0 rounded-circle zindex-2 mt-3 ms-3" 
                    width={48}
                    height={48}
                    alt="Avatar"/>
                    <span className="badge bg-dark position-absolute bottom-0 end-0 zindex-2 mb-3 me-3">1:12:05</span>
                    <Link href="/blog/singlepdcast/1" className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3" aria-label="Listen podcast"></Link>
                    <Image 
                   width={500}
                    height={500} 
                    src="/assets/img/blog/podcasts/05.jpg" 
                    className="rounded-3"
                     alt="noimg"/>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Processes &amp; Tools</Link>
                    <span className="fs-sm text-muted border-start ps-3 ms-3">10 hours ago</span>
                  </div>
                  <h3 className="h5">
                    <Link href="/blog/singlepdcast/1">Behavioral Science and Digital Marketing</Link>
                  </h3>
                  <div className="d-flex align-items-center text-muted">
                    <div className="d-flex align-items-center me-3">
                      <i className="bx bx-like fs-lg me-1"></i>
                      <span className="fs-sm">9</span>
                    </div>
                    <div className="d-flex align-items-center me-3">
                      <i className="bx bx-comment fs-lg me-1"></i>
                      <span className="fs-sm">5</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bx bx-share-alt fs-lg me-1"></i>
                      <span className="fs-sm">6</span>
                    </div>
                  </div>
                  <Link href="/blog/singlepdcast/1" className="btn btn-link px-0 mt-3">
                    <i className="bx bx-play-circle fs-lg me-2"></i>
                    Listen now
                  </Link>
                </article>
      </SwiperSlide>
      <SwiperSlide>
                  <article className="swiper-slide h-auto pb-3">
                  <div className="d-block position-relative rounded-3 mb-3">
                    <Link href="#" className="btn btn-icon btn-light bg-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Listen later" aria-label="Read later">
                      <i className="bx bx-bookmark"></i>
                    </Link>
                    <Image 
                    src="/assets/img/avatar/01.jpg" 
                    className="position-absolute top-0 start-0 rounded-circle zindex-2 mt-3 ms-3" 
                    width={48}
                    height={48}
                    alt="Avatar"/>
                    <span className="badge bg-dark position-absolute bottom-0 end-0 zindex-2 mb-3 me-3">0:32:15</span>
                    <Link href="/blog/singlepdcast/1" className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3" aria-label="Listen podcast"></Link>
                    <Image 
                    width={500}
                    height={500} 
                    src="/assets/img/blog/podcasts/02.jpg" 
                    className="rounded-3" 
                    alt="noimage"/>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Technology</Link>
                    <span className="fs-sm text-muted border-start ps-3 ms-3">10 hours ago</span>
                  </div>
                  <h3 className="h5">
                    <Link href="/blog/singlepdcast/1">Why You Should Care About Your Competitors</Link>
                  </h3>
                  <div className="d-flex align-items-center text-muted">
                    <div className="d-flex align-items-center me-3">
                      <i className="bx bx-like fs-lg me-1"></i>
                      <span className="fs-sm">45</span>
                    </div>
                    <div className="d-flex align-items-center me-3">
                      <i className="bx bx-comment fs-lg me-1"></i>
                      <span className="fs-sm">12</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bx bx-share-alt fs-lg me-1"></i>
                      <span className="fs-sm">6</span>
                    </div>
                  </div>
                  <Link href="/blog/singlepdcast/1" className="btn btn-link px-0 mt-3">
                    <i className="bx bx-play-circle fs-lg me-2"></i>
                    Listen now
                  </Link>
                  </article>
      </SwiperSlide>
      <SwiperSlide>
                  <article className="swiper-slide h-auto pb-3">
                  <div className="d-block position-relative rounded-3 mb-3">
                    <Link href="#" className="btn btn-icon btn-light bg-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Listen later" aria-label="Read later">
                      <i className="bx bx-bookmark"></i>
                    </Link>
                    <Image 
                    src="/assets/img/avatar/04.jpg"
                     className="position-absolute top-0 start-0 rounded-circle zindex-2 mt-3 ms-3" 
                     width={48}
                     height={48}
                     alt="Avatar"/>
                    <span className="badge bg-dark position-absolute bottom-0 end-0 zindex-2 mb-3 me-3">0:48:02</span>
                    <Link href="/blog/singlepdcast/1" className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3" aria-label="Listen podcast"></Link>
                    <Image 
                    width={500}
                    height={500} 
                    src="/assets/img/blog/podcasts/03.jpg" 
                    className="rounded-3" 
                    alt="noimg"/>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Marketing</Link>
                    <span className="fs-sm text-muted border-start ps-3 ms-3">1 day ago</span>
                  </div>
                  <h3 className="h5">
                    <Link href="/blog/singlepdcast/1">Tips for Marketing Managers: How to Maximise Leads</Link>
                  </h3>
                  <div className="d-flex align-items-center text-muted">
                    <div className="d-flex align-items-center me-3">
                      <i className="bx bx-like fs-lg me-1"></i>
                      <span className="fs-sm">10</span>
                    </div>
                    <div className="d-flex align-items-center me-3">
                      <i className="bx bx-comment fs-lg me-1"></i>
                      <span className="fs-sm">4</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bx bx-share-alt fs-lg me-1"></i>
                      <span className="fs-sm">6</span>
                    </div>
                  </div>
                  <Link href="/blog/singlepdcast/1" className="btn btn-link px-0 mt-3">
                    <i className="bx bx-play-circle fs-lg me-2"></i>
                    Listen now
                  </Link>
                </article>
                
      </SwiperSlide>
    </Swiper>
    
  );
}

export default CarouselComp;