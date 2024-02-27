"use client"
//layout component
import Layout from "../../../Layout/Layout"
// compunents
import Breadcrumb from "../../../../components/SinglePdcast/Breadcrumb/Breadcrumb"
import PostTitle from "../../../../components/SinglePdcast/PostTitle/PostTitle"
import Postcontent from "../../../../components/SinglePdcast/Postcontent/Postcontent"
import PostComments from "../../../../components/SinglePdcast/PostComments/PostComments"
import CommentFormAndSub from "../../../../components/SinglePdcast/CommentFormAndSub/CommentFormAndSub"
import RelatedPodcasts from "../../../../components/SinglePdcast/RelatedPodcasts/RelatedPodcasts"



function SinglePdcast() {
  return (
      <Layout showNavbar={true} showFooter={true}>
            <Breadcrumb/>     
            <PostTitle/>
            <Postcontent/>    
            <PostComments/>  
            <CommentFormAndSub/>
            <RelatedPodcasts/>
        </Layout>
  )
}

export default SinglePdcast