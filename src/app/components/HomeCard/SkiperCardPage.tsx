import React from 'react'
import { SkiperCard } from "@/components/ui/skiper-card"
import { cn } from '@/lib/utils'

const SkiperCardPage = () => {
  return (
    <div className='my-20'>
      <div className='w-[72%] mx-auto'>
      <div className="relative mx-auto flex flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 shadow-sm md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px]">
      <div className='flex items-center border w-fit rounded-full px-2 py-1 my-5 ml-5'>
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ice-cream-cone  fill-[#A3C0E0]  stroke-1 text-neutral-800"><path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"></path><path d="M17 7A5 5 0 0 0 7 7"></path><path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"></path></svg>
          <span className='font-medium'>Component Preview</span>
        </div>
        <div>
        <h3 className='text-black/80 text-[3.5rem] font-bold text-center items-center'>Tailwind + Framer + React</h3>
        <p className='text-black/80 text-2xl font-bold text-center mb-6'>Everything you need to ship</p>
        </div>
        <SkiperCard
          title='Components that pop'
          description='Make your app 🤌'
          step1img1Class={cn(
            "pointer-events-none w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
            "left-1/4 top-[57%] rounded-[24px] max-md:scale-[160%] max-md:rounded-[24px] md:left-[35px] md:top-[29%]",
            "md:group-hover:translate-y-2"
          )}
          step1img2Class={cn(
            "pointer-events-none w-3/5 overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
            "left-[69%] top-[53%] rounded-2xl max-md:scale-[160%] max-md:rounded-[24px] md:left-[calc(50%+35px+1rem)] md:top-[21%]",
            "md:group-hover:-translate-y-6"
          )}
          step2img1Class={cn(
            "pointer-events-none w-[50%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-1/4 top-[69%] max-md:scale-[160%] md:left-[35px] md:top-[30%]",
            "md:group-hover:translate-y-2"
          )}
          step2img2Class={cn(
            "pointer-events-none w-2/5 overflow-hidden rounded-2xl rounded-t-[24px] border border-stone-100/10 transition-all duration-500 group-hover:-translate-y-6 dark:border-stone-700",
            "left-[70%] top-[53%] max-md:scale-[140%] md:left-[calc(50%+27px+1rem)] md:top-1/4",
            "md:group-hover:-translate-y-6"
          )}
          step3imgClass={cn(
            "pointer-events-none w-[90%] overflow-hidden rounded-t-[24px] border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
            "left-[5%] top-[50%] md:left-1/2 md:left-[68px] md:top-[30%]"
          )}
          image={{
            step1light1: '/images/feature-1.webp',
            step1light2: '/images/feature-2.webp',
            step2light1: '/images/feature-3.webp',
            step2light2: '/images/feature-4.webp',
            step3light: '/images/feature-5.webp',
            step4light: '/images/feature-6.webp',
            alt: 'Feature Preview',
          }}
        />
      </div>
    </div>
    </div>
  )
}

export default SkiperCardPage
