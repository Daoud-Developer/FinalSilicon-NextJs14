"use client";
import Image from 'next/image';
import Link from 'next/link';

function AboutComp() {
  return (
      <section  className="container my-5 py-lg-5 py-md-4 py-3">
    <div  className="row gy-4 py-xl-3">
      <div  className="col-md-6">
        <Image src="/assets/img/landing/software-agency-1/about-img.jpg" 
        alt="Image"  className="rounded-3" width={600} height={400}/>
      </div>
      <div  className="col-lg-5 col-md-6 offset-lg-1 d-flex">
        <div  className="align-self-center ps-lg-0 ps-md-4">
          <h2  className="h1 mb-lg-4 mb-3">Award-Winning Software Company</h2>
          <p  className="mb-4 pb-lg-3 fs-lg">Erat pharetra sed at fringilla etiam nullam platea fringilla. Gravida sodales sit mauris amet massa justo. Egestas ipsum amet tortor hendrerit amet phasellus adipiscing. Eget porta posuere pellentesque sed commodo gravida dignissim dignissim iaculis. Elementum nibh duis at in.</p>
          <div  className="d-flex align-items-center ms-sm-n4 ms-n3 mb-4 pb-lg-3">
            <div  className="ms-sm-4 ms-3">
              <Image src="/assets/img/landing/software-agency-3/awards/clutch-light.png" 
              width={63} height={63} alt="Clutch" className="d-dark-mode-none d-block"/> 
              <Image src="/assets/img/landing/software-agency-3/awards/clutch-dark.png" 
              width={63} height={63} alt="Clutch"  className="d-dark-mode-block d-none"/>
            </div>
            <div  className="ms-sm-4 ms-3">
              <Image src="/assets/img/landing/software-agency-3/awards/forbes-light.png" 
              width={72} height={72} alt="Clutch"  className="d-dark-mode-none d-block"/>
              <Image src="/assets/img/landing/software-agency-3/awards/forbes-dark.png" 
              width={72} height={72} alt="Clutch"  className="d-dark-mode-block d-none"/>
            </div>
            <div  className="ms-sm-4 ms-3">
              <Image src="/assets/img/landing/software-agency-3/awards/awwwards-light.png" 
              width={37} height={37} alt="Clutch"  className="d-dark-mode-none d-block"/>
              <Image src="/assets/img/landing/software-agency-3/awards/awwwards-dark.png" 
              width={37} height={37} alt="Clutch"  className="d-dark-mode-block d-none"/>
            </div>
          </div>
            <Link href="#"  className="btn btn-lg btn-outline-primary">More about us</Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutComp