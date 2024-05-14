import React from 'react'
import Home from './Home'
import Photography from './Photography'
import santisticker from '../Assets/santisticker.png'

function Navbar({openModal}) {


  return (
    <div>
      <nav>
      <img src={santisticker} className="App-logo" alt="logo" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/photography">Photography</a>
          </li>
        </ul>
        <button onClick={openModal}>+</button>
      </nav>
    </div>
  )
}

export default Navbar
