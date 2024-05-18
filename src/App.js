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
    <div className={`${darkMode && 'dark'}`} >
    <div className="App bg-indigo-800 min-h-screen  dark:bg-rose-950 dark:text-white">
      <Navbar openModal={openModal} className={`${darkMode && 'dark'}`}/>
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
//