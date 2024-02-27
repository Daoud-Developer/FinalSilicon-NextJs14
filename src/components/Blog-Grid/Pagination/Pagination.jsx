"use client";
import Link from 'next/link'
function Pagination() {
  return (
    <div>
       <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center pt-md-4 pt-2">
            <li className="page-item">
                <Link href="#" className="page-link" aria-label="Previous page">
                <i className="bx bx-chevron-left mx-n1"></i>
                </Link>
            </li>
            <li className="page-item disabled d-sm-none">
              <span className="page-link text-body">2 / 4</span>
            </li>
            <li className="page-item d-none d-sm-block">
                <Link href="#" className="page-link">1  </Link>
            </li>
            <li className="page-item active d-none d-sm-block" aria-current="page">
              <span className="page-link">
                2
                <span className="visually-hidden">(current)</span>
              </span>
            </li>
            <li className="page-item d-none d-sm-block">
                <Link href="#" className="page-link">3  </Link>
            </li>
            <li className="page-item d-none d-sm-block">
                <Link href="#" className="page-link">4  </Link>
            </li>
            <li className="page-item">
                <Link href="#" className="page-link" aria-label="Next page">
                <i className="bx bx-chevron-right mx-n1"></i>
                </Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Pagination