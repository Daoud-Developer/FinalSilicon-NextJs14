"use client";
//layout component
import Layout from '../../../Layout/Layout';
// components
import PostTitle from '../../../../components/SinglePost/Posttitle/PostTitle';
import PostImage from '../../../../components/SinglePost/PostImage/PostImage';
import PostContent from '../../../../components/SinglePost/Postcontent/PostContent';
import CarouselPost from "../../../../components/SinglePost/CarouselPost/CarouselPost"
import PostComments from "../../../../components/SinglePdcast/PostComments/PostComments"
import CommentFormAndSub from "../../../../components/SinglePdcast/CommentFormAndSub/CommentFormAndSub"


function SinglePost() {
  return (
    <Layout showNavbar={true} showFooter={true}>
      {/* <!-- Post title + Meta  --> */}
      <PostTitle/>
      {/* <!-- Postimage (parallax) --> */}
      <PostImage/>
      {/* <!-- Postcontent + Sharing --> */}
      <PostContent/>
      {/* <!-- Post comments --> */}
      <PostComments/>
      {/* <!-- Comment form + Subscription --> */}
      <CommentFormAndSub/>
      {/* <!-- Related articles (Slider below lg breakpoint) --> */}
      <section className="container mb-5 pt-md-4">
        <div className="d-flex flex-sm-row flex-column align-items-center justify-content-between mb-4 pb-1 pb-md-3">
          <h2 className="h1 mb-sm-0">Related Articles</h2>
          <a href="blog-list-with-sidebar.html" className="btn btn-lg btn-outline-primary ms-4">
            All posts
            <i className="bx bx-right-arrow-alt ms-1 me-n1 lh-1 lead"></i>
          </a>
        </div>
        {/* <!-- Slider --> */}
        <CarouselPost/>  
      </section>
    </Layout>
  )
}

export default SinglePost