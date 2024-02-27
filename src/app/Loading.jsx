"use client";
import { useEffect, useState } from 'react';
import styles from './loading.module.css';

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // استخدام addEventListener بدلًا من تعيين window.onload مباشرةً
    const handleLoad = () => {
      setLoading(false); // تحديث الحالة لإيقاف العرض التحميلي
      const preloader = document.querySelector(`.${styles.pageLoading}`);
      if (preloader) {
        preloader.classList.remove('active');
        setTimeout(() => {
          preloader.remove();
        }, 1000);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad); // إزالة المستمع عند تفكيك المكون
    }
  }, []);

  return (
    // تأكد من تصحيح اسم الفئة هنا ليتطابق مع تصدير CSS Module
    <div className={`${styles.pageLoading} ${loading ? styles.active : ''}`}>
      <div className={styles.pageLoadingInner}>
        <div className={styles.pageSpinner}></div><span>Loading...</span>
      </div>
    </div>
  );
}