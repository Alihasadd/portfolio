import React from 'react'
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import { countries } from '../Data/Countries';

function Worldmap() {
  return (
    <div className='rounded-lg snap-center flex justify-center m-5'>
        <div className=' h-96 w-5/6 bg-blue-500 '>
            <VectorMap 
                map={worldMill}  />

      </div>
    </div>
  );
}

export default Worldmap;
