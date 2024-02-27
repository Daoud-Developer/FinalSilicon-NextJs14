"use client";
import Image from 'next/image';

function MapComp() {
  return (
     <section className="bg-dark py-5" data-bs-theme="dark">
        <div className="container pt-2 py-sm-3 py-md-4 py-lg-5 my-xxl-3">
          <div className="row pt-lg-2 pt-xl-3">
            <div className="col-md-6">
              <h2 className="h1 pe-xxl-5 me-xl-4 mb-md-0">Our <span className="text-warning">data centers</span> spread all over the world. Get access  to the API from anywhere</h2>
            </div>
            <div className="col-md-6 col-xl-5 offset-xl-1">
              <p className="text-body fs-xl mb-0">Our data centers are a key component of our global infrastructure, providing reliable and scalable computing resources to customers around the world. We offer a highly distributed and resilient platform that can support the most demanding workloads.</p>
            </div>
          </div>
          <div className="pt-5 mt-sm-2 mt-md-3 mt-lg-4 mt-xl-5">
            <Image src="/assets/img/landing/saas-5/map.png" width={1200} height={800} className="w-100" alt="Map"/>
          </div>
        </div>
      </section>
  )
}

export default MapComp