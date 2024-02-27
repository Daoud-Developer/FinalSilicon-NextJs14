"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const JarallaxImage = dynamic(() => import('../../../utils/JarallaxImage'), {
  ssr: false, // هذا يمنع تحميل المكون في الـ Server-Side
});
// Featured component 
import Featuredarticle from './featured/Featuredarticle'
import Breadcrumb from './breadcrumb/Breadcrumb'


function Hero() {
  return (
    <div>
    {/* <!-- Hero --> */}
      <section className="position-relative jarallax pb-xl-3" data-jarallax data-speed="0.4" data-bs-theme="dark">

        {/* <!-- Jarallax img --> */}
        <div>  
       <JarallaxImage className="jarallax-img bg-dark opacity-70" 
       src="assets/img/blog/single/cover-image.jpg"/>

        </div>

        {/* <!-- Overlay bg --> */}
        <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-70 zindex-1"></span>

        {/* <!-- Overlay content --> */}
        <div className="container position-relative pb-5 zindex-5">

          {/* <!-- Breadcrumb --> */}
          <Breadcrumb />      
         {/* <!-- Featured article --> */}
          <Featuredarticle />
        </div>
      </section>
    </div>
  )
}

export default Hero