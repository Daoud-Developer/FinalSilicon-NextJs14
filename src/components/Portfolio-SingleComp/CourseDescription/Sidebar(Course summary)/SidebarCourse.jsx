"use client";
import Link from 'next/link'

function SidebarCourse() {
  return (
      <aside  className="col-lg-4 col-md-5 offset-xl-1 order-md-2 mb-5">
      <div style={{marginTop:"-96px"}}></div>
      <div  className="position-sticky top-0 pt-5">
        <div  className="pt-5 mt-md-3">
          <div  className="card shadow-sm p-sm-3">
            <div  className="card-body">
              <h4  className="mb-4">This course includes:</h4>
              <ul  className="list-unstyled pb-3">
                <li  className="d-flex align-items-center mb-2">
                  <i  className="bx bx-slideshow fs-xl text-muted me-2 pe-1"></i>
                  220 hours on-demand video
                </li>
                <li  className="d-flex align-items-center mb-2">
                  <i  className="bx bx-file fs-xl text-muted me-2 pe-1"></i>
                  18 articles
                </li>
                <li  className="d-flex align-items-center mb-2">
                  <i  className="bx bx-download fs-xl text-muted me-2 pe-1"></i>
                  25 downloadable resources
                </li>
                <li  className="d-flex align-items-center mb-2">
                  <i  className="bx bx-infinite fs-xl text-muted me-2 pe-1"></i>
                  Full lifetime access
                </li>
                <li  className="d-flex align-items-center mb-2">
                  <i  className="bx bx-trophy fs-xl text-muted me-2 pe-1"></i>
                  Certificate of completion
                </li>
              </ul>
              <div  className="h2 d-flex align-items-center mb-4">$28.99<del  className="text-muted fs-xl fw-normal ms-2">49.99</del></div>
              <Link href="#"  className="btn btn-primary btn-lg shadow-primary">Join the course</Link>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SidebarCourse