"use client";

function ContactLinksComp() {
  return (
      <div className="col-xl-4 col-lg-5 pb-4 pb-sm-5 mb-2 mb-sm-0">
      <div className="pe-lg-4 pe-xl-0">
        <h1 className="pb-3 pb-md-4 mb-lg-5">Contact Us</h1>
        <div className="d-flex align-items-start pb-3 mb-sm-1 mb-md-3">
          <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
            <i className="bx bx-envelope"></i>
          </div>
          <div className="ps-3 ps-sm-4">
            <h2 className="h4 pb-1 mb-2">Email us</h2>
            <p className="mb-2">Please feel free to drop us a line. We will respond as soon as possible.</p>
            <div className="btn btn-link btn-lg px-0">
              Leave a message
              <i className="bx bx-right-arrow-alt lead ms-2"></i>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-start">
          <div className="bg-light text-primary rounded-circle flex-shrink-0 fs-3 lh-1 p-3">
            <i className="bx bx-group"></i>
          </div>
          <div className="ps-3 ps-sm-4">
            <h2 className="h4 pb-1 mb-2">Careers</h2>
            <p className="mb-2">Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
            <div className="btn btn-link btn-lg px-0">
              Send an application
              <i className="bx bx-right-arrow-alt lead ms-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactLinksComp