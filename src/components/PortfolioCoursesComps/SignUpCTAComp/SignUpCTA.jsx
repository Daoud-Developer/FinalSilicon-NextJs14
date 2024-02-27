"use client";
import Image from 'next/image'
import Link from 'next/link'

function SignUpCTA() {
  return (
      <div className="bg-secondary rounded-3 my-2 my-md-4 my-lg-5 py-5 px-3 px-md-0">
      <div className="row align-items-center">
        <div className="col-md-5 offset-lg-1 text-center text-md-start ps-md-5 ps-lg-0 ps-xl-5 pb-2 pb-md-0 mb-4 mb-md-0">
          <p className="lead mb-3">Ready to get started?</p>
          <h2 className="h1 pb-2 pb-md-4">Take Your <span className="text-primary">Skills</span> to the Next Level</h2>
         <Link href="#" className="btn btn-primary btn-lg">Sign up now!</Link>
        </div>
        <div className="col-lg-6 col-md-7">
          <div className="d-table mx-auto">
            <Image src="/assets/img/landing/online-courses/steps/04-dark.svg" 
            className="d-dark-mode-none" width={380} height={380} alt="Illustration"/>
            <Image src="/assets/img/landing/online-courses/steps/04-light.svg" 
            className="d-none d-dark-mode-block" width={380} height={380} alt="Illustration"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpCTA