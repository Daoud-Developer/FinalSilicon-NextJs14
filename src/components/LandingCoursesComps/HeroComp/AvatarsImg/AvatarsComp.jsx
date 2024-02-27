"use client";
import Image from 'next/image'

function AvatarImgComp() {
  return (
      <div className="d-flex align-items-center mt-auto mb-3 mb-lg-0 pb-4 pb-lg-0 pb-xl-5">
      <div className="d-flex me-3">
        <div className="d-flex align-items-center justify-content-center bg-light rounded-circle" 
        style={{width:" 52px", height:" 52px"}}>

          <Image src="/assets/img/avatar/08.jpg" className="rounded-circle" width={48} height={48} alt="Avatar"/>
        </div>
        <div className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"  
        style={{width:" 52px", height:" 52px"}}>

          <Image src="/assets/img/avatar/15.jpg" className="rounded-circle" width={48} height={48} alt="Avatar"/>
        </div>
        <div className="d-flex align-items-center justify-content-center bg-light rounded-circle ms-n3"  
        style={{width:" 52px", height:" 52px"}}>
          <Image src="/assets/img/avatar/16.jpg" className="rounded-circle" width={48} height={48} alt="Avatar"/>
        </div>
      </div>
      <span className="fs-sm"><span className="text-primary fw-semibold">10K+</span> students are already with us</span>
    </div>
  )
}

export default AvatarImgComp