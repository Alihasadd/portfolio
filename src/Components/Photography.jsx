import React from 'react';
import Photos from '../Data/Photos';
import { useState } from 'react';
import { useEffect } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';


const Photography = () => {

  return (
    
    <div className=' bg-zinc-200 dark:bg-zinc-950 dark:text-zinc-300 pt-20 min-h-lvh'>
      
      <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                {Photos.map ((items, i) => (
                <div key={items.id} className='bg-neutral-100 rounded-lg m-3 w-50 dark:bg-blue-950 dark:text-white group hover:shadow-lg relative'>
                    <p className='object-contain group overflow-hidden group-hover:rounded-lg rounded-lg'><img src={items.image} alt="Code" className='group-hover:brightness-125 group-hover:rotate-2 group-hover:scale-110 lg:opacity-70 group-hover:opacity-100 object-contain rounded-lg ' /></p>
                    <div className='absolute bottom-0 bg-gradient-to-t group-hover:from-transparent from-neutral-900 w-full rounded-lg group-hover:text-opacity-0 '>
                      <h2 className='group-hover:text-opacity-0 text-l m-2 text-align-center  text-zinc-300 '>{items.title}</h2>
                      {/*<p className='hover:text-opacity-0 m-2 text-xs text-align-justify  dark:bg-blue-950 dark:text-zinc-400'>{items.description}</p>*/}
                    </div>
                </div>
            ))}
                   
                </Masonry>
            </ResponsiveMasonry>

        {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-zinc-200 dark:bg-zinc-950 dark:text-zinc-300 pt-20'>
            {Photos.map ((items, i) => (
                <div key={items.id} className='bg-neutral-100 rounded-lg m-3 w-50 dark:bg-blue-950 dark:text-white group hover:shadow-lg '>
                   
                    
                    <p className='object-contain group overflow-hidden group-hover:rounded-t-lg'><img src={items.image} alt="Code" className='group-hover:brightness-125 group-hover:rotate-3 group-hover:scale-110 group-hover:opacity-80  object-contain dark:bg-blue-950 dark:text-zinc-300 rounded-t-lg' /></p>
                    <h2 className='text-base text-l m-2 text-align-center dark:bg-blue-950 dark:text-zinc-300'>{items.title}</h2>
                    <p className='m-2 text-xs text-align-justify  dark:bg-blue-950 dark:text-zinc-400'>{items.description}</p>
                </div>
            ))}
        </div> */}
    </div>
  );
};

export default Photography



//grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1