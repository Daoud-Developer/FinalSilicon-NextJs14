"use client";
import Link from 'next/link'
import Image from 'next/image'

function ItemsCourses() {
  return (
      <>
     <div className="col pb-1 pb-lg-3 mb-4">
     <article className="card h-100 border-0 shadow-sm">
       <div className="position-relative">
        <Link href="/landing-courses/portfolio-courses/portfolio-single/:id" className="d-block position-absolute w-100 h-100 top-0 start-0" 
        aria-label="Course link"></Link>
         <span className="badge bg-success position-absolute top-0 start-0 zindex-2 mt-3 ms-3">Best Seller</span>
         <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
           <i className="bx bx-bookmark"></i>
         </a>
         <Image src="/assets/img/portfolio/courses/01.jpg" width={800} height={800} className="card-img-top" alt="Image"/>
       </div>
       <div className="card-body pb-3">
         <h3 className="h5 mb-2">
           <Link href="/landing-courses/portfolio-courses/portfolio-single">Fullstack Web Developer Course from Scratch</Link>
         </h3>
         <p className="fs-sm mb-2">By Albert Flores</p>
         <p className="fs-lg fw-semibold text-primary mb-0">$12.50</p>
       </div>
       <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
         <div className="d-flex align-items-center me-4">
           <i className="bx bx-time fs-xl me-1"></i>
           220 hours
         </div>
         <div className="d-flex align-items-center">
           <i className="bx bx-like fs-xl me-1"></i>
           94% (4.2K)
         </div>
       </div>
     </article>
   </div>

   {/* <!-- Item --> */}
   <div className="col pb-1 pb-lg-3 mb-4">
     <article className="card h-100 border-0 shadow-sm">
       <div className="position-relative">
         <a href="portfolio-single-course.html" className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link"></a>
         <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
           <i className="bx bx-bookmark"></i>
         </a>
         <Image src="/assets/img/portfolio/courses/02.jpg" width={800} height={800} className="card-img-top" alt="Image"/>
       </div>
       <div className="card-body pb-3">
         <h3 className="h5 mb-2">
         <Link href="/landing-courses/portfolio-courses/portfolio-single">HTML, CSS, JavaScript Web Developer</Link>
         </h3>
         <p className="fs-sm mb-2">By Jenny Wilson &amp; Marvin McKinney</p>
         <p className="fs-lg fw-semibold text-primary mb-0">$15.99</p>
       </div>
       <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
         <div className="d-flex align-items-center me-4">
           <i className="bx bx-time fs-xl me-1"></i>
           160 hours
         </div>
         <div className="d-flex align-items-center">
           <i className="bx bx-like fs-xl me-1"></i>
           92% (3.1K)
         </div>
       </div>
     </article>
   </div>

   {/* <!-- Item --> */}
   <div className="col pb-1 pb-lg-3 mb-4">
     <article className="card h-100 border-0 shadow-sm">
       <div className="position-relative">
         <a href="portfolio-single-course.html" className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link"></a>
         <span className="badge bg-danger position-absolute top-0 start-0 zindex-2 mt-3 ms-3">Sale!</span>
         <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
           <i className="bx bx-bookmark"></i>
         </a>
         <Image src="/assets/img/portfolio/courses/03.jpg" width={800} height={800} className="card-img-top" alt="Image"/>
       </div>
       <div className="card-body pb-3">
         <h3 className="h5 mb-2">
         <Link href="/landing-courses/portfolio-courses/portfolio-single">HTML, CSS, JavaScript Web Developer</Link>
         </h3>
         <p className="fs-sm mb-2">By Robert Fox</p>
         <p className="text-muted mb-0"><span className="fs-lg fw-semibold text-danger me-2">$9.99</span><del>$44.99</del></p>
       </div>
       <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
         <div className="d-flex align-items-center me-4">
           <i className="bx bx-time fs-xl me-1"></i>
           210 hours
         </div>
         <div className="d-flex align-items-center">
           <i className="bx bx-like fs-xl me-1"></i>
           98% (2.7K)
         </div>
       </div>
     </article>
   </div>

   {/* <!-- Item --> */}
   <div className="col pb-1 pb-lg-3 mb-4">
     <article className="card h-100 border-0 shadow-sm">
       <div className="position-relative">
         <a href="portfolio-single-course.html" className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link"></a>
         <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
           <i className="bx bx-bookmark"></i>
         </a>
         <Image src="/assets/img/portfolio/courses/04.jpg" width={800} height={800} className="card-img-top" alt="Image"/>
       </div>
       <div className="card-body pb-3">
         <h3 className="h5 mb-2">
         <Link href="/landing-courses/portfolio-courses/portfolio-single">iOS &amp; Swift - The Complete iOS App Development Course</Link>
         </h3>
         <p className="fs-sm mb-2">By Marvin McKinney</p>
         <p className="fs-lg fw-semibold text-primary mb-0">$15.99</p>
       </div>
       <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
         <div className="d-flex align-items-center me-4">
           <i className="bx bx-time fs-xl me-1"></i>
           170 hours
         </div>
         <div className="d-flex align-items-center">
           <i className="bx bx-like fs-xl me-1"></i>
           95% (3.3K)
         </div>
       </div>
     </article>
   </div>

   {/* <!-- Item --> */}
   <div className="col pb-1 pb-lg-3 mb-4">
     <article className="card h-100 border-0 shadow-sm">
       <div className="position-relative">
         <a href="portfolio-single-course.html" className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link"></a>
         <span className="badge bg-success position-absolute top-0 start-0 zindex-2 mt-3 ms-3">Best Seller</span>
         <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
           <i className="bx bx-bookmark"></i>
         </a>
         <Image src="/assets/img/portfolio/courses/05.jpg" width={800} height={800} className="card-img-top" alt="Image"/>
       </div>
       <div className="card-body pb-3">
         <h3 className="h5 mb-2">
         <Link href="/landing-courses/portfolio-courses/portfolio-single">Data Science &amp; Machine Learning with Python</Link>
         </h3>
         <p className="fs-sm mb-2">By Esther Howard</p>
         <p className="fs-lg fw-semibold text-primary mb-0">$19.75</p>
       </div>
       <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
         <div className="d-flex align-items-center me-4">
           <i className="bx bx-time fs-xl me-1"></i>
           150 hours
         </div>
         <div className="d-flex align-items-center">
           <i className="bx bx-like fs-xl me-1"></i>
           96% (3.8K)
         </div>
       </div>
     </article>
   </div>

   {/* <!-- Item --> */}
   <div className="col pb-1 pb-lg-3 mb-4">
     <article className="card h-100 border-0 shadow-sm">
       <div className="position-relative">
         <a href="portfolio-single-course.html" className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link"></a>
         <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
           <i className="bx bx-bookmark"></i>
         </a>
         <Image src="/assets/img/portfolio/courses/06.jpg" width={800} height={800} className="card-img-top" alt="Image"/>
       </div>
       <div className="card-body pb-3">
         <h3 className="h5 mb-2">
         <Link href="/landing-courses/portfolio-courses/portfolio-single">Creative CSS Drawing Course: Make Art With CSS</Link>
         </h3>
         <p className="fs-sm mb-2">By Robert Fox</p>
         <p className="fs-lg fw-semibold text-primary mb-0">$17.99</p>
       </div>
       <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
         <div className="d-flex align-items-center me-4">
           <i className="bx bx-time fs-xl me-1"></i>
           110 hours
         </div>
         <div className="d-flex align-items-center">
           <i className="bx bx-like fs-xl me-1"></i>
           92% (5.3K)
         </div>
       </div>
     </article>
   </div>

   {/* <!-- Item --> */}
   <div className="col pb-1 pb-lg-3 mb-4">
     <article className="card h-100 border-0 shadow-sm">
       <div className="position-relative">
         <a href="portfolio-single-course.html" className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link"></a>
         <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
           <i className="bx bx-bookmark"></i>
         </a>
         <Image src="/assets/img/portfolio/courses/07.jpg" width={800} height={800} className="card-img-top" alt="Image"/>
       </div>
       <div className="card-body pb-3">
         <h3 className="h5 mb-2">
         <Link href="/landing-courses/portfolio-courses/portfolio-single">Blender Character Creator v2.0 for Video Games Design</Link>
         </h3>
         <p className="fs-sm mb-2">By Ralph Edwards</p>
         <p className="fs-lg fw-semibold text-primary mb-0">$25.00</p>
       </div>
       <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
         <div className="d-flex align-items-center me-4">
           <i className="bx bx-time fs-xl me-1"></i>
           160 hours
         </div>
         <div className="d-flex align-items-center">
           <i className="bx bx-like fs-xl me-1"></i>
           93% (4.5K)
         </div>
       </div>
     </article>
   </div>

   {/* <!-- Item --> */}
   <div className="col pb-1 pb-lg-3 mb-4">
     <article className="card h-100 border-0 shadow-sm">
       <div className="position-relative">
         <a href="portfolio-single-course.html" className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link"></a>
         <span className="badge bg-danger position-absolute top-0 start-0 zindex-2 mt-3 ms-3">Sale!</span>
         <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
           <i className="bx bx-bookmark"></i>
         </a>
         <Image src="/assets/img/portfolio/courses/08.jpg" width={800} height={800} className="card-img-top" alt="Image"/>
       </div>
       <div className="card-body pb-3">
         <h3 className="h5 mb-2">
         <Link href="/landing-courses/portfolio-courses/portfolio-single">The Ultimate Guide to 2D Mobile Game Development with Unity</Link>
         </h3>
         <p className="fs-sm mb-2">By Albert Flores</p>
         <p className="text-muted mb-0"><span className="fs-lg fw-semibold text-danger me-2">$12.99</span><del>$34.99</del></p>
       </div>
       <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
         <div className="d-flex align-items-center me-4">
           <i className="bx bx-time fs-xl me-1"></i>
           230 hours
         </div>
         <div className="d-flex align-items-center">
           <i className="bx bx-like fs-xl me-1"></i>
           97% (4.1K)
         </div>
       </div>
     </article>
   </div>

   {/* <!-- Item --> */}
   <div className="col pb-1 pb-lg-3 mb-4 d-sm-none d-lg-block">
     <article className="card h-100 border-0 shadow-sm">
       <div className="position-relative">
         <a href="portfolio-single-course.html" className="d-block position-absolute w-100 h-100 top-0 start-0" aria-label="Course link"></a>
         <a href="#" className="btn btn-icon btn-light bg-white border-white btn-sm rounded-circle position-absolute top-0 end-0 zindex-2 me-3 mt-3" data-bs-toggle="tooltip" data-bs-placement="left" title="Save to Favorites" aria-label="Save to Favorites">
           <i className="bx bx-bookmark"></i>
         </a>
         <Image src="/assets/img/portfolio/courses/09.jpg" width={800} height={800} className="card-img-top" alt="Image"/>
       </div>
       <div className="card-body pb-3">
         <h3 className="h5 mb-2">
         <Link href="/landing-courses/portfolio-courses/portfolio-single">Learn JMETER from Scratch on Live Apps-Performance Testing</Link>
         </h3>
         <p className="fs-sm mb-2">By Jenny Wilson</p>
         <p className="fs-lg fw-semibold text-primary mb-0">$14.50</p>
       </div>
       <div className="card-footer d-flex align-items-center fs-sm text-muted py-4">
         <div className="d-flex align-items-center me-4">
           <i className="bx bx-time fs-xl me-1"></i>
           120 hours
         </div>
         <div className="d-flex align-items-center">
           <i className="bx bx-like fs-xl me-1"></i>
           92% (3.8K)
         </div>
       </div>
     </article>
   </div>
   </>
  )
}

export default ItemsCourses