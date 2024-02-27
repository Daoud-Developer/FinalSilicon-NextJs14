"use client";

function Stats() {
  return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 pt-2 pt-md-3 pt-lg-2">
      <div className="col">
        <div className="d-flex align-items-center">
          <div className="display-4 text-primary">20+</div>
          <p className="ps-3 mb-0">Hours of digital content,workshops &amp; side-events</p>
        </div>
      </div>
      <div className="col">
        <div className="d-flex align-items-center">
          <div className="display-4 text-primary">3K+</div>
          <p className="ps-3 mb-0">Industry experts, students, and enthusiasts</p>
        </div>
      </div>
      <div className="col">
        <div className="d-flex align-items-center">
          <div className="display-4 text-primary">18</div>
          <p className="ps-3 mb-0">Digital experts, instructors and panelists for our side-events</p>
        </div>
      </div>
    </div>
  )
}

export default Stats