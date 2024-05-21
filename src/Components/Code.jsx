import React from 'react';
import data  from '../Data/Data';
import { useState } from 'react';

const Code = () => {


  return (
    <div>
    <div className='grid grid-cols-3 bg-zinc-200 dark:bg-rose-950 dark:text-white'>
        {data.map ((items, i) => (
            <div key={items.id} className='bg-white justify-center rounded-lg m-3 w-50  dark:bg-rose-950 dark:text-white'>
                <h2 className='font-extrabold text-2xl m-4 text-align-center  dark:bg-rose-950 dark:text-white dark:#613051'>{items.title}</h2>
                <p className='m-4 text-align-justify  dark:bg-rose-950 dark:text-white'>{items.description}</p>
                <p className='m-2'><img src={items.image} alt="Code" className='border border-indigo-500/75 rounded-md h-48 ' /></p>
            </div>
        ))}
    </div>
    </div>
  );
};

export default Code
