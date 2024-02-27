"use client";
//Layout component
import Layout from '../Layout/Layout';

//components
import HeroSection from '../../components/LandingSaasV5Comps/HeroSection/HeroSectionComp';
import CategoriesSlider from '../../components/LandingSaasV5Comps/Categories(Slider)/CategoriesSlider';
import UseCases from '../../components/LandingSaasV5Comps/UseCases/UseCasesComp';
import MapComp from '../../components/LandingSaasV5Comps/Map/MapComp';
import VideoComp from '../../components/LandingSaasV5Comps/Video/VideoComp';
import Testimonials from '../../components/LandingSaasV5Comps/Testimonials/TestimonialsComp';
import PricingComparison  from '../../components/LandingSaasV5Comps/Pricing/PricingComparison';
import Footer from '../../components/LandingSaasV5Comps/Footer/FooterComp';

function landingsaasv5() {
  return (
      <Layout showNavbar={true} showFooter={false} navbarAbsoluteDark>
       {/* <!-- Hero section --> */}
            <HeroSection />
      {/* <!-- Categories (Slider) --> */}
             <CategoriesSlider />
      {/* <!-- Use cases --> */}
               <UseCases />  
         {/* <!-- Map --> */}
              <MapComp />
        {/* <!-- Video --> */}
              <VideoComp />
      {/* <!-- Testimonials --> */}
             <Testimonials />
      {/* <!-- Pricing / Comparison --> */}
              <PricingComparison />

           {/* <!-- Footer --> */}
              <Footer />
      

      </Layout>

  )
}

export default landingsaasv5