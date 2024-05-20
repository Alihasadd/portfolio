import React from 'react';
import data  from '../Data/Data';
import { useState } from 'react';

const CssGrid = () => {

    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

  return (
    <div className={`${darkMode && 'dark'}`} >
    <div className='grid grid-cols-3  dark:bg-rose-950 dark:text-white'>
        {data.map ((items, i) => (
            <div key={items.id} className='bg-neutral-100 border-2 rounded-lg m-3 w-50  dark:bg-rose-950 dark:text-white'>
                <h2 className='font-extrabold text-2xl m-4 text-align-center  dark:bg-rose-950 dark:text-white'>{items.title}</h2>
                <p className='m-4 text-align-justify  dark:bg-rose-950 dark:text-white'>{items.description}</p>
                <p ><img src={items.image} alt="Code" className='p-1 border border-indigo-500/75 rounded-md' /></p>
            </div>
        ))}
    </div>
    </div>
  );
};

export default CssGrid
