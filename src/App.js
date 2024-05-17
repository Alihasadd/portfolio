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

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true);
    };
  

  
  return (
    <div className="App bg-indigo-800 min-h-screen  dark:bg-rose-950 dark:text-white">
      <Navbar openModal={openModal}/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photography" element={<Photography />} />
      </Routes>

      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}/>}
      <header className="App-header">
        {/*sidebar, margin top to make it under the navbar*/}
      </header>
         
      
      <Accordion />
    </div>
  );
}

export default App;
