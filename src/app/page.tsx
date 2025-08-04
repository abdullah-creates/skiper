// page.tsx
"use client";
import React from 'react';
import Script from 'next/script';

import Navbar from './components/navbar/Navbar';
import HeroContent from './components/landingPage/HeroContent';
import CardCarousel from './components/HomeCard/CardCarouselParent';
import MinimalCardCarousel from './components/HomeCard/MinimalCardCarousel';
import SkiperCardPage from './components/HomeCard/SkiperCardPage';
import AIInputCard from './components/HomeCard/AIInputCard';
import AnimationCard from './components/HomeCard/AnimationCard';
import Paragraph from './components/HomeCard/Paragraph';

const Page = () => {
  return (
    <>
      {/* Tawk.to Script */}
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68900c09d4de331929811800/1j1pau1tp';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />

      {/* Page Content */}
      <div>
        <Navbar />
        <HeroContent />
        <CardCarousel />
        <MinimalCardCarousel />
        <Paragraph />
        <SkiperCardPage />
        <AIInputCard />
        <AnimationCard />
        <Paragraph />
      </div>
    </>
  );
};

export default Page;
