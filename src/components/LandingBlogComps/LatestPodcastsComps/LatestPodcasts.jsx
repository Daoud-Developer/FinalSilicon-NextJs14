"use client";
import React from 'react'
import Carousel  from  './Carousel/Carousel'
import Link from "next/link";
function  LatestPodcasts() {

  return (
    <div>
      <div className="container mb-5 pt-3 pb-lg-5">
        <div className="row">
          <div className="col-xl-3">
            <div className="d-xl-block d-flex align-items-center justify-content-between mb-xl-0 mb-4 pb-xl-0 pb-3">
              <h2 className="h1 mb-xl-4 mb-0 pb-xl-3">Latest Podcasts</h2>
              <Link href="/blog" className="btn btn-primary ms-xl-0 ms-4">All podcasts</Link>
            </div>
          </div>
          <div className="col-xl-9">
          <Carousel/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default  LatestPodcasts