"use client";
import React from 'react'

import ItemsFeatures from './ItemsFeatures'

function FeaturesComp() {
  return (
     <section className="position-relative py-5">
        <div className="container position-relative zindex-5 pb-md-4 pt-md-2 pt-lg-3 pb-lg-5">
          <div className="row justify-content-center text-center pb-3 mb-sm-2 mb-lg-3">
            <div className="col-xl-6 col-lg-7 col-md-9">
              <h2 className="h1 mb-lg-4">What Do You Get with Our Tool?</h2>
              <p className="fs-lg text-muted mb-0">Make sure all your tasks are organized so you can set the priorities and focus on important.</p>
            </div>
          </div>

              <ItemsFeatures />
          
        </div>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{backgroundColor: "rgba(255,255,255,.05)"}}></div>
      </section>
  )
}

export default FeaturesComp