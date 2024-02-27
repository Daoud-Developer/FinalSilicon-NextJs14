"use client";
import React from 'react'
import SubscriptionForm from "./SubscriptionForm/SubscriptionForm"
import Sharing from "./SubscriptionForm/Sharing/Sharing"
import CommentForm from "./CommentForm/CommentForm"

function CommentFormAndSub() {
  return (
      <section className="container mb-4 pb-2 mb-md-5 pb-lg-5">
        <div className="row gy-5">
          {/* <!-- Comment form --> */}
          <CommentForm/>
          {/* <!-- Subscription form + Sharing --> */}
          <div className="col-lg-3 position-relative">
            <div className="sticky-top ms-xl-5 ms-lg-4 ps-xxl-4" style={{top:"70px !important"}}>
              <div className="row gy-lg-5 gy-4 justify-content-center text-lg-start text-center">
                {/* <!-- Subscriptionform --> */}
                <SubscriptionForm/>              
                {/* <!-- Sharing --> */}
                <Sharing/>   
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CommentFormAndSub