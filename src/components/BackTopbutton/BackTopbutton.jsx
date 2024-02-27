"use client";
import Link from 'next/link'
import { useEffect } from 'react'
import  ScrollTop from '../../utils/scroll-top-button'

function BackTopbutton() {

  useEffect (() => {
    ScrollTop()
  }, [])
  return (
    <div>
      {/* <!-- Back to top button --> */}
    <Link href="#top" className="btn-scroll-top" data-scroll="true">
      <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
      <i className="btn-scroll-top-icon bx bx-chevron-up"></i>
    </Link>
    </div>
  )
}

export default BackTopbutton