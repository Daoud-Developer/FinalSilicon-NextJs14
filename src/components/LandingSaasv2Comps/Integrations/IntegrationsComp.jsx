"use client";
import Image from "next/image";

function IntegrationsComp() {
  return (
     <section className="container mt-n1 mt-md-0 py-5">
        <div className="row justify-content-center text-center pt-md-3 pb-4 py-lg-5 mb-1">
          <div className="col-xl-8 col-lg-9 col-md-10">
            <h2 className="h1 mb-lg-4">Integrate Top Work Tools</h2>
            <p className="fs-lg text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-sm-3 g-lg-4 pb-md-3 pb-lg-5">
          
          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
             <Image src="/assets/img/brands/google.svg" className="d-block mb-4" width={56} height={56} alt="Google"/>
              <p className="mb-0">Lorem magnis pretium sed curabitur nunc facilisi nunc cursus sagittis pretium.</p>
            </div>
          </div>
          
          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
             <Image src="/assets/img/brands/zoom.svg" className="d-block mb-4" width={56} height={56} alt="Zoom"/>
              <p className="mb-0">In eget a mauris quis. Tortor dui tempus quis integer est sit natoque placerat dolor.</p>
            </div>
          </div>
          
          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
             <Image src="/assets/img/brands/slack.svg" className="d-block mb-4" width={56} height={56} alt="Slack"/>
              <p className="mb-0">Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>
          </div>
          
          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
             <Image src="/assets/img/brands/gmail.svg" className="d-block mb-4" width={56} height={56} alt="Gmail"/>
              <p className="mb-0">Rutrum interdum tortor, sed at nulla. A cursus bibendum elit purus cras praesent.</p>
            </div>
          </div>
          
          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
             <Image src="/assets/img/brands/trello.svg" className="d-block mb-4" width={56} height={56} alt="Trello"/>
              <p className="mb-0">Congue pellentesque amet, viverra curabitur quam diam scelerisque fermentum urna.</p>
            </div>
          </div>
          
          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
             <Image src="/assets/img/brands/mailchimp.svg" className="d-block mb-4" width={56} height={56} alt="Mailchimp"/>
              <p className="mb-0">A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris integer.</p>
            </div>
          </div>
          
          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
             <Image src="/assets/img/brands/dropbox.svg" className="d-block mb-4" width={56} height={56} alt="Dropbox"/>
              <p className="mb-0">Ut in turpis consequat odio diam lectus elementum. Est faucibus blandit platea.</p>
            </div>
          </div>
          
          {/* <!-- Item --> */}
          <div className="col">
            <div className="card card-body card-hover bg-light border-0">
             <Image src="/assets/img/brands/evernote.svg" className="d-block mb-4" width={56} height={56} alt="Evernote"/>
              <p className="mb-0">Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default IntegrationsComp