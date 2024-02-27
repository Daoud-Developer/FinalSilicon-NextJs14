"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const JarallaxImage = dynamic(() => import('../../../utils/JarallaxImage'), {
  ssr: false, // هذا يمنع تحميل المكون في الـ Server-Side
});

function PricingComparison() {
  return (
    <section className="position-relative bg-dark pt-lg-4 pt-xl-5" 
      style={{background: "linear-gradient(90deg, #0b0f19 0%, #172033 51.04%, #0b0f19 100%)"}}>
        <div className="jarallax position-absolute top-0 start-0 w-100 h-100" data-jarallax data-speed="0.4"> 
          <JarallaxImage src="assets/img/landing/saas-5/pricing-bg-pattern.png" speed={0.2}/> 
        </div>
        <div className="container position-relative zindex-2 pt-5" data-bs-theme="dark">
          <h2 className="h1 text-center pt-2 pt-sm-3 pb-4 pb-md-5 mb-2 mb-md-0 mb-lg-2">Silicon vs Custom development </h2>
          <div className="overflow-x-auto pb-4">
            <div className="position-relative ms-n4 ms-md-0" 
            style={{minWidth: "800px"}}>

              <div className="position-absolute top-0 start-50 translate-middle-x h-100 bg-secondary rounded-3 rounded-bottom-0 d-none d-lg-block" 
              style={{width: "342px"}}>

              </div>
              <div className="position-absolute top-0 start-50 translate-middle-x h-100 bg-secondary rounded-3 rounded-bottom-0 d-lg-none" 
              style={{width: "300px"}}>

              </div>

              {/* <!-- Row --> */}
              <div className="row row-cols-3 align-items-center position-relative zindex-2 g-0">
                <div className="col">&nbsp;</div>
                <div className="col py-2 py-md-3">
                  <div className="text-center py-4 mx-auto" 
                  style={{width: "264px"}}>
                    <h3 className="h4 mb-sm-4">Silicon</h3>
                    <a href="#" className="btn btn-primary bg-gradient-primary w-100 border-0 rounded-pill mb-2">Get started - Free</a>
                    <p className="text-body fs-xs mb-0">Our pricing starts at as low as $1,299 per team</p>
                  </div>
                </div>
                <div className="col text-center pe-lg-5">
                  <h3 className="h4 pt-3 pt-md-4 mb-0 mx-auto" 
                  style={{width: "264px"}}>
                  Building In-House
                  </h3>
                </div>
                <div className="position-relative w-100 opacity-50">
                  <span className="position-absolute top-0 start-0 w-100 h-1" 
                  style={{background: "linear-gradient(270deg, #0f1522 0%, rgba(11, 15, 25, 0) 54.17%, #0f1522 98.44%)"}}>

                  </span>
                  <span className="d-block w-100 h-1 bg-gradient-primary"></span>
                </div>
              </div>

              {/* <!-- Row --> */}
              <div className="row row-cols-3 align-items-center position-relative zindex-2 g-0">
                <div className="col py-3 py-md-4 ps-lg-5">
                  <div className="text-white opacity-80 fs-lg py-1 px-4 mx-auto" 
                  style={{width: "208px"}}>
                  Data Models Infrastructure Cost
                  </div>
                </div>
                <div className="col py-3 py-md-4">
                  <div className="text-center py-1 px-4 mx-auto" 
                  style={{width: "264px"}}>
                    <div  className="text-white fs-lg fw-semibold">Included</div>
                    <div className="text-body fs-xs">Cloud hosted AI/ML capacities</div>
                  </div>
                </div>
                <div className="col py-3 py-md-4 pe-lg-5">
                  <div className="text-center py-1 px-4 mx-auto" 
                  style={{width: "264px"}}>
                    <div  className="text-white fs-lg fw-semibold">
                    From $10k to $50k
                    </div>
                    <div className="text-body fs-xs">
                    per month
                    </div>
                  </div>
                </div>
                <div className="position-relative w-100 opacity-50">
                  <span className="position-absolute top-0 start-0 w-100 h-1" 
                  style={{background: "linear-gradient(270deg, #0f1522 0%, rgba(11, 15, 25, 0) 54.17%, #0f1522 98.44%)"}}>

                  </span>
                  <span className="d-block w-100 h-1 bg-gradient-primary"></span>
                </div>
              </div>

              {/* <!-- Row --> */}
              <div className="row row-cols-3 align-items-center position-relative zindex-2 g-0">
                <div className="col py-3 py-md-4 ps-lg-5">
                  <div className="text-white opacity-80 fs-lg py-1 px-4 mx-auto" 
                  style={{width: "208px"}}>
                  Engineering Cost
                  </div>
                </div>
                <div className="col py-3 py-md-4">
                  <div className="text-center py-1 px-4 mx-auto" 
                  style={{width:" 264px"}}>
                    <div  className="text-white fs-lg fw-semibold">Included</div>
                    <div className="text-body fs-xs">with our premium plans</div>
                  </div>
                </div>
                <div className="col py-3 py-md-4 pe-lg-5">
                  <div className="text-center py-1 px-4 mx-auto" 
                  style={{width: "264px"}}>
                    <div  className="text-white fs-lg fw-semibold">From $25k to $30k</div>
                    <div className="text-body fs-xs">per engineer per month</div>
                  </div>
                </div>
                <div className="position-relative w-100 opacity-50">
                  <span className="position-absolute top-0 start-0 w-100 h-1" 
                  style={{background: "linear-gradient(270deg, #0f1522 0%, rgba(11, 15, 25, 0) 54.17%, #0f1522 98.44%)"}}>

                  </span>
                  <span className="d-block w-100 h-1 bg-gradient-primary"></span>
                </div>
              </div>

              {/* <!-- Row --> */}
              <div className="row row-cols-3 align-items-center position-relative zindex-2 g-0">
                <div className="col py-3 py-md-4 ps-lg-5">
                  <div className="text-white opacity-80 fs-lg py-1 px-4 mx-auto" 
                  style={{width: "208px"}}>
                  Time to Implement
                  </div>
                </div>
                <div className="col py-4">
                  <div className="text-center py-1 px-4 mx-auto" 
                  style={{width: "264px"}}>
                    <div  className="text-white fs-lg fw-semibold">
                    Get started in minutes
                    </div>
                  </div>
                </div>
                <div className="col py-3 py-md-4 pe-lg-5">
                  <div className="text-center py-1 px-4 mx-auto" 
                  style={{width: "264px"}}>
                    <div  className="text-white fs-lg fw-semibold">
                    Average 6-9 months
                    </div>
                    <div className="text-body fs-xs">
                    depends on team qualification
                    </div>
                  </div>
                </div>
                <div className="position-relative w-100 opacity-50">
                  <span className="position-absolute top-0 start-0 w-100 h-1" 
                  style={{background: "linear-gradient(270deg, #0f1522 0%, rgba(11, 15, 25, 0) 54.17%, #0f1522 98.44%)"}}>

                  </span>
                  <span className="d-block w-100 h-1 bg-gradient-primary"></span>
                </div>
              </div>

              {/* <!-- Row --> */}
              <div className="row row-cols-3 align-items-center position-relative zindex-2 g-0">
                <div className="col py-3 py-md-4 ps-lg-5">
                  <div className="text-white opacity-80 fs-lg py-1 px-4 mx-auto" style={{width: "208px"}}>Maintenance &amp; Operational Cost</div>
                </div>
                <div className="col py-3 py-md-4">
                  <div className="text-center py-1 px-4 mx-auto" 
                  style={{width: "264px"}}>
                    <div  className="text-white fs-lg fw-semibold">Included</div>
                    <div className="text-body fs-xs">with our premium plans</div>
                  </div>
                </div>
                <div className="col py-3 py-md-4 pe-lg-5">
                  <div className="text-center py-1 px-4 mx-auto" 
                  style={{width: "264px"}}>
                    <div  className="text-white fs-lg fw-semibold">Average $20k</div>
                    <div className="text-body fs-xs">per engineer per month</div>
                  </div>
                </div>
                <div className="position-relative w-100 opacity-50">
                  <span className="position-absolute top-0 start-0 w-100 h-1" 
                  style={{background: "linear-gradient(270deg, #0f1522 0%, rgba(11, 15, 25, 0) 54.17%, #0f1522 98.44%)"}}>

                  </span>
                  <span className="d-block w-100 h-1 bg-gradient-primary"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-none d-xl-block" 
        style={{height: "300px"}}>

        </div>
        <div className="d-none d-md-block d-xl-none" 
        style={{height: "260px"}}>

        </div>
        <div className="d-md-none" 
        style={{height: "230px"}}>

        </div>
        <div className="d-flex position-absolute bottom-0 start-0 w-100 overflow-hidden mb-n1" 
        style={{color: "var(--si-body-bg)"}}>
          <div className="position-relative start-50 translate-middle-x flex-shrink-0" 
          style={{width: "3774px"}}>
            <svg width="3774" height="201" viewBox="0 0 3774 201" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200.003C0 200.003 1137.52 0.188224 1873.5 0.000134392C2614.84 -0.189325 3774 200.003 3774 200.003H0Z" 
            fill="currentColor"/>
            </svg>
          </div>
        </div>
      </section>
  )
}

export default PricingComparison