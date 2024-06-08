import React from 'react'
import Loguide from '../Data/Loguide'
import { useState } from 'react';


function Layoffguide() {

    const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className='p-4 bg-gray-800 rounded-lg border-pink-900 border-2 '>
      

      <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between w-full'>
            <span>{Loguide.title}</span>
            <Loguide title='1' answer='2'/>
            {accordionOpen ? <span>-</span> : <span>+</span>}
            
      </button>
      
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className='overflow-hidden'>
                {Loguide.answer}
            </div>

        </div>

    </div>
  )
}

export default Layoffguide


//Why is this page not attached to the data? 