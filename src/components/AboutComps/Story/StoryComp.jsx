"use client";
import React from 'react'

function StoryComp() {
  return (
     <section className="container mb-5 pt-md-1 pt-lg-4 pt-xl-5">
     <div className="mt-4 py-2 pb-sm-3 pb-md-4 pb-lg-5 mx-auto text-center" style={{maxWidth: "46.625rem"}}>
       <h2 className="h1 mb-4">In 2017 we changed the game</h2>
       <p className="mb-4">Ac vel feugiat elementum turpis. Euismod eget aliquam non, aliquam dui augue amet lectus donec adipiscing quis molestie eget urna.</p>
     </div>

     {/* <!-- Steps --> */}
     <div className="steps steps-center steps-sm steps-horizontal-lg" 
    style={{
    '--siStepsNumberSizeSm': '1.5rem',
    '--siStepsNumberInnerSizeSm': '1rem',
    '--siStepsNumberBg': 'rgba(99,102,241,.2)',
    '--siStepsNumberInnerBg': '#6366f1'}}>

       {/* <!-- Step --> */}
       <div className="step w-100 mx-auto" style={{maxWidth: "26rem"}}>
         <div className="step-number"><div className="step-number-inner"></div></div>
         <div className="step-body">
           <h3 className="mb-3">2018</h3>
           <p className="mb-0">Nibh in natoque ut blandit est sed massa quam massa. Nisi eu aenean tristique sed tortor tincidunt.</p>
         </div>
       </div>

       {/* <!-- Step --> */}
       <div className="step w-100 mx-auto" style={{maxWidth: "26rem"}}>
         <div className="step-number"><div className="step-number-inner"></div></div>
         <div className="step-body">
           <h3 className="mb-3">2019</h3>
           <p className="mb-0">Orci, lorem rutrum euismod est urna commodo. Dictum fringilla ac sit egestas pharetra tellus in tristique.</p>
         </div>
       </div>

       {/* <!-- Step --> */}
       <div className="step w-100 mx-auto" style={{maxWidth: "26rem"}}>
         <div className="step-number"><div className="step-number-inner"></div></div>
         <div className="step-body">
           <h3 className="mb-3">2021</h3>
           <p className="mb-0">Quisque felis in augue dolor. Risus, id pretium vitae a adipiscing adipiscing posuere maecenas.</p>
         </div>
       </div>

       {/* <!-- Step --> */}
       <div className="step w-100 mx-auto" style={{maxWidth: "26rem"}}>
         <div className="step-number"><div className="step-number-inner"></div></div>
         <div className="step-body">
           <h3 className="mb-3">2023</h3>
           <p className="mb-0">Nunc, sit tempus, varius est duis. Elementum commodo tincidunt mi quis arcu lorem consequat.</p>
         </div>
       </div>
     </div>
   </section>
  )
}

export default StoryComp