"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Rellax from 'rellax';

 

function AppdownloadComp() {

      useEffect(() => {
            new Rellax('.rellax', {
            speed: 1.5,
            center: true,
            wrapper: null,
            round: true,
            vertical: true,
            horizontal: true,
            screenX:true,
            });
            }, []);

      return (
        <section className="container">
      <div className="bg-secondary rounded-3 overflow-hidden py-5 px-2 ps-lg-0 pe-md-5 pe-lg-0">
        <div className="row align-items-center py-sm-2">
          <div className="col-md-7 col-lg-6 offset-xl-1">
            <div className="position-relative mx-auto mb-5 m-md-0" style={{maxWidth: "526px"}}>
              {/* Assuming assets are placed in the public directory */}
             <img src="assets/img/landing/saas-2/device.png"  className="d-block" alt="Device"/>
              <div className="rellax d-block position-absolute top-0 end-2 w-100 mt-5 md-4 me-md-n5" 
                data-rellax-percentage="0.5"
                data-rellax-vertical-scroll-axis="xy"
                data-rellax-horizontal-speed="0.6"
                data-rellax-vertical-speed="-0.2"
              
              >
                    
          
               <Image src="/assets/img/landing/saas-2/screen.png"  width={1000} height={1000} alt="Screen"/>
              </div>
            </div>
          </div>

            {/* <!-- Text + Download buttons --> */}
            <div className="col-xl-4 col-md-5 mt-n2 mt-md-0">
              <h2 className="h1 text-center text-md-start mb-4 mb-lg-5">Download Our App for Any Devices:</h2>
              <div className="row">
                <div className="col-sm-6 col-md-12 pb-4 pb-sm-0">
                  <div className="row row-cols-1 row-cols-lg-2 align-items-end text-center text-md-start pb-md-4 mb-lg-3">
                    <div className="col mb-3 mb-lg-0">
                      <p className="text-muted mb-1">App Store</p>
                      <div className="text-nowrap fs-sm pb-lg-1 mb-2">
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                      </div>
                      <h3 className="h4 mb-1">Editor's Choice</h3>
                      <p className="mb-0">rating 4.7, 187K+ reviews</p>
                    </div>
                    <div className="col d-lg-flex justify-content-end">
                       <Link href="#" className="btn btn-dark btn-lg px-3 py-2">
                       <Image src="assets/img/market/appstore-light.svg" className="light-mode-img" width={124} height={45} alt="App Store"/>
                       <Image src="assets/img/market/appstore-dark.svg" className="dark-mode-img" width={124} height={45} alt="App Store"/>
                      </Link>        
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-12">
                  <div className="row row-cols-1 row-cols-lg-2 align-items-end text-center text-md-start">
                    <div className="col mb-3 mb-lg-0">
                      <p className="text-muted mb-1">Google Play</p>
                      <div className="text-nowrap fs-sm pb-lg-1 mb-2">
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                        <i className="bx bxs-star text-warning"></i>
                      </div>
                      <h3 className="h4 mb-1">App of the Day</h3>
                      <p className="mb-0">rating 4.8, 30K+ reviews</p>
                    </div>
                    <div className="col d-lg-flex justify-content-end">
                       <Link href="#" className="btn btn-dark btn-lg px-3 py-2">
                       <Image src="assets/img/market/googleplay-light.svg" className="light-mode-img" width={139} height={45} alt="Google Play"/>
                       <Image src="assets/img/market/googleplay-dark.svg" className="dark-mode-img" width={139} height={45} alt="Google Play"/>
                      </Link>               
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AppdownloadComp