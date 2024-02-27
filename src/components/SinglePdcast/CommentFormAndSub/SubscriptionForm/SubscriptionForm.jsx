"use client";

function SubscriptionForm() {
  return (
    <div>
      <div className="col-lg-12 col-sm-7 col-11">
                  <h6 className="fs-lg">Enjoy this post? Join our newsletter</h6>
                  <form className="needs-validation" noValidate>
                    <div className="input-group mb-3">
                      <i className="bx bx-envelope position-absolute start-0 top-50 translate-middle-y zindex-5 ms-3 text-muted d-lg-inline-block d-none"></i>
                      <input type="email" 
                      placeholder="Your Email" 
                      className="form-control ps-lg-5 rounded text-lg-start text-center" required/>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Subscribe</button>
                  </form>
                </div>
    </div>
  )
}

export default SubscriptionForm