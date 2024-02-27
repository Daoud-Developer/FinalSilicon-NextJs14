"use client";
import Link from 'next/link'
import Image from 'next/image'
import BrandsCarousel from './BrandsCarousel'

function StatsPartnersComp() {
  return (
 <section className="bg-secondary mb-5 py-lg-4 py-xl-5">
     <div className="container pt-5">
       <div className="row align-items-center gy-5 pt-2 pt-sm-3 pt-md-4">
         <div className="col-lg-5 text-lg-start text-center">
           <h2 className="h1 mb-4 pb-lg-2">Company built by a global team of innovators</h2>
           <p className="mb-4 pb-1 pb-sm-2 pb-lg-3">In blandit luctus proin mauris a commodo, dolor diam tempus, aenean magna fusce eu. Id porttitor aliquam eget aliquet sagittis eu aut diam ut phasellus sed convallis iaculis neque ultricies convallis sed enim</p>
            <Link href="/contact-us" className="btn btn-primary">Contact us</Link>
         </div>
         <div className="col-lg-6 offset-lg-1">
           <div className="row row-cols-sm-2 row-cols-1 g-4 align-items-center">
             <div className="col">
               <div className="card border-0">
                 <div className="card-body m-xl-3 m-1 text-center">
                   <Link href="/contact-us" className="d-inline-block mb-4 pb-2">
                     <Image src="/assets/img/about/clutch-logo-light.svg" width={116} height={116} alt="Clutch" className="d-dark-mode-none d-block"/>
                     <Image src="/assets/img/about/clutch-logo-dark.svg" width={116} height={116} alt="Clutch" className="d-dark-mode-block d-none"/>
                   </Link>
                   <h5 className="mb-3 fs-lg fw-normal lh-1">
                     <span className="h1 d-block w-100 mb-0">100%</span>
                     Positive Feedback
                   </h5>
                   <div className="mb-3 text-nowrap">
                     <i className="bx bxs-star text-warning fs-sm"></i>
                     <i className="bx bxs-star text-warning fs-sm"></i>
                     <i className="bx bxs-star text-warning fs-sm"></i>
                     <i className="bx bxs-star text-warning fs-sm"></i>
                     <i className="bx bxs-star text-warning fs-sm"></i>
                   </div>
                   <Image src="/assets/img/about/members-light.png" width={168} height={168} alt="Members" className="d-dark-mode-none d-block mx-auto"/>
                   <Image src="/assets/img/about/members-dark.png" width={168} height={168} alt="Members" className="d-dark-mode-block d-none mx-auto"/>
                 </div>
               </div>
             </div>
             <div className="col">
               <div className="card border-0">
                 <div className="card-body m-xl-3 m-1 text-center">
                   <Image src="/assets/img/about/chat-light.svg" width={56} height={56} alt="Icon" className="d-dark-mode-none d-block mx-auto mb-4"/>
                   <Image src="/assets/img/about/chat-dark.svg" width={56} height={56} alt="Icon" className="d-dark-mode-block d-none mx-auto mb-4"/>
                   <h5 className="mb-3 fs-lg fw-normal lh-1">
                     <span className="h1 d-block w-100 mb-0">24/7</span>
                     Customer support
                   </h5>
                 </div>
               </div>
               <div className="card border-0 mt-4">
                 <div className="card-body m-xl-3 m-1 bg-repeat-0 bg-position-top-end" 
                 style={{backgroundImage: "url(assets/img/about/graph.svg)"}}>
                   <h5 className="mb-3 fs-lg fw-normal lh-1 mt-5">
                     <span className="h1 d-block w-100 mb-0">+12k</span>
                     new leads for clients
                   </h5>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>

       {/* <!-- Brands (carousel) --> */}
            <BrandsCarousel />
       
     </div>
   </section>
  )
}

export default StatsPartnersComp