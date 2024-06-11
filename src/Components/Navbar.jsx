import React from 'react'
import santisticker from '../Assets/santisticker.png'
import githublogo from '../Assets/githublogo.png'
import lighticon from '../Assets/lighticon.png'
import darkicon from '../Assets/darkicon.png'
import { Link } from 'react-router-dom'


function Navbar({openModal, toggleDarkMode, darkMode}) {

  return (
    <div className="fixed w-full z-10">
        
      <nav className='flex justify-between items-center bg-pink-700 dark:bg-blue-950 '>
      <div className='flex items-center gap-1 '>
        
        
       
        <ul className='flex flex-row gap-1 '>
          <li className='p-1 ml-2 rounded-lg w-16 flex justify-center hover:shadow-md hover:bg-pink-800 dark:md:hover:bg-blue-800 hover:dark:bg-blue-950 dark:bg-blue dark text-slate-200 dark:text-white'>
            <Link to="/">Me</Link>
          </li>
          <li className='p-1 rounded-lg w-16 flex justify-center hover:shadow-md hover:bg-pink-800 dark:md:hover:bg-blue-800 hover:dark:bg-blue-950 dark:bg-blue dark text-slate-200 dark:text-white'>
            <Link to="/code">Code</Link>
          </li>
          <li className='p-1 rounded-lg w-16 flex justify-center hover:shadow-md hover:bg-pink-800 dark:md:hover:bg-blue-800 hover:dark:bg-blue-950 dark:bg-purple dark text-slate-200 dark:text-white'>
            <Link to="/photography">Photo</Link>
          </li>
          <li className='p-1 rounded-lg flex justify-center w-16 hover:shadow-md hover:bg-pink-800 dark:md:hover:bg-blue-800 hover:dark:bg-blue-950 dark:bg-purple dark text-slate-200 dark:text-white'>
            <Link to="/accordion">FAQs</Link>
          </li>
          <li className='p-1 rounded-lg w-16 flex justify-center hover:shadow-md hover:bg-pink-800 dark:md:hover:bg-blue-800 hover:dark:bg-blue-950 dark:bg-purple dark text-slate-200 dark:text-white'>
            <Link to="/hr">HR</Link>
          </li>
       </ul>
        
        </div>
        <div className='flex items-center gap-2 m-2'>
            <button className=' w-10 h-10 rounded-full p-1 dark:bg-blue-950 text-white hover:shadow-md' onClick={toggleDarkMode}>{darkMode ?  <img src={lighticon}/> : <img src={darkicon}/>}</button>
        <ul className='flex flex-row gap-2'>
          
          <li className='p-2  hover:shadow-md text-white dark:bg-blue-950 dark rounded-full '>
            <a href="https://github.com/Alihasadd" target="_blank" rel="noopener noreferrer"><img src={githublogo} alt="GitHub Logo" className='h-6 rounded-full' /></a>
          </li>

          <li className='p-2  hover:shadow-md text-white dark:bg-blue-950 dark rounded-full '>
            <Link to="/"><img src={santisticker} alt="GitHub Logo" className='h-6 rounded-full' /></Link>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

//<button onClick={openModal} className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white dark:bg-rose-950 dark'>FAQs</button>