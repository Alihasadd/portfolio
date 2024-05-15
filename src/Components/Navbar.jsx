import React from 'react'
import Home from './Home'
import Photography from './Photography'
import santisticker from '../Assets/santisticker.png'

function Navbar({openModal}) {


  return (
    <div>
      <nav className='flex flex-row gap-4 items-center bg-white'>
      <img src={santisticker} className="App-logo object-scale-down h-20 p-2" alt="logo" />
        <ul className='flex flex-row gap-2'>
          <li className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white'>
            <a href="/">Home</a>
          </li>
          <li className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white'>
            <a href="/photography">Photography</a>
          </li>
        </ul>
        <button onClick={openModal} className='p-2 rounded-lg bg-indigo-700 hover:bg-indigo-600 text-white'>+</button>
        
      </nav>
    </div>
  )
}

export default Navbar
