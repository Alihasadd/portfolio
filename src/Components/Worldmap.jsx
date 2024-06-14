import React from 'react'
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import { countries } from '../Data/Countries';

function Worldmap() {
  return (
    <div>
        <h1>HERE</h1>
        <div className='h-96 w-96 bg-blue-500'>
            <VectorMap 
                map={worldMill}  />
            <h2>WHYYYYY</h2>
      </div>
    </div>
  );
}

export default Worldmap;
