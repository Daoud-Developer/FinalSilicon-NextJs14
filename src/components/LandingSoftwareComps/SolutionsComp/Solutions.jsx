"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

function Solutions() {
  return (
      <section  className="container mb-5 pb-lg-5 pb-md-4 pb-3">
      <h2  className="h1 mb-lg-5 mb-4 pb-lg-0 pb-md-2 text-center">Сustom Software Solutions</h2>
  
      {/* <!-- Swiper slider --> */}
      <Swiper  
      modules={[Pagination]}
      spaceBetween={24}
      className="swiper mb-xl-3" 
      pagination={{
       className: ".swiper-pagination",
       clickable: true,}}
      breakpoints= {{
         0:{
            "slidesPerView": 1,
          },
          500: {
            "slidesPerView": 2,

          },
          768: {
            "slidesPerView": 3,
          },
          1200: {
            "slidesPerView": 4,
          }
          }}
      
      >
        <div  className="swiper-wrapper">
  
            <SwiperSlide className="swiper-slide h-auto">
          {/* <!-- Swiper item --> */}
            <div  className="card h-100">
              <div  className="card-body my-md-5 my-4 py-xl-2 py-md-0 py-sm-2 text-center">
                <Image src="/assets/img/landing/software-agency-3/icons/01.svg" width={64} height={64} alt="Icon"  className="d-block mb-3 mx-auto"/>
                <h3  className="h5 mb-3">Software Development</h3>
                <p  className="mb-0">Commodo senectus massa est urna mi. Mattis dis arcu aenean libero viverra gravida.</p>
              </div>
            </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide h-auto">
  
          {/* <!-- Swiper item --> */}
            <div  className="card h-100">
              <div  className="card-body my-md-5 my-4 py-xl-2 py-md-0 py-sm-2 text-center">
                <Image src="/assets/img/landing/software-agency-3/icons/02.svg" width={64} height={64} alt="Icon"  className="d-block mb-3 mx-auto"/>
                <h3  className="h5 mb-3">App Development</h3>
                <p  className="mb-0">Enim vehicula integer mattis morbi risus. Hendrerit pharetra arcu quam viverra.</p>
              </div>
            </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide h-auto">
  
          {/* <!-- Swiper item --> */}
            <div  className="card h-100">
              <div  className="card-body my-md-5 my-4 py-xl-2 py-md-0 py-sm-2 text-center">
                <Image src="/assets/img/landing/software-agency-3/icons/03.svg" width={64} height={64} alt="Icon"  className="d-block mb-3 mx-auto"/>
                <h3  className="h5 mb-3">Support &amp; Maintenance</h3>
                <p  className="mb-0">Turpis ultrices lacinia ut placerat dignissim morbi. Amet lectus sed tortor in elit adipiscing magnis.</p>
              </div>
            </div>
                  </SwiperSlide>

                  <SwiperSlide className="swiper-slide h-auto">
  
          {/* <!-- Swiper item --> */}
            <div  className="card h-100">
              <div  className="card-body my-md-5 my-4 py-xl-2 py-md-0 py-sm-2 text-center">
                <Image src="/assets/img/landing/software-agency-3/icons/04.svg" width={64} height={64} alt="Icon"  className="d-block mb-3 mx-auto"/>
                <h3  className="h5 mb-3">Software QA &amp; Testing</h3>
                <p  className="mb-0">Amet felis viverra proin feugiat. Eget metus metus lorem dolor pellentesque.</p>
              </div>
          </div>
                  </SwiperSlide>
            </div>
                  
  
        {/* <!-- Swiper pagination --> */}
        <div  className="swiper-pagination position-static mt-4 pt-lg-3 pt-2"></div>
      </Swiper>
    </section>
  )
}

export default Solutions