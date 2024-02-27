"use client";
import Link from 'next/link';
import Image from 'next/image';

function PostTitle() {
  return (
      <section className="container mt-4 pt-lg-2 pb-3">
      <h1 className="pb-3" style={{maxwidth:"970px"}}>This Long-Awaited Technology May Finally Change the World</h1>
      <div className="d-flex flex-md-row flex-column align-items-md-center justify-content-md-between mb-3">
        <div className="d-flex align-items-center flex-wrap text-muted mb-md-0 mb-4">
          <div className="fs-xs border-end pe-3 me-3 mb-2">
            <span className="badge bg-faded-primary text-primary fs-base">Technology</span>
          </div>
          <div className="fs-sm border-end pe-3 me-3 mb-2">12 hours ago</div>
          <div className="d-flex mb-2">
            <div className="d-flex align-items-center me-3">
              <i className="bx bx-like fs-base me-1"></i>
              <span className="fs-sm">8</span>
            </div>
            <div className="d-flex align-items-center me-3">
              <i className="bx bx-comment fs-base me-1"></i>
              <span className="fs-sm">4</span>
            </div>
            <div className="d-flex align-items-center">
              <i className="bx bx-share-alt fs-base me-1"></i>
              <span className="fs-sm">2</span>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center position-relative ps-md-3 pe-lg-5 mb-2">
          <Image src="/assets/img/avatar/39.jpg" className="rounded-circle" width={60} height={60} alt="Albert Flores"/>
          <div className="ps-3">
            <h6 className="mb-1">Author</h6>
           <Link href="#" className="fw-semibold stretched-link">Albert Flores</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostTitle