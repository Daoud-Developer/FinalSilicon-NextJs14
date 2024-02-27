"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper/modules';


function BrandsCarouselComp() {
  return (
      <div className="container mt-2 mb-lg-2 mb-xl-4 pt-3 pt-lg-5 pb-5">
      <h2 className="text-center pb-md-2">Trusted by Leading Universities &amp; Companies</h2>
      <Swiper  className="swiper mx-n2"
      modules={[Pagination]}
      slidesPerView={2}
      pagination={{
       className: ".swiper-pagination",
       clickable: true,}}
        breakpoints= {{
         500:{
            "slidesPerView": 3,
            "spaceBetween": 8
          },
          650: {
            "slidesPerView": 4,
            "spaceBetween": 8

          },
          900: {
            "slidesPerView": 5,
            "spaceBetween": 8
          },
          1100: {
            "slidesPerView": 6,
            "spaceBetween": 8
          }
          }}>
        <div className="swiper-wrapper">
              <SwiperSlide>
          {/* <!-- Item --> */}
          <div className="swiper-slide py-3">
             <Link href="#" className="card card-body card-hover px-2 mx-2">
              <Image src="assets/img/brands/01.svg" width={154} height={154} className="d-block mx-auto my-2" alt="Brand"/>
              </Link>
          </div>
              </SwiperSlide>

                  <SwiperSlide>

          {/* <!-- Item --> */}
          <div className="swiper-slide py-3">
             <Link href="#" className="card card-body card-hover px-2 mx-2">
              <Image src="assets/img/brands/02.svg" width={154} height={154} className="d-block mx-auto my-2" alt="Brand"/>
              </Link>
          </div>
                  </SwiperSlide>

                  <SwiperSlide>

          {/* <!-- Item --> */}
          <div className="swiper-slide py-3">
             <Link href="#" className="card card-body card-hover px-2 mx-2">
              <Image src="assets/img/brands/03.svg" width={154} height={154} className="d-block mx-auto my-2" alt="Brand"/>
              </Link>
          </div>
                  </SwiperSlide>

                  <SwiperSlide>
          {/* <!-- Item --> */}
          <div className="swiper-slide py-3">
             <Link href="#" className="card card-body card-hover px-2 mx-2">
              <Image src="assets/img/brands/04.svg" width={154} height={154} className="d-block mx-auto my-2" alt="Brand"/>
              </Link>
          </div>
                  </SwiperSlide>

                  <SwiperSlide>

          {/* <!-- Item --> */}
          <div className="swiper-slide py-3">
             <Link href="#" className="card card-body card-hover px-2 mx-2">
              <Image src="assets/img/brands/05.svg" width={154} height={154} className="d-block mx-auto my-2" alt="Brand"/>
              </Link>
          </div>

                  </SwiperSlide>

                  <SwiperSlide>

          {/* <!-- Item --> */}
          <div className="swiper-slide py-3">
             <Link href="#" className="card card-body card-hover px-2 mx-2">
              <Image src="assets/img/brands/06.svg" width={154} height={154} className="d-block mx-auto my-2" alt="Brand"/>
              </Link>
          </div>
                  </SwiperSlide>
            </div>     
            {/* <!-- Pagination (bullets) --> */}
          <div className="swiper-pagination position-relative pt-2 mt-4"></div>
      </Swiper>
      </div>
      )
}
export default BrandsCarouselComp