"use client";

import Videocomp from "./video-comp/video-comp"
import HeroTitleS from "./HeroTitleS/HeroTitleS"
import ScrollBtn from "./ScrollBtnMore/ScrollBtn"

function TitleSplit() {
  return (
       <div className="container-fluid position-relative px-0 pt-5 mt-6 mt-lg-4">
 <div className="row g-0">
      {/* <!-- Video --> */}
      <Videocomp/>
      {/* <!-- Title --> */}
      <HeroTitleS/>
      {/* <!-- Scroll button --> */}
      <ScrollBtn/>   
 </div>
</div>
  )
}

export default TitleSplit