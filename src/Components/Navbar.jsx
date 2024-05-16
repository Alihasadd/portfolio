import React from 'react'
import Home from './Home'
import Photography from './Photography'
import santisticker from '../Assets/santisticker.png'
import { useState } from 'react'

function Navbar({openModal}) {


  return (
    <div>
        
      <nav className='flex justify-between items-center bg-white dark:bg-indigo-900'>
      <div className='flex items-center gap-2'>
      <img src={santisticker} className="App-logo object-scale-down h-10 p-1" alt="logo" />
       
        <ul className='flex flex-row gap-2'>
          <li className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white dark:bg-rose-950 dark'>
            <a href="/">Home</a>
          </li>
          <li className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white dark:bg-rose-950 dark'>
            <a href="/photography">Photography</a>
          </li>
        </ul>
        <button onClick={openModal} className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white dark:bg-rose-950 dark'>+</button>
        </div>

        <div className='flex items-center gap-2 m-2'>
        <ul className='flex flex-row gap-2'>
          <li className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white dark:bg-rose-950 dark'>
            <a href="/">Contact</a>
          </li>
          <li className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white dark:bg-rose-950 dark'>
            <a href="/photography">Github</a>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar