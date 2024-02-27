"use client";
import Image from 'next/image';
import Link from 'next/link';

function Projects() {
  return (
      <section className="container mb-5 pb-lg-5 pb-md-4 pb-3">
      <h2 className="h1 mb-lg-5 mb-4 pb-lg-0 pb-md-2 text-center">Explore Our Featured Projects</h2>
  
      {/* <!-- Project item --> */}
      <div className="row gy-4 mb-4 pb-md-3 pb-2">
        <div className="col-md-6 rellax" data-rellax-percentage="0.5" data-rellax-speed="0.5" data-disable-parallax-down="md">
          <div className="bg-secondary rounded-3">
            <Image src="/assets/img/landing/software-agency-3/projects/01.png" width={800} height={800} alt="Project image"/>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 offset-lg-1 d-flex rellax" data-rellax-percentage="0.5" data-rellax-speed="-0.5" data-disable-parallax-down="md">
          <div className="align-self-center ps-lg-0 ps-md-4">
            <h4 className="mb-lg-4 mb-3 fs-base fw-normal text-body">Mobile App</h4>
            <h3 className="h2 mb-lg-4 mb-3">Task management app</h3>
            <p className="mb-lg-4 mb-3">Odio mus adipiscing nunc sed viverra massa aliquam sit vestibulum maecenas arcu adipiscing tincidunt at velit pharetra varius sit.</p>
            <ul className="mb-lg-4 mb-3 fs-sm text-muted list-inline" style={{maxWidth: "19.125rem"}}>
              <li className="list-inline-item me-1">
                Product Strategy
                <span className="ms-1">/</span>
              </li>
              <li className="list-inline-item me-1">
                Front end Development
                <span className="ms-1">/</span>
              </li>
              <li className="list-inline-item me-1">
                Systems Design
                <span className="ms-1">/</span>
              </li>
              <li className="list-inline-item me-1">
                Web Development
              </li>
            </ul>
            <Link href="#" className="btn btn-lg btn-outline-primary">Read More</Link>
          </div>
        </div>
      </div>
  
      {/* <!-- Project item --> */}
      <div className="row gy-4 mb-4 pb-md-3 pb-2">
        <div className="col-md-6 rellax" data-rellax-percentage="0.5" data-rellax-speed="0.5" data-disable-parallax-down="md">
          <div className="bg-secondary rounded-3">
            <Image src="/assets/img/landing/software-agency-3/projects/02.png" width={800} height={800} alt="Project image"/>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 offset-lg-1 d-flex rellax" data-rellax-percentage="0.5" data-rellax-speed="-0.5" data-disable-parallax-down="md">
          <div className="align-self-center ps-lg-0 ps-md-4">
            <h4 className="mb-lg-4 mb-3 fs-base fw-normal text-body">Landing Page</h4>
            <h3 className="h2 mb-lg-4 mb-3">Landing page for electric scooters</h3>
            <p className="mb-lg-4 mb-3">Vitae non luctus rhoncus ipsum feugiat luctus ornare. Pretium nulla sed quis duis tristique orci. Odio in pellentesque urna sit facilisi convallis vel tempus.</p>
            <ul className="mb-lg-4 mb-3 fs-sm text-muted list-inline" style={{maxWidth: "19.125rem"}}>
              <li className="list-inline-item me-1">
                Product Strategy
                <span className="ms-1">/</span>
              </li>
              <li className="list-inline-item me-1">
                Front end Development
                <span className="ms-1">/</span>
              </li>
              <li className="list-inline-item me-1">
                Systems Design
                <span className="ms-1">/</span>
              </li>
              <li className="list-inline-item me-1">
                Web Development
              </li>
            </ul>
            <Link href="#" className="btn btn-lg btn-outline-primary">Read More</Link>
          </div>
        </div>
      </div>
  
      {/* <!-- Project item --> */}
      <div className="row gy-4 mb-xl-3">
        <div className="col-md-6 rellax" data-rellax-percentage="0.5" data-rellax-speed="0.5" data-disable-parallax-down="md">
          <div className="bg-secondary rounded-3">
            <Image src="/assets/img/landing/software-agency-3/projects/03.png" width={800} height={800} alt="Project image"/>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 offset-lg-1 d-flex rellax" data-rellax-percentage="0.5" data-rellax-speed="-0.5" data-disable-parallax-down="md">
          <div className="align-self-center ps-lg-0 ps-md-4">
            <h4 className="mb-lg-4 mb-3 fs-base fw-normal text-body">Web App</h4>
            <h3 className="h2 mb-lg-4 mb-3">Сrypto market dashboard</h3>
            <p className="mb-lg-4 mb-3">Donec donec ultricies feugiat imperdiet enim cras eget enim elementum eget ultrices praesent pretium morbi.</p>
            <ul className="mb-lg-4 mb-3 fs-sm text-muted list-inline" style={{maxWidth: "19.125rem"}}>
              <li className="list-inline-item me-1">
                Front end Development
                <span className="ms-1">/</span>
              </li>
              <li className="list-inline-item me-1">
                Systems Design
                <span className="ms-1">/</span>
              </li>
              <li className="list-inline-item me-1">
                Web Development
              </li>
            </ul>
            <Link href="#" className="btn btn-lg btn-outline-primary">Read More</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects