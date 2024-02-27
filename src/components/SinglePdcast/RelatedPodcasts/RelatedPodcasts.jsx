"use client";
import CarouselComp  from  "../CarouselComp/CarouselComp"
import Link from 'next/link'

function RelatedPodcasts() {
  return (
      <section className="container mb-5 pt-md-4">
      <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between mb-4 pb-1 pb-md-3">
        <h2 className="h1 mb-sm-0">Related Podcasts</h2>
       <Link href="/blog" className="btn btn-lg btn-outline-primary ms-4">
          All podcasts
          <i className="bx bx-right-arrow-alt ms-1 me-n1 lh-1 lead"></i>
        </Link>
      </div>
          {/* <!-- Carousel podcasts --> */}
          <CarouselComp />
      </section>
  )
}

export default RelatedPodcasts