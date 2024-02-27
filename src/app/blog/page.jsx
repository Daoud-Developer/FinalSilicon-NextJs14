"use client";
//layout component
import Layout from '../Layout/Layout';
// Component for Blog Page
import BlogItems from "../../components/Blog-Grid/BlogItems"
import Pagination from "../../components/Blog-Grid/Pagination/Pagination"
import SearchForm from "../../components/Blog-Grid/SearchForm/SearchForm"
import LayoutSwitcher from "../../components/Blog-Grid/Layout-switcher.jsx/LayoutSwitcher"


function BlogPage() {
  return (
    <Layout showNavbar={true} showFooter={true}>
    <main className="container mt-4 mb-lg-5 pt-lg-2 pb-5">
        {/* <!-- Page title + Layout switcher + Search form --> */}
        <div className="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
          <div className="col-lg-5 col-md-4">
            <h1 className="mb-2 mb-md-0">Blog Grid</h1>
          </div>
          <div className="col-lg-7 col-md-8">
            <form className="row gy-2">
              {/* <!-- Layout switcher --> */}
              <div className="col-lg-5 col-sm-6">
              <LayoutSwitcher />
              </div>
               
              {/* <!-- Search form --> */}
              <div className="col-lg-7 col-sm-6">
              <SearchForm />
              </div>
            </form>
          </div>
        </div> 
        {/* <!-- Blog grid --> */}
        <BlogItems />
        {/* <!-- Pagination --> */}
        <Pagination />
    </main>
    </Layout>
  )
}

export default BlogPage