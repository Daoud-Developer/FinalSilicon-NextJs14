"use client";
import Link from "next/link"

function Breadcrumb() {
  return (
      <nav className="pt-4 mt-lg-3" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Link href="/landing-courses"><i className="bx bx-home-alt fs-lg me-1"></i>Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">Courses</li>
      </ol>
    </nav>
   
  )
}

export default Breadcrumb