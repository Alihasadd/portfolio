import React from 'react'
import Home from './Home'
import Photography from './Photography'
import santisticker from '../Assets/santisticker.png'
import { useState } from 'react'
import githublogo from '../Assets/githublogo.png'
import lighticon from '../Assets/lighticon.png'
import darkicon from '../Assets/darkicon.png'


function Navbar({openModal}) {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }


  return (
    <div className={`${darkMode && 'dark'}`}>
        
      <nav className='flex justify-between items-center bg-white dark:bg-indigo-900 '>
      <div className='flex items-center gap-2'>
      <img src={santisticker} className="App-logo object-scale-down h-10 p-1" alt="logo" />
       
        <ul className='flex flex-row gap-2 '>
          <li className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600  dark:bg-rose-950 dark text-slate-200 hover:text-white'>
            <a href="/">Coding</a>
          </li>
          <li className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600  dark:bg-rose-950 dark text-slate-200 hover:text-white'>
            <a href="/photography">Photos</a>
          </li>
          <li className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600  dark:bg-rose-950 dark text-slate-200 hover:text-white'>
            <a href="/accordion">FAQs</a>
          </li>
          <li className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600  dark:bg-rose-950 dark text-slate-200 hover:text-white'>
            <a href="/accordion">LO Guide</a>
          </li>
       </ul>
        
        </div>
        <div className='flex items-center gap-2 m-2'>
            <button className=' w-10 h-10 rounded-full  bg-white text-white dark:bg-indigo-900' onClick={toggleDarkMode}>{darkMode ?  <img src={lighticon}/> : <img src={darkicon}/>}</button>
        <ul className='flex flex-row gap-2'>
          
          <li className='p-2 bg-indigo-500 hover:bg-indigo-200 text-white dark:bg-rose-950 dark rounded-full '>
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