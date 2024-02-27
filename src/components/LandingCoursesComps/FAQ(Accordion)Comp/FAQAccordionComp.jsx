"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Rellax from 'rellax';

import FAQItemsComp from './FAQItemsComp';

function FAQAccordionComp() {
  // Use useRef to reference the parallax container.
  const rellaxRef = useRef(null);

  useEffect(() => {
    // Initialize Rellax on the referenced element
    if (rellaxRef.current) {
      const rellax = new Rellax('.rellax', {
        // Rellax options here
        speed: -2,
        center: false,
        wrapper: null,
        round: true,
        vertical: true,
        horizontal: false
      });

      // Cleanup function to destroy Rellax instance when the component unmounts
      return () => rellax.destroy();
    }
  }, []);

  return (
    <div className="container pt-1 pt-lg-3">
      <div className="position-relative bg-primary rounded-3 overflow-hidden px-3 px-sm-4 px-md-0 py-5">
        {/* Parallax patterns */}
        <div ref={rellaxRef} className="rellax position-absolute top-0 start-0 w-100 h-100 d-none d-lg-block" 
          data-rellax-speed="-2">
          <Image src="/assets/img/landing/online-courses/pattern-1.svg" 
          className="position-absolute top-0 start-100 translate-middle ms-n4" 
          alt="Pattern" width={150} height={150}/>
          <Image src="/assets/img/landing/online-courses/pattern-2.svg" 
          className="position-absolute top-50 start-0 mt-n5 ms-n5" 
          alt="Pattern" width={150} height={150}/>
          <Image src="/assets/img/landing/online-courses/pattern-3.svg" 
          className="position-absolute top-100 start-100 translate-middle ms-n5 mt-n5" 
          alt="Pattern" width={150} height={150}/>
        </div>
        <div className="row justify-content-center position-relative zindex-2 py-lg-4">
            <div className="col-xl-8 col-lg-9 col-md-10 py-2">
              <h2 className="h1 text-light text-center mt-n2 mt-lg-0 mb-4 mb-lg-5">Frequently Asked Questions</h2>
              <div className="accordion" id="faq">

              {/* FAQItemsComp */}
                <FAQItemsComp />
              
              </div>
              </div>
              </div>
              
      </div>
    </div>
  );
}

export default FAQAccordionComp;