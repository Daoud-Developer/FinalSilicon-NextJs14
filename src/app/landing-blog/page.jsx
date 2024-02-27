"use client";
//Layout component
import Layout from '../Layout/Layout';
//components
import Hero from "../../components/LandingBlogComps/Hero/Hero";
import Popularposts from "../../components/LandingBlogComps/Popularposts/Popularposts";
import Subscription from "../../components/LandingBlogComps/subscription/Subscription";
import LatestPodcasts from "../../components/LandingBlogComps/LatestPodcastsComps/LatestPodcasts";
import LatestPosts from "../../components/LandingBlogComps/LatestPostsComps/LatestPosts";



export default function landingBlog() {
  return (
    <Layout showNavbar={true} showFooter={true}>
      <Hero />
      <Popularposts />
      <LatestPosts />
      <LatestPodcasts />
      <Subscription />
    </Layout>
  )

  
}
