"use client";
//Layout component
import Layout from '../Layout/Layout';
//Components
import HeroComp from "../../components/AboutComps/Hero/HeroComp";
import StoryComp from "../../components/AboutComps/Story/StoryComp";
import LocationComp from "../../components/AboutComps/Locations/LocationsComp";
import TeamComp from "../../components/AboutComps/Team/TeamComp";
import StatsPartnersComp from "../../components/AboutComps/StatsPartners/StatsPartnersComp";
import TestimonialsComp from "../../components/AboutComps/Testimonials/TestimonialsComp";
import CTAComp from "../../components/AboutComps/CTA/CTAComp";


function AboutUsPage() {

  return (
<Layout showNavbar={true} showFooter={true} navbarAbsoluteDark >
     {/* <!-- Hero --> */}
       <HeroComp/>
   {/* <!-- Story --> */}
       <StoryComp/>
   {/* <!-- Locations --> */}
       <LocationComp/>
   {/* <!-- Team --> */}
       <TeamComp/>
   {/* <!-- Stats + Partners --> */}
      <StatsPartnersComp/>
   {/* <!-- Testimonials --> */}
      <TestimonialsComp/>
     {/* <!-- CTA --> */}
        <CTAComp/>
</Layout>
  )
}

export default AboutUsPage;