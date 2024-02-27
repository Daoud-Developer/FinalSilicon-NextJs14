"use client"
import Image from "next/image";
import Link from "next/link";
const Blogarticles = () => {
      return (
            <div>
                  {/* <!-- Blog articles --> */}
                  <div className="pb-3">

                        {/* <!-- Blog item --> */}
                        <article className="card border-0 shadow-sm overflow-hidden mb-4">
                              <div className="row g-0">
                                    <div className="col-sm-4 position-relative bg-repeat-0 bg-size-cover"
                                          style={{
                                                backgroundImage: "url(assets/img/blog/01.jpg)",
                                                minheight: "15rem"
                                          }}
                                    >
                                          <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                                          <Link href="#" 
                                          className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" 
                                          data-bs-toggle="tooltip" 
                                          data-bs-placement="left" 
                                          title="Read later" 
                                          aria-label="Read later">
                                                <i className="bx bx-bookmark"></i>
                                          </Link>
                                    </div>
                                    <div className="col-sm-8">
                                          <div className="card-body">
                                                <div className="d-flex align-items-center mb-3">
                                                      <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Processes &amp; Tools</Link>
                                                      <span className="fs-sm text-muted border-start ps-3 ms-3">Sep 3, 2023</span>
                                                </div>
                                                <h3 className="h4">
                                                      <Link href="/blog/singlepost/1">5 Bad Landing Page Examples &amp; How We Would Fix Them</Link>
                                                </h3>
                                                <p>Tellus sagittis dolor pellentesque vel porttitor magna aliquet arcu. Interdum risus mauris pulvinar et vel. Morbi tellus, scelerisque vel metus. Scelerisque arcu egestas ac commodo, ac nibh. Pretium ac elit sed nulla nec.</p>
                                                <hr className="my-4" />
                                                <div className="d-flex align-items-center justify-content-between">
                                                      <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none me-3">
                                                            <Image 
                                                            src="/assets/img/avatar/01.jpg" 
                                                            className="rounded-circle me-3"
                                                             width={48}
                                                             height={48} 
                                                             alt="Avatar" />
                                                            Jerome Bell
                                                      </Link>
                                                      <div className="d-flex align-items-center text-muted">
                                                            <div className="d-flex align-items-center me-3">
                                                                  <i className="bx bx-like fs-lg me-1"></i>
                                                                  <span className="fs-sm">8</span>
                                                            </div>
                                                            <div className="d-flex align-items-center me-3">
                                                                  <i className="bx bx-comment fs-lg me-1"></i>
                                                                  <span className="fs-sm">7</span>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                  <i className="bx bx-share-alt fs-lg me-1"></i>
                                                                  <span className="fs-sm">4</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </article>

                        {/* <!-- Article --> */}
                        <article className="card border-0 shadow-sm overflow-hidden mb-4">
                              <div className="row g-0">
                                    <div className="col-sm-4 position-relative bg-repeat-0 bg-size-cover"
                                          style={{
                                                backgroundImage: "url(assets/img/blog/06.jpg)",
                                                minheight: "15rem"
                                          }}>
                                          <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                                          <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                                                <i className="bx bx-bookmark"></i>
                                          </Link>
                                    </div>
                                    <div className="col-sm-8">
                                          <div className="card-body">
                                                <div className="d-flex align-items-center mb-3">
                                                      <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Startups</Link>
                                                      <span className="fs-sm text-muted border-start ps-3 ms-3">Sep 10, 2023</span>
                                                </div>
                                                <h3 className="h4">
                                                      <Link href="/blog/singlepost/1">How Agile is Your Forecasting Process?</Link>
                                                </h3>
                                                <p>Nulla fringilla arcu justo augue fringilla in nunc volutpat sit. Dui diam, faucibus vitae ultricies vitae mollis nunc elementum. Et, habitasse porta neque tempor tellus ut. Sagittis odio porttitor erat viverra erat neque.</p>
                                                <hr className="my-4" />
                                                <div className="d-flex align-items-center justify-content-between">
                                                      <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none me-3">
                                                            <Image 
                                                            src="/assets/img/avatar/05.jpg" 
                                                            className="rounded-circle me-3" 
                                                            width={48}
                                                            height={48}
                                                            alt="Avatar" />
                                                            Albert Flores
                                                      </Link>
                                                      <div className="d-flex align-items-center text-muted">
                                                            <div className="d-flex align-items-center me-3">
                                                                  <i className="bx bx-like fs-lg me-1"></i>
                                                                  <span className="fs-sm">3</span>
                                                            </div>
                                                            <div className="d-flex align-items-center me-3">
                                                                  <i className="bx bx-comment fs-lg me-1"></i>
                                                                  <span className="fs-sm">6</span>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                  <i className="bx bx-share-alt fs-lg me-1"></i>
                                                                  <span className="fs-sm">0</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </article>

                        {/* <!-- Article --> */}
                        <article className="card border-0 shadow-sm overflow-hidden mb-4">
                              <div className="row g-0">
                                    <div className="col-sm-4 position-relative bg-repeat-0 bg-size-cover"
                                          style={{
                                                backgroundImage: "url(assets/img/blog/05.jpg)",
                                                minheight: "15rem"
                                          }}>
                                          <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                                          <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3"
                                           data-bs-toggle="tooltip" 
                                           data-bs-placement="left" 
                                           title="Read later" 
                                           aria-label="Read later">
                                                <i className="bx bx-bookmark"></i>
                                          </Link>
                                    </div>
                                    <div className="col-sm-8">
                                          <div className="card-body">
                                                <div className="d-flex align-items-center mb-3">
                                                      <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Digital</Link>
                                                      <span className="fs-sm text-muted border-start ps-3 ms-3">Oct 9, 2023</span>
                                                </div>
                                                <h3 className="h4">
                                                      <Link href="/blog/singlepost/1">Inclusive Marketing: Why and How Does it Work?</Link>
                                                </h3>
                                                <p>Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque.</p>
                                                <hr className="my-4" />
                                                <div className="d-flex align-items-center justify-content-between">
                                                      <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none me-3">
                                                            <Image 
                                                            src="/assets/img/avatar/04.jpg" 
                                                            className="rounded-circle me-3" 
                                                            width={48}
                                                            height={48}
                                                            alt="Avatar" />
                                                            Jane Cooper
                                                      </Link>
                                                      <div className="d-flex align-items-center text-muted">
                                                            <div className="d-flex align-items-center me-3">
                                                                  <i className="bx bx-like fs-lg me-1"></i>
                                                                  <span className="fs-sm">5</span>
                                                            </div>
                                                            <div className="d-flex align-items-center me-3">
                                                                  <i className="bx bx-comment fs-lg me-1"></i>
                                                                  <span className="fs-sm">0</span>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                  <i className="bx bx-share-alt fs-lg me-1"></i>
                                                                  <span className="fs-sm">2</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </article>

                        {/* <!-- Article --> */}
                        <article className="card border-0 shadow-sm overflow-hidden mb-4">
                              <div className="row g-0">
                                    <div className="col-sm-4 position-relative bg-repeat-0 bg-size-cover"
                                          style={{
                                                backgroundImage: "url(assets/img/blog/09.jpg)",
                                                minheight: "15rem"
                                          }}>
                                          <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more"></Link>
                                          <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                                                <i className="bx bx-bookmark"></i>
                                          </Link>
                                    </div>
                                    <div className="col-sm-8">
                                          <div className="card-body">
                                                <div className="d-flex align-items-center mb-3">
                                                      <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Strategy</Link>
                                                      <span className="fs-sm text-muted border-start ps-3 ms-3">Sep 3, 2023</span>
                                                </div>
                                                <h3 className="h4">
                                                      <Link href="/blog/singlepost/1">This Long-Awaited Technology May Finally Change the World</Link>
                                                </h3>
                                                <p>Sapien, nulla placerat in at. Vitae tincidunt quam ornare massa porttitor. Neque a vitae feugiat in sit habitant integer. Cursus et at pulvinar sed neque vitae. Aliquam vitae hac phasellus purus lectus facilisi. Vitae vel ac quam.</p>
                                                <hr className="my-4" />
                                                <div className="d-flex align-items-center justify-content-between">
                                                      <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none me-3">
                                                            <Image 
                                                            src="/assets/img/avatar/02.jpg" 
                                                            className="rounded-circle me-3" 
                                                            width={48}
                                                            height={48}
                                                            alt="Avatar" />
                                                            Ralph Edwards
                                                      </Link>
                                                      <div className="d-flex align-items-center text-muted">
                                                            <div className="d-flex align-items-center me-3">
                                                                  <i className="bx bx-like fs-lg me-1"></i>
                                                                  <span className="fs-sm">8</span>
                                                            </div>
                                                            <div className="d-flex align-items-center me-3">
                                                                  <i className="bx bx-comment fs-lg me-1"></i>
                                                                  <span className="fs-sm">7</span>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                  <i className="bx bx-share-alt fs-lg me-1"></i>
                                                                  <span className="fs-sm">4</span>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </article>
                  </div>
            </div>
      )
}

export default Blogarticles