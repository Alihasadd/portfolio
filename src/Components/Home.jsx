import React from 'react'
import santisticker from '../Assets/santisticker.png'
import couponApp from '../Assets/couponapp.png'
import blog from '../Assets/blog.png'

function Home() {
  return (
    <div className=''>
      <div className='flex flex-row gap-4 items-center m-10' >
            <div className='bg-white rounded-lg p-10'>
                <img src={santisticker} className="object-scale-down bg-white rounded-lg w-50;" alt="logo" />
                <h3>Santiago</h3>
            </div>

            <div className='bg-white rounded-lg p-10'>
            <img src={couponApp} className="object-scale-down bg-white rounded-lg w-50;" alt="logo" />
                <h3></h3>
            </div>

            <div className='bg-white rounded-lg p-10'>
            <img src={blog} className="object-scale-down bg-white rounded-lg w-50;" alt="logo" />
                <h3></h3> 
            </div>

            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Home
