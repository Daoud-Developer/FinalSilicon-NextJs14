"use client";
import Link from 'next/link'
import Image from 'next/image'
function HeroComp() {



  return (
      <section className="position-relative pt-5 mb-5" style={{backgroundColor: "#151922"}}>
     <span className="d-dark-mode-none d-block position-absolute start-0 bottom-0 w-100 bg-white" 
     style={{height:" 19.875vw"}}>

     </span>
     <span className="d-dark-mode-block d-none position-absolute start-0 bottom-0 w-100 bg-light" 
     style={{height:" 19.875vw"}}>

     </span>
     <div className="container position-relative zindex-2 pt-5" data-bs-theme="dark">

       {/* <!-- Breadcrumb --> */}
       <nav className="pt-lg-4" aria-label="breadcrumb">
         <ol className="breadcrumb mb-0">
           <li className="breadcrumb-item">
             <Link href="/"><i className="bx bx-home-alt fs-lg me-1"></i>Home</Link>
           </li>
           <li className="breadcrumb-item active" aria-current="page">About v.3</li>
         </ol>
       </nav>

       {/* <!-- Page title --> */}
       <div className="mt-4 mb-lg-5 mb-4 py-3">
         <h1 className="display-4 mb-0">We are Silicon Team</h1>
       </div>

       {/* <!-- Gallery --> */}
       <div className="row g-md-4 g-3">
         <div className="col-md-6">
           <Image src="/assets/img/about/hero/05.jpg" alt="Hero image" width={600} height={400} className="rounded-3"/>
         </div>
         <div className="col-md-3 col-6 d-md-block d-none mt-5 pt-3 pt-xl-4">
           <Image src="/assets/img/about/hero/06.jpg" alt="Hero image" width={300} height={200} className="rounded-3"/>
         </div>
         <div className="col-md-3 col-6 d-md-block d-none">
           <Image src="/assets/img/about/hero/07.jpg" alt="Hero image" width={300} height={200} className="rounded-3"/>
         </div>
       </div>
     </div>
   </section>

  )
}

export default HeroComp