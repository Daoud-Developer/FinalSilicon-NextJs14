"use client";
//Layout component
import Layout from '../Layout/Layout';
//Components
import ContactUs from "./../../components/ContactUsComps/Breadcrumb/BreadcrumbComp";
import ContactLinks from "./../../components/ContactUsComps/ContactLinks/ContactLinksComp";
import ContactForm from "./../../components/ContactUsComps/ContactForm/ContactForm";
import Branches from "./../../components/ContactUsComps/Branches/BranchesComp";
function Contactus() {
  return (
   <Layout showNavbar={true} showFooter={true} navbarAbsolute>
    
    {/* <!-- Links + Contact form --> */}
      <section className="position-relative bg-secondary pt-5">
        <div className="container position-relative zindex-2 pt-5">
          {/* <!-- Breadcrumb --> */}
                    <ContactUs/>
          <div className="row">
            {/* <!-- Contact links --> */}
                  <ContactLinks/>
            {/* <!-- Contact form --> */}
                  <ContactForm/>     
          </div>
        </div>
        <div className="position-absolute bottom-0 start-0 w-100 bg-light" style={{height: "8rem"}}></div>
      </section>
             {/* <!-- Branches --> */}
                   <Branches/>
     
    </Layout>
  )
}

export default Contactus