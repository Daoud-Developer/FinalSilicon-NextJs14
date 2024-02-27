"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import lightGallery from 'lightgallery';
// Import the video plugin
import lgVideo from 'lightgallery/plugins/video';
// Import necessary CSS
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';


function VideoComp() {

  const [isMounted, setIsMounted] = useState(false);
  let galleryRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    // Initialize lightGallery with the video plugin
    let galleryInstance = lightGallery(galleryRef.current, {
      plugins: [lgVideo],
      licenseKey: 'GPLv3', // Update this with your actual license key
      speed: 500,
    });

  return () => {
      if (galleryInstance.current && isMounted) {
        galleryInstance.current.destroy();
      }
      setIsMounted(false);
    };
  }, []);

  return (
     <section className="position-relative py-5">
        <span className="position-absolute top-0 start-0 w-100 h-100 d-dark-mode-none" 
        style={{background: "linear-gradient(360deg, #fff 5.39%, #f3f6ff 78.66%)"}}>

        </span>
        <span className="position-absolute top-0 start-0 w-100 h-100 d-none d-dark-mode-block" 
        style={{background: "linear-gradient(360deg, #0b0f19 5.39%, rgba(255, 255, 255, .04) 78.66%)"}}>

        </span>
        <div className="container position-relative zindex-2 py-2 py-sm-3 py-sm-4 py-md-5">
          <div className="row align-items-center py-lg-2 py-xl-3 my-xl-1 my-xxl-3">
            <div className="col-md-5 col-xl-4">
              <h2 className="h1 pb-2 pb-sm-3 mb-md-0">Learn <span className="text-gradient-primary">how Silicon works</span> in a nutshell. Watch a short introductory video</h2>
            </div>
            <div className="col-md-7 offset-xl-1">
              <div className="position-relative">
                <div ref={galleryRef} className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center zindex-5">
                <Link href="https://www.youtube.com/watch?v=ADpOLD2z1Ns" 
                className="btn btn-video btn-icon btn-xl stretched-link bg-white" 
                data-bs-toggle="video" 
                aria-label="Play video">
                    <i className="bx bx-play"></i>
                  </Link>
                </div>
               <Image src="/assets/img/landing/saas-5/video-cover-light.jpg" 
               className="d-dark-mode-none rounded-3" alt="Video cover" 
               width={700} height={400}/>
               <Image src="/assets/img/landing/saas-5/video-cover-dark.png" 
               className="d-none d-dark-mode-block rounded-3" alt="Video cover" 
               width={700} height={400}/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default VideoComp