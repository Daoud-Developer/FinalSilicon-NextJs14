"use client"
// components
import Loadmorebtn from "./loadmorebtn/Loadmorebtn";
import Categorytabs from "./Categorytabs/Categorytabs";
import Blogarticles from "./Blogarticles/Blogarticles";

const LatestPosts = () => {
  return (
    <div>
       {/* <!-- Latest posts --> */}
      <section className="container mb-5 pt-5 pb-lg-5">
        <h2 className="h1 mb-4 pt-lg-2 pb-lg-3 py-1 text-center">Latest Posts</h2>
      {/* <!-- Category tabs component --> */}
      <Categorytabs />
      {/* <!-- Blog articles component --> */}
      <Blogarticles /> 
        {/* <!-- Load more btn --> */}
      <Loadmorebtn />
      </section>
    </div>
  )
}

export default LatestPosts