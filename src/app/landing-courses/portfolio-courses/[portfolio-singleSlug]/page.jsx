"use client";
// Layout component
import Layout from '../../../Layout/Layout';
// Components
import HeroPortfolioComp from "../../../../components/Portfolio-SingleComp/HeroPortfolio-Single/HeroProS"
import CourseDescriptionComp from "../../../../components/Portfolio-SingleComp/CourseDescription/CourseDescriptionComp"
import CourseAuthorComp from "../../../../components/Portfolio-SingleComp/CourseAuthor/CourseAuthorComp"
import TestimonialsComp from "../../../../components/Portfolio-SingleComp/Testimonials/TestimonialsComp"
import FaqComp from "../../../../components/Portfolio-SingleComp/FaqComp/FaqCompt"
import RelatedCoursesComp from "../../../../components/Portfolio-SingleComp/RelatedCourses/RelatedCoursesCompt"

function PortfolioSingle() {
  return (
      <Layout showNavbar={true} showFooter={true}>
    {/* <!-- HeroComp --> */}
        <HeroPortfolioComp />
     {/* <!-- Course description Comp  --> */}
        <CourseDescriptionComp />
     {/* <!-- Course author Comp  --> */}
        <CourseAuthorComp />
     {/* <!-- Testimonials --> */}
        <TestimonialsComp /> 
     {/* <!-- FAQ --> */}
        <FaqComp />
     {/* <!-- Related courses (Carousel on narrow screens) --> */}
        <RelatedCoursesComp />   
      </Layout>
  )
}

export default PortfolioSingle