import React from 'react';
import data  from '../Data/Data';
import Photos from '../Data/Photos';
import { useState } from 'react';
import { useEffect } from 'react';


const Photography = () => {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

  return (
    
    <div className={`${darkMode && 'dark'}`} >
    
        <div className='grid grid-cols-3  dark:bg-rose-950 dark:text-white'>
            {Photos.map ((items, i) => (
                <div key={items.id} className='bg-neutral-100 border-2 rounded-lg m-3 w-50 dark:bg-rose-950 dark:text-white'>
                    <h2 className='font-extrabold text-2xl m-4 text-align-center dark:bg-rose-950 dark:text-white'>{items.title}</h2>
                    <p className='m-4 text-align-justify  dark:bg-rose-950 dark:text-white'>{items.description}</p>
                    <p ><img src={items.image} alt="Code" className='border-indigo-500/75 p-2 rounded-md  dark:bg-rose-950 dark:text-white' /></p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Photography
