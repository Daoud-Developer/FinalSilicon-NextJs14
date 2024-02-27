"use client";
import Link from 'next/link'

function ContactFormComp() {
  return (
        <section className="container">
        <div className="bg-secondary rounded-3 py-5 px-3 px-sm-4 px-lg-0">
          <div className="row align-items-center pt-1 pb-2 py-lg-4">
            <div className="col-xl-4 col-lg-5 col-md-6 offset-lg-1 mb-4 pb-3 mb-md-0 pb-md-0">
              <h2 className="h1 mb-lg-4">Get in Touch</h2>
              <p className="pb-2 pb-md-4 pb-lg-5">Have a project in mind? To request a quote contact us directly or fill out the form and let us know how we can help.</p>
              <h3 className="mb-lg-4">Contact Info</h3>
              <ul className="list-unstyled pb-3 pb-md-4 pb-lg-5 mb-2">
                <li className="mb-2">
                 <Link href="tel:+1(619)860-1769" className="nav-link d-flex align-items-center p-0">
                    <i className="bx bx-phone-call fs-xl text-primary me-2"></i>
                   +1(619)&nbsp;860&#8209;1769
                 </Link>
                </li>
                <li className="mb-2">
                 <Link href="mailto:daoud.developer94@gmail.com" className="nav-link d-flex align-items-center p-0">
                    <i className="bx bx-envelope fs-xl text-primary me-2"></i>
                    daoud.developer94@gmail.com
                 </Link>
                </li>
                <li className="mb-2">
                 <Link href="#" className="nav-link d-flex align-items-center p-0">
                    <i className="bx bx-map fs-xl text-primary me-2"></i>
                    2464 Royal Ln. Mesa,New Jersey 45463
                 </Link>
                </li>
              </ul>
              <div className="d-flex">
               <Link href="#" className="btn btn-icon btn-outline-secondary btn-facebook me-3" aria-label="Facebook">
                  <i className="bx bxl-facebook"></i>
               </Link>
               <Link href="#" className="btn btn-icon btn-outline-secondary btn-twitter me-3" aria-label="Twitter">
                  <i className="bx bxl-twitter"></i>
               </Link>
               <Link href="#" className="btn btn-icon btn-outline-secondary btn-linkedin me-3" aria-label="LinkedIn">
                  <i className="bx bxl-linkedin"></i>
               </Link>
               <Link href="#" className="btn btn-icon btn-outline-secondary btn-instagram" aria-label="Instagram">
                  <i className="bx bxl-instagram"></i>
               </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 offset-xl-1">
              <div className="card border-0 shadow-sm p-sm-2">
                <form className="card-body needs-validation" noValidate>
                  <div className="mb-4">
                    <label htmlFor="service" className="form-label fs-base">Service</label>
                    <select id="service" className="form-select form-select-lg" required>
                      <option value="" selected disabled>Choose the service you are interested in</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Software Integration">Software Integration</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Business Analytics">Business Analytics</option>
                      <option value="Software Testing">Software Testing</option>
                      <option value="Project Management">Project Management</option>
                    </select>
                    <div className="invalid-feedback">Please choose the service!</div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label fs-base">Full name</label>
                    <input type="text" id="name" className="form-control form-control-lg" required/>
                    <div className="invalid-feedback">Please enter your name!</div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label fs-base">Email address</label>
                    <input type="email" id="email" className="form-control form-control-lg" required/>
                    <div className="invalid-feedback">Please provide a valid email address!</div>
                  </div>
                  <div className="mb-4 pb-2">
                    <label htmlFor="message" className="form-label fs-base">Email address</label>
                    <textarea id="message" className="form-control form-control-lg" rows="3" placeholder="Tell us about your project" required></textarea>
                    <div className="invalid-feedback">Please enter you message!</div>
                  </div>
                  <button type="submit" className="btn btn-primary shadow-primary btn-lg">Send request</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactFormComp