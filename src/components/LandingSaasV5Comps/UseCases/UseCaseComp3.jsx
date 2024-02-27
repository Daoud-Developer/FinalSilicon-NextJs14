"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js'; 

function UseCaseComp3() {

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
     <div className="row align-items-center justify-content-center py-4 py-md-5 my-2 my-sm-3 my-md-0 my-xl-3">
            <div className="col-11 col-sm-9 col-md-7 col-lg-6 offset-lg-1 order-md-2 pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
              <div ref={parallaxContainer} className="parallax" style={{maxWidth: "636px"}}>
                <div className="parallax-layer" data-depth="0.1">
                  <Image src="/assets/img/landing/saas-5/use-cases/chat-bot/window-light.png" 
                  className="d-dark-mode-none rounded-3"
                   style={{boxshadow: "0 10.2px 41px -6.8px rgba(189, 196, 221, .30)"}} 
                   alt="Chat bot UI window" width={800} height={800}/>
                  <Image src="/assets/img/landing/saas-5/use-cases/chat-bot/window-dark.png" 
                  className="d-none d-dark-mode-block rounded-3" 
                  style={{boxshadow: "0 8px 30px -4px rgba(8, 11, 18, .35)"}} alt="Chat bot UI window" width={800} height={800}/>
                </div>
                <div className="parallax-layer" data-depth="0.15">
                  <Image src="/assets/img/landing/saas-5/use-cases/chat-bot/message1-light.png" 
                  className="d-dark-mode-none" alt="Message" width={800} height={800}/>
                  <Image src="/assets/img/landing/saas-5/use-cases/chat-bot/message1-dark.png" 
                  className="d-none d-dark-mode-block" 
                  alt="Message" width={800} height={800}/>
                </div>
                <div className="parallax-layer" 
                data-depth="0.25">
                  <Image src="/assets/img/landing/saas-5/use-cases/chat-bot/message2-light.png" 
                  className="d-dark-mode-none" 
                  alt="Message" width={800} height={800}/>
                  <Image src="/assets/img/landing/saas-5/use-cases/chat-bot/message2-dark.png" 
                  className="d-none d-dark-mode-block" 
                  alt="Message" width={800} height={800}/>
                </div>
                <div className="parallax-layer" 
                data-depth="0.35">
                  <Image src="/assets/img/landing/saas-5/use-cases/chat-bot/message3-light.png" 
                  className="d-dark-mode-none" 
                  alt="Message" width={800} height={800}/>
                  <Image src="/assets/img/landing/saas-5/use-cases/chat-bot/message3-dark.png" 
                  className="d-none d-dark-mode-block" 
                  alt="Message" width={800} height={800}/>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-xl-4 offset-xl-1 order-md-1 text-center text-md-start">
              <h3 className="h2 mb-lg-4">Advanced chat bot</h3>
              <p className="fs-lg pb-lg-2 mb-4">
              Seamlessly integrate natural language processing and machine learning capabilities 
              into your chat bot and provide a personalized experience to your end users.
              </p>
                <Link href="#" className="btn btn-outline-primary rounded-pill">
                Learn more
                <i className="bx bx-right-arrow-alt fs-lg ms-2 me-n1"></i>
              </Link>
            </div>
          </div>

  )
}

export default UseCaseComp3