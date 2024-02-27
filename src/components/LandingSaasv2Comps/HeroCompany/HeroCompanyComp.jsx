"use client";
import ParallaxTilt from './Parallax(3D Tilt)'
import Link from 'next/link'


function HeroComp() {
  return (
     <section className="position-relative overflow-hidden">
        <div className="position-relative bg-dark zindex-4 pt-lg-3 pt-xl-5">
  
          {/* <!-- Text --> */}
          <div className="container zindex-5 pt-5">
            <div className="row justify-content-center text-center pt-4 pb-sm-2 py-lg-5">
              <div className="col-xl-8 col-lg-9 col-md-10 py-5">
                <h1 className="display-4 text-light pt-sm-2 pb-1 pb-sm-3 mb-3">Task Management Assistant You Gonna Love</h1>
                <p className="fs-lg text-light opacity-70 pb-2 pb-sm-0 mb-4 mb-sm-5">We offer you a new generation of task and project management system. Plan, manage and track all your tasks in one flexible software!</p>
               <Link href="#" className="btn btn-primary shadow-primary btn-lg">Get early access</Link>
              </div>
            </div>
          </div>
  
          {/* <!-- Bottom shape --> */}
          <div className="d-flex position-absolute top-100 start-0 w-100 overflow-hidden mt-n4 mt-sm-n1" style={{color: "var(--si-dark)"}}>
            <div className="position-relative start-50 translate-middle-x flex-shrink-0" style={{width: "3788px"}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="3788" height="144" viewBox="0 0 3788 144"><path fill="currentColor" d="M0,0h3788.7c-525,90.2-1181.7,143.9-1894.3,143.9S525,90.2,0,0z"/></svg>
            </div>
          </div>
          <div className="d-none d-lg-block" style={{height: "300px"}}></div>
          <div className="d-none d-md-block d-lg-none" style={{height: "150px"}}></div>
        </div>
        <ParallaxTilt />
      
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: "rgba(255,255,255,.05)"}}></div>
      </section>
      
  )
}

export default HeroComp