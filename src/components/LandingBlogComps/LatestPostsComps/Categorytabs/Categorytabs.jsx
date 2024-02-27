"use client"
import React from 'react'

import Link from "next/link";

const Categorytabs = () => {
  return (
    <div>
       {/* <!-- Category tabs --> */}
       <ul className="nav nav-tabs justify-content-center mb-lg-5 mb-4 pb-lg-2">
          <li className="nav-item">
           <Link href="#" className="nav-link active">All Topics</Link>
          </li>
          <li className="nav-item">
           <Link href="#" className="nav-link">Digital</Link>
          </li>
          <li className="nav-item">
           <Link href="#" className="nav-link">Marketing</Link>
          </li>
          <li className="nav-item">
           <Link href="#" className="nav-link">Success Stories</Link>
          </li>
          <li className="nav-item">
           <Link href="#" className="nav-link">Startups</Link>
          </li>
          <li className="nav-item">
           <Link href="#" className="nav-link">Events</Link>
          </li>
          <li className="nav-item">
           <Link href="#" className="nav-link">Technology</Link>
          </li>
          <li className="nav-item">
           <Link href="#" className="nav-link">Business</Link>
          </li>
          <li className="nav-item">
           <Link href="#" className="nav-link">Processes &amp; Tools</Link>
          </li>
        </ul>
    </div>
  )
}

export default Categorytabs