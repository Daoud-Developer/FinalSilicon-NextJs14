"use client";
import Link from 'next/link'
import Image from 'next/image'

function LocationsComp() {
  return (
    <section className="container mb-5 pt-md-3 pt-lg-4 pt-xl-5">
     <div className="pt-2 pt-sm-4 pb-md-3 mb-4 mt-lg-1 mt-xl-3 mx-auto text-center" style={{maxWidth: "47rem"}}>
       <h2 className="h1 mb-4">Our offices around the world</h2>
       <p className="mb-3">Congue gravida vel imperdiet rutrum lectus felis purus blandit ullamcorper. In eleifend in ultrices ultrices aliquam augue praesent.</p>
       <Link href="/contact-us" className="btn btn-lg btn-primary">Contact us</Link>
     </div>

     {/* <!-- Map --> */}
     <div className="mb-4 pb-2">
       <Image src="/assets/img/about/map-light.png" alt="Map" width={1200} height={800} className="d-dark-mode-none d-block"/>
       <Image src="/assets/img/about/map-dark.png" alt="Map" width={1200} height={800} className="d-dark-mode-block d-none"/>
     </div>
   </section>
  )
}

export default LocationsComp