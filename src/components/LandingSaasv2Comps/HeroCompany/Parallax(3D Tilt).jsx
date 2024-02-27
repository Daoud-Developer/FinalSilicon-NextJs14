"use client"
import Image from 'next/image'
import ParallaxTilt from "../../../utils/ParallaxTilt.js";

function Parallax() {
   
    


    return (
        <div  className="position-relative zindex-5 mx-auto" style={{ maxWidth: "1250px", transform: "translateZ(-100px)" }}>
            <div className="d-none d-lg-block" style={{ marginTop: "-300px" }}></div>
            {/* Adjusted to use separate refs */}
            <div className="d-none d-md-block d-lg-none" style={{ marginTop: "-150px" }}></div>

            {/* Parallax (3D Tilt) gfx */}
              <ParallaxTilt 
              className="tilt-3d"  
              data-tilt data-tilt-full-page-listening data-tilt-max={12}
              data-tilt-perspective={1200}
              >
              
                <Image src="/assets/img/landing/saas-2/hero/layer01.png" width={1200} height={1200} alt="Layer" />
                <div  className="tilt-3d-inner position-absolute top-0 start-0 w-100 h-100">
                    <Image src="/assets/img/landing/saas-2/hero/layer02.png" width={1200} height={1200} alt="Dashboard" />
                </div>
                
              </ParallaxTilt>
        </div>


    );
}

export default Parallax;