"use client";
import Image from 'next/image';
import Link from 'next/link';

function TicketsComp() {
  return (
      <div className="container pb-5 mb-2 mb-md-4 mb-lg-5 mt-n3 mt-lg-0">
 <div className="row pt-xl-2 pb-md-3">
   <div className="col-lg-5 mb-4 mb-lg-0">
     <h2 className="h1 text-center text-sm-start mb-4">The Biggest Digital Event in 2023</h2>
     <p className="pb-2 pb-lg-4 pb-xl-5 mb-3">Et, morbi at sagittis vehicula rutrum. Lacus tortor, quam arcu mi et, at lectus leo nunc. Mattis cras auctor vel pharetra tempor. Rhoncus pellentesque habitant ac tempor. At aliquam euismod est in praesent ornare etiam id. Faucibus libero sit vehicula sed condimentum. Vitae in nam porttitor rutrum sed aliquam donec sed. Sapien facilisi lectus.</p>
     <h3 className="text-center text-sm-start mb-4">Ticket Prices</h3>

     {/* <!-- Pricing --> */}
     <ul className="list-group">
       <li className="list-group-item d-flex flex-column flex-sm-row align-items-center justify-content-between p-4">
         <div className="d-flex align-items-center">
           <svg className="flex-shrink-0 me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M23.794 1.71278C23.5195 1.43819 23.0743 1.43819 22.7997 1.71278L21.4284 3.08406C20.6078 2.1197 19.3859 1.50686 18.0235 1.50686C16.8653 1.50686 15.7764 1.95789 14.9577 2.77675L0.205961 17.5284C0.00486702 17.7295 -0.0552736 18.0319 0.0535233 18.2947C0.162367 18.5574 0.418726 18.7287 0.703117 18.7287H9.44934L11.8087 21.0881H11.2469C10.8585 21.0881 10.5437 21.4029 10.5437 21.7912C10.5437 22.1795 10.8585 22.4943 11.2469 22.4943H15.7656C16.1539 22.4943 16.4687 22.1795 16.4687 21.7912C16.4687 21.4029 16.1539 21.0881 15.7656 21.0881H13.7975L11.4381 18.7287H14.2594C18.7998 18.7287 22.4937 15.0348 22.4937 10.4943V5.97709C22.4937 5.39355 22.3812 4.83578 22.1769 4.32428L23.794 2.70714C24.0687 2.43255 24.0687 1.98737 23.794 1.71278ZM2.4006 17.3224L13.5562 6.1668V8.98806C13.5562 13.5836 9.81745 17.3224 5.22187 17.3224H2.4006ZM21.0875 10.4943C21.0875 14.2594 18.0244 17.3225 14.2594 17.3225H10.2592C13.0761 15.6134 14.9625 12.5168 14.9625 8.98811V6.15995C14.9625 5.25752 15.3139 4.40913 15.952 3.77116C16.5052 3.21784 17.2409 2.91316 18.0235 2.91316C19.713 2.91316 21.0875 4.28767 21.0875 5.97719L21.0875 10.4943Z" fill="currentColor"/><path d="M18.7781 5.97526C19.1664 5.97526 19.4812 5.66046 19.4812 5.27213C19.4812 4.88381 19.1664 4.56901 18.7781 4.56901C18.3898 4.56901 18.075 4.88381 18.075 5.27213C18.075 5.66046 18.3898 5.97526 18.7781 5.97526Z" fill="currentColor"/>
           </svg>
           <h4 className="fs-base fw-semibold text-nowrap ps-1 mb-0">Early birds</h4>
         </div>
         <h5 className="text-primary my-2 my-sm-0">$100</h5>
         <div className="fs-sm">until Sep 1, 2023</div>
       </li>
       <li className="list-group-item d-flex flex-column flex-sm-row align-items-center justify-content-between p-4">
         <div className="d-flex align-items-center">
           <svg className="flex-shrink-0 me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M18.0225 2.91133C17.2397 2.91133 16.5038 3.21602 15.9507 3.76914C15.3132 4.40664 14.9616 5.25508 14.9616 6.15977V8.98633C14.9616 12.516 13.0772 15.6098 10.26 17.3207H14.2585C18.0225 17.3207 21.0882 14.2598 21.0882 10.491V5.97227C21.0882 4.28945 19.71 2.91133 18.0225 2.91133ZM18.7772 5.97695C18.3882 5.97695 18.0741 5.66289 18.0741 5.27383C18.0741 4.88477 18.3882 4.5707 18.7772 4.5707C19.1663 4.5707 19.4804 4.88477 19.4804 5.27383C19.4804 5.66289 19.1663 5.97695 18.7772 5.97695ZM23.7929 1.71133C23.5163 1.43477 23.071 1.43477 22.7991 1.71133L21.4257 3.08477C20.6054 2.11914 19.3819 1.50977 18.0225 1.50977C16.8647 1.50977 15.7772 1.95977 14.9569 2.78008L0.20535 17.527C0.00378752 17.7285 -0.05715 18.0285 0.0506625 18.291C0.158475 18.5535 0.416288 18.727 0.702225 18.727H5.22097H9.4491L11.8069 21.0848H11.2444C10.8553 21.0848 10.5413 21.3988 10.5413 21.7879C10.5413 22.177 10.8553 22.491 11.2444 22.491H15.7632C16.1522 22.491 16.4663 22.177 16.4663 21.7879C16.4663 21.3988 16.1522 21.0848 15.7632 21.0848H13.7944L11.4366 18.727H14.2585C18.8007 18.727 22.4944 15.0332 22.4944 10.491V5.97227C22.4944 5.39102 22.3819 4.8332 22.1757 4.31758L23.7929 2.70039C24.0694 2.4332 24.0694 1.98789 23.7929 1.71133ZM2.3991 17.3207L13.5554 6.16445V8.98633C13.5554 13.5801 9.81472 17.3207 5.22097 17.3207H2.3991ZM21.0882 10.4957C21.0882 14.2598 18.0272 17.3254 14.2585 17.3254H10.26C13.0772 15.6145 14.9616 12.516 14.9616 8.98633V6.15977C14.9616 5.25508 15.3132 4.40664 15.9507 3.76914C16.5038 3.21602 17.2397 2.91133 18.0225 2.91133C19.71 2.91133 21.0882 4.28477 21.0882 5.97695V10.4957Z" fill="currentColor"/>
           </svg>
           <h4 className="fs-base fw-semibold text-nowrap ps-1 mb-0">Late birds</h4>
         </div>
         <h5 className="badge bg-primary fs-5 fw-bold rounded px-3 py-0 my-3 my-sm-0">$150</h5>
         <div className="fs-sm">after Sep 1, 2023</div>
       </li>
     </ul>
   </div>
   <div className="col-xl-6 col-lg-7 offset-xl-1 position-relative">

     {/* <!-- Ticket card --> */}
     <div className="position-relative">
       <div className="position-relative overflow-hidden bg-gradient-primary rounded-3 zindex-5 py-5 px-4 p-sm-5">
         <span className="position-absolute top-50 start-0 translate-middle bg-light rounded-circle p-4"></span>
         <span className="position-absolute top-0 start-0 w-100 h-100 bg-repeat-0 bg-position-center-end bg-size-cover" style={{backgroundImage:"url(assets/img/landing/conference/price-card-pattern.png)"}}></span>
         <div className="px-md-4 position-relative zindex-5">
           <div className="d-sm-flex align-items-start justify-content-between">
             <div className="text-center text-sm-start me-sm-4">
               <div className="lead fw-semibold text-light text-uppercase mb-2">Oct 14+15</div>
               <h3 className="h1 text-light">NY Digital Conference</h3>
             </div>
             <div className="d-table bg-white rounded-3 p-4 flex-shrink-0 mx-auto mx-sm-0">
               <Image src="/assets/img/landing/conference/qr.png" width={100} height={100} className="d-block mx-auto" alt="QR code"/>
             </div>
           </div>
           <div className="d-flex flex-column flex-sm-row align-items-center pt-4 mt-2">
               <Link href="#" className="btn btn-light btn-lg mb-3 mb-sm-0 me-sm-3">Buy access pass</Link>
             <div className="d-flex align-items-center">
               <span className="fs-lg text-light me-2">for only</span>
               <span className="h4 text-light mb-0">$100</span>
             </div>
           </div>
         </div>
         <span className="position-absolute top-50 end-0 translate-middle-y bg-light rounded-circle p-4 me-n4"></span>
       </div>
       <span className="position-absolute bg-gradient-primary opacity-60 bottom-0 mb-n2 d-dark-mode-none"
        style={{Left: "1.5rem", Width: "calc(100% - 3rem)", Height: "5rem", Filter: "blur(.625rem)"}}></span>
     </div>

     {/* <!-- Arrow --> */}
     <div className="position-absolute bottom-0 text-primary d-none d-lg-block ms-xl-n5 mb-lg-5 mb-xl-4 pb-3">
       <div className="ms-xl-n4">
         <svg width="95" height="100" viewBox="0 0 95 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M78.8361 25.0939C91.1514 40.6379 81.8802 63.3086 61.7212 64.3539C60.7119 64.447 59.5832 64.3477 58.6105 64.2848C58.7669 50.9978 52.4534 36.5276 41.6324 32.847C31.8669 29.5776 26.5235 39.0204 30.5663 47.0383C35.4083 56.5589 43.9198 64.4699 54.2628 67.3808C53.4517 75.7446 49.4008 83.1867 40.4191 85.693C25.2817 89.8859 9.48935 75.832 7.25928 61.4938C7.12064 59.981 4.79 60.0942 4.92864 61.607C5.83171 80.8987 28.9103 96.1621 46.7792 87.3441C53.6867 83.8595 57.3887 76.5003 58.3558 68.173C69.2212 69.5612 79.5859 63.2659 85.1681 54.2081C91.5844 43.7002 88.5763 31.9764 81.257 23.1926C80.1091 21.7727 77.8441 23.7109 78.8361 25.0939ZM39.1221 52.6568C36.2753 49.3596 33.1435 45.1733 32.7276 40.635C32.275 36.2527 38.2211 36.1619 40.7539 36.5897C43.9108 37.163 46.2067 40.0025 47.9151 42.5401C51.7632 47.8805 54.3289 55.8821 54.5172 63.4926C48.5423 61.6026 43.3094 57.2542 39.1221 52.6568Z" fill="currentColor"/><path d="M75.1096 15.0312C74.0848 19.3973 73.3354 23.9923 73.4392 28.4577C73.5047 30.2821 76.0279 30.0497 76.1186 28.2613C76.2997 24.6849 77.2976 21.1349 78.2588 17.7408C80.2501 18.3708 82.3978 19.0372 84.3528 19.8231C85.8397 20.4997 87.9238 22.1382 89.7035 21.5672C90.5937 21.2818 90.7767 20.5022 90.6474 19.6495C90.3065 17.596 87.0302 16.8302 85.3872 16.1172C82.6885 14.993 80.073 14.2174 77.2645 13.561C76.3289 13.3423 75.3292 14.0956 75.1096 15.0312Z" fill="currentColor"/></svg>
       </div>
     </div>
   </div>
 </div>
</div>
  )
}

export default TicketsComp