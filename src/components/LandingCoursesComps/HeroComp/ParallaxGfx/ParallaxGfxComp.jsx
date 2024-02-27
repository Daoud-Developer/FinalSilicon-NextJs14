"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

// Assuming parallax-js is correctly installed
import Parallax from 'parallax-js';

const ParallaxGfxComp = () => {
  const parallaxContainer = useRef(null);

  useEffect(() => {
    let parallaxInstance;
    if (parallaxContainer.current) {
      parallaxInstance = new Parallax(parallaxContainer.current);
      console.log(parallaxInstance); // Debug: Inspect the instance
    }

    // Ensure the 'destroy' method exists before calling it
    return () => {
      if (parallaxInstance && typeof parallaxInstance.destroy === 'function') {
        parallaxInstance.destroy();
      } else {
        console.error('Destroy method not found on parallaxInstance');
      }
    };
  }, []);

  return (
    <div className="col-lg-7">
      <div ref={parallaxContainer} className="parallax mx-auto me-lg-0" style={{maxWidth: "648px"}}>
      <div  className="parallax-layer" data-depth="0.1">
          <Image src="/assets/img/landing/online-courses/hero/layer01.png" width={648} height={648} alt="Layer"/>
        </div>
        <div className="parallax-layer" data-depth="0.13">
          <Image src="/assets/img/landing/online-courses/hero/layer02.png"  width={648} height={648} alt="Layer"/>
        </div>
        <div className="parallax-layer zindex-5" data-depth="-0.12">
          <Image src="/assets/img/landing/online-courses/hero/layer03.png"  width={648} height={648} alt="Layer"/>
        </div>
        <div className="parallax-layer zindex-3" data-depth="0.27">
          <Image src="/assets/img/landing/online-courses/hero/layer04.png"  width={648} height={648} alt="Layer"/>
        </div>
        <div className="parallax-layer zindex-1" data-depth="-0.18">
          <Image src="/assets/img/landing/online-courses/hero/layer05.png"  width={648} height={648} alt="Layer"/>
        </div>
        <div className="parallax-layer zindex-1" data-depth="0.1">
          <Image src="/assets/img/landing/online-courses/hero/layer06.png"  width={648} height={648} alt="Layer"/>
        </div>
      </div>
    </div>
  );
};

export default ParallaxGfxComp;