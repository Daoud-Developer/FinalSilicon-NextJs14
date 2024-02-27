"use client";
import Link from 'next/link'

function CourseAuthorComp() {
  return (
      <section  className="container py-lg-4 py-xl-5 mt-3 mb-5">
      <div  className="row g-0 bg-dark bg-repeat-0 bg-position-center border rounded-3 overflow-hidden" 
      style={{backgroundImage: "url(/assets/img/portfolio/courses/author-pattern.svg)"}}>
        <div  className="col-md-5 bg-repeat-0 bg-position-top-center bg-size-cover" 
        style={{backgroundImage: "url(/assets/img/portfolio/courses/author.jpg)", minheight: "350px"}}>
          
        </div>
        <div  className="col-md-7 py-xl-5 px-4">
          <div  className="py-5 mx-auto" style={{maxWidth: "530px"}}>
            <div  className="fs-xl text-light opacity-50 mb-2">Learn from the best</div>
            <h2  className="h1 text-light mb-4">Albert Flores</h2>
            <p  className="text-light opacity-70 pb-4">Dolor ipsum amet cursus quisque porta adipiscing. Lorem convallis malesuada sed maecenas. Ac dui at vitae mauris cursus in nullam porta sem. Quis pellentesque elementum ac bibendum. Nunc aliquam in tortor facilisis. Vulputate eget risus, metus phasellus. Pellentesque faucibus amet, eleifend diam quam condimentum convallis ultricies placerat. Duis habitasse placerat amet, odio pellentesque rhoncus, feugiat at. Eget pellentesque tristique felis magna fringilla.</p>
            <div  className="d-flex flex-column flex-sm-row">
              <Link href="#"  className="btn btn-danger me-sm-4 mb-3 mb-sm-0">
                <i  className="bx bxl-youtube fs-xl me-2"></i>
                240k subscribers
              </Link>
              <Link href="#"  className="btn btn-info">
                <i  className="bx bxl-facebook-square fs-xl me-2"></i>
                180k followers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default CourseAuthorComp