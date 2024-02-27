"use client";
import React, { useEffect,useState } from 'react';
//Layout component
import Layout from '../Layout/Layout';
//componts for services page
import Navbar from '../../components/Navbar/Navbar'
import BreadcrumbComp from '../../components/ServicesComps/Breadcrumb/BreadcrumbComp'
import ServicesGrid from '../../components/ServicesComps/ServicesGrid/ServicesGrid'
import TestimonialsComp from '../../components/ServicesComps/Testimonials/TestimonialsComp'
import FeaturesComp from '../../components/ServicesComps/Features/FeaturesComp'
import ContactFormComp from '../../components/ServicesComps/ContactForm/ContactFormComp'


function Services () {

  return (
    
      <Layout showNavbar={true} showFooter={true} navbarAbsolute >
       <div className="bg-secondary pt-5 zindex-2" style={{paddingBottom: "228px"}}>
        {/* <!-- Breadcrumb --> */}
        <BreadcrumbComp/>
        {/* <!-- Page title + Services grid --> */}
        <ServicesGrid/>
       </div>
      {/* <!-- Testimonials --> */}
      <TestimonialsComp/>
      {/* <!-- Features --> */}
      <FeaturesComp/>     
      {/* <!-- Contact form --> */}
      <ContactFormComp/>
  
    </Layout>

  )
}

export default Services 