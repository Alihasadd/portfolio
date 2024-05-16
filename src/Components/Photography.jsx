import React from 'react';
import data  from '../Data/Data';
import Photos from '../Data/Photos';


const Photography = () => {
  return (
    <div className='grid grid-cols-3'>
        {Photos.map ((items, i) => (
            <div key={items.id} className='bg-neutral-100 border-2 rounded-lg m-3 w-50 '>
                <h2 className='font-extrabold text-2xl m-4 text-align-center'>{items.title}</h2>
                <p className='m-4 text-align-justify'>{items.description}</p>
                <p ><img src={items.image} alt="Code" className='border-indigo-500/75 p-2 rounded-md' /></p>
            </div>
        ))}
    </div>
  );
};

export default Photography
