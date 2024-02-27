"use client";
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function TestimonialsComp() {
  return (
     <section className="container mb-5 pb-3 py-lg-4 py-xl-5">
     <div className="row gy-4 gy-md-5 pt-3 py-md-4">
       <div className="col-xl-2 col-lg-3 text-lg-start text-center">
         <h2 className="mb-4 mb-xl-5 pb-2 pb-md-3 pb-lg-4">What Our Clients Say About Us:</h2>
         <button type="button" id="prev" className="btn btn-prev btn-icon btn-sm me-2" aria-label="Previous">
           <i className="bx bx-chevron-left"></i>
         </button>
         <button type="button" id="next" className="btn btn-next btn-icon btn-sm ms-2" aria-label="Next">
           <i className="bx bx-chevron-right"></i>
         </button>
       </div>
       <div className="col-lg-9 offset-xl-1">
        {/* <!-- Swiper --> */}
         <Swiper  
         modules={[Navigation]}
         className="swiper" 
           loop= {true}
           navigation={{
                  prevEl: "#prev",
                  nextEl: "#next"
           }}
           breakpoints={{
             0: {
               "slidesPerView": 1
             },
             500: {
               "slidesPerView": 2
             },
             768: {
               "slidesPerView": 3
             }
           }}>
           <div className="swiper-wrapper">

           <SwiperSlide className="swiper-slide h-auto p-2 pb-4">

             {/* <!-- Item --> */}
               <figure className="d-flex flex-column h-100 mt-4">
                 <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                   <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                     <i className="bx bxs-quote-left"></i>
                   </span>
                   <blockquote className="card-body pb-3 mb-0">
                     <p className="mb-0">Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</p>
                   </blockquote>
                   <div className="card-footer border-0 text-nowrap pt-0">
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                   </div>
                 </div>
                 <figcaption className="d-flex align-items-center pt-4">
                   <Image src="/assets/img/avatar/03.jpg" width={48} height={48} className="rounded-circle" alt="Annette Black"/>
                   <div className="ps-3">
                     <h6 className="fs-sm fw-semibold mb-0">Annette Black</h6>
                     <span className="fs-xs text-muted">Co-founder of Lorem Company</span>
                   </div>
                 </figcaption>
               </figure>
                  </SwiperSlide>

             {/* <!-- Item --> */}
              <SwiperSlide className="swiper-slide h-auto p-2 pb-4">
               <figure className="d-flex flex-column h-100 mt-4">
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
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bx-star text-muted opacity-75"></i>
                   </div>
                 </div>
                 <figcaption className="d-flex align-items-center pt-4">
                   <Image src="/assets/img/avatar/02.jpg" width={48} height={48} className="rounded-circle" alt="Robert Fox"/>
                   <div className="ps-3">
                     <h6 className="fs-sm fw-semibold mb-0">Robert Fox</h6>
                     <span className="fs-xs text-muted">CEO of Ipsum Company</span>
                   </div>
                 </figcaption>
               </figure>
                  </SwiperSlide>

             {/* <!-- Item --> */}
              <SwiperSlide className="swiper-slide h-auto p-2 pb-4">
               <figure className="d-flex flex-column h-100 mt-4">
                 <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                   <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                     <i className="bx bxs-quote-left"></i>
                   </span>
                   <blockquote className="card-body pb-3 mb-0">
                     <p className="mb-0">Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Pellentesque vitae mattis aliquet velit arcu risus...</p>
                   </blockquote>
                   <div className="card-footer border-0 text-nowrap pt-0">
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                   </div>
                 </div>
                 <figcaption className="d-flex align-items-center pt-4">
                   <Image src="/assets/img/avatar/10.jpg" width={48} height={48} className="rounded-circle" alt="Jerome Bell"/>
                   <div className="ps-3">
                     <h6 className="fs-sm fw-semibold mb-0">Jerome Bell</h6>
                     <span className="fs-xs text-muted">Founder of the Agency </span>
                   </div>
                 </figcaption>
               </figure>
                  </SwiperSlide>

             {/* <!-- Item --> */}
              <SwiperSlide className="swiper-slide h-auto p-2 pb-4">
               <figure className="d-flex flex-column h-100 mt-4">
                 <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                   <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                     <i className="bx bxs-quote-left"></i>
                   </span>
                   <blockquote className="card-body pb-3 mb-0">
                     <p className="mb-0">Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio justo malesuada suspendisse viverra aliquet quisque turpis non. Feugiat in odio non nunc ornare consectetur.</p>
                   </blockquote>
                   <div className="card-footer border-0 text-nowrap pt-0">
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bx-star text-muted opacity-75"></i>
                   </div>
                 </div>
                 <figcaption className="d-flex align-items-center pt-4">
                   <Image src="/assets/img/avatar/03.jpg" width={48} height={48} className="rounded-circle" alt="Annette Black"/>
                   <div className="ps-3">
                     <h6 className="fs-sm fw-semibold mb-0">Annette Black</h6>
                     <span className="fs-xs text-muted">Co-founder of Lorem Company</span>
                   </div>
                 </figcaption>
               </figure>
                  </SwiperSlide>

             {/* <!-- Item --> */}
              <SwiperSlide className="swiper-slide h-auto p-2 pb-4">
               <figure className="d-flex flex-column h-100 mt-4">
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
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                   </div>
                 </div>
                 <figcaption className="d-flex align-items-center pt-4">
                   <Image src="/assets/img/avatar/02.jpg" width={48} height={48} className="rounded-circle" alt="Robert Fox"/>
                   <div className="ps-3">
                     <h6 className="fs-sm fw-semibold mb-0">Robert Fox</h6>
                     <span className="fs-xs text-muted">CEO of Ipsum Company</span>
                   </div>
                 </figcaption>
               </figure>
                  </SwiperSlide>

             {/* <!-- Item --> */}
              <SwiperSlide className="swiper-slide h-auto p-2 pb-4">
               <figure className="d-flex flex-column h-100 mt-4">
                 <div className="card h-100 position-relative border-0 shadow-sm pt-4">
                   <span className="btn btn-icon btn-primary shadow-primary pe-none position-absolute top-0 start-0 translate-middle-y ms-4">
                     <i className="bx bxs-quote-left"></i>
                   </span>
                   <blockquote className="card-body pb-3 mb-0">
                     <p className="mb-0">Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. Pellentesque vitae mattis aliquet velit arcu risus...</p>
                   </blockquote>
                   <div className="card-footer border-0 text-nowrap pt-0">
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bxs-star text-warning"></i>
                     <i className="bx bx-star text-muted opacity-75"></i>
                   </div>
                 </div>
                 <figcaption className="d-flex align-items-center pt-4">
                   <Image src="/assets/img/avatar/10.jpg" width={48} height={48} className="rounded-circle" alt="Jerome Bell"/>
                   <div className="ps-3">
                     <h6 className="fs-sm fw-semibold mb-0">Jerome Bell</h6>
                     <span className="fs-xs text-muted">Founder of the Agency </span>
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