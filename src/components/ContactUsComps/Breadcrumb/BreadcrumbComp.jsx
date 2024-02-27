"use client";
import Link from 'next/link'

function BreadcrumbComp() {
  return (
      <nav className="pt-lg-4 pb-3 mb-2 mb-sm-3" aria-label="breadcrumb">
      <ol className="breadcrumb mb-0">
        <li className="breadcrumb-item">
          <Link href="/"><i className="bx bx-home-alt fs-lg me-1"></i>Home</Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">Contacts v.2</li>
      </ol>
    </nav>
  )
}

export default BreadcrumbComp