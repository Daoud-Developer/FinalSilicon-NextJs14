"use client";
import Image from 'next/image';
import Link from 'next/link';

function HeroTitleS() {
  return (
      <div className="col-xl-5 col-lg-6 position-relative py-5">
     <Image src="/assets/img/landing/conference/hero-bg.png" 
     className="position-absolute top-50 translate-middle-y ms-lg-n4" 
     width={600} height={600}
     alt="Background shapes"
     />
     <div className="position-relative zindex-5 text-center text-lg-start px-3 px-lg-0 py-xl-4 py-xxl-5 mt-lg-3 mx-auto mx-lg-0" style={{maxWidth: "530px"}}>
       <h2 className="h3 text-primary">Oct 14-15, 2023</h2>
       <h1 className="display-1 pb-lg-3 mb-3">NY Digital Conference</h1>
       <div className="d-flex justify-content-center justify-content-lg-start text-start mb-2">
         <i className="bx bx-map fs-4 text-primary me-2"></i>
         <div className="fs-xl">International Convention Centre,<br/>New York, USA</div>
       </div>
       <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start py-4 py-lg-5">
          <Link href="#" className="btn btn-primary shadow-primary btn-lg me-sm-3 me-xl-4 mb-3">Buy access pass</Link>
          <Link href="#" className="btn btn-outline-primary btn-lg mb-3">
           <i className="bx bx-calendar-check fs-xl me-2 ms-n1"></i>
           Add to calendar
         </Link>
       </div>
       <div className="d-flex align-items-center justify-content-center justify-content-lg-start text-start pb-2 pt-lg-2 pb-xl-0 pt-xl-5 mt-xxl-5">
         <div className="d-flex me-3">
           <div className="d-flex align-items-center justify-content-center bg-light rounded-circle" style={{width: "52px", height: "52px"}}>
             <Image src="/assets/img/avatar/08.jpg"  width={48} height={48} className="rounded-circle" alt="Avatar"/>
           </div>
           <div className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3" style={{width: "52px", height: "52px"}}>
             <Image src="/assets/img/avatar/40.jpg"  width={48} height={48} className="rounded-circle" alt="Avatar"/>
           </div>
           <div className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3" style={{width: "52px", height: "52px"}}>
             <Image src="/assets/img/avatar/09.jpg" width={48} height={48} className="rounded-circle" alt="Avatar"/>
           </div>
         </div>
         <span className="fs-sm"><span className="text-primary fw-semibold">400+</span> attendees are already with us</span>
       </div>
     </div>
      </div>

  )
}

export default HeroTitleS