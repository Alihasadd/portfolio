import logo from './logo.svg';
import santisticker from './Assets/santisticker.png';
import './App.css';
import Accordion from './Components/Accordion';
import React, { useState } from 'react'
import One from './One.json';
import Two from './Two.json';
import Modal from './Components/Modal';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Photography from './Components/Photography';
import Navbar from './Components/Navbar';
import CssGrid from './Components/CssGrid';
import Layoffguide from './Components/Layoffguide';
import lighticon from './Assets/lighticon.png';
import darkicon from './Assets/darkicon.png';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

  return (
    <div className={`${darkMode && 'dark'}`}>
    <div className="App bg-indigo-800 min-h-screen  dark:bg-rose-950 dark:text-white">
      <Navbar/>
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/layoffguide" element={<Layoffguide />} />
      </Routes>

      

      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/>}
      <header className="App-header">
        {/*sidebar, margin top to make it under the navbar*/}
      </header>
         
      
    </div>
    </div>
  );
}

export default App;




//introduction
//about me, scrolling with background gentle
//contact me modal
//testimonials
//usestate of dark and light mode
//<button className=' w-10 h-10 rounded-full  bg-white text-white dark:bg-indigo-900' onClick={toggleDarkMode}>{darkMode ?  <img src={lighticon}/> : <img src={darkicon}/>}</button>