"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';


const BrandsSlider = () => {
      return (
        <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
          <Swiper
            className="swiper mx-n2"
            modules={[Pagination]}
            spaceBetween={8}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              768: {            
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            pagination={{
            className:".swiper-pagination",
             clickable: true
            }}>  
                <div className="swiper-wrapper">  
            <SwiperSlide className="swiper-slide py-3">     
            {/* <!-- Item --> */}
          <Link href="#" className="card card-body card-hover px-2 mx-2">
            <Image src="/assets/img/brands/01.svg" className="d-block mx-auto my-2" width={154} height={154} alt="Brand"/>
          </Link>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide py-3">     
          {/* <!-- Item --> */}  
          <Link href="#" className="card card-body card-hover px-2 mx-2">
            <Image src="assets/img/brands/02.svg" className="d-block mx-auto my-2" width={154} height={154} alt="Brand"/>
          </Link>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide py-3">     
           {/* <!-- Item --> */}
          <Link href="#" className="card card-body card-hover px-2 mx-2">
            <Image src="assets/img/brands/03.svg" className="d-block mx-auto my-2" width={154} height={154} alt="Brand"/>
          </Link>
            </SwiperSlide>         
            <SwiperSlide className="swiper-slide py-3">     
              {/* <!-- Item --> */}
          <Link href="#" className="card card-body card-hover px-2 mx-2">
            <Image src="assets/img/brands/04.svg" className="d-block mx-auto my-2" width={154} height={154} alt="Brand"/>
          </Link>
          
            </SwiperSlide>
          </div>
           {/* <!-- Swiper pagination --> */}
           <div className="swiper-pagination position-relative pt-2 mt-4"></div>
          </Swiper>
              
          </section>
      );
    };
    
    export default BrandsSlider;
    