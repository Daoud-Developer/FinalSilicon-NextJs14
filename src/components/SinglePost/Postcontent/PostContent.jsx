"use client";

import VideoComp from './VideoComp/VideoComp'
import Sharing from "../../SinglePdcast/CommentFormAndSub/SubscriptionForm/Sharing/Sharing"
import Quotation from './Quotation/Quotation'
import Tags from './Tags/Tags'



function PostContent() {
  return (
      <section className="container mb-5 pt-4 pb-2 py-mg-4">
        <div className="row gy-4">

          {/* <!-- Content --> */}
          <div className="col-lg-9">
            <h3 className="h5 mb-4 pb-2 fw-medium">Est quis sit phasellus proin proin fringilla eu quis. Placerat praesent blandit urna eu pellentesque dictum. Aliquam duis quam interdum quis. Urna, rutrum aenean lacus phasellus. Ipsum, ac porttitor lacus orci, cras lacus, quis leo.</h3>
            <h2 className="h4">Paragraph Title</h2>
            <p className="mb-4 pb-2">Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque id in metus volutpat. Urna eget velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam rhoncus massa lectus pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat elit condimentum integer tortor porttitor justo vel lobortis risus. Lacinia pellentesque fermentum tellus orci mauris, velit duis eget. Commodo justo, hac ligula molestie felis, iaculis. Vitae dui at ante orci, dictum fusce. Urna, sed urna fringilla faucibus euismod aliquet nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel ipsum sem tempus gravida et. Scelerisque blandit orci, est quis. Nisi, tellus amet est nascetur habitant faucibus ornare et vivamus.</p>

            {/* <!-- Video --> */}
            <VideoComp/>
           

            {/* <!-- Quotation --> */}
            <Quotation/>
         
            {/* <!-- Tags --> */}
            <hr className="mb-4"/>
            <Tags/>
           
          </div>

          {/* <!-- Sharing --> */}
          <div className="col-lg-3 position-relative">
            <div className="sticky-top ms-xl-5 ms-lg-4 ps-xxl-4" style={{top:"105px !important"}}>
              <span className="d-block mb-3">5 min read</span>
              <h6>Share this post:</h6>
                  <Sharing/>
              <button type="button" className="btn btn-lg btn-outline-secondary">
                <i className="bx bx-like me-2 lead"></i>
                Like it
                <span className="badge bg-primary shadow-primary mt-n1 ms-3">8</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default PostContent