"use client";
//Layout component
import Layout from '../Layout/Layout';
//Components
import HeroCompany from '../../components/LandingSaasv2Comps/HeroCompany/HeroCompanyComp';
import FeaturesComp from '../../components/LandingSaasv2Comps/Features/FeaturesComp';
import ComparisonSlider from '../../components/LandingSaasv2Comps/ComparisonSlider/ComparisonSlider';
import TestimonialsComp from '../../components/LandingSaasv2Comps/Testimonials/TestimonialsComp';
import AppdownloadComp from '../../components/LandingSaasv2Comps/AppDownloadCTA/AppdownloadComp';
import PricingComp from '../../components/LandingSaasv2Comps/PricingPlan/PricingComp';
import IntegrationsComp from '../../components/LandingSaasv2Comps/Integrations/IntegrationsComp';
import CTAComp from '../../components/LandingSaasv2Comps/CTA/CTAComp';
import Footer from '../../components/LandingSaasv2Comps/Footer/FooterComp';

function landingsaasv2() {
  return (
     <Layout showNavbar={true} showFooter={false} navbarAbsoluteDark>
      {/* <!-- Hero --> */}
      <HeroCompany/>
      {/* <!-- Features --> */}
      <FeaturesComp/>
      {/* <!-- Light / Dark mode (Comparison slider) --> */}
      <ComparisonSlider/>
      {/* <!-- Testimonials --> */}
      <TestimonialsComp/>
      {/* <!-- App download CTA --> */}
      <AppdownloadComp/>
      {/* <!-- Pricing --> */}
      <PricingComp/>
      {/* <!-- Integrations --> */}
      <IntegrationsComp/>
      {/* <!-- CTA --> */}
      <CTAComp/>  
      {/* <!-- Footer --> */}
      <Footer/>
    </Layout>
  
    
  )
}

export default  landingsaasv2