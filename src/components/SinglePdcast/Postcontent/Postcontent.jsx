"use client";
import React from 'react'
import Audioplayer from "././audioplayer/Audioplayer"
import Author from "././Author/Author"

function Postcontent() {
  return (
    <div>
       <section className="container mb-5 pb-lg-5">
        <div className="row gy-md-5 gy-4">
          {/* <!-- Author --> */}
          <div className="col-lg-3 col-md-4 order-md-2 position-relative">
                  <Author/>
          </div>
          <div className="col-lg-9 col-md-8 order-md-1">
          {/* <!-- Player + Timeline --> */}
              <Audioplayer/>   
        </div>
      </div>
      </section>
    </div>
  )
}

export default Postcontent