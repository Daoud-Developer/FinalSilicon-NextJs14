"use client";
import Link from 'next/link'

function Tags() {
  return (
      <div className="d-flex flex-sm-row flex-column pt-2">
      <h6 className="mt-sm-1 mb-sm-2 mb-3 me-2 text-nowrap">Related Tags:</h6>
      <div>
       <Link href="#" className="btn btn-sm btn-outline-secondary me-2 mb-2">#lifestyle</Link>
       <Link href="#" className="btn btn-sm btn-outline-secondary me-2 mb-2">#tech</Link>
       <Link href="#" className="btn btn-sm btn-outline-secondary me-2 mb-2">#business</Link>
      </div>
    </div>
  )
}

export default Tags