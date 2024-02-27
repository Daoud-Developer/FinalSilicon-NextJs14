"use client";
import Link from 'next/link';

function ScrollBtn() {
  return (
      <div className="position-absolute d-none d-lg-block bottom-0 start-0 w-100 zindex-5 pb-xxl-5">
   <div className="container pb-4 mb-3 mb-xxl-0">
      <Link href="#speakers" className="d-table text-light opacity-80 text-decoration-none w-auto py-4" 
      data-scroll data-scroll-offset="70">
       <span className="d-flex align-items-center">
         Scroll for more
         <i className="bx bx-down-arrow-circle fs-3 ms-2"></i>
       </span>
     </Link>
   </div>
   </div>
  )
}

export default ScrollBtn