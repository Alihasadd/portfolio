import React from 'react';
import { items } from '../Data/Data';
import { data } from '../Data/Data';

const CssGrid = () => {
  return (
    <div className='grid-cols-3 auto-rows-[300px]'>
        {data.map ((items, i) => (
            <div key={data.id} className='bg-neutral-100 border-2 rounded-lg'>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <p>{data.image}</p>
            </div>
        ))}
    </div>
  );
};

export default CssGrid
