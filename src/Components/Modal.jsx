import React from "react";
import { useState } from "react";


const Modal = ({setIsModalOpen}) => {

    const [val, setVal] = useState("");

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
      })
    
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

 return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
         <div onClick={closeModal} className="bg-black/70 absolute inset-0 ">
    </div>
    <div className="relative bg-white/70 border-2 border-rose-700 dark:border-indigo-950 p-20 rounded-lg m-5">
        <div>
            <h2 className="text-3xl text-center">Message me!</h2>
            <form action="" className="flex flex-col">
            <input type="name" placeholder="Name" className="p-3 m-5 rounded-lg border-2 border-rose-700 dark:border-indigo-950 w-80" required/>

            <input type="email" placeholder="Email" className="p-3 m-5 rounded-lg border-2 border-rose-700 dark:border-indigo-950 w-80" required/>
        
            <textarea name="message" id="message" placeholder="Message me!" cols="3" rows="5" className="border-rose-700 dark:border-indigo-950 border-2 rounded-lg l p-3 m-5 outline-none w-80" required></textarea>
            <button type="submit" className="bg-rose-700 dark:bg-indigo-950 text-white p-5 rounded-lg m-5">Send</button>
        </form>
        
        </div>
    </div>
    </div>

 )
        
        
                
           
        
};

                    
export default Modal;