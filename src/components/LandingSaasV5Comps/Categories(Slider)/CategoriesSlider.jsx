"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';
import 'swiper/css';

function CategoriesSlider() {
  return (
      <section className="container position-relative zindex-3">
        <div className="d-none d-lg-block" 
        style={{marginTop: "-428px"}}>

        </div>
        <div className=" d-lg-none" 
        style={{marginTop: "-370px"}}>

        </div>
        <Swiper
           modules={[Pagination]} 
           className="swiper" 
          slidesPerView= {1}
          spaceBetween= {24}
          pagination={{
            className: ".swiper-pagination",
            clickable: true
          }}
          breakpoints={{
            560: {
              "slidesPerView": 2
            },
            960: {
              "slidesPerView": 3
            }
          }}>
          <div className="swiper-wrapper">

            {/* <!-- Item --> */}
             <SwiperSlide className="swiper-slide">
                <Link href="#" className="card-portfolio position-relative d-block rounded-3 overflow-hidden">
                <span className="position-absolute top-0 start-0 w-100 h-100 zindex-1" 
                style={{background: "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%)"}}>

                </span>
                <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
                  <div className="px-md-3">
                    <h3 className="h4 text-white mb-0">E-commerce</h3>
                    <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                      <span className="text-white fs-xs text-truncate opacity-70 pe-3">Order processing, price suggestions, user research</span>
                      <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="card-img">
                  <Image src="/assets/img/landing/saas-5/categories/ecommerce.jpg" width={500} height={500} alt="E-commerce"/>
                </div>
                </Link>
            </SwiperSlide>

            {/* <!-- Item --> */}
            <SwiperSlide className="swiper-slide">
                <Link href="#" className="card-portfolio position-relative d-block rounded-3 overflow-hidden">
                <span className="position-absolute top-0 start-0 w-100 h-100 zindex-1" 
                style={{background: "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%)"}}>

                </span>
                <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
                  <div className="px-md-3">
                    <h3 className="h4 text-white mb-0">Transportation</h3>
                    <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                      <span className="text-white fs-xs text-truncate opacity-70 pe-3">Itinerary planning, freight pricing culculations, etc.</span>
                      <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="card-img">
                  <Image src="/assets/img/landing/saas-5/categories/transportation.jpg" width={500} height={500} alt="Transportation"/>
                </div>
                </Link>
            </SwiperSlide>

            {/* <!-- Item --> */}
            <SwiperSlide className="swiper-slide">
                <Link href="#" className="card-portfolio position-relative d-block rounded-3 overflow-hidden">
                <span className="position-absolute top-0 start-0 w-100 h-100 zindex-1" 
                style={{background: "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%)"}}>

                </span>
                <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
                  <div className="px-md-3">
                    <h3 className="h4 text-white mb-0">Marketing</h3>
                    <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                      <span className="text-white fs-xs text-truncate opacity-70 pe-3">Market research, data visualization, user testing</span>
                      <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="card-img">
                  <Image src="/assets/img/landing/saas-5/categories/marketing.jpg" width={500} height={500} alt="Marketing"/>
                </div>
                </Link>
            </SwiperSlide>

            {/* <!-- Item --> */}
            <SwiperSlide className="swiper-slide">
                <Link href="#" className="card-portfolio position-relative d-block rounded-3 overflow-hidden">
                <span className="position-absolute top-0 start-0 w-100 h-100 zindex-1" 
                style={{background: "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%)"}}>

                </span>
                <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
                  <div className="px-3">
                    <h3 className="h4 text-white mb-0">Robotics</h3>
                    <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                      <span className="text-white fs-xs text-truncate opacity-70 pe-3">Enhancing robot learning, improve robotic precision</span>
                      <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="card-img">
                  <Image src="/assets/img/landing/saas-5/categories/robotics.jpg" width={500} height={500} alt="Robotics"/>
                </div>
                </Link>
            </SwiperSlide>

            {/* <!-- Item --> */}
            <SwiperSlide className="swiper-slide">
                <Link href="#" className="card-portfolio position-relative d-block rounded-3 overflow-hidden">
                <span className="position-absolute top-0 start-0 w-100 h-100 zindex-1" 
                style={{background: "linear-gradient(180deg, rgba(17, 24, 39, 0.00) 35.56%, #111827 95.3%)"}}>

                </span>
                <div className="position-absolute bottom-0 w-100 zindex-2 p-4">
                  <div className="px-3">
                    <h3 className="h4 text-white mb-0">Programming</h3>
                    <div className="card-portfolio-meta d-flex align-items-center justify-content-between">
                      <span className="text-white fs-xs text-truncate opacity-70 pe-3">Code generation, code debugging and optimization</span>
                      <i className="bx bx-right-arrow-circle fs-3 text-gradient-primary"></i>
                    </div>
                  </div>
                </div>
                <div className="card-img">
                  <Image src="/assets/img/landing/saas-5/categories/programming.jpg" width={500} height={500} alt="Programming"/>
                </div>
                </Link>
            </SwiperSlide>
          </div>

          {/* <!-- Pagination (bullets) --> */}
          <div className="swiper-pagination position-relative bottom-0 pt-2 pt-md-3 mt-4"></div>
            </Swiper>
      </section>

  )
}

export default CategoriesSlider