import React from 'react'
import Photos from '../Data/Photos';

export const Carousel = ({ data }) => {
  return (
    <div>
      {data.map((item, idx) => {
        return <img src={item.src} alt={item.alt} key={idx}/>
      })}
    </div>
  )
}

export default Carousel
