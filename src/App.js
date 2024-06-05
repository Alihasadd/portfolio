import logo from './logo.svg';
import santisticker from './Assets/santisticker.png';
import './App.css';
import Accordion from './Components/Accordion';
import React, { useState } from 'react'
import Modal from './Components/Modal';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Photography from './Components/Photography';
import Navbar from './Components/Navbar';
import Code from './Components/Code';
import Layoffguide from './Components/Layoffguide';
import lighticon from './Assets/lighticon.png';
import darkicon from './Assets/darkicon.png';
import Aboutme from './Components/Aboutme';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true);
    };

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark");
    }

  return (
    <div className={`${darkMode && 'dark'}`}>
    <div className=" dark:bg-rose-950 dark:text-white">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      
      <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/code" element={<Code />} />
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





//about me, scrolling with background gentle
//contact me modal
//testimonials
//<button className=' w-10 h-10 rounded-full  bg-white text-white dark:bg-indigo-900' onClick={toggleDarkMode}>{darkMode ?  <img src={lighticon}/> : <img src={darkicon}/>}</button>