"use client";
import Image from 'next/image';

function AuthorHeroComp() {
  return (
      <div className="d-flex align-items-center mt-xl-5 pt-2 pt-md-4 pt-lg-5">
     <Image src="/assets/img/avatar/17.jpg" className="rounded-circle" 
     width={80} height={80} alt="Albert Flores"/>
      <div className="ps-3">
        <div className="text-light opacity-80 mb-1">Created by</div>
        <h6>Albert Flores</h6>
      </div>
    </div>
  )
}

export default AuthorHeroComp