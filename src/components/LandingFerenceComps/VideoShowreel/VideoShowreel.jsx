"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import lightGallery from 'lightgallery';
// Import the video plugin
import lgVideo from 'lightgallery/plugins/video';
// Import necessary CSS
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';

import Stats from './Stats/Stats';

function VideoShowreel() {
  const galleryRef = useRef(null);

  useEffect(() => {
    // Initialize lightGallery with the video plugin
    const galleryInstance = lightGallery(galleryRef.current, {
      plugins: [lgVideo],
      licenseKey: 'your_license_key_here', // Update this with your actual license key
      speed: 500,
    });

    // Cleanup function to destroy the lightGallery instance
    return () => galleryInstance.destroy();
  }, []);

  return (
    <div className="bg-secondary py-5">
      <div className="container py-2 py-md-4 py-lg-5">
        <h3 className="h1 text-center mb-lg-4">Previous Year Highlights</h3>
        <p className="fs-lg text-muted text-center mb-4 mb-lg-5">
          Watch the short video and check out how the last NY Digital Conference unfolded.
        </p>
        <div className="position-relative overflow-hidden rounded-3 mb-4 mb-lg-5">
          <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-35"></span>
         <Image src="/assets/img/landing/conference/video-cover.jpg" width={800} height={500} className="w-100" alt="Video cover"/>
          <div ref={galleryRef} className="position-absolute top-0 start-0 w-100 h-100 zindex-5 d-flex align-items-center justify-content-center">
            <Link
              href="https://www.youtube.com/watch?v=LBfAnFX15nc"
              className="btn btn-video btn-icon bg-white btn-xl stretched-link"
              data-bs-toggle="video"
              aria-label="Play video"
            >
              <i className="bx bx-play"></i>
            </Link>
          </div>
        </div>

   {/* <!-- Stats --> */}
      <Stats />
  
 </div>
</div>
  )
}

export default VideoShowreel