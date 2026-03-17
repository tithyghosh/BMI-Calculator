import React from 'react'

const LeftContent = () => {
  return (
    <div className='p-4 w-1/2'>
        <h1 className='text-5xl font-extrabold uppercase tracking-wider leading-tight'>
            Your Feet <br />
            Deserve <br />
            The Best
        </h1>
        <p className='text-md text-gray-500 uppercase w-3/4 mt-5'>Your Feet deserve the best and we're here to help you with our shoes. This shoes will help you to run like air.</p>
        <div className='space-x-8 mt-8'>
            <button className='btn bg-red-600'>Shop Now</button>
            <button className='btn btn-outline outline-gray-500'>Catagory</button>
        </div>
    </div>
  )
}

export default LeftContent