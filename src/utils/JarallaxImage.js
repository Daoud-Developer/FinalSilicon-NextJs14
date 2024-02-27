"use client";
import { useEffect } from 'react';
import {jarallax} from 'jarallax';

export default function JarallaxImage({ src, alt, speed = 0.2 }) {
  useEffect(() => {
    jarallax(document.querySelectorAll('.jarallax'), { speed });

    return () => jarallax(document.querySelectorAll('.jarallax'), 'destroy');
  }, [speed]);

  return (
    <div className="jarallax">
      <img className="jarallax-img" src={src} alt={alt} />
    </div>
  );
}