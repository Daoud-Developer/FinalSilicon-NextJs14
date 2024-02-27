"use client";
import Link from 'next/link'
import Image from 'next/image'
function TeamComp() {
  return (
   <section className="container mb-5 py-lg-3 py-xl-4 py-xxl-5">
     <div className="d-md-flex align-items-center justify-content-between text-md-start text-center pt-1 pt-sm-3 pt-md-4 mb-5">
       <h2 className="h1 mb-md-0">Our talented team</h2>
       <Link href="#" className="btn btn-primary">
         Join our team
         <i className="bx bx-right-arrow-alt lead ms-1"></i>
      </Link>
     </div>

     {/* <!-- Team grid --> */}
     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 pb-lg-2 pb-xl-3">

       {/* <!-- Item --> */}
       <div className="col">
         <div className="card card-hover border-0 bg-transparent">
           <div className="position-relative">
             <Image src="/assets/img/team/24.jpg"  width={500} height={500} className="rounded-3" alt="Ralph Edwards"/>
             <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
               <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
               <div className="position-relative d-flex zindex-2">
                 <Link href="#" className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2" aria-label="Facebook">
                   <i className="bx bxl-facebook"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2" aria-label="LinkedIn">
                   <i className="bx bxl-linkedin"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white" aria-label="Twitter">
                   <i className="bx bxl-twitter"></i>
                </Link>
               </div>
             </div>
           </div>
           <div className="card-body text-center p-3">
             <h3 className="fs-lg fw-semibold pt-1 mb-2">Ralph Edwards</h3>
             <p className="fs-sm mb-0">Founder &amp; CEO</p>
           </div>
         </div>
       </div>

       {/* <!-- Item --> */}
       <div className="col">
         <div className="card card-hover border-0 bg-transparent">
           <div className="position-relative">
             <Image src="/assets/img/team/25.jpg" width={500} height={500} className="rounded-3" alt="Albert Flores"/>
             <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
               <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
               <div className="position-relative d-flex zindex-2">
                 <Link href="#" className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2" aria-label="Facebook">
                   <i className="bx bxl-facebook"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2" aria-label="LinkedIn">
                   <i className="bx bxl-linkedin"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white" aria-label="Twitter">
                   <i className="bx bxl-twitter"></i>
                </Link>
               </div>
             </div>
           </div>
           <div className="card-body text-center p-3">
             <h3 className="fs-lg fw-semibold pt-1 mb-2">Albert Flores</h3>
             <p className="fs-sm mb-0">Principal Consultant</p>
           </div>
         </div>
       </div>

       {/* <!-- Item --> */}
       <div className="col">
         <div className="card card-hover border-0 bg-transparent">
           <div className="position-relative">
             <Image src="/assets/img/team/26.jpg" width={500} height={500} className="rounded-3" alt="Jenny Wilson"/>
             <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
               <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
               <div className="position-relative d-flex zindex-2">
                 <Link href="#" className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2" aria-label="Facebook">
                   <i className="bx bxl-facebook"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2" aria-label="LinkedIn">
                   <i className="bx bxl-linkedin"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white" aria-label="Twitter">
                   <i className="bx bxl-twitter"></i>
                </Link>
               </div>
             </div>
           </div>
           <div className="card-body text-center p-3">
             <h3 className="fs-lg fw-semibold pt-1 mb-2">Jenny Wilson</h3>
             <p className="fs-sm mb-0">UX Designer</p>
           </div>
         </div>
       </div>

       {/* <!-- Item --> */}
       <div className="col">
         <div className="card card-hover border-0 bg-transparent">
           <div className="position-relative">
             <Image src="/assets/img/team/27.jpg" width={500} height={500} className="rounded-3" alt="Marvin McKinney"/>
             <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
               <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
               <div className="position-relative d-flex zindex-2">
                 <Link href="#" className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2" aria-label="Facebook">
                   <i className="bx bxl-facebook"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2" aria-label="LinkedIn">
                   <i className="bx bxl-linkedin"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white" aria-label="Twitter">
                   <i className="bx bxl-twitter"></i>
                </Link>
               </div>
             </div>
           </div>
           <div className="card-body text-center p-3">
             <h3 className="fs-lg fw-semibold pt-1 mb-2">Marvin McKinney</h3>
             <p className="fs-sm mb-0">Product Manager</p>
           </div>
         </div>
       </div>

       {/* <!-- Item --> */}
       <div className="col">
         <div className="card card-hover border-0 bg-transparent">
           <div className="position-relative">
             <Image src="/assets/img/team/28.jpg" width={500} height={500} className="rounded-3" alt="Esther Howard"/>
             <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
               <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
               <div className="position-relative d-flex zindex-2">
                 <Link href="#" className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2" aria-label="Facebook">
                   <i className="bx bxl-facebook"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2" aria-label="LinkedIn">
                   <i className="bx bxl-linkedin"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white" aria-label="Twitter">
                   <i className="bx bxl-twitter"></i>
                </Link>
               </div>
             </div>
           </div>
           <div className="card-body text-center p-3">
             <h3 className="fs-lg fw-semibold pt-1 mb-2">Esther Howard</h3>
             <p className="fs-sm mb-0">VP of Strategy</p>
           </div>
         </div>
       </div>

       {/* <!-- Item --> */}
       <div className="col">
         <div className="card card-hover border-0 bg-transparent">
           <div className="position-relative">
             <Image src="/assets/img/team/29.jpg" width={500} height={500} className="rounded-3" alt="Cameron Williamson"/>
             <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
               <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
               <div className="position-relative d-flex zindex-2">
                 <Link href="#" className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2" aria-label="Facebook">
                   <i className="bx bxl-facebook"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2" aria-label="LinkedIn">
                   <i className="bx bxl-linkedin"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white" aria-label="Twitter">
                   <i className="bx bxl-twitter"></i>
                </Link>
               </div>
             </div>
           </div>
           <div className="card-body text-center p-3">
             <h3 className="fs-lg fw-semibold pt-1 mb-2">Cameron Williamson</h3>
             <p className="fs-sm mb-0">Co-Founder</p>
           </div>
         </div>
       </div>

       {/* <!-- Item --> */}
       <div className="col">
         <div className="card card-hover border-0 bg-transparent">
           <div className="position-relative">
             <Image src="/assets/img/team/30.jpg" width={500} height={500} className="rounded-3" alt="Jerome Bell"/>
             <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
               <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
               <div className="position-relative d-flex zindex-2">
                 <Link href="#" className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2" aria-label="Facebook">
                   <i className="bx bxl-facebook"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2" aria-label="LinkedIn">
                   <i className="bx bxl-linkedin"></i>
                </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white" aria-label="Twitter">
                   <i className="bx bxl-twitter"></i>
                </Link>
               </div>
             </div>
           </div>
           <div className="card-body text-center p-3">
             <h3 className="fs-lg fw-semibold pt-1 mb-2">Jerome Bell</h3>
             <p className="fs-sm mb-0">Strategic Advisor</p>
           </div>
         </div>
       </div>

       {/* <!-- Item --> */}
       <div className="col">
         <div className="card card-hover border-0 bg-transparent">
           <div className="position-relative">
             <Image src="/assets/img/team/31.jpg" width={500} height={500} className="rounded-3" alt="Darrell Steward"/>
             <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
               <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
               <div className="position-relative d-flex zindex-2">
                 <Link href="#" className="btn btn-icon btn-secondary btn-facebook btn-sm bg-white me-2" aria-label="Facebook">
                   <i className="bx bxl-facebook"></i>
                 </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-linkedin btn-sm bg-white me-2" aria-label="LinkedIn">
                   <i className="bx bxl-linkedin"></i>
                 </Link>
                 <Link href="#" className="btn btn-icon btn-secondary btn-twitter btn-sm bg-white" aria-label="Twitter">
                   <i className="bx bxl-twitter"></i>
                </Link>
               </div>
             </div>
           </div>
           <div className="card-body text-center p-3">
             <h3 className="fs-lg fw-semibold pt-1 mb-2">Darrell Steward</h3>
             <p className="fs-sm mb-0">Senior Project Manager</p>
           </div>
         </div>
       </div>
     </div>
   </section>

  )
}

export default TeamComp