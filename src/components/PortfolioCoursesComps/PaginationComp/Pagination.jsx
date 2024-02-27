"use client";
import Link from 'next/link'

function Pagination() {
  return (
      <nav className="pb-5" aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <Link href="#" className="page-link">
            <i className="bx bx-chevron-left ms-n1 me-1"></i>
            Prev
          </Link>
        </li>
        <li className="page-item disabled d-sm-none">
          <span className="page-link text-body">1 / 4</span>
        </li>
        <li className="page-item active d-none d-sm-block" aria-current="page">
          <span className="page-link">
            1
            <span className="visually-hidden">(current)</span>
          </span>
        </li>
        <li className="page-item d-none d-sm-block">
          <Link href="#" className="page-link">2</Link>
        </li>
        <li className="page-item d-none d-sm-block">
          <Link href="#" className="page-link">3</Link>
        </li>
        <li className="page-item d-none d-sm-block">
          <Link href="#" className="page-link">4</Link>
        </li>
        <li className="page-item">
          <Link href="#" className="page-link">
            Next
            <i className="bx bx-chevron-right me-n1 ms-1"></i>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination