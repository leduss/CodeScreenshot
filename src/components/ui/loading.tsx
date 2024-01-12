
import { SiteConfig } from '@/lib/site-config';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

 const Loading = (props: LoadingProps) => {
  const { setLoading } = props;
  const loaderRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
      }
    });
    tl.to(loaderRef.current, {
      scale: 2,
      duration: 1.5,
    }).to(loaderRef.current, {
      translateY: 2000,
      duration: 1.5,
    });
  }, [setLoading]);

  return (
    <div
      ref={loaderRef}
      className="absolute left-0 top-0  z-20 flex h-screen  w-screen items-center justify-center bg-background"
    >
      <div className="relative h-60 w-60 animate-spin rounded-full border-y-8 border-primary " />
      <p
        id="line"
        className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-3xl text-primary"
      >
        {SiteConfig.title}
      </p>
    </div>
  );
 }

export default Loading;
