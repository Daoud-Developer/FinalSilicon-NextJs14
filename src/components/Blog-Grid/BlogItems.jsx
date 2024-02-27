"use client";
import Image from 'next/image'
import Link from 'next/link'

function BlogItems() {
  return (
    <div>
        {/* <!-- BlogItems--> */}
        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-md-4 gy-2">

          {/* <!-- Item --> */}
          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                  <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more">  </Link>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/blog/01.jpg" width={400} height={300} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Business  </Link>
                  <span className="fs-sm text-muted">May 19, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                    <Link href="/blog/singlepost/1">5 Bad Landing Page Examples &amp; How We Would Fix Them  </Link>
                </h3>
              </div>
              <div className="card-footer py-4">
                  <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                  <Image src="/assets/img/avatar/01.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                  Jerome Bell
                  </Link>
              </div>
            </article>
          </div>

          {/* <!-- Item --> */}
          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                  <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more">  </Link>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/blog/02.jpg" width={400} height={300} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Digital  </Link>
                  <span className="fs-sm text-muted">Sep 28, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                    <Link href="/blog/singlepost/1">Why UX Design Matters and How it Affects Ranking  </Link>
                </h3>
              </div>
              <div className="card-footer py-4">
                  <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                  <Image src="/assets/img/avatar/01.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                  Jerome Bell
                  </Link>
              </div>
            </article>
          </div>

          {/* <!-- Item --> */}
          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                  <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more">  </Link>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/blog/03.jpg" width={400} height={300} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Business  </Link>
                  <span className="fs-sm text-muted">Sep 16, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                    <Link href="/blog/singlepost/1">This Week in Search: New Limits and Exciting Features  </Link>
                </h3>
              </div>
              <div className="card-footer py-4">
                  <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                  <Image src="/assets/img/avatar/02.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                  Ralph Edwards
                  </Link>
              </div>
            </article>
          </div>

          {/* <!-- Item --> */}
          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                  <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more">  </Link>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/blog/04.jpg" width={400} height={300} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Processes &amp; Tools  </Link>
                  <span className="fs-sm text-muted">12 hours ago</span>
                </div>
                <h3 className="h5 mb-0">
                    <Link href="/blog/singlepost/1">Five Effective Lead Generation Techniques For Your Business  </Link>
                </h3>
              </div>
              <div className="card-footer py-4">
                  <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                  <Image src="/assets/img/avatar/03.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                  Esther Howard
                  </Link>
              </div>
            </article>
          </div>

          {/* <!-- Item --> */}
          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                  <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more">  </Link>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/blog/05.jpg" width={400} height={300} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Digital  </Link>
                  <span className="fs-sm text-muted">Oct 9, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                    <Link href="/blog/singlepost/1">Inclusive Marketing: Why and How Does it Work?  </Link>
                </h3>
              </div>
              <div className="card-footer py-4">
                  <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                  <Image src="/assets/img/avatar/04.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                  Jane Cooper
                  </Link>
              </div>
            </article>
          </div>

          {/* <!-- Item --> */}
          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                  <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more">  </Link>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/blog/06.jpg" width={400} height={300} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Marketing  </Link>
                  <span className="fs-sm text-muted">Apr 2, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                    <Link href="/blog/singlepost/1">How Agile is Your Forecasting Process?  </Link>
                </h3>
              </div>
              <div className="card-footer py-4">
                  <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                  <Image src="/assets/img/avatar/05.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                  Albert Flores
                  </Link>
              </div>
            </article>
          </div>

          {/* <!-- Item --> */}
          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                  <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more">  </Link>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/blog/07.jpg" width={400} height={300} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Processes &amp; Tools  </Link>
                  <span className="fs-sm text-muted">Sep 3, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                    <Link href="/blog/singlepost/1">Your Guide to Optimising A JavaScript-enabled Website  </Link>
                </h3>
              </div>
              <div className="card-footer py-4">
                  <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                  <Image src="/assets/img/avatar/02.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                  Ralph Edwards
                  </Link>
              </div>
            </article>
          </div>

          {/* <!-- Item --> */}
          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                  <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more">  </Link>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/blog/08.jpg" width={400} height={300} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Processes &amp; Tools  </Link>
                  <span className="fs-sm text-muted">Sep 10, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                    <Link href="/blog/singlepost/1">A Study on Smartwatch Design Qualities and People’s Preferences  </Link>
                </h3>
              </div>
              <div className="card-footer py-4">
                  <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                  <Image src="/assets/img/avatar/03.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                  Esther Howard
                  </Link>
              </div>
            </article>
          </div>

          {/* <!-- Item --> */}
          <div className="col pb-3">
            <article className="card border-0 shadow-sm h-100">
              <div className="position-relative">
                  <Link href="/blog/singlepost/1" className="position-absolute top-0 start-0 w-100 h-100" aria-label="Read more">  </Link>
                  <Link href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-5 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Read later" aria-label="Read later">
                  <i className="bx bx-bookmark"></i>
                  </Link>
                <Image src="/assets/img/blog/09.jpg" width={400} height={300} className="card-img-top" alt="Image"/>
              </div>
              <div className="card-body pb-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <Link href="#" className="badge fs-sm text-nav bg-secondary text-decoration-none">Strategy  </Link>
                  <span className="fs-sm text-muted">Sep 16, 2023</span>
                </div>
                <h3 className="h5 mb-0">
                    <Link href="/blog/singlepost/1">This Long-Awaited Technology May Finally Change the World  </Link>
                </h3>
              </div>
              <div className="card-footer py-4">
                  <Link href="#" className="d-flex align-items-center fw-bold text-dark text-decoration-none">
                  <Image src="/assets/img/avatar/02.jpg" width={48} height={48} className="rounded-circle me-3" alt="Avatar"/>
                  Ralph Edwards
                  </Link>
              </div>
            </article>
          </div>
        </div>
    </div>
  )
}

export default BlogItems