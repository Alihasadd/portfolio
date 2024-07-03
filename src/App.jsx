import './App.css';
import Accordion from './Components/Accordion';
import React, { useState } from 'react'
import Modal from './Components/Modal';
import { Routes, Route } from "react-router-dom";
import Photography from './Components/Photography';
import Navbar from './Components/Navbar';
import Code from './Components/Code';
import Layoffguide from './Components/Layoffguide';
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
      <div>

    <div className=" dark:bg-zinc-950 dark:text-white bg-zinc-200">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} setIsModalOpen={setIsModalOpen}/>
      
      <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/code" element={<Code />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/hr" element={<Layoffguide />} />
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

