import React from 'react';
import data  from '../Data/Data';
import { useState } from 'react';

const Code = () => {


  return (
    <div>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-zinc-200 dark:bg-rose-950 dark:text-white h-full pt-20'>
        {data.map ((items, i) => (
            <div key={items.id} className='bg-neutral-100 rounded-lg m-3 w-50 dark:bg-rose-950 dark:text-white group hover:shadow-lg'>
              <p className='object-contain group overflow-hidden group-hover:rounded-t-lg '><img src={items.image} alt="Code" className='group-hover:brightness-125 group-hover:rotate--1 group-hover:scale-105 group-hover:opacity-80  object-contain dark:bg-rose-950 dark:text-zinc-300 rounded-t-lg' /></p>
                <h2 className='text-base text-l m-2 text-align-center dark:bg-rose-950 dark:text-zinc-300'>{items.title}</h2>
                <p className='m-2 text-xs text-align-justify  dark:bg-rose-950 dark:text-zinc-400'>{items.description}</p>
                
            </div>
        ))}
    </div>
    </div>
  );
};

export default Code
