"use client";
import Link from 'next/link'


function PricingComp() {
  return (
     <section className="container pt-5">
        <div className="row justify-content-center text-center pt-2 pt-md-4 pt-lg-5 pb-4 pb-lg-5 mb-1">
          <div className="col-xl-6 col-lg-7 col-md-9 col-sm-11 pt-xl-3">
            <h2 className="h1 mb-lg-4">Transparent Pricing for You</h2>
            <p className="fs-lg text-muted mb-0">Varius sed maecenas massa dictum viverra in. Viverra vel in elit, vivamus dui interdum. Nulla congue lobortis amet amet eleifend.</p>
          </div>
        </div>
        <div className="table-responsive-lg">
          <div className="d-flex align-items-center pb-4">
        
            {/* <!-- Pricing plan --> */}
            <div className="bg-primary rounded-3 shadow-primary p-4" style={{width: "36%", minWidth: "18rem"}}>
              <div className="card bg-transparent border-light py-3 py-sm-4 py-lg-5">
                <div className="card-body text-light text-center">
                  <h3 className="text-light mb-2">Team</h3>
                  <div className="fs-lg opacity-70 pb-4 mb-3">Best for small teams</div>
                  <div className="display-5 mb-1">$10</div>
                  <div className="opacity-50 mb-5">per month</div>
                </div>
                <div className="card-footer border-0 text-center pt-0 pb-4">
                    <Link href="#" className="btn btn-light btn-lg shadow-secondary">Get started now  </Link>
                </div>
              </div>
            </div>
            <div className="row flex-nowrap border rounded-3 rounded-start-0 shadow-sm g-0" style={{width: "64%", minWidth: "32rem"}}>
        
              {/* <!-- Pricing plan --> */}
              <div className="col">
                <div className="card bg-light h-100 border-0 border-end rounded-0 py-3 py-sm-4 py-lg-5">
                  <div className="card-body text-center">
                    <h3 className="mb-2">Company</h3>
                    <div className="fs-lg pb-4 mb-3">Best for growing teams</div>
                    <div className="display-5 text-dark mb-1">$25</div>
                    <div className="text-muted mb-5">per month</div>
                  </div>
                  <div className="card-footer border-0 text-center pt-0 pb-4">
                      <Link href="#" className="btn btn-outline-primary btn-lg">Get started now  </Link>
                  </div>
                </div>
              </div>
        
              {/* <!-- Pricing plan --> */}
              <div className="col">
                <div className="card bg-light h-100 border-0 rounded-start-0 py-3 py-sm-4 py-lg-5">
                  <div className="card-body text-center">
                    <h3 className="mb-2">Enterprise</h3>
                    <div className="fs-lg pb-4 mb-3">Best for large teams</div>
                    <div className="display-5 text-dark mb-1">$50</div>
                    <div className="text-muted mb-5">per month</div>
                  </div>
                  <div className="card-footer border-0 text-center pt-0 pb-4">
                      <Link href="#" className="btn btn-outline-primary btn-lg">Get started now  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default PricingComp