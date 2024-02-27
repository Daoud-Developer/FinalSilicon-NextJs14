"use client";
import Link from "next/link";

function SignUpForm() {
  return (
      <section className="bg-secondary pb-lg-5" style={{marginTop: "-240px", paddingTop: "300px"}}>
      <div className="container pt-2 pt-md-3 pt-lg-5 pb-5">
        <h2 className="h1 text-center pb-2 mb-4 mb-lg-5">Ready to Kick-Start Your Career?<br/>Start Learning Today</h2>
        <div className="row pb-3">
          <div className="col-xl-7 col-md-6">
            <div className="d-flex flex-column w-100 h-100 rounded-3 bg-position-center bg-repeat-0 bg-size-cover" 
            style={{backgroundImage: "url(assets/img/landing/online-courses/signup-img.jpg)"}}>
              
            </div>
          </div>
          <div className="col-xl-5 col-md-6">
            <div className="card border-0 p-lg-4">
              <div className="card-body">
                <h3 className="pb-3 pb-lg-4">Sign up and get <span className="text-danger">20% off</span> for your first course!</h3>
                <form className="needs-validation mb-4 pb-2 pb-lg-0 mb-lg-5" noValidate>
                  <div className="position-relative mb-4">
                    <label htmlFor="email" className="form-label fs-base">Email address</label>
                    <input type="email" id="email" className="form-control form-control-lg" required/>
                    <div className="invalid-tooltip position-absolute top-100 start-0">Please provide a valid email address.</div>
                  </div>
                  <div className="mb-4 pt-1 pb-2">
                    <label htmlFor="password" className="form-label fs-base">Password</label>
                    <div className="password-toggle">
                      <input type="password" id="password" className="form-control form-control-lg" required/>
                      <label className="password-toggle-btn" aria-label="Show/hide password">
                        <input className="password-toggle-check" type="checkbox"/>
                        <span className="password-toggle-indicator"></span>
                      </label>
                      <div className="invalid-tooltip position-absolute top-100 start-0">Please provide a valid email address.</div>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg shadow-primary">Create free account</button>
                </form>
                <h6 className="mb-4">Or sign up using:</h6>
                <div className="d-flex">
                   <Link href="#" className="btn btn-icon btn-secondary btn-google me-2" aria-label="Google">
                    <i className="bx bxl-google"></i>
                    </Link>
                   <Link href="#" className="btn btn-icon btn-secondary btn-facebook ms-1 me-2" aria-label="Facebook">
                    <i className="bx bxl-facebook"></i>
                    </Link>
                   <Link href="#" className="btn btn-icon btn-secondary btn-linkedin ms-1 me-2" aria-label="LinkedIn">
                    <i className="bx bxl-linkedin"></i>
                    </Link>
                   <Link href="#" className="btn btn-icon btn-secondary btn-github ms-1" aria-label="GitHub">
                    <i className="bx bxl-github"></i>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUpForm