"use client";
import Link from 'next/link'
import { useEffect, useState,useRef } from 'react'
import Image from 'next/image'
//Compnents
import ThemeToggleBtn from '../themeToggle/ThemeToggleBtn'

function Navbar({ isAbsolutedark,isAbsolute  }) {

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY < lastScrollY && navbar.classList.contains('navbar-stuck')) {
        navbar.classList.add('navbar-hidden');
        navbar.classList.remove('navbar-stuck');
      } else if (window.scrollY > lastScrollY) {
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-stuck');
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

   <nav 
  className={`header navbar navbar-expand-lg light
    ${isAbsolute ? 'position-absolute ' : ''} 
    ${isAbsolutedark ? 'position-absolute navbar-dark' : ''}`}
>
      <div className="container px-3">
        <Link href="/" className="navbar-brand pe-3">
          <Image src="/assets/img/logo.svg" width="47" height="47" alt="Silicon" />
          Silicon
        </Link>
        <div id="navbarNav" className="offcanvas offcanvas-end  ">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close">
            </button>
          </div>
          <div className="offcanvas-body">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link href="#" className="nav-link dropdown-toggle active" 
                data-bs-toggle="dropdown" 
                aria-current="page">Pages</Link>
                <div className="dropdown-menu dropdown-menu-dark p-0">
                  <div className="d-lg-flex">
                   
                    <div className="mega-dropdown-column pt-lg-3 pb-lg-4" style={{ simegaDropDownColumnWidth: "15rem" }}>
                      <ul className="list-unstyled mb-0">
                        <li className="nav-item">
                          <Link href="/" className="nav-link">
                          Landing-Blog
                          </Link>
                        </li>
    
                        <li className="nav-item">
                          <Link href="/landing-courses" className="nav-link">
                            LandingCourses
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/landing-conference" className="nav-link">
                            Landing-Conference
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/landing-software" className="nav-link">
                          Landing-Software
                          </Link>
                        </li>

                         <li className="nav-item">
                          <Link href="/landing-saas" className="nav-link">
                          Landing-saasv2
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mega-dropdown-column pt-lg-3 pb-lg-4">
                      <ul className="list-unstyled mb-0">
                      <li className="nav-item">
                          <Link href="/blog" className="nav-link">
                            Blog-Page
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/landing-courses/portfolio-courses" className="nav-link">
                            Portfolio-Courses
                          </Link>
                        </li>
                        <li>
                        <Link href="/contact-us" className="nav-link">Contact-Us</Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/blog/singlepdcast/1" className="nav-link">
                            SinglePdcast
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/blog/singlepost/1" className="nav-link">
                            SinglePost
                          </Link>
                        </li>
                       <li className="nav-item">
                          <Link href="/landing-courses/portfolio-courses/portfolio-single" className="nav-link">
                            PortfolioSingle
                          </Link>
                        </li>

                          <li className="nav-item">
                          <Link href="/about-us" className="nav-link">
                           about-us
                          </Link>
                        </li>

                          <li className="nav-item">
                          <Link href="/contact-us" className="nav-link">
                           contact-us
                          </Link>
                        </li>

                         <li className="nav-item">
                          <Link href="/services-page" className="nav-link">
                           services-page
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
                         <li className="nav-item">
                          <Link href="/" className="nav-link">
                          Landing-Blog
                          </Link>
                          </li>

                          <li className="nav-item">
                          <Link href="/landing-courses" className="nav-link">
                            Landing-Courses
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/landing-conference" className="nav-link">
                            Landing-Conference
                          </Link>
                        </li>
                          <li className="nav-item">
                          <Link href="/landing-saas5" className="nav-link">
                          Landing-saasv5
                          </Link>
                        </li>
            </ul>
          </div>

          

          <div className="offcanvas-header border-top">
            <Link href="/"
              className="btn btn-primary w-100"
              target="_blank"
              rel="noopener">
              <i className="bx bx-cart fs-4 lh-1 me-1"></i>
              &nbsp;Buy now
            </Link>
          </div>
        </div>
        <ThemeToggleBtn />

        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <Link href="/"
          className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex"
          target="_blank"
          rel="noopener">
          <i className="bx bx-cart fs-5 lh-1 me-1"></i>
          &nbsp;Buy now
        </Link>
      </div>
    </nav>
  )
}

export default Navbar