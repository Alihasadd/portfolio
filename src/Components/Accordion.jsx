import React from 'react'
import FAQ from './FAQ';
import santicentral from '../Assets/Santicentral.jpg';

function Accordion() {
  return <>
    
    <div className='h-screen bg-center bg-scroll dark:bg-blue-800 pt-20'  alt="Central park" style={{backgroundImage: `url(${santicentral})`}} >
      <div className='p-6 text-gray-100 opacity-90 dark:text-gray-300'>
        <FAQ title='Do you like traveling?' answer='Yes, a lot! Ive traveled to 40+ countries!'/>
        <FAQ title='When did you get Santiago?' answer='2018'/>
        <FAQ title='How many languages do you speak?' answer='2.5'/>
        <FAQ title='Where have you lived?' answer='New York & Washington D.C.'/>
        <FAQ title='Favorite hobby?' answer='Photography and code!'/>
        <FAQ title='Top skills?' answer='I worked in recruiting & HR for years so I can help you with resume, interview, and what people can do if they get laid off.'/>
        <FAQ title='What is a new skill you learned?' answer='Recently learned how to boat!'/>
        <FAQ title='Something others really like that you dont?' answer='Attending concerts and movies but I like theater'/>
        <FAQ title='What makes you unique' answer='I have hacked part of my ADD to keep it under control'/>
        <FAQ title='What things do you do better than others?' answer='I am very okay being midiocre at thing which takes the pressure off of having to always be good at something. The longer I do the skill the better I get so there is a benefit to being okay not always being good at things!'/>
        <FAQ title='Something you think everyone should do?' answer='I interviewed my grandparents and my dads twin to learn more about their lives. Hoping that future generations will be able to cherish the info!'/>
      </div>

      <div className='m-6 p-6 bg-s-800 bg-zinc-700 rounded-lg border-pink-800 opacity-90 border-2 dark:bg-zinc-950'>
        <p className='p-1 text-gray-100 opacity-90 dark:text-gray-300'>Ask a question</p>
        <input className='p-1 text-gray-100 opacity-90 dark:text-gray-300'></input>
      </div>
      <div>
        
      </div>
    </div>
    
  </>;
}

export default Accordion


//add input box to ask questions