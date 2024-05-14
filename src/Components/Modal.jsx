import React from "react";

const Modal = ({setIsModalOpen}) => {
    
    const closeModal = () => {
        setIsModalOpen(false);
    };


 return (
    <div>
    <div>
        <button onClick={closeModal}>-</button>
    </div>
    <div>
        The modal worked!
    </div>
    </div>

 )
        
        
                
           
        
};

                    
export default Modal;