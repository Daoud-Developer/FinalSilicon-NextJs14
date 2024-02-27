"use client";
import Image from "next/image";
import Link from "next/link";

function FooterComp() {
  return (
      <footer className="footer bg-dark pt-5 pb-4 pb-lg-5" data-bs-theme="dark">
      <div className="container text-center pt-lg-3">
        <div className="navbar-brand justify-content-center text-dark mb-2 mb-lg-4">
         <Image src="/assets/img/logo.svg" className="me-2" width={60} height={60} alt="Logo"/>
          <span className="fs-4">Royal Developer</span>
        </div>
        <ul className="nav justify-content-center pt-3 pb-4 pb-lg-5">
          <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link href="#" className="nav-link">Features</Link></li>
          <li className="nav-item"><Link href="#" className="nav-link">Overview</Link></li>
          <li className="nav-item"><Link href="/blog" className="nav-link">Blog</Link></li>
          <li className="nav-item"><Link href="/contact-us" className="nav-link">Contacts</Link></li>
          <li className="nav-item"><Link href="#" className="nav-link">Account</Link></li>
        </ul>
        <div className="d-flex flex-column flex-sm-row justify-content-center">
           <Link href="https://api.whatsapp.com/send?phone=16198601769" className="btn btn-dark btn-lg px-3 py-2 me-sm-4 mb-3">
           <Image src="/assets/img/market/appstore-light.svg" className="light-mode-img" width={124} height={45} alt="App Store"/>
           <Image src="/assets/img/market/appstore-dark.svg" className="dark-mode-img" width={124} height={45} alt="App Store"/>
          </Link>
           <Link href="https://api.whatsapp.com/send?phone=16198601769" className="btn btn-dark btn-lg px-3 py-2 mb-3">
           <Image src="/assets/img/market/googleplay-light.svg" className="light-mode-img" width={139} height={45} alt="Google Play"/>
           <Image src="/assets/img/market/googleplay-dark.svg" className="dark-mode-img" width={139} height={45} alt="Google Play"/>
          </Link>
        </div>
        <div className="d-flex justify-content-center pt-4 mt-lg-3">
           <Link href="https://api.whatsapp.com/send?phone=16198601769" className="btn btn-icon btn-secondary btn-facebook mx-2" aria-label="Facebook">
            <i className="bx bxl-facebook"></i>
          </Link>
           <Link href="https://api.whatsapp.com/send?phone=16198601769" className="btn btn-icon btn-secondary btn-instagram mx-2" aria-label="Instagram">
            <i className="bx bxl-instagram"></i>
          </Link>
           <Link href="https://api.whatsapp.com/send?phone=16198601769" className="btn btn-icon btn-secondary btn-twitter mx-2" aria-label="Twitter">
            <i className="bx bxl-twitter"></i>
          </Link>
           <Link href="https://api.whatsapp.com/send?phone=16198601769" className="btn btn-icon btn-secondary btn-youtube mx-2" aria-label="YouTube">
            <i className="bx bxl-youtube"></i>
          </Link>
        </div>
        <p className="nav d-block fs-sm text-center pt-5 mt-lg-4 mb-0">
          <span className="text-light opacity-60">&copy; All rights reserved. Made by </span>
          <Link className="nav-link d-inline-block p-0" href="https://api.whatsapp.com/send?phone=16198601769" target="_blank" rel="noopener">Royal Developer</Link>
        </p>
      </div>
    </footer>
  )
}

export default FooterComp