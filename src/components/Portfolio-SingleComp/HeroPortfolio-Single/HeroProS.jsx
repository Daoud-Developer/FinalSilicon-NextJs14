"use client";
import dynamic from 'next/dynamic';

const JarallaxImage = dynamic(() => import('../../../utils/JarallaxImage'), {
  ssr: false, // هذا يمنع تحميل المكون في الـ Server-Side
});
import Breadcrumb from "./BreadcrumbComp/Breadcrumb"
import Badges from "./BadgesComp/Badges"
import TitleHeroComp from "./TitleHero/TitleHeroComp"
import StatsComp from "./StatsHero/StatsHeroComp"
import AuthorHeroComp from "./AuthorHero/AuthorHeroComp"

function HeroProS() {
  return (
      <section className="jarallax bg-dark pt-2 pt-lg-3 pb-lg-5" data-jarallax data-speed="0.35" data-bs-theme="dark">
      <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-70"></span>
      <JarallaxImage src="/assets/img/portfolio/courses/single.jpg" className="jarallax-img"/>
      <div className="container position-relative zindex-5 pb-5">
        {/* <!-- Breadcrumb --> */}
            <Breadcrumb />
        {/* <!-- Badges --> */}
              <Badges />
        {/* <!-- Title --> */}
            <TitleHeroComp />     
        {/* <!-- Stats --> */}
            <StatsComp />
        {/* <!-- Author --> */}
            <AuthorHeroComp />
      </div>
    </section>

  )
}

export default HeroProS