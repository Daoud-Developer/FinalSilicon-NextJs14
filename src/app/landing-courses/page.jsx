"use client";
//Layout component
import Layout from '../Layout/Layout';
//Components
import HeroComp from '../../components/LandingCoursesComps/HeroComp/HeroComp'
import PopularCoursesComp from '../../components/LandingCoursesComps/PopularCoursesComp/PopularCourses'
import HowItWorksComp from '../../components/LandingCoursesComps/HowItWorksComp/HowItWorks'
import WhatYouGetComp from '../../components/LandingCoursesComps/WhatYouGetComp/WhatYouGet'
import TestimonialsComp from '../../components/LandingCoursesComps/TestimonialsComp/Testimonials'
import BrandsCarouselComp from '../../components/LandingCoursesComps/Brands(Carousel)Comp/BrandsCarouselComp'
import FAQAccordionComp from '../../components/LandingCoursesComps/FAQ(Accordion)Comp/FAQAccordionComp'
import SignUpFormComp from '../../components/LandingCoursesComps/SignUpFormComp/SignUpForm'

function LandingCoursesPage() {
  return (
      <Layout showNavbar={true} showFooter={true}>
       {/* <!-- <!-- ContentComp -->--> */}
       <div className="position-relative py-5">
       <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10"></div>
      <HeroComp />
      </div>
      {/* <!-- Popular courses --> */}
          <PopularCoursesComp />
      {/* <!-- How it works (Steps) --> */}
            <HowItWorksComp />
      {/* <!-- What you get (Icon boxes) --> */}
            <WhatYouGetComp />
      {/* <!-- Testimonials --> */}
            <TestimonialsComp />
      {/* <!-- Brands (Carousel) --> */}
            <BrandsCarouselComp/>
      {/* <!-- FAQ (Accordion) --> */}
            <FAQAccordionComp />
      {/* <!-- Sign up form --> */}
            <SignUpFormComp />
   
      </Layout>
    
  )
}

export default LandingCoursesPage