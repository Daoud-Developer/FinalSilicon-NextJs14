"use client";
import Link from "next/link";
import UsecaseComp1 from "./UsecaseComp1";
import UsecaseComp2 from "./UsecaseComp2";
import UsecaseComp3 from "./UsecaseComp3";
import MoreButton from "./MoreButton";


function UseCasesComp() {
 


  return (
    <section className="position-relative overflow-hidden py-5">
      {/* Background layers */}
      <span className="position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none" 
      style={{ background: "linear-gradient(141deg, rgba(255, 255, 255, .01) 17.3%, #F3F6FF 78.21%)" }}>
      </span>
      <div className="position-absolute top-0 start-0 w-100 h-100 d-none d-dark-mode-block" 
      style={{ background: "linear-gradient(141deg, rgba(11, 15, 25, .01) 17.3%, rgba(255, 255, 255, .04) 78.21%)" }}>
      </div>

          {/* Introductory Content */}
      <div className="container position-relative zindex-2 pt-2 pt-sm-3 pt-md-4 pt-lg-5 mt-xl-3">
        <h2 className="h1 text-center pb-1 mb-2">What you can build with Silicon</h2>
        <p className="fs-lg text-center pb-lg-2">Well, lots of things. Some of them are listed below</p>
        
          {/* <!-- Use Case Compoments --> */}
         <div className="row align-items-center justify-content-center py-4 py-md-5 my-1 my-sm-3 my-md-0 my-xl-3">
            <div className="col-11 col-sm-9 col-md-7 col-lg-6 offset-lg-1 order-md-2 pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
             <UsecaseComp1 />          
            </div> 
                      {/* Your content */}
              <div className="col-md-5 col-xl-4 offset-xl-1 order-md-1 text-center text-md-start">
              <h3 className="h2 mb-lg-4">Data analysis tools</h3>
              <p className="fs-lg pb-lg-2 mb-4">From complex analysis to stunning visualizations, our advanced AI technology can help you extract valuable insights and make data-driven decisions faster than ever before.</p>
               <Link href="#" className="btn btn-outline-primary rounded-pill">
                Learn more
                <i className="bx bx-right-arrow-alt fs-lg ms-2 me-n1"></i>
              </Link>
              </div> 
              </div>  
          {/* <!-- Use case(2) --> */}
          
          <UsecaseComp2 />  
         
          {/* <!-- Use case(3) --> */}
          <UsecaseComp3 />
          {/* <!-- More button --> */}
           <MoreButton />      
        </div>


    </section>
  );
}

export default UseCasesComp;
