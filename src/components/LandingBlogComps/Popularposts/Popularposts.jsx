"use client";
// import styles from './Popularposts.module.css'
import CarouselPopula from './carousel-Popularposts/CarouselPopula'

function Popularposts() {
  return (
    <div>
      {/* <!-- Popular posts (Carousel) --> */}
      <section className="bg-secondary py-5 mb-lg-5">
        <div className="container pt-2 pt-lg-4 pt-xl-5">
          <h2 className="h1 mb-4 pb-lg-3 pt-lg-1 pb-1 text-center">Popular Posts</h2>
        </div>
        <div className="pb-lg-5 mb-xl-3">
        <CarouselPopula />
        </div>  
      </section>
    </div>
  )
}

export default Popularposts