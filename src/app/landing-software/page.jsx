"use client";
//Layout component
import Layout from '../Layout/Layout';
//Components
import HeroAnimation from './../../components/LandingSoftwareComps/HeroAnim/HeroAnimComp'
import AbuotComp from '@/src/components/LandingSoftwareComps/About/AboutComp'
import Solutions from '@/src/components/LandingSoftwareComps/SolutionsComp/Solutions'
import IndustriesSlider from '@/src/components/LandingSoftwareComps/Industries(Slider)/IndustriesSlider'
import TechnologiesSlider from '@/src/components/LandingSoftwareComps/Technologies(Slider)/TechnologiesSlider'
import Projects from '@/src/components/LandingSoftwareComps/ProjectsComp/Projects'
import BenefitsSlider from '@/src/components/LandingSoftwareComps/Benefits(Slider)/BenefitsSlider'
import BrandsSlider from '@/src/components/LandingSoftwareComps/Brands(Carousel)/CarouselBrands'
import BlogSlider from '@/src/components/LandingSoftwareComps/Blog(Slider)/BlogSlider'

function LandingSoftware() {
  return (
    <Layout showNavbar={true} showFooter={true} navbarAbsoluteDark>
    {/* // <!-- Hero + animations --> */}
      <HeroAnimation/>
   {/* <!-- About --> */}
        <AbuotComp/>
  {/* <!-- Solutions --> */}
        <Solutions/>
  {/* <!-- Industries (Slider) --> */}
        <IndustriesSlider/>
    {/* <!-- Technologies --> */}
        <TechnologiesSlider/>
    {/* <!-- Projects --> */}
           <Projects/>
      {/* <!-- Benefits --> */}
        <BenefitsSlider/>
{/* <!-- Brands (carousel on screens < 1100px) --> */}
          <BrandsSlider/>
       {/* <!-- Blog --> */}
            <BlogSlider/>
    </Layout>
  )
}

export default LandingSoftware