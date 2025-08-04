import React from 'react'
import Navbar from './components/navbar/Navbar';
import HeroContent from './components/landingPage/HeroContent';
import CardCarousel from './components/HomeCard/CardCarouselParent';
import MinimalCardCarousel from './components/HomeCard/MinimalCardCarousel';
import SkiperCardPage from './components/HomeCard/SkiperCardPage';
import AIInputCard from './components/HomeCard/AIInputCard';
import AnimationCard from './components/HomeCard/AnimationCard';
import Paragraph from './components/HomeCard/Paragraph';

const page = () => {
  return (
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
  )
}

export default page
