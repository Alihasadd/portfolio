import React from 'react';
import data  from '../Data/Data';

const CssGrid = () => {
  return (
    <div className='grid grid-cols-3'>
        {data.map ((items, i) => (
            <div key={items.id} className='bg-neutral-100 border-2 rounded-lg m-4'>
                <h2>{items.title}</h2>
                <p>{items.description}</p>
                <p className='border-indigo-500/75 p-2'><img src={items.image} alt="Santi" /></p>
            </div>
        ))}
    </div>
  );
};

export default CssGrid
