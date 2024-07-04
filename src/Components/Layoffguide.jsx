import React from 'react'
import loguide from '../Data/Loguide'
import { useState } from 'react';
import FAQ from './FAQ';

function Layoffguide() {

    const [accordionOpen, setAccordionOpen] = useState(false);
    console.log(loguide)
  return (
    <div className='p-4 text-zinc-300 border-pink-900 dark:border-blue-950 border-2 pt-20 bg-zinc-300 h-lvh'>
      

      <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between'>
       
      </button>
      
      {loguide.map ((item, i) => (
              <div className='text-white  bg-zinc-300'>
                <FAQ title={item.title} answer={item.answer}/>
              </div>
            ))}

        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className='overflow-hidden '>
    
            </div>

        </div>

    </div>
  )
  
  
}

export default Layoffguide


//Why is this page not attached to the data? 
///*<loguide title='1' answer='2'/>*/