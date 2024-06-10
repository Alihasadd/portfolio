import React from 'react'
import loguide from '../Data/Loguide'
import { useState } from 'react';


function Layoffguide() {

    const [accordionOpen, setAccordionOpen] = useState(false);
    console.log(loguide)
  return (
    <div className='p-4 bg-gray-100 rounded-lg border-pink-900 border-2 '>
      

      <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between w-full'>
            <span>{loguide.title}</span>
            
          
            
            
            
            {accordionOpen ? <span>-</span> : <span>+</span>}
            
      </button>
      
      {loguide.map ((item, i) => (
              <div>
                <p>{item.id}</p>
                <p>{item.title}</p>
                <p>{item.answer}</p>
              </div>
            ))}

        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className='overflow-hidden'>
                {loguide.answer}
            </div>

        </div>

    </div>
  )
}

export default Layoffguide


//Why is this page not attached to the data? 
///*<loguide title='1' answer='2'/>*/