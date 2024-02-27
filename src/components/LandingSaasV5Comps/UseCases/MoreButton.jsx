"use client";
import Link from 'next/link'

function MoreButton() {
  return (
    <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 gap-sm-4 pt-4 pb-3 py-md-5 my-1 my-sm-3 my-md-0 my-xl-3">
            <div className="fs-xl">And many more...</div>
             <Link href="#" className="btn btn-lg btn-outline-primary rounded-pill">Explore all use cases</Link>
          </div>
  )
}

export default MoreButton