import React from 'react'
import Accordion from './Accordion'
import react, { useState } from 'react';

const FAQ = ( {title , answer}) => {

    const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className='p-4 bg-gray-800 rounded-lg border-rose-900 border-2 '>
      
        <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between w-full'>
            <span>{title}</span>
            {accordionOpen ? <span>-</span> : <span>+</span>}
            
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className='overflow-hidden'>
                {answer}
            </div>

        </div>

    </div>
  )
}

export default FAQ