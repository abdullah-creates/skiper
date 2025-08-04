import React from 'react'
import { CardCarousel } from '@/components/ui/card-carousel'

const CardCarouselParent = () => {
 const images = [
    { src: "/images/card1.webp", alt: "Image 1" },
    { src: "/images/card2.webp", alt: "Image 2" },
    { src: "/images/card3.webp", alt: "Image 3" },
  ]
 
  return (
    <div >
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showNavigation={true}
      />
    </div>
  )
}

export default CardCarouselParent
