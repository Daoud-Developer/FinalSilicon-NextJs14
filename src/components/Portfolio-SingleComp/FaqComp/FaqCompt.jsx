"use client";
import Link from 'next/link'

function FaqCompt() {
  return (
      <section  className="container pb-5 mb-md-3 mb-lg-4 mb-xl-5">
      <div  className="row pb-3">
        <div  className="col-md-5 mb-4 mb-md-0">
          <div  className="card bg-dark h-100 p-lg-5">
            <div  className="card-body p-lg-2">
              <h2  className="h1 text-light">Still Have Any Questions?</h2>
              <p  className="fs-xl text-light opacity-70 mb-0">Check out the FAQs.</p>
            </div>
            <div  className="card-footer border-0 w-100 pt-0 p-4 p-lg-2">
              <div  className="h2 d-flex align-items-center text-light mb-4">$28.99<del  className="fs-xl fw-normal opacity-70 ms-2">49.99</del></div>
              <Link href="#"  className="btn btn-primary btn-lg shadow-primary">Join the course</Link>
            </div>
          </div>
        </div>
        <div  className="col-md-7">
          <div  className="accordion" id="faq">

            {/* <!-- Item --> */}
            <div  className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3  className="accordion-header">
                <button  className="accordion-button shadow-none rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#q-1" aria-expanded="true" aria-controls="q-1">YouTube is full of free tutorials, videos and courses. Why should I take courses here?</button>
              </h3>
              <div  className="accordion-collapse collapse show" id="q-1" data-bs-parent="#faq">
                <div  className="accordion-body fs-sm pt-0">
                  <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.</p>
                </div>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div  className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3  className="accordion-header">
                <button  className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q-2" aria-expanded="false" aria-controls="q-2">What if I don't have any professional background?</button>
              </h3>
              <div  className="accordion-collapse collapse" id="q-2" data-bs-parent="#faq">
                <div  className="accordion-body fs-sm pt-0">
                  <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.</p>
                </div>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div  className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3  className="accordion-header">
                <button  className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q-3" aria-expanded="false" aria-controls="q-3">How is this different from other courses on the market?</button>
              </h3>
              <div  className="accordion-collapse collapse" id="q-3" data-bs-parent="#faq">
                <div  className="accordion-body fs-sm pt-0">
                  <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.</p>
                </div>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div  className="accordion-item border-0 rounded-3 shadow-sm mb-3">
              <h3  className="accordion-header">
                <button  className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q-4" aria-expanded="false" aria-controls="q-4">How much time does it take to do my homework per week? What if I don't like it?</button>
              </h3>
              <div  className="accordion-collapse collapse" id="q-4" data-bs-parent="#faq">
                <div  className="accordion-body fs-sm pt-0">
                  <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.</p>
                </div>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div  className="accordion-item border-0 rounded-3 shadow-sm">
              <h3  className="accordion-header">
                <button  className="accordion-button shadow-none rounded-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#q-5" aria-expanded="false" aria-controls="q-5">Is there any kind of certificate of completion?</button>
              </h3>
              <div  className="accordion-collapse collapse" id="q-5" data-bs-parent="#faq">
                <div  className="accordion-body fs-sm pt-0">
                  <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqCompt