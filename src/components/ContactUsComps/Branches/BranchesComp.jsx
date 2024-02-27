"use client";
import Link from 'next/link'

function BranchesComp() {
  return (
      <section className="container py-2 py-lg-4 py-xl-5 mb-2 mb-md-3">
      <div className="row py-5">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="d-flex flex-column h-100 shadow-sm rounded-3 overflow-hidden">
            <iframe className="d-block h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5020.057277316842!2d-122.40737351959179!3d37.73986147046842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd5ce6be90058bc85!2sOur%20Planet%20Recycling%20S.F.!5e0!3m2!1sen!2sua!4v1653946944869!5m2!1sen!2sua" style={{border: "0", minHeight: "300px"}} allowfullscreen="" loading="lazy" title="Map"></iframe>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-1">
          <h2 className="h4 mb-4">Medical Center 1</h2>
          <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
            <li className="d-flex pb-1 mb-2">
              <i className="bx bx-map text-primary fs-xl me-2" style={{marginTop: ".125rem"}}></i>
              445 Bayshor Blvd, San Francisco, CA 94124
            </li>
            <li className="d-flex pb-1 mb-2">
              <i className="bx bx-phone-call text-primary fs-xl me-2" style={{marginTop: ".125rem"}}></i>
              (406) 555-0120
            </li>
            <li className="d-flex">
              <i className="bx bx-time-five text-primary fs-xl me-2" style={{marginTop: ".125rem"}}></i>
              <div>
                <strong className="text-nav">Mon - Fri</strong>: 9:00 am - 22:00 am
                <br/>
                <strong className="text-nav">Sat - Sun:</strong>: 9:00 am - 20:00 am
              </div>

            </li>
          </ul>
          <h2 className="h4 mb-4">Medical Center 2</h2>
          <ul className="list-unstyled pb-2 pb-lg-0 mb-4 mb-lg-5">
            <li className="d-flex pb-1 mb-2">
              <i className="bx bx-map text-primary fs-xl me-2" style={{marginTop: ".125rem"}}></i>
              2464 Royal Ln. Mesa, New Jersey 45463
            </li>
            <li className="d-flex pb-1 mb-2">
              <i className="bx bx-phone-call text-primary fs-xl me-2" style={{marginTop: ".125rem"}}></i>
              (406) 544-0123
            </li>
            <li className="d-flex">
              <i className="bx bx-time-five text-primary fs-xl me-2" style={{marginTop: ".125rem"}}></i>
              <div>
                <strong className="text-nav">Mon - Fri</strong>: 9:00 am - 22:00 am
                <br/>
                <strong className="text-nav">Sat - Sun:</strong>: 9:00 am - 20:00 am
              </div>
            </li>
          </ul>
          <div className="d-flex pt-1 pt-md-3 pt-xl-4">
              <Link href="#" className="btn btn-icon btn-secondary btn-facebook me-3" aria-label="Facebook">
              <i className="bx bxl-facebook"></i>
              </Link>
              <Link href="#" className="btn btn-icon btn-secondary btn-instagram me-3" aria-label="Instagram">
              <i className="bx bxl-instagram"></i>
              </Link>
              <Link href="#" className="btn btn-icon btn-secondary btn-twitter me-3" aria-label="Twitter">
              <i className="bx bxl-twitter"></i>
              </Link>
              <Link href="#" className="btn btn-icon btn-secondary btn-youtube" aria-label="YouTube">
              <i className="bx bxl-youtube"></i>
              </Link>
          </div>
        </div>
      </div>
      </section>
  )
}

export default BranchesComp