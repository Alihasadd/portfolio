import React from 'react'
import Home from './Home'
import Photography from './Photography'
import santisticker from '../Assets/santisticker.png'

function Navbar({openModal}) {


  return (
    <div>
      <nav className='flex flex-row gap-4 items-center'>
      <img src={santisticker} className="App-logo object-scale-down h-20 p-2" alt="logo" />
        <ul className='flex flex-row gap-2'>
          <li className='p-2 rounded-lg bg-cyan-100'>
            <a href="/">Home</a>
          </li>
          <li className='p-2 rounded-lg bg-cyan-100'>
            <a href="/photography">Photography</a>
          </li>
        </ul>
        <button onClick={openModal} className='p-2 rounded-lg bg-cyan-100'>+</button>
      </nav>
    </div>
  )
}

export default Navbar
