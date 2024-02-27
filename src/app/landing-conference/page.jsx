"use client";
//Layout component
import Layout from '../Layout/Layout';
//Components
import TitleSplit from "@/src/components/LandingFerenceComps/TitleSplit/TitleSplit";
import SponsorsSlide from "@/src/components/LandingFerenceComps/SponsoredBy/SponsorsSlide";
import SpeakersComp from "@/src/components/LandingFerenceComps/SpeakersComp/SpeakersComp";
import TicketsComp from "@/src/components/LandingFerenceComps/TicketsComp/TicketsComp";
import VideoShowreel from "@/src/components/LandingFerenceComps/VideoShowreel/VideoShowreel";
import Schedule from "@/src/components/LandingFerenceComps/ScheduleComp/Schedule";
import TestimonialsSlider from "@/src/components/LandingFerenceComps/TestimonialComp/TestimonialsSlider";
import Location from "@/src/components/LandingFerenceComps/LocationComp/Location";
import BuyTicketCTA from "@/src/components/LandingFerenceComps/TicketsComp/BuyTicketComp/BuyTicketCTA";
export default function LandingConferencePage() {
      return (
            <Layout showNavbar={true} showFooter={true}>
                  {/* <!-- Hero --> */}
                  <TitleSplit />
                  {/* <!-- Sponsors --> */}
                        <div className="position-relative bg-dark py-5">
                        <div className="position-absolute top-0 start-0 w-100 h-100"
                              style={{ backgroundColor: "rgba(255,255,255,.05)" }}>
                        
                        </div>
                        <SponsorsSlide />
                        </div>
                        
                        {/* <!-- Speakers-component --> */}
                        <SpeakersComp />
                        {/* <!-- Tickets-component--> */}
                        <TicketsComp />
                        {/* <!-- Highlights (Video showreel) -component --> */}
                        <VideoShowreel />
                        {/* <!-- Schedule component  --> */}
                        <Schedule />
                        {/* <!-- Testimonials component  --> */}
                        <TestimonialsSlider />
                        {/* <!-- Location component  --> */}
                        <Location />
                        {/* <!-- Buy ticket CTA --> */}
                        <BuyTicketCTA />
                 
            </Layout>


      )
}
