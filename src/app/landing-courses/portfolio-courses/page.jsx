"use client";
//Layout component
import Layout from '../../Layout/Layout';
//Components
import Breadcrumb from '../../../components/PortfolioCoursesComps/BreadcrumbComp/breadcrumb'
import TitleFiltersComp from '../../../components/PortfolioCoursesComps/PageTitleComp/TitleFiltersComp'
import CoursesGrid from '../../../components/PortfolioCoursesComps/CoursesGridComp/CoursesGrid'
import Pagination from '../../../components/PortfolioCoursesComps/PaginationComp/Pagination'
import SignUpCTA from '../../../components/PortfolioCoursesComps/SignUpCTAComp/SignUpCTA'

function PortfolioCourses() {
  return (
    <Layout showNavbar={true} showFooter={true}>
        <main className="container">
       {/* <!-- Breadcrumb --> */}
            <Breadcrumb/>
        {/* <!-- Page title + Filters --> */}
            <TitleFiltersComp/>     
        {/* <!-- Courses grid --> */}
            <CoursesGrid/>  
        {/* <!-- Pagination: Basic example --> */}
            <Pagination/>
        {/* <!-- Sign up CTA --> */}
            <SignUpCTA/>
        </main>
    </Layout>
  )
}

export default PortfolioCourses