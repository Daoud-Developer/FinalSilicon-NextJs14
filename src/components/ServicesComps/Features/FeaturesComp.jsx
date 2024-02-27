"use client";
import Image from 'next/image'

function FeaturesComp() {
  return (
    <section className="container pb-5 mb-2 mb-md-4 mb-lg-5">
        <h2 className="h1 text-center pt-1 pt-xl-2 mb-4">Why Choose Us?</h2>
        <p className="fs-lg text-muted text-center pb-4 mb-2 mb-lg-3">We personalize how we work to fit your project needs. Our approach helps augment innovation.</p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 pb-xl-3">
          <div className="col text-center border-end">
            <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
              <Image src="/assets/img/landing/software-agency-1/features/01.svg" width={32} height={32} alt="Icon"/>
            </div>
            <h3 className="h5 mb-2 mb-lg-0">Build a functional prototype in 24 hrs</h3>
          </div>
          <div className="col text-center border-end">
            <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
              <Image src="/assets/img/landing/software-agency-1/features/02.svg"  width={32} height={32} alt="Icon"/>
            </div>
            <h3 className="h5 mb-2 mb-lg-0">Create an MVP within two weeks</h3>
          </div>
          <div className="col text-center border-end">
            <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
              <Image src="/assets/img/landing/software-agency-1/features/03.svg"  width={32} height={32} alt="Icon"/>
            </div>
            <h3 className="h5 mb-2 mb-lg-0">Kickstart software development</h3>
          </div>
          <div className="col text-center">
            <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
              <Image src="/assets/img/landing/software-agency-1/features/04.svg"  width={32} height={32} alt="Icon"/>
            </div>
            <h3 className="h5 mb-2 mb-lg-0">Get 24/7 tech &amp; business support</h3>
          </div>
        </div>
      </section>
  )
}

export default FeaturesComp