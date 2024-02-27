"use client";
import React from 'react'
import Image from 'next/image'
import { ImgComparisonSlider } from '@img-comparison-slider/react'

function ComparisonSlider() {


  return (
      <section className="d-flex w-100 position-relative overflow-hidden">
        <div className="position-relative flex-xl-shrink-0 zindex-5 start-50 translate-middle-x" style={{maxWidth: "1920px"}}>
          <div className="mx-md-n5 mx-xl-0">
            <div className="mx-n4 mx-sm-n5 mx-xl-0">
              <div className="mx-n5 mx-xl-0">
                <ImgComparisonSlider className="mx-n5 mx-xl-0">
                   <Image slot="first" src="/assets/img/landing/saas-2/dark-mode.jpg" width={1920} height={1080} alt="Dark Mode"/>
                   <Image slot="second" src="/assets/img/landing/saas-2/light-mode.jpg" width={1920} height={1080} alt="Light Mode"/>
                  <div slot="handle" style={{width: "36px"}}>
                    <svg className="text-primary shadow-primary rounded-circle" width="36" height="36" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 36 36"><g><circle fill="currentColor" cx="18" cy="18" r="18"/></g><path fill="#fff" d="M22.2,17.2h-8.3v-3.3L9.7,18l4.2,4.2v-3.3h8.3v3.3l4.2-4.2l-4.2-4.2V17.2z"/></svg>
                  </div>
                </ImgComparisonSlider>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute top-0 start-0 w-50 h-100 bg-dark"></div>
        <div className="position-absolute top-0 end-0 w-50 h-100" style={{backgroundColor: "#f3f6ff"}}></div>
      </section>
  )
}

export default ComparisonSlider