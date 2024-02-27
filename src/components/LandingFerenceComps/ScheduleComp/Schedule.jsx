"use client";
import Link from "next/link"
import Image from "next/image";
function Schedule() {
  return (
      <div className="container py-5">
      <div className="row mt-xl-2 mb-xl-3 pb-3 py-md-4 py-lg-5">
        <div className="col-12">
          <h2 className="h1 text-center text-sm-start pb-2 pb-lg-0 mb-4 mb-lg-5">Schedule</h2>
        </div>
        <div className="col-lg-3 mb-4">
     
          {/* <!-- Nav tabs --> */}
          <div className="nav flex-nowrap flex-lg-column nav-tabs" role="tablist" aria-orientation="vertical">
            <Link href="#day-1" className="nav-link d-block w-100 rounded-3 p-4 p-xl-5 me-2 me-sm-3 me-lg-0 mb-lg-3 active" id="day-1-tab" data-bs-toggle="tab" role="tab" aria-controls="day-1" aria-selected={true}>
              <div className="fs-xl">Day One</div>
              <div className="fs-3 fw-bold">Oct 14, 2023</div>
           </Link>
            <Link href="#day-2" className="nav-link d-block w-100 rounded-3 p-4 p-xl-5" id="day-2-tab" data-bs-toggle="tab" role="tab" aria-controls="day-2" aria-selected={false}>
              <div className="fs-xl">Day Two</div>
              <div className="fs-3 fw-bold">Oct 15, 2023</div>
           </Link>
          </div>
        </div>
        <div className="col-lg-8 offset-lg-1">
     
          {/* <!-- Tab panes --> */}
          <div className="tab-content">
     
            {/* <!-- Day 1 schedule --> */}
            <div className="tab-pane fade show active" id="day-1" role="tabpanel" aria-label="day-1-tab">
              <div className="border-bottom pb-4">
                <div className="row pb-1 pb-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">9:30 – 10:30 am</div>
                    <p className="text-muted mb-0">October 14th</p>
                  </div>
                  <div className="col-sm-8">
                    <h5 className="mb-0">Opening party &amp; early registration</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="row py-1 py-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">10:30 – 11:30 am</div>
                    <p className="text-muted mb-2 mb-sm-4">October 14th</p>
                    <span className="badge bg-warning shadow-warning fs-sm">Lecture</span>
                  </div>
                  <div className="col-sm-8">
                    <h5>Product strategy: Defining your strategy, tactics, metrics &amp; roadmap</h5>
                    <p className="mb-4">Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed. Cras vestibulum facilisis dictumst consequat. In bibendum diam nunc dignissim magna morbi mattis.</p>
                    <div className="d-flex align-items-center">
                     <Image src="/assets/img/avatar/41.jpg" width={48} height={48} className="rounded-circle" alt="Marvin McKinney"/>
                      <div className="ps-3">
                        <h6 className="fw-semibold mb-1">Marvin McKinney</h6>
                        <p className="fs-sm text-muted mb-0">Product Manager, Google</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="row py-1 py-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">11:30 am – 13:00 pm</div>
                    <p className="text-muted mb-2 mb-sm-4">October 14th</p>
                    <span className="badge bg-success shadow-success fs-sm">Workshop</span>
                  </div>
                  <div className="col-sm-8">
                    <h5>Workshop: Top trends and predictions for content that will dominate next year</h5>
                    <p className="mb-4">Nec, malesuada quisque lorem id amet posuere. Risus, elit, vel pharetra ac, dictum lorem nisl morbi. Lorem dui id aliquam eu feugiat arcu diam.</p>
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                      <div className="col">
                        <div className="d-flex align-items-center">
                         <Image src="/assets/img/avatar/01.jpg" width={48} height={48} className="rounded-circle" alt="Jerome Bell"/>
                          <div className="ps-3">
                            <h6 className="fw-semibold mb-1">Jerome Bell</h6>
                            <p className="fs-sm text-muted mb-0">Strategic Advisor, Shopify</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center">
                         <Image src="/assets/img/avatar/06.jpg"  width={48} height={48} className="rounded-circle" alt="Jenny Wilson"/>
                          <div className="ps-3">
                            <h6 className="fw-semibold mb-1">Jenny Wilson</h6>
                            <p className="fs-sm text-muted mb-0">UX Designer, Glassdoor</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="row py-1 py-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">13:00 – 14:00 pm</div>
                    <p className="text-muted mb-0">October 14th</p>
                  </div>
                  <div className="col-sm-8">
                    <h5 className="mb-0">Interlude: attendee dinner</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="row py-1 py-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">14:00 – 16:00 pm</div>
                    <p className="text-muted mb-2 mb-sm-4">October 14th</p>
                    <span className="badge bg-warning shadow-warning fs-sm">Lecture</span>
                  </div>
                  <div className="col-sm-8">
                    <h5>Group discussion: How to align and empower cross-team success</h5>
                    <p className="mb-4">Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed. Cras vestibulum facilisis.</p>
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                      <div className="col">
                        <div className="d-flex align-items-center">
                         <Image src="/assets/img/avatar/02.jpg" width={48} height={48} className="rounded-circle" alt="Ralph Edwards"/>
                          <div className="ps-3">
                            <h6 className="fw-semibold mb-1">Ralph Edwards</h6>
                            <p className="fs-sm text-muted mb-0">Founder &amp; CEO, Uber</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center">
                         <Image src="/assets/img/avatar/05.jpg" width={48} height={48} className="rounded-circle" alt="Albert Flores"/>
                          <div className="ps-3">
                            <h6 className="fw-semibold mb-1">Albert Flores</h6>
                            <p className="fs-sm text-muted mb-0">Principal Consultant, Twitch</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center">
                         <Image src="/assets/img/avatar/03.jpg" width={48} height={48} className="rounded-circle" alt="Esther Howard"/>
                          <div className="ps-3">
                            <h6 className="fw-semibold mb-1">Esther Howard</h6>
                            <p className="fs-sm text-muted mb-0">VP of Strategy, Stretto Inc.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="row py-1 py-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">16:00 – 17:00 pm</div>
                    <p className="text-muted mb-2 mb-sm-4">October 14th</p>
                    <span className="badge bg-info shadow-info fs-sm">Panel</span>
                  </div>
                  <div className="col-sm-8">
                    <h5>Panel: State of speed tooling</h5>
                    <p className="mb-4">Volutpat aliquam quam eget sit. Aliquam dui pellentesque egestas duis amet malesuada eget. Ut faucibus dignissim maecenas dui tristique vestibulum facilisis dictumst consequat.</p>
                    <div className="d-flex align-items-center">
                     <Image src="/assets/img/avatar/07.jpg" width={48} height={48} className="rounded-circle" alt="Cameron Williamson"/>
                      <div className="ps-3">
                        <h6 className="fw-semibold mb-1">Cameron Williamson</h6>
                        <p className="fs-sm text-muted mb-0">Co-Founder, Invision LTD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <div className="row pt-1 pt-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">17:00 – 19:00 pm</div>
                    <p className="text-muted mb-0">October 14th</p>
                  </div>
                  <div className="col-sm-8">
                    <h5 className="mb-0">Official mid-conference party after Day One</h5>
                  </div>
                </div>
              </div>
            </div>
     
            {/* <!-- Day 2 schedule --> */}
            <div className="tab-pane fade" id="day-2" role="tabpanel" aria-label="day-2-tab">
              <div className="border-bottom pb-4">
                <div className="row pb-1 pb-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">9:30 – 10:30 am</div>
                    <p className="text-muted mb-0">October 15th</p>
                  </div>
                  <div className="col-sm-8">
                    <h5 className="mb-0">Day 2 registration</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="row py-1 py-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">10:30 – 11:30 am</div>
                    <p className="text-muted mb-2 mb-sm-4">October 15th</p>
                    <span className="badge bg-success shadow-success fs-sm">Workshop</span>
                  </div>
                  <div className="col-sm-8">
                    <h5>Workshop: Top trends and predictions for content that will dominate next year</h5>
                    <p className="mb-4">Nec, malesuada quisque lorem id amet posuere. Risus, elit, vel pharetra ac, dictum lorem nisl morbi. Lorem dui id aliquam eu feugiat arcu diam.</p>
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                      <div className="col">
                        <div className="d-flex align-items-center">
                         <Image src="/assets/img/avatar/01.jpg" width={48} height={48} className="rounded-circle" alt="Jerome Bell"/>
                          <div className="ps-3">
                            <h6 className="fw-semibold mb-1">Jerome Bell</h6>
                            <p className="fs-sm text-muted mb-0">Strategic Advisor, Shopify</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center">
                         <Image src="/assets/img/avatar/06.jpg" width={48} height={48} className="rounded-circle" alt="Jenny Wilson"/>
                          <div className="ps-3">
                            <h6 className="fw-semibold mb-1">Jenny Wilson</h6>
                            <p className="fs-sm text-muted mb-0">UX Designer, Glassdoor</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="row py-1 py-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">11:30 am – 13:00 pm</div>
                    <p className="text-muted mb-2 mb-sm-4">October 15th</p>
                    <span className="badge bg-warning shadow-warning fs-sm">Lecture</span>
                  </div>
                  <div className="col-sm-8">
                    <h5>Product strategy: Defining your strategy, tactics, metrics &amp; roadmap</h5>
                    <p className="mb-4">Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed. Cras vestibulum facilisis dictumst consequat. In bibendum diam nunc dignissim magna morbi mattis.</p>
                    <div className="d-flex align-items-center">
                     <Image src="/assets/img/avatar/41.jpg" width={48} height={48} className="rounded-circle" alt="Marvin McKinney"/>
                      <div className="ps-3">
                        <h6 className="fw-semibold mb-1">Marvin McKinney</h6>
                        <p className="fs-sm text-muted mb-0">Product Manager, Google</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="row py-1 py-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">13:00 – 14:00 pm</div>
                    <p className="text-muted mb-0">October 15th</p>
                  </div>
                  <div className="col-sm-8">
                    <h5 className="mb-0">Interlude: attendee dinner</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="row py-1 py-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">14:00 – 16:00 pm</div>
                    <p className="text-muted mb-2 mb-sm-4">October 15th</p>
                    <span className="badge bg-info shadow-info fs-sm">Panel</span>
                  </div>
                  <div className="col-sm-8">
                    <h5>Panel: State of speed tooling</h5>
                    <p className="mb-4">Volutpat aliquam quam eget sit. Aliquam dui pellentesque egestas duis amet malesuada eget. Ut faucibus dignissim maecenas dui tristique vestibulum facilisis dictumst consequat.</p>
                    <div className="d-flex align-items-center">
                     <Image src="/assets/img/avatar/07.jpg" width={48} height={48} className="rounded-circle" alt="Cameron Williamson"/>
                      <div className="ps-3">
                        <h6 className="fw-semibold mb-1">Cameron Williamson</h6>
                        <p className="fs-sm text-muted mb-0">Co-Founder, Invision LTD</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="row py-1 py-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">16:00 – 17:00 pm</div>
                    <p className="text-muted mb-2 mb-sm-4">October 15th</p>
                    <span className="badge bg-warning shadow-warning fs-sm">Lecture</span>
                  </div>
                  <div className="col-sm-8">
                    <h5>Group discussion: How to align and empower cross-team success</h5>
                    <p className="mb-4">Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed. Cras vestibulum facilisis.</p>
                    <div className="row row-cols-1 row-cols-md-2 g-3">
                      <div className="col">
                        <div className="d-flex align-items-center">
                         <Image src="/assets/img/avatar/05.jpg" width={48} height={48} className="rounded-circle" alt="Albert Flores"/>
                          <div className="ps-3">
                            <h6 className="fw-semibold mb-1">Albert Flores</h6>
                            <p className="fs-sm text-muted mb-0">Principal Consultant, Twitch</p>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="d-flex align-items-center">
                         <Image src="/assets/img/avatar/03.jpg" width={48} height={48} className="rounded-circle" alt="Esther Howard"/>
                          <div className="ps-3">
                            <h6 className="fw-semibold mb-1">Esther Howard</h6>
                            <p className="fs-sm text-muted mb-0">VP of Strategy, Stretto Inc.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <div className="row pt-1 pt-xl-3">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="h5 mb-1">17:00 – 19:00 pm</div>
                    <p className="text-muted mb-0">October 15th</p>
                  </div>
                  <div className="col-sm-8">
                    <h5 className="mb-0">Closing farewell party</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default Schedule