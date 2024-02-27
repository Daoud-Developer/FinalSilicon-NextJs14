"use client";
import Link from 'next/link'
const Loadmorebtn = () => {
  return (
    <div>
     <Link href="/">
        <div className="btn btn-lg btn-outline-primary w-100">
          <i  className="bx bx-down-arrow-alt me-2 lh-1 lead"></i>
          Show more
        </div>
      </Link>
    </div>
  )
}

export default Loadmorebtn