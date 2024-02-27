"use client";

function StatsHeroComp() {
  return (
      <div className="d-sm-flex py-3 py-md-4 py-xl-5">
          <div className="d-flex border-sm-end pe-sm-3 me-sm-3 mb-2 mb-sm-0">
            <div className="text-nowrap me-1">
              <i className="bx bxs-star text-warning"></i>
              <i className="bx bxs-star text-warning"></i>
              <i className="bx bxs-star text-warning"></i>
              <i className="bx bxs-star text-warning"></i>
              <i className="bx bx-star text-muted opacity-75"></i>
            </div>
            <span className="text-light opacity-70">(1.2K reviews)</span>
          </div>
          <div className="d-flex border-sm-end pe-sm-3 me-sm-3 mb-2 mb-sm-0">
            <i className="bx bx-like fs-xl text-light opacity-70 me-1"></i>
            <span className="text-light opacity-70">4.2K likes</span>
          </div>
          <div className="d-flex">
            <i className="bx bx-time fs-xl text-light opacity-70 me-1"></i>
            <span className="text-light opacity-70">220 hours</span>
          </div>
        </div>
  )
}

export default StatsHeroComp