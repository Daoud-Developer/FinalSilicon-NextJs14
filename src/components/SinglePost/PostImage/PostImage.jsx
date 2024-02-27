"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const JarallaxImage = dynamic(() => import('../../../utils/JarallaxImage'), {
  ssr: false, // هذا يمنع تحميل المكون في الـ Server-Side
});

function PostImage() {
  return (
      <div className="jarallax mb-lg-5 mb-4" data-jarallax data-speed="0.35" style={{height: "36.45vw", minheight: "300px"}}>
      <JarallaxImage  src="/assets/img/blog/single/cover-image.jpg" alt="Cover image" speed={0.2}/>
      </div>

  )
}

export default PostImage