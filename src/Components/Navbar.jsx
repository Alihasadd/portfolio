import React from 'react'
import Home from './Home'
import Photography from './Photography'
import santisticker from '../Assets/santisticker.png'
import githublogo from '../Assets/githublogo.png'
import lighticon from '../Assets/lighticon.png'
import darkicon from '../Assets/darkicon.png'


function Navbar({openModal, toggleDarkMode, darkMode}) {
   


  return (
    <div className="fixed w-full ">
        
      <nav className='flex justify-between items-center bg-pink-700 dark:bg-blue-950 '>
      <div className='flex items-center gap-2 '>
        <a href="/"><img src={santisticker} className="App-logo object-scale-down h-10 p-1" alt="logo" /></a>
       
        <ul className='flex flex-row gap-2 '>
        
          <li className='p-2 rounded-lg  hover:shadow-md hover:bg-pink-800 dark:hover:bg-blue-800 hover:dark:bg-blue-950 dark:bg-blue dark text-slate-200 dark:text-white'>
            <a href="/code">Code</a>
          </li>
          <li className='p-2 rounded-lg  hover:shadow-md hover:bg-pink-800 hover:dark:bg-blue-800 hover:dark:bg-blue-950 dark:bg-purple dark text-slate-200 dark:text-white'>
            <a href="/photography">Photos</a>
          </li>
          <li className='p-2 rounded-lg   hover:shadow-md hover:bg-pink-800 hover:dark:bg-blue-800 hover:dark:bg-blue-950 dark:bg-purple dark text-slate-200 dark:text-white'>
            <a href="/accordion">FAQs</a>
          </li>
          <li className='p-2 rounded-lg   hover:shadow-md hover:bg-pink-800 hover:dark:bg-blue-800 hover:dark:bg-blue-950 dark:bg-purple dark text-slate-200 dark:text-white'>
            <a href="/accordion">LO Guide</a>
          </li>
       </ul>
        
        </div>
        <div className='flex items-center gap-2 m-2'>
            <button className=' w-10 h-10 rounded-full  dark:bg-blue-950 text-white hover:shadow-md' onClick={toggleDarkMode}>{darkMode ?  <img src={lighticon}/> : <img src={darkicon}/>}</button>
        <ul className='flex flex-row gap-2'>
          
          <li className='p-2  hover:bg-indigo-200 hover:shadow-md text-white dark:bg-blue-950 dark rounded-full '>
            <a href="https://github.com/Alihasadd" target="_blank" rel="noopener noreferrer"><img src={githublogo} alt="GitHub Logo" className='h-6 rounded-full' /></a>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar


//<button onClick={openModal} className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white dark:bg-rose-950 dark'>FAQs</button>