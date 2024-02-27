"use client";
import Image from 'next/image';
import Link from 'next/link';

function TestimonialsComp() {
  return (
      
    <section className="position-relative pt-2 pt-sm-0 pb-lg-4">
        <div className="container pb-2">
          <h2 className="h1 text-center">
          Trusted by leading companies
          </h2>
          <p className="fs-lg text-center pb-4 pb-lg-5 mb-2 mb-sm-3 mb-xl-4">
          Learn why top companies from around the globe choose us
          </p>
          <div className="masonry-grid row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 g-sm-3 g-md-4">
  
            {/* <!-- Item --> */}
            <div className="masonry-grid-item col">
              <div className="card border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src="/assets/img/landing/app-showcase-3/integrations/envato-color-light.svg" 
                className="d-block d-dark-mode-none mx-auto" width={165} height={165} alt="Envato"/>
                <Image src="/assets/img/landing/app-showcase-3/integrations/envato-color-dark.svg" 
                className="d-none d-dark-mode-block mx-auto" width={165} height={165} alt="Envato"/>
                <div className="card-body text-center pt-1">
                  <p className="pb-3 mb-3">
                  Streamline your workflow and save valuable time with this SaaS platform's powerful AI models,
                   which takes care of the heavy lifting and delivers top-notch results.
                   </p>
                  <Image src="/assets/img/avatar/54.jpg" className="d-inline-block rounded-circle" 
                  width={80} height={80} alt="Avatar"/>
                  <div className="pt-2 mt-1">
                    <h3 className="fs-lg mb-1">Emma Johnson</h3>
                    <p className="fs-sm text-muted mb-0">CEO, Co-Founder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="masonry-grid-item col">
              <div className="card border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src="/assets/img/landing/app-showcase-3/integrations/firefox-color-light.svg" 
                className="d-block d-dark-mode-none mx-auto" width={165} height={165} alt="Firefox"/>
                <Image src="/assets/img/landing/app-showcase-3/integrations/firefox-color-dark.svg" 
                className="d-none d-dark-mode-block mx-auto" width={165} height={165} alt="Firefox"/>
                <div className="card-body text-center pt-1">
                  <p className="pb-3 mb-3">
                  Transform your business with this SaaS platform's outstanding AI models API,
                   which delivers unparalleled efficiency, great service, and outstanding results.
                   </p>
                  <div className="pt-2 mt-1">
                    <h3 className="fs-lg mb-1">
                    Robert Thompson
                    </h3>
                    <p className="fs-sm text-muted mb-0">
                    Chief Information Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* <!-- Item --> */}
            <div className="masonry-grid-item col">
              <div className="card border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src="/assets/img/landing/app-showcase-3/integrations/magento-color-light.svg" 
                className="d-block d-dark-mode-none mx-auto" width={165} height={165} alt="Magento"/>
                <Image src="/assets/img/landing/app-showcase-3/integrations/magento-color-dark.svg" 
                className="d-none d-dark-mode-block mx-auto" width={165} height={165} alt="Magento"/>
                <div className="card-body text-center pt-1">
                  <p className="pb-3 mb-3">
                  Differentiate your app from the competition with this SaaS platform's
                   outstanding performance and exceptional API for implementing AI models into your application.
                   </p>
                  <Image src="/assets/img/avatar/55.jpg" className="d-inline-block rounded-circle" width={80} height={80} alt="Avatar"/>
                  <div className="pt-2 mt-1">
                    <h3 className="fs-lg mb-1">
                    Christopher Davis
                    </h3>
                    <p className="fs-sm text-muted mb-0">
                    Network Administrator
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
  
            {/* <!-- Item --> */}
            <div className="masonry-grid-item col">
              <div className="card border-0 bg-secondary p-2 p-sm-0 p-md-2">
                <Image src="/assets/img/landing/app-showcase-3/integrations/woocommerce-color-light.svg" 
                className="d-block d-dark-mode-none mx-auto" width={165} height={165} alt="WooCommerce"/>
                <Image src="/assets/img/landing/app-showcase-3/integrations/woocommerce-color-dark.svg" 
                className="d-none d-dark-mode-block mx-auto" width={165} height={165} alt="WooCommerce"/>
                <div className="card-body text-center pt-1">
                  <p className="pb-3 mb-3">
                  This SaaS platform offers an API for integrating AI models into your app with ease,
                   delivering impressive results and enabling you to take your business to the next level.
                   </p>
                  <div className="pt-2 mt-1">
                    <h3 className="fs-lg mb-1">
                    William Matthews
                    </h3>
                    <p className="fs-sm text-muted mb-0">
                    Software Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>

             {/* <!-- Item --> */}
            <div className="masonry-grid-item col">
              <div className="card border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src="/assets/img/landing/app-showcase-3/integrations/pingdom-color-light.svg" 
                className="d-block d-dark-mode-none mx-auto" width={165} height={165} alt="Pingdom"/>
                <Image src="/assets/img/landing/app-showcase-3/integrations/pingdom-color-dark.svg" 
                className="d-none d-dark-mode-block mx-auto" width={165} height={165} alt="Pingdom"/>
                <div className="card-body text-center pt-1">
                  <p className="pb-3 mb-3">
                  Experience game-changing AI models that are accessible and user-friendly,
                   thanks to this exceptional SaaS platform that offers an API for seamless integration.
                   </p>
                  <Image src="/assets/img/avatar/56.jpg" 
                  className="d-inline-block rounded-circle" width={80} height={80} alt="Avatar"/>
                  <div className="pt-2 mt-1">
                    <h3 className="fs-lg mb-1">
                    Samantha Grace
                    </h3>
                    <p className="fs-sm text-muted mb-0">
                    Data Analyst
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* <!-- Item --> */}
            <div className="masonry-grid-item col">
              <div className="card border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src="/assets/img/landing/app-showcase-3/integrations/shopify-color-light.svg" 
                className="d-block d-dark-mode-none mx-auto" width={165} height={165} alt="Shopify"/>
                <Image src="/assets/img/landing/app-showcase-3/integrations/shopify-color-dark.svg" 
                className="d-none d-dark-mode-block mx-auto" width={165} height={165} alt="Shopify"/>
                <div className="card-body text-center pt-1">
                  <p className="pb-3 mb-3">
                  Get ahead of the competition with this SaaS platform's AI models API,
                   which effortlessly automates processes and delivers exceptional service to ensure your success.
                   </p>
                  <div className="pt-2 mt-1">
                    <h3 className="fs-lg mb-1">
                    Olivia Rodriguez
                    </h3>
                    <p className="fs-sm text-muted mb-0">
                    Human Resources
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* <!-- Item --> */}
            <div className="masonry-grid-item col">
              <div className="card border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src="/assets/img/landing/app-showcase-3/integrations/laravel-color.svg" 
                className="d-block mx-auto" width={165} height={165} alt="Laravel"/>
                <div className="card-body text-center pt-1">
                  <p className="pb-3 mb-3">
                  Implementing AI models has never been easier or more reliable, 
                  thanks to this SaaS platform's seamless API integration and accurate, dependable results.
                  </p>
                  <div className="pt-2 mt-1">
                    <h3 className="fs-lg mb-1">
                    Benjamin Smith
                    </h3>
                    <p className="fs-sm text-muted mb-0">
                    Project Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* <!-- Item --> */}
            <div className="masonry-grid-item col">
              <div className="card border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src="/assets/img/landing/app-showcase-3/integrations/vite-color-light.svg" 
                className="d-block d-dark-mode-none mx-auto" width={165} height={165} alt="Vite"/>
                <Image src="/assets/img/landing/app-showcase-3/integrations/vite-color-dark.svg"
                 className="d-none d-dark-mode-block mx-auto" width={165} height={165} alt="Vite"/>
                <div className="card-body text-center pt-1">
                  <p className="pb-3 mb-3">
                  Stay ahead of the curve and leverage cutting-edge technology with this SaaS platform's
                   unparalleled performance and impressive results.
                   </p>
                  <div className="pt-2 mt-1">
                    <h3 className="fs-lg mb-1">
                    Abigail Collins
                    </h3>
                    <p className="fs-sm text-muted mb-0">
                    Chief Technology Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* <!-- Item --> */}
            <div className="masonry-grid-item col">
              <div className="card border-0 bg-secondary p-1 p-sm-0 p-md-2">
                <Image src="/assets/img/landing/app-showcase-3/integrations/angular-color-light.svg" 
                className="d-block d-dark-mode-none mx-auto" width={165} height={165} alt="Angular"/>
                <Image src="/assets/img/landing/app-showcase-3/integrations/angular-color-dark.svg" 
                className="d-none d-dark-mode-block mx-auto" width={165} height={165} alt="Angular"/>
                <div className="card-body text-center pt-1">
                  <p className="pb-3 mb-3">
                  Efficiently harness the power of AI models with this reliable and easy-to-use SaaS platform,
                   featuring an API that provides excellent support and streamlines your processes.
                   </p>
                  <div className="pt-2 mt-1">
                    <h3 className="fs-lg mb-1">
                    Elijah Brown
                    </h3>
                    <p className="fs-sm text-muted mb-0">
                    Project Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* <!-- Gradient --> */}
        <div className="d-none d-md-block">
          <span className="position-absolute start-0 bottom-0 w-100 zindex-1 d-dark-mode-none" 
          style={{height: "390px", background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 50.14%)"}}>

          </span>
          <span className="position-absolute start-0 bottom-0 w-100 zindex-2 d-none d-dark-mode-block" 
          style={{ height: "375px", background: "linear-gradient(180deg, rgba(11, 15, 25, 0) 0%, #0B0F19 50.14%)" }}>

          </span>
        </div>
        <div className="d-md-none">
          <span className="position-absolute start-0 bottom-0 w-100 zindex-1 d-dark-mode-none" 
          style={{height: "300px", background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 50.14%)"}}>

          </span>
          <span className="position-absolute start-0 bottom-0 w-100 zindex-2 d-none d-dark-mode-block" 
          style={{height: "290px", background: "linear-gradient(180deg, rgba(11, 15, 25, 0) 0%, #0B0F19 50.14%)"}}>

          </span>
        </div>

        {/* <!-- More button --> */}
        <div className="position-absolute start-0 bottom-0 w-100 d-flex justify-content-center zindex-2 pb-5 px-3 mb-3 mb-md-4 mb-lg-5">
           <Link href="#" className="btn btn-outline-secondary rounded-pill mb-xxl-3">Read more reviews</Link>
        </div>
      </section>
  )
}

export default TestimonialsComp