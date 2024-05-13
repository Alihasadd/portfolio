import logo from './logo.svg';
import santisticker from './Assets/santisticker.png';
import './App.css';
import Accordion from './Components/Accordion';
import React, { useState } from 'react'
import One from './One.json';
import Two from './Two.json';
import Modal from './Components/Modal.tsx';




function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
   };
  
   const closeModal = () => {
    setIsModalOpen(false);
   };

  return (
    <div className="App bg-indigo-800">
      <header className="App-header">
        <div className='bg-indigo-500 p-10 text-cyan-500'>This is Santiago</div>
        <img src={santisticker} className="App-logo" alt="logo" />
        <p>
          Here are Santiagos care instructions:
        </p>
        <div>
              <div>
                <main>
                  <header>
                    <h4>Custom Modal</h4>
                  </header>
                  <article>
                    <p onClick={() => openModal(1)}>1</p>
                    <p onClick={() => openModal(2)}>2</p>
                    </article>;
                    <section>
                      <Modal
                        isModalOpen={isModalOpen}
                        modalContent={modalContent}
                        onClose={closeModal}
                      />
                      </section>;
                </main>
              </div>

        </div>
      </header>
      <Accordion />
    </div>
  );
}

export default App;
