"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import lightGallery from 'lightgallery';
import lgVideo from 'lightgallery/plugins/video';


import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-video.css';

function VideoComp() {
 
  const galleryRef = useRef(null);

  useEffect(() => {
 
    lightGallery(galleryRef.current, {
    
      plugins: [lgVideo], 
      licenseKey: 'GPLv3', 
    });

    return () => {
      if (galleryRef.current) {
        lightGallery(galleryRef.current).destroy(true);
      }
    };
  }, []);

  return (
    <div>
      <div ref={galleryRef} className="gallery mb-4 pb-2" data-video="true">
        <Link href="https://www.youtube.com/watch?v=LDb-G8y88Sc" 
          className="gallery-item video-item is-hovered rounded-3" 
          data-sub-html='<h6 className="fs-sm text-light">Video inside blog post</h6>'>
          <Image src="/assets/img/blog/single/video-cover.jpg" width={800} height={800} className="w-100" alt="Video"/>
        </Link>
      </div>

      <p className="mb-4 pb-2">Tempor donec aliquam est, a. Sit arcu tellus pharetra, bibendum hendrerit arcu, sed. Scelerisque dui enim libero sit ac sed lacus lectus. Quam in iaculis scelerisque feugiat nibh mi. Maecenas posuere lobortis praesent iaculis sagittis. Egestas vel at praesent ipsum pretium faucibus adipiscing gravida feugiat. Lacus, rhoncus velit at non nunc, quam urna, phasellus facilisis. Cursus elit posuere amet tortor at. Mi tristique congue vulputate eget in pellentesque tincidunt. In viverra est id nibh. Nunc tellus ultrices magna turpis. Viverra est morbi posuere dapibus nisi habitasse. Id tristique cursus vel metus.</p>
    </div>
  )
}

export default VideoComp;