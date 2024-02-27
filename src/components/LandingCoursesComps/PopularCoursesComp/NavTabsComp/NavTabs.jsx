"use client";
import Link from "next/link";


function NavTabs() {
  return (
      <div className="col-lg-3 col-md-4">

      {/* <!-- Nav tabs --> */}
      <ul className="nav nav-tabs flex-nowrap overflow-auto flex-md-column pb-2 pb-md-0 mb-3 mb-md-5" role="tablist">
        <li className="nav-item">
           <Link href="#" className="nav-link d-inline-block text-nowrap active" role="tab" aria-selected="true">Web Development  </Link>
        </li>
        <li className="nav-item">
           <Link href="#" className="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false">Data Science  </Link>
        </li>
        <li className="nav-item">
           <Link href="#" className="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false">Mobile Development  </Link>
        </li>
        <li className="nav-item">
           <Link href="#" className="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false">Programming  </Link>
        </li>
        <li className="nav-item">
           <Link href="#" className="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false">Game Development  </Link>
        </li>
        <li className="nav-item">
           <Link href="#" className="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false">Software Testing  </Link>
        </li>
        <li className="nav-item">
           <Link href="#" className="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false">Software Engineering  </Link>
        </li>
        <li className="nav-item">
           <Link href="#" className="nav-link d-inline-block text-nowrap" role="tab" aria-selected="false">Network &amp; Security  </Link>
        </li>
      </ul>
       <Link href="portfolio-courses.html" className="btn btn-outline-primary btn-lg d-none d-md-inline-flex">
        See all courses
        <i className="bx bx-right-arrow-alt fs-xl ms-2"></i>
        </Link>
    </div>
  )
}

export default NavTabs