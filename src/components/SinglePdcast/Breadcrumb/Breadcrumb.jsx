"use client";
import Link from "next/link";

function Breadcrumb() {
  return (
       <nav className="container pt-4 mt-lg-3" aria-label="breadcrumb">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
           <Link href={"/"}><i className="bx bx-home-alt fs-lg me-1"></i>Home</Link>
          </li>
          <li className="breadcrumb-item">
           <Link href={"/blog"}>Blog</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Podcast</li>
        </ol>
      </nav>
  )
}

export default Breadcrumb