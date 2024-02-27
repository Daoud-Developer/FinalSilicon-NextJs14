"use client";
import Image from 'next/image';


function HeroAnimComp() {
  return (
      <section className="position-relative d-flex align-items-center min-vh-100 py-5 bg-dark overflow-hidden">
      <span className="position-absolute top-0 start-0 d-dark-mode-block d-none w-100 h-100 bg-secondary opacity-75"></span>
      <div className="container position-relative mt-5 mb-lg-5 mb-md-4 mb-3 pt-3 pb-xl-3" data-bs-theme="dark">
        <div className="row gy-5">
          <div className="col-xl-5 col-lg-6">
            <div className="position-relative zindex-5 text-lg-start text-center">
              <h1 className="display-2 mb-4 pb-lg-3 pb-md-2">Top <span className="text-primary">software</span> engineering company</h1>
              <p className="mb-4 pb-lg-3 pb-md-2">
                <span className="me-2 text-light">We are the Top Rated agency on</span>
                <Image src="/assets/img/landing/software-agency-3/clutch-rating.png" 
                width={100} height={100}
                alt="Clutch rating" 
                className="mt-n1"/>
              </p>
              <a href="#" className="btn btn-lg btn-primary">Start your project</a>
            </div>
          </div>
          <div className="col-lg-6 offset-xl-1">
            <div className="position-relative ms-xl-0 ms-lg-4">
              <div className="position-absolute top-50 start-50 translate-middle ratio ratio-1x1" 
              style={{width:" 125%", maxWidth: "49.75rem"}}>
                <div className="p-md-0 p-5">
                  <Image src="/assets/img/landing/software-agency-3/hero-bg.png" 
                  alt="Shape" 
                  className="hero-animation-spin p-md-0 p-5" width={800} height={800}/>
                </div>
              </div>
              <div className="position-relative row row-cols-sm-2 row-cols-1 gx-xl-4 gx-lg-3 gx-md-4 gx-3">
                <div className="col">
                  <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                    <div className="d-flex align-items-center justify-content-center bg-secondary rounded-3" style={{minHeight: "176px", backdropFilter:"blur(6px)"}}>
                      <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                        <span className="hero-animation-fade hero-animation-delay-1 text-white">I need AI engineers</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center bg-secondary rounded-3" style={{minHeight: "176px", backdropFilter:"blur(6px)"}}>
                      <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center  ">
                        <span className="hero-animation-fade hero-animation-delay-2 text-white">We are looking for Shopify Experts</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col mt-sm-5 mt-2 pt-sm-5">
                  <div className="d-sm-grid d-flex gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 gap-2">
                    <div className="d-flex align-items-center justify-content-center bg-secondary rounded-3" style={{minHeight: "176px", backdropFilter:"blur(6px)"}}>
                      <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center ">
                        <span className="hero-animation-fade hero-animation-delay-3 text-white">I need MVP for startup</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-center bg-secondary rounded-3" style={{minHeight: "176px", backdropFilter:"blur(6px)"}}>
                      <div className="p-xl-4 p-sm-3 p-2 fs-xl fw-semibold text-center">
                        <span className="hero-animation-fade hero-animation-delay-4  text-white">I need web development</span>
                      </div>
                    </div>
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

export default HeroAnimComp