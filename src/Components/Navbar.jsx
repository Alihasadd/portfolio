import React from 'react'
import santisticker from '../Assets/santisticker.png'
import githublogo from '../Assets/githublogo.png'
import lighticon from '../Assets/lighticon.png'
import darkicon from '../Assets/darkicon.png'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import santisticker1 from '../Assets/santisticker1.png'


function Navbar({openModal, toggleDarkMode, darkMode, setIsModalOpen}) {

  return (
    <div className="fixed w-full z-10">
      <div className="bg-pink-700 dark:bg-blue-950">
        <nav className='container mx-auto flex justify-between items-center'>
          <div className='flex items-center gap-1'>
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
          <div className='flex items-center gap-1 mr-3 lg:mr-0'>
            <button className=' w-10 h-10 rounded-full p-1 dark:bg-blue-950 text-white hover:shadow-md' onClick={toggleDarkMode}>{darkMode ?  <img src={lighticon}/> : <img src={darkicon}/>}</button>
            <ul className='flex flex-row gap-1 items-center'>
              <li className='p-2 m-1 hover:shadow-md text-white dark:bg-blue-950 dark rounded-full '>
                <a href="https://github.com/Alihasadd" target="_blank" rel="noopener noreferrer"><img src={githublogo} alt="GitHub Logo" className='h-6 rounded-full' /></a>
              </li>

              <li className='flex justify-center items-center hover:shadow-md text-white dark:bg-blue-950 dark rounded-full w-10 h-10 p-2'>
                
                <button  onClick={() => setIsModalOpen(true)} alt="GitHub Logo"><img src={santisticker1} className=' rounded-full  hover:drop-shadow-lg '/></button>
                
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar

//<button onClick={openModal} className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white dark:bg-rose-950 dark'>FAQs</button>