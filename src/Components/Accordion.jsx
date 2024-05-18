import React from 'react'
import FAQ from './FAQ';

function Accordion() {
  return <>
    
    <div className='w-full h-screen bg-gradient-to-r from-indigo-950 to-indigo-800'>
      <div className='p-4 text-gray-300'>
        <FAQ title='Do you like traveling?' answer='Yes, a lot! Ive traveled to 40+ countries!'/>
        <FAQ title='When did you get Santiago?' answer='2018'/>
        <FAQ title='How many languages do you speak?' answer='2.5'/>
      </div>
    </div>
    
  </>;
}

export default Accordion
