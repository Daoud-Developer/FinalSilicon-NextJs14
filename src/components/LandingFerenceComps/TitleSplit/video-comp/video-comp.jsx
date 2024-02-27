"use client";
function videocomp() {
  return (
      <div className="col-xl-7 col-lg-6 pe-lg-5">
      <div className="d-flex h-100 pe-xl-4">
        <video className="w-100" autoPlay muted loop style={{objectFit:"cover"}}>
          <source src="/assets/img/landing/conference/hero-video.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}

export default videocomp