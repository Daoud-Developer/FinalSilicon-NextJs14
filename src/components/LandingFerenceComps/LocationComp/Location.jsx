"use client";
import Image from "next/image";

function Location() {
  return (
      <div className="container py-5">
      <div className="row mt-lg-3 pt-1 pt-md-4 pt-lg-5">
        <div className="col-xl-3 col-md-4 text-center text-md-start">
          <h3 className="h4">Venue</h3>
          <h2 className="h1 mb-4">International Convention Centre</h2>
          <div className="d-none d-md-block text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="118" height="118" fill="none"><g clipPath="url(#A)"><path d="M116.912 76.527c-4.963-3.081-9.413-6.675-13.52-10.782-1.37-1.369-3.766-.343-3.766 1.54 0 1.54-.171 3.081-.171 4.621-14.89 2.739-29.78 3.936-45.013 4.108-12.836.342-30.123 1.712-41.761-4.45-8.9-4.792-10.269-15.917-6.504-24.475 1.54-3.594 4.279-6.504 7.702-8.557 3.936-2.396 7.873-1.027 11.981-2.054.513-.171.685-.856.342-1.369-6.333-6.675-17.457 1.027-21.565 6.504-5.819 7.702-6.161 18.998-1.027 27.042 7.531 11.981 25.501 11.125 37.653 11.467 19.169.685 39.365.171 58.192-4.108 0 1.712.171 3.252.685 4.963 0 .342.171.513.342.685-1.369 1.198-.171 4.279 2.225 3.765 4.963-1.027 9.927-2.568 14.548-4.792 1.198-1.026.856-3.251-.343-4.107zm-13.178-4.45c2.396 2.054 4.792 4.108 7.531 5.99-2.396 1.027-4.964 1.712-7.531 2.396v-.685c-.514-2.567-.342-5.135 0-7.702z" fill="currentColor"/></g><defs><clipPath id="A"><path fill="#fff" d="M0 0h118v118H0z"/></clipPath></defs></svg>
          </div>
        </div>
        <div className="col-xl-9 col-md-8">
          <Image src="/assets/img/landing/conference/venue.jpg" width={952} height={634} className="rounded-2" alt="Venue"/>
        </div>
      </div>
      <div className="row mb-lg-3 pb-1 pb-md-4 pb-lg-5 mt-4 mt-sm-n5">
        <div className="col-lg-4 col-md-5 offset-md-6 offset-lg-7 mt-md-n5">
          <div className="gallery mt-md-n4 mx-auto" style={{ maxWidth: "416px" }}>
      <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.192027341148!2d-74.0045150840621!3d40.75780104274828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f66383c1d305%3A0xb1589156bdadde83!2sJavits%20Center!5e0!3m2!1sen!2sua!4v1638895524631!5m2!1sen!2sua" 
        data-iframe="true" className="gallery-item rounded-2">
        <div>
          <Image src="/assets/img/landing/conference/map-light.jpg" width={416} height={277} className="rounded-2" alt="Map preview"/>
        </div>
        <div>
          <Image src="/assets/img/landing/conference/map-dark.jpg" width={416} height={277} className="rounded-2" alt="Map preview"/>
        </div>
        <div className="gallery-item-caption fs-sm fw-medium">Javits Center, NY, USA</div>
      </a>
    </div>
        </div>
      </div>
     </div>
     
  )
}

export default Location