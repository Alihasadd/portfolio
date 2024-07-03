import React from 'react'
import alisanti from '../Assets/AliSanti.jpg'
import santimiami from '../Assets/Santimiami.jpg'
import sanfran from '../Assets/Sanfran.jpg'
import Worldmap from './Worldmap'

function Aboutme() {
  return (
    <div className='grid grid-cols-1 bg-zinc-200 dark:bg-blue-900 dark:text-white pt-20'>
      <div className="container mx-auto">
        <div className='bg-neutral-100 rounded-lg m-10 w-50 dark:bg-blue-950 dark:text-white group hover:shadow-lg lg:mx-0'>
          <div className='flex flex-wrap justify-between items-center overflow-hidden rounded-lg lg:flex-row-reverse'>
            <div className="w-full md:w-1/2">
              <img src={alisanti} alt="Code" className='group-hover:brightness-125 group-hover:-rotate-1 group-hover:scale-105 group-hover:opacity-80 dark:bg-zinc-700 dark:text-zinc-300 lg:rounded-r-lg' />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className='p-5 justify-center text-lg hover:rounded-lg font-extrabold'>Hi, I'm Ali</h1>
              <p className='p-5'>I am from the New York City area and now live in Washington D.C. </p>
            </div>
          </div>
        </div>

        <div className='bg-neutral-100 rounded-lg mr-10 ml-10 w-50 dark:bg-blue-950 dark:text-white group hover:shadow-lg p-10 lg:mx-0'>
          <h2 className='pb-2 justify-center text-lg font-extrabold'>My Skills</h2>
          <p className='pb-3'>I started my career as a recruiter in JP Morgan chase and then CIBC. I wanted to move to a company that was new and help build a team so I decided to go to a startup next. I joined an Adtech company in New York where I helped build out there recruiting and HR practices.</p>
          <p className='pb-3'>It was at that startup I started to work with a tech team who started to teach me more about coding and software engineering. I decided to do a part time course at General Assembly to learn more. I loved the class but couldn't apply it easily. I kept up learning small bits here and there. </p>
          <p className='pb-3'>I had a desire to be more impersed in tech and I seeking roles with that in mind. I moved from HRBP roles to Talent tools, HR systems, and doing talent tools and the companies intranet and diving into content strategy on the employee experience engineering team.</p>
          <p className='pb-3'>It was there I got to do my first engineering work for the company. Making changes to our code base, pairing with other engineers, code review, collaborating with design, and getting more imersed into software engineering.</p>
        </div>
      
        <div className='bg-neutral-100 rounded-lg m-10 w-50 dark:bg-blue-950 dark:text-white group hover:shadow-lg p-10 lg:mx-0'> 
          <h3 className='pb-2 justify-center text-lg font-extrabold'>Learning</h3>  
          <p>We are all life long learners. I found research that says the more you learn the more elastic your brain will be. I've made it a goal to always be looking for ways to learn, even if it's a small amount about a topic. Here are some of the things I've learned over the years:</p>
          <ul className='bg-neutral-200 border border-slate-600 rounded-lg m-5 w-50 dark:bg-zinc-700 dark:text-white group p-5 list-outside overflow-y-auto h-32 hover:shadow-inner'>
            <li className='p-1'>2024 - Software Engineering</li>
            <li className='p-1'>2023 - How to drive boats </li>
            <li className='p-1'>2022 - That you can go into the pyramids in Egypt</li>
            <li className='p-1'>2021 - Some simple Urdu phrases</li>
            <li className='p-1'>2020 - How to jet ski</li>
            <li className='p-1'>2019 - How to train dogs</li>
            <li className='p-1'>2018 - Started learning French</li>
            <li className='p-1'>2017 - Read 12 books</li>
            <li className='p-1'>2016 - Some front end web development</li>
            <li className='p-1'>2015 - How to get laid off</li>
            <li className='p-1'>2014 - How People operations works</li>
            <li className='p-1'>2013 - How to kayak</li>
            <li className='p-1'>2012 - How the Talent acquisition process works</li>
            <li className='p-1'>2011 - How Logistics works</li>
            <li className='p-1'>2010 - How to navigate the NYC Subway</li>
            <li className='p-1'>2009 - How to travel in Panama and Costa Rica</li>
          </ul>
        </div>

        <div className='bg-neutral-100 rounded-lg ml-10 mr-10 m-2 p-7 dark:bg-blue-950 dark:text-white group hover:shadow-lg lg:mx-0'>
          <h3 className='pb-2 justify-center text-lg font-extrabold'>Travel</h3>  
          <p>I love traveling and had the opportunity to travel to over 40 countries.</p>
          <div className="p-5">
            <div className='w-full rounded-lg hover:shadow-lg h-[500px] rounded-lg overflow-hidden'>
              <Worldmap/>
            </div>
          </div>

          <ul className='bg-neutral-200 border border-slate-600 rounded-lg m-5 w-50 dark:bg-zinc-700 dark:text-white group p-5 list-outside overflow-y-auto h-32 hover:shadow-inner'>
            <li className='p-1'>2024 - Peru</li>
            <li className='p-1'>2023 - Paraguay</li>
            <li className='p-1'>2022 - Denmark, Greenland, and Egypt</li>
            <li className='p-1'>2021 - Pakistan</li>
            <li className='p-1'>2020 - Brasil and Uruguay</li>
            <li className='p-1'>2019 - Argentina, Sweden, Norway, and Switzerland</li>
            <li className='p-1'>2018 - Israel and Jordan</li>
            <li className='p-1'>2017 - Iceland</li>
            <li className='p-1'>2016 - Japan</li>
            <li className='p-1'>2015 - Mexico</li>
            <li className='p-1'>2014 - Chile</li>
            <li className='p-1'>2013 - China</li>
            <li className='p-1'>2012 - Hungary, Czech Republic, and Germany</li>
            <li className='p-1'>2011 - France, Spain, and Holland</li>
            <li className='p-1'>2010 - Chile</li>
            <li className='p-1'>2009 - Panama and Costa Rica</li>
          </ul>
        </div>

        <div className='flex justify-between items-center overflow-hidden rounded-lg bg-neutral-100 m-10 dark:bg-blue-950 hover:shadow-lg lg:mx-0'>
          <span className='p-2 text-lg font-extrabold object-right'>
              <h1 className='object-right m-5'>Photography</h1>
          </span>

          <main className="md:w-[600px] w-[60vw] overflow-hidden rounded-r-lg object-left">
              <div id="slide1" className='rounded-r-lg object-left slide'>
                  <img className='rounded-r-lg object-left image' src={santimiami}/>
                  {/* <a href="#slide3" className="prev arrow">
                      &lt;
                  </a>
                  <a href="#slide2" className="next arrow">
                      &gt;
                  </a>  */}
              </div>
              {/* <div id="slide2" className='rounded-r-lg slide'>
                  <img  className='rounded-r-lg image' src={alisanti}/>
                  <a href="#slide1" className="prev arrow">
                      &lt;
                  </a>
                  <a href="#slide3" className="next arrow">
                      &gt;
                  </a>
              </div>
              <div id="slide3" className="slide">
                  <img className='rounded-r-lg image' src={sanfran}/>
                  <a href="#slide2" className="prev arrow">
                      &lt;
                  </a>
                  <a href="#slide1" className="next arrow">
                      &gt;
                  </a>
              </div> */}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Aboutme


//Dark to light mode is lagging on some of the items
//