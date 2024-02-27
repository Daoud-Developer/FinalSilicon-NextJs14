"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function Footer() {
  return (
      <footer className="footer bg-dark border-top border-light pt-5 pb-4 pb-lg-5" data-bs-theme="light">
      <div className="container pt-lg-4">
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
              <Image src="/assets/img/logo.svg" width={140} height={35} alt="Royal Developer" />
              Silicon
            </div>
            <p className="fs-sm text-light opacity-70 pb-lg-3 mb-4">Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros.</p>
            <form className="needs-validation" noValidate>
              <label htmlFor="subscr-email" className="form-label">Subscribe to our newsletter</label>
              <div className="input-group">
                <input type="email" id="subscr-email" className="form-control rounded-start ps-5" placeholder="Your email" required/>
                <i className="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5"></i>
                <div className="invalid-tooltip position-absolute top-100 start-0">Please provide a valid email address.</div>
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </div>
            </form>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" className="row">
              <div className="col-lg-4">
                <h6 className="mb-2">
                  <Link href="#useful-links" className="d-block text-dark dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">Useful Links  </Link>
                </h6>
                <div id="useful-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul className="nav flex-column pb-lg-1 mb-lg-3">
                    <li className="nav-item">  <Link href="/" className="nav-link d-inline-block px-0 pt-1 pb-2">Home  </Link></li>
                    <li className="nav-item">  <Link href="/services-page" className="nav-link d-inline-block px-0 pt-1 pb-2">Services  </Link></li>
                    <li className="nav-item">  <Link href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Our Works  </Link></li>
                    <li className="nav-item">  <Link href="/about-us" className="nav-link d-inline-block px-0 pt-1 pb-2">About  </Link></li>
                    <li className="nav-item">  <Link href="/blog" className="nav-link d-inline-block px-0 pt-1 pb-2">Blog  </Link></li>
                  </ul>
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    <li className="nav-item">  <Link href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Terms &amp; Conditions  </Link></li>
                    <li className="nav-item">  <Link href="#" className="nav-link d-inline-block px-0 pt-1 pb-2">Privacy Policy  </Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <h6 className="mb-2">
                  <Link href="#social-links" className="d-block text-dark dropdown-toggle d-lg-none py-2" data-bs-toggle="collapse">Socials  </Link>
                </h6>
                <div id="social-links" className="collapse d-lg-block" data-bs-parent="#footer-links">
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    <li className="nav-item"><Link href="https://api.whatsapp.com/send?phone=16198601769" className="nav-link d-inline-block px-0 pt-1 pb-2">Facebook  </Link></li>
                    <li className="nav-item"><Link href="https://api.whatsapp.com/send?phone=16198601769" className="nav-link d-inline-block px-0 pt-1 pb-2">LinkedIn  </Link></li>
                    <li className="nav-item"><Link href="https://api.whatsapp.com/send?phone=16198601769" className="nav-link d-inline-block px-0 pt-1 pb-2">Twitter  </Link></li>
                    <li className="nav-item"><Link href="https://api.whatsapp.com/send?phone=16198601769" className="nav-link d-inline-block px-0 pt-1 pb-2">Instagram  </Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                <h6 className="mb-2">Contact Us</h6>
                <Link href="mailto:daoud.developer94@gmail.com" className="fw-medium">daoud.developer94@gmail.com  </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          <span className="text-light opacity-50">&copy; All rights reserved. Made by </span>
          <Link className="nav-link d-inline-block p-0" 
          href="https://api.whatsapp.com/send?phone=16198601769" 
          target="_blank" 
          rel="noopener">
          Royal Developer
           </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer