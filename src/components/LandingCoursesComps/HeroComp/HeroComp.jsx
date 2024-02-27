"use client";
import DesktopForm from './DesktopformComp/DesktopForm'
import MobileForm from './MobileFormComp/MobileForm'
import AvatarsComp from './AvatarsImg/AvatarsComp'
import ParallaxGfxComp from './ParallaxGfx/ParallaxGfxComp'

function ContentComp() {
  return (
    <div className="container position-relative zindex-2 py-lg-4">
    <div className="row">
      <div className="col-lg-5 d-flex flex-column pt-lg-4 pt-xl-5">
        <h5 className="my-2">Welcome!</h5>
        <h1 className="display-3 mb-4">Learn <span className="text-primary">IT Online</span> with No Limits</h1>
        <p className="fs-lg mb-5">Enjoy our great selection of IT courses. Choose from more than 25K online video courses and become an IT expert now!</p>
        {/* <!-- Desktop form Comp--> */}
        <DesktopForm />            
        {/* <!-- Mobile form Comp --> */}
        <MobileForm />    
        {/* <!-- AvatarsImg Comp --> */}
        <AvatarsComp />     
      </div>
     {/* <!-- Parallax gfx Comp --> */}
      <ParallaxGfxComp />
    </div>
  </div>
 )


}

export default ContentComp