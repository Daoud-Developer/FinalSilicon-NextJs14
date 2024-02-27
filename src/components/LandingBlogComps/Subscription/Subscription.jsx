"use Client"
import React from 'react'
import Link from "next/link";

const Subscription = () => {
  return (
    <div  className="py-5 bg-secondary">
         <div className="container py-md-3 py-lg-5">
          <div className="row justify-content-center pt-2">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <h2 className="h1 d-md-inline-block position-relative mb-md-5 mb-sm-4 text-sm-start text-center">
                Don't Want to Miss Anything?
  
                Arrow shape
                <svg className="d-md-block d-none position-absolute top-0 ms-4 ps-1" style={{left: "100%"}} xmlns="http://www.w3.org/2000/svg" width="65" height="68" fill="#6366f1"><path d="M53.9527 51.0012c8.396-10.5668 2.0302-26.0134-11.7481-26.7511-.6899-.0646-1.4612.0015-2.1258.0431.1243 9.0462-4.1714 18.8896-11.5618 21.3814-6.6695 2.2133-10.3337-4.2224-7.5813-9.676 3.2966-6.4755 9.103-11.8504 16.1678-13.8189-.5654-5.6953-3.3436-10.7672-9.485-12.48517C17.2678 6.8204 6.49364 16.3681 4.98841 26.127c-.09276 1.0297-1.68569.9497-1.59293-.0801C3.98732 12.9139 19.7395 2.55212 31.9628 8.5787c4.7253 2.3813 7.2649 7.3963 7.9368 13.067 7.4237-.9311 14.5154 3.3683 18.3422 9.5422 4.3988 7.1623 2.3584 15.1401-2.6322 21.1108-.7826.9653-2.3331-.3572-1.6569-1.2975zM26.7754 32.1845c-1.9411 2.2411-4.076 5.0872-4.3542 8.1764-.3036 2.9829 3.7601 3.0525 5.4905 2.7645 2.1568-.3863 3.7221-2.3164 4.8863-4.0419 2.6228-3.6308 4.3657-9.0752 4.4844-14.2563-4.0808 1.279-7.6514 4.2327-10.507 7.3573zm24.6311 25.592c-.7061-2.9738-1.2243-6.1031-1.1591-9.143.0423-1.242 1.767-1.0805 1.8313.1372.1284 2.435.815 4.8532 1.4764 7.1651l4.1619-1.4098c1.0153-.4586 2.4373-1.5714 3.6544-1.1804.6087.1954.7347.7264.6475 1.3068-.2302 1.3976-2.4683 1.9147-3.5901 2.398-1.8429.7619-3.6293 1.2865-5.5477 1.7298-.6391.1476-1.3233-.3665-1.4746-1.0037z"/></svg>
              </h2>
  
              {/* Title + checkboxes */}
              <div className="row gy-4 align-items-center mb-lg-5 mb-4 pb-3">
                <div className="col-md-3">
                  <h3 className="h5 mb-0 text-sm-start text-center">Sign up for Newsletters</h3>
                </div>
                <div className="col-md-9">
                  <div className="row row-cols-sm-3 row-cols-2 gy-2">
                    <div className="col">
                      <div className="form-check mb-0">
                        <input type="checkbox" id="s-daily-newsletter" className="form-check-input"/>
                        <label htmlFor="s-daily-newsletter" className="form-check-label">Daily Newsletter</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check mb-0">
                        <input type="checkbox" id="s-advertising-updates" className="form-check-input" checked/>
                        <label htmlFor="s-advertising-updates" className="form-check-label">Advertising Updates</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check mb-0">
                        <input type="checkbox" id="s-week-in-review" className="form-check-input"/>
                        <label htmlFor="s-week-in-review" className="form-check-label">Week in Review</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check mb-0">
                        <input type="checkbox" id="s-event-updates" className="form-check-input"/>
                        <label htmlFor="s-event-updates" className="form-check-label">Event Updates</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check mb-0">
                        <input type="checkbox" id="s-startups-weekly" className="form-check-input"/>
                        <label htmlFor="s-startups-weekly" className="form-check-label">Startups Weekly</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-check mb-0">
                        <input id="s-podcasts" type="checkbox" className="form-check-input"/>
                        <label htmlFor="s-podcasts" className="form-check-label">Podcasts</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Email field */}
              <form className="d-flex flex-sm-row flex-column mb-3 needs-validation" noValidate>
                <div className="input-group me-sm-3 mb-sm-0 mb-3">
                  <input type="email" className="form-control form-control-lg rounded-3 ps-5" placeholder="Your email" required/>
                  <i className="bx bx-envelope position-absolute start-0 top-50 translate-middle-y ms-3 zindex-5 fs-5 text-muted"></i>
                  <div className="invalid-tooltip position-absolute start-0 top-0 mt-n4">Please provide a valid email address!</div>
                </div>
                <button type="submit" className="btn btn-lg btn-primary">Subscribe *</button>
              </form>
              <div className="form-text fs-sm text-sm-start text-center">
                * Yes, I agree to the  <Link href="#">terms</Link> and  <Link href="#">privacy policy</Link>.
              </div>
            </div>
          </div>
        </div>
</div>
  )
}

export default Subscription