"use client";
import Image from 'next/image'

function HowItWorks() {
  return (
      <section className="container pt-4 pt-lg-0 pb-4 pb-lg-5">
      <h2 className="h1 text-center pb-3 pb-md-0 mb-md-5">How Does It Work?</h2>
      <div className="steps">
        <div className="step pt-0 pt-md-3 pb-5">
          <div className="step-number">
            <div className="step-number-inner">1</div>
          </div>
          <div className="step-body d-flex align-items-center ps-xl-5">
            <div className="rellax d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5" data-rellax-percentage="0.5" data-rellax-speed="-0.3" data-disable-parallax-down="lg">
              <Image src="/assets/img/landing/online-courses/steps/01-dark.svg" className="d-dark-mode-none" width={306} height={306} alt="Illustration"/>
              <Image src="/assets/img/landing/online-courses/steps/01-light.svg" className="d-none d-dark-mode-block" width={306} height={306} alt="Illustration"/>
            </div>
            <div className="rellax ps-md-4 ps-xl-5" data-rellax-percentage="0.5" data-rellax-speed="0.4" data-disable-parallax-down="lg">
              <h3 className="h4">Find what fascinates you &amp; choose your course</h3>
              <p className="mb-0">Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit scelerisque tempus placerat.</p>
            </div>
          </div>
        </div>
        <div className="step pt-0 pt-md-4 pb-5">
          <div className="step-number">
            <div className="step-number-inner">2</div>
          </div>
          <div className="step-body d-flex align-items-center ps-xl-5">
            <div className="rellax d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5" data-rellax-percentage="0.5" data-rellax-speed="-0.5" data-disable-parallax-down="lg">
              <Image src="/assets/img/landing/online-courses/steps/02-dark.svg" className="d-dark-mode-none" width={306} height={306} alt="Illustration"/>
              <Image src="/assets/img/landing/online-courses/steps/02-light.svg" className="d-none d-dark-mode-block" width={306} height={306} alt="Illustration"/>
            </div>
            <div className="rellax ps-md-4 ps-xl-5" data-rellax-percentage="0.5" data-rellax-speed="0.5" data-disable-parallax-down="lg">
              <h3 className="h4">Learn by doing</h3>
              <p className="mb-0">Tristique sed pharetra feugiat tempor sagittis. Ultricies eu bibendum adipiscing lacinia. Quisque praesent aliquam tempus phasellus ut integer ac nunc dapibus.</p>
            </div>
          </div>
        </div>
        <div className="step pt-0 pt-md-4 pb-5">
          <div className="step-number">
            <div className="step-number-inner">3</div>
          </div>
          <div className="step-body d-flex align-items-center ps-xl-5">
            <div className="rellax d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5" data-rellax-percentage="0.5" data-rellax-speed="-0.3" data-disable-parallax-down="lg">
              <Image src="/assets/img/landing/online-courses/steps/03-dark.svg" className="d-dark-mode-none"  width={306} height={306} alt="Illustration"/>
              <Image src="/assets/img/landing/online-courses/steps/03-light.svg" className="d-none d-dark-mode-block" width={306} height={306} alt="Illustration"/>
            </div>
            <div className="rellax ps-md-4 ps-xl-5" data-rellax-percentage="0.5" data-rellax-speed="0.4" data-disable-parallax-down="lg">
              <h3 className="h4">Get instant expert feedback</h3>
              <p className="mb-0">Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum ultricies auctor nec volutpat augue.</p>
            </div>
          </div>
        </div>
        <div className="step pt-0 pt-md-4 pb-5">
          <div className="step-number">
            <div className="step-number-inner">4</div>
          </div>
          <div className="step-body d-flex align-items-center ps-xl-5">
            <div className="rellax d-none d-lg-block flex-shrink-0 mx-4 mx-xl-5" data-rellax-percentage="0.5" data-rellax-speed="-0.5" data-disable-parallax-down="lg">
              <Image src="/assets/img/landing/online-courses/steps/04-dark.svg" className="d-dark-mode-none" width={306} height={306} alt="Illustration"/>
              <Image src="/assets/img/landing/online-courses/steps/04-light.svg" width={306} height={306} className="d-none d-dark-mode-block" alt="Illustration"/>
            </div>
            <div className="rellax ps-md-4 ps-xl-5" data-rellax-percentage="0.5" data-rellax-speed="0.6" data-disable-parallax-down="lg">
              <h3 className="h4">Put your learning into practice &amp; find your dream job</h3>
              <p className="mb-0">Sed fermentum ut nibh duis. Dolor pretium arcu, tincidunt ultrices tristique arcu cursus massa gravida tortor nulla, mollis id pretium.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks