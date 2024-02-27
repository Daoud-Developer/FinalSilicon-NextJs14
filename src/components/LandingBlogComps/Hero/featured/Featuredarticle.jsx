"use client";
import Image from 'next/image'
// Slier for featured article Component
import ArticlesSlider from './articles-slider/ArticlesSlider'

function Featuredarticle() {
  return (
    <div>
           {/* <!-- Featured article --> */}
           <div className="row mb-xxl-5 py-md-4 py-lg-5">
            <div className="col-lg-6 col-md-7 pb-3 pb-md-0 mb-4 mb-md-5">
              <div className="mb-3 fs-lg text-light">
                <Image src="assets/img/blog/flame.svg" width={24} height={24}  alt="Flame icon" className="mt-n1 me-1"/>
                Hot Topic
              </div>
              <h1 className="display-5 pb-md-3">This Long-Awaited Technology May Finally Change the World</h1>
              <div className="d-flex flex-wrap mb-md-5 mb-4 pb-md-2 text-white">
                <div className="border-end border-light h-100 mb-2 pe-3 me-3">
                  <span className="badge bg-faded-light fs-base">Technology</span>
                </div>
                <div className="border-end border-light mb-2 pe-3 me-3 opacity-70">12 hours ago</div>
                <div className="d-flex align-items-center mb-2 text-nowrap">
                  <div className="d-flex align-items-center me-3 opacity-70">
                    <i className="bx bx-like fs-lg me-1"></i>
                    <span className="fs-sm">8</span>
                  </div>
                  <div className="d-flex align-items-center me-3 opacity-70">
                    <i className="bx bx-comment fs-lg me-1"></i>
                    <span className="fs-sm">4</span>
                  </div>
                  <div className="d-flex align-items-center opacity-70">
                    <i className="bx bx-share-alt fs-lg me-1"></i>
                    <span className="fs-sm">2</span>
                  </div>
                </div>
              </div>
              <a href="/blog/singlepost/1" className="btn btn-lg btn-primary">
                Read article
                <i className="bx bx-right-arrow-alt ms-2 me-n1 lead"></i>
              </a>
            </div>
            {/* <!-- ArticlesSlider --> */}
            <div className="col-lg-4 offset-lg-2 col-md-5">
           <ArticlesSlider  />
           </div>
        </div>
    </div>
        
  )
}

export default Featuredarticle