"use client";
import Link from 'next/link'

function Badges() {
  return (
      <div className="d-flex pt-3 pb-4 py-sm-4 pt-lg-5">
      <span className="badge bg-success fs-sm me-2">Best Seller</span>
      <Link href="#" className="badge bg-white text-nav fs-sm text-decoration-none">Web Development</Link>
    </div>
  )
}

export default Badges