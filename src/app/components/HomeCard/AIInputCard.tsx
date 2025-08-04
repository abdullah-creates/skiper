import AiInput from '@/components/ui/ai-input'
import { Badge, SparklesIcon } from 'lucide-react'
import React from 'react'

const AIInputCard = () => {
  return (
    <div>
        <div className='w-[72%] mx-auto'>
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-6 ">
        <div className='flex items-center border w-fit rounded-full px-2 py-1'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles fill-[#EEBDE0] stroke-1 text-neutral-800"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
          <span className='font-medium'>Component Preview</span>
        </div>
                <div>
        <h3 className='text-black/80 text-[2rem] font-bold'>AI Input</h3>
        <p className='text-black/80 text-1xl text-center mb-6'>Seamless AI Chat Input box</p>
        </div>
      <AiInput />
      </div>
      </div>
    </div>
  )
}

export default AIInputCard








