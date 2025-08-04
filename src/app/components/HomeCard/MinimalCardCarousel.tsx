import React from 'react'
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"

const cards = [
  {
    title: "Landing Page",
    description:
      "Modern landing page template featuring Framer Motion animations, custom navigation components, and responsive design optimized for conversions.",
    image: 'https://skiper-ui.com/_next/image?url=https%3A%2F%2Fi.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExYTFjaG1wM3o0ZzBlbXA2Z2Ywc243d2ttdGZpZXVpbXdmYjJreHp5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FsZ7wUinnbIQYlucMXv%2Fgiphy.gif&w=640&q=75',
  },
  {
    title: "Manifest",
    description:
      "Vector embedding solution for building Perplexity-style AI applications with RAG retrieval, real-time source citations, and pgvector search functionality.",
      image: 'https://skiper-ui.com/_next/image?url=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExaWVwNXVkdXM3aWM4NXM2a2s2czFhd283NHdrbWFsdm43bGdsMXp4MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FSM08k77xWhQtQDDluI%2Fgiphy.gif&w=640&q=75',
  },
  {
    title: "Dev Portfolio",
    description:
      "Comprehensive SEO analysis tool with web crawling, performance testing, and AI-powered optimization recommendations for website improvement.",
 image: 'https://skiper-ui.com/_next/image?url=https%3A%2F%2Fmedia4.giphy.com%2Fmedia%2Fv1.Y2lkPTc5MGI3NjExanI3bjNzdTliOTF0aW9xMzY3Y21sdnE3Nnowb3l6YW4xeXZtdTE0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw%2FL9F8Kt6IYdRvHbcHvl%2Fgiphy.gif&w=640&q=7',
  },
]


const MinimalCardCarousel = () => {
  return (  
    <>
          <div className="mx-auto my-20 w-full max-w-4xl rounded-[24px] border border-black/5 shadow-sm md:rounded-t-[44px]">
            <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-6 ">
            <div className='flex justify-center items-center border rounded-full px-2 py-1'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ice-cream-cone  fill-[#D2F583]  stroke-1 text-neutral-800  "><path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"></path><path d="M17 7A5 5 0 0 0 7 7"></path><path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"></path></svg><span className='font-medium'>Templates</span></div>
              
      <div className="min-h-[300px] p-4 flex flex-col justify-center border-dashed rounded-lg space-y-4">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card,key) => (
            <MinimalCard key={key}>
              <MinimalCardImage src={card.image} alt={card.title}/>
              <MinimalCardTitle>{card.title}</MinimalCardTitle>
              <MinimalCardDescription>
                {card.description}
              </MinimalCardDescription>
            </MinimalCard>
            
          ))}
        </div>
      </div>
      </div>
      </div>
</>
  )
}

export default MinimalCardCarousel


