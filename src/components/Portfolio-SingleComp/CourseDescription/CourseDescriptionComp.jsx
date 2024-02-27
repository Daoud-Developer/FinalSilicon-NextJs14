"use client";
import SidebarCourse from "./Sidebar(Course summary)/SidebarCourse"
import ContentDesc from "./ContentDesc/ContentDesc"

function CourseDescriptionComp() {
  return (
      <section  className="container pt-5 mt-2 mt-lg-4 mt-xl-5">
      <div  className="row">
        {/* <!-- Sidebar (Course summary) --> */}
            <SidebarCourse />
        {/* <!-- Content --> */}
            <ContentDesc />   
      </div>
    </section>
  )
}

export default CourseDescriptionComp