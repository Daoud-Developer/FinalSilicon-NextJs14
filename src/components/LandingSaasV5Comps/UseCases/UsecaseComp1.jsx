"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';


function UsecaseComp1() {

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
                <div ref={parallaxContainer} className="parallax" style={{maxWidth: "636px"}}>
                <div className="parallax-layer" data-depth="0">
                  <div className="ratio" style={{"--si-aspect-ratio": "90%"}}></div>
                </div>

                  {/* layer 1 */}
                 <div  className="parallax-layer" style={{paddingRight:"24.75%"}} data-depth="0.01">
                   {/* Light mode image */}
                 <Image src="/assets/img/landing/saas-5/use-cases/data-analysis/line-chart-light.png" 
                  className="d-dark-mode-none position-relative rounded-3" 
                  style={{ top: "27.5%", maxWidth: "482px", boxShadow: "0 12px 48px -8px rgba(189, 196, 221, .35)" }} 
                  alt="Total users line chart" width={482} height={482}/>
                  {/* Dark mode image */} 
                 <Image src="/assets/img/landing/saas-5/use-cases/data-analysis/line-chart-dark.png" 
                  className="d-none d-dark-mode-block position-relative rounded-3" 
                  style={{top:" 27.5%", maxWidth:" 482px", boxShadow: "0px 12px 48px -8px rgba(8, 11, 18, .40)"}}
                  alt="Total users line chart" width={482} height={482}/>
                </div>
                
                 {/* layer 2 */}
                <div  className="parallax-layer" style={{paddingLeft: "25%"}} data-depth="-0.12">
                  {/* Light mode image */}
                 <Image src="/assets/img/landing/saas-5/use-cases/data-analysis/bar-chart-light.png" 
                  className="d-dark-mode-none position-relative rounded-3" 
                  style={{maxWidth: "345px", boxShadow: "0 10.8px 43.2px -7.2px rgba(189, 196, 221, .35)"}} 
                  alt="Traffic bar chart" width={345} height={345}/>

                  {/* Dark mode image */}
                 <Image src="/assets/img/landing/saas-5/use-cases/data-analysis/bar-chart-dark.png" 
                  className="d-none d-dark-mode-block position-relative rounded-3" 
                  style={{maxWidth: "345px", boxShadow: "0px 12px 48px -8px rgba(8, 11, 18, .40)"}} 
                  alt="Traffic bar chart" width={345} height={345}/>

                </div>

                  {/* layer 3 */}
                
                <div className="parallax-layer" style={{paddingRight: "7.547%", paddingLeft: "24.74%"}} data-depth="0.3">
                 <Image src="/assets/img/landing/saas-5/use-cases/data-analysis/donut-chart-light.png" 
                  className="d-dark-mode-none position-relative rounded-3" 
                  style={{top: "60.75%", maxWidth: "302px", boxShadow: "0px 0px 48px -4px rgba(189, 196, 221, .35)"}} 
                  alt="Traffic donut chart" width={302} height={302}/>
                 <Image src="/assets/img/landing/saas-5/use-cases/data-analysis/donut-chart-dark.png" 
                  className="d-none d-dark-mode-block position-relative rounded-3" 
                  style={{top: "60.75%", maxWidth: "302px", boxShadow: "0px -15px 48px -8px rgba(8, 11, 18, .40)"}} 
                  alt="Traffic donut chart" width={302} height={302}/>
                </div>
              </div>
              
               
  )
}

export default UsecaseComp1