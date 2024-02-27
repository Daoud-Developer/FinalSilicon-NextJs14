"use client";
import Link from "next/link"

function BreadcrumbComp() {
  return (
      <nav className="container pt-5 pb-4 mb-lg-2" aria-label="breadcrumb">
          <ol className="breadcrumb pt-lg-3 mb-0">
            <li className="breadcrumb-item">
             <Link href="/"><i className="bx bx-home-alt fs-lg me-1"></i>Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">Services v.1</li>
          </ol>
        </nav>
  )
}

export default BreadcrumbComp