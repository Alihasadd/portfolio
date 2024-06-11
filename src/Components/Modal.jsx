import React from "react";

const Modal = ({setIsModalOpen}) => {
    
    const closeModal = () => {
        setIsModalOpen(false);
    };


 return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
         <div onClick={closeModal} className="bg-black/30 absolute inset-0 ">
    </div>
    <div className="relative bg-white/70 border-2 border-rose-700 p-24 rounded-lg m-5">
        <div>
            <h2 className="text-3xl text-center">Send me a message!</h2>
            <input type="name" placeholder="Name" className="p-5 m-5 rounded-lg border-2 border-rose-700"/>
           
            <input type="email" placeholder="Email" className="p-5 m-5 rounded-lg border-2 border-rose-700"/>
        </div>
        <div>
            <textarea name="message" id="message" placeholder="Message me!" cols="10" rows="10" className="border-rose-700 border-2 rounded-lg w-full p-5 m-5 outline-none"></textarea>
        </div>
        <button className="bg-rose-700 text-white p-5 rounded-lg m-5">Send</button>
    </div>
    </div>

 )
        
        
                
           
        
};

                    
export default Modal;