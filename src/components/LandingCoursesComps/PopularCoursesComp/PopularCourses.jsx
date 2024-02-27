"use client";
import React from 'react'
import NavTabs from './NavTabsComp/NavTabs'
import CoursesSlider from './CoursesSliderComp/CoursesSlider'

function PopularCourses() {
  return (
      <section className="container mt-2 mt-sm-3 py-md-3 py-lg-5">
        <div className="row py-5">
        {/* <!-- NavTabs Comp --> */}
              <NavTabs />

       {/* <!-- Courses slider --> */}
            <CoursesSlider />
          
         
         
        </div>
      </section>

  )
}

export default PopularCourses