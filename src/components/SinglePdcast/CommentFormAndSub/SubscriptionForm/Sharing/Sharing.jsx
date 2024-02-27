"use client";
import Link from 'next/link'

function Sharing() {
  return (
    <div>
        <div className="col-lg-12 col-sm-7 col-11">
                  <h6 className="fs-lg">Don't forget to share it</h6>
                  <div className="mb-4 pb-lg-3">
                   <Link href="#" className="btn btn-icon btn-secondary btn-linkedin me-2 mb-2" aria-label="LinkedIn">
                      <i className="bx bxl-linkedin"></i>
                    </Link>
                   <Link href="#" className="btn btn-icon btn-secondary btn-facebook me-2 mb-2" aria-label="Facebook">
                      <i className="bx bxl-facebook"></i>
                    </Link>
                   <Link href="#" className="btn btn-icon btn-secondary btn-twitter me-2 mb-2" aria-label="Twitter">
                      <i className="bx bxl-twitter"></i>
                    </Link>
                   <Link href="#" className="btn btn-icon btn-secondary btn-instagram me-2 mb-2" aria-label="Instagram">
                      <i className="bx bxl-instagram"></i>
                    </Link>
                  </div>
                </div>
    </div>
  )
}

export default Sharing