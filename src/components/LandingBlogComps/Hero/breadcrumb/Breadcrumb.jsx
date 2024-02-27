"use client";
import NextLink from 'next/link';

function Breadcrumb() {
  return (
    <div>
           <nav className="py-4" aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 py-3">
              <li className="breadcrumb-item">
                <NextLink href="/"><i className="bx bx-home-alt fs-lg me-1"></i>Home</NextLink>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Blog Homepage</li>
            </ol>
          </nav>
    </div>
  )
}

export default Breadcrumb