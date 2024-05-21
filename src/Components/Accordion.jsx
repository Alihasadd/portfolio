import React from 'react'
import FAQ from './FAQ';
import santicentral from '../Assets/Santicentral.jpg';

function Accordion() {
  return <>
    
    <div className='h-screen bg-center bg-scroll dark:bg-rose-800'  alt="Central park" style={{backgroundImage: `url(${santicentral})`}} >
      <div className='p-4 text-gray-100 opacity-90 dark:text-gray-300'>
        <FAQ title='Do you like traveling?' answer='Yes, a lot! Ive traveled to 40+ countries!'/>
        <FAQ title='When did you get Santiago?' answer='2018'/>
        <FAQ title='How many languages do you speak?' answer='2.5'/>
      </div>
    </div>
    
  </>;
}

export default Accordion
