"use client";
import Image from 'next/image'
import Link from 'next/link'

function Author() {
  return (
            <div className="sticky-top ms-xxl-5 ps-lg-4"  style={{top: "105px !important"}}>
              <div className="d-flex align-items-center position-relative mb-lg-5 mb-4">
                <Image src="/../../../../assets/img/avatar/06.jpg" className="rounded-circle me-3" width={60} height={60} alt="Jenny Wilson"/>
                <div>
                  <h4 className="h6 mb-1">Hosted by</h4>
                 <Link href="#" className="fw-semibold stretched-link">Jenny Wilson</Link>
                </div>
              </div>
              <button type="button" className="btn btn-lg btn-outline-secondary mb-3">
                <i className="bx bx-like me-2 lead"></i>
                Like it
                <span className="badge bg-primary shadow-primary ms-3">8</span>
              </button>
            </div>
  )
}

export default Author