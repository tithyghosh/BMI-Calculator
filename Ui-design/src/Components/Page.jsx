import React from 'react'
import Navbar from './Navbar'
import ContentPage from './ContentPage'

const Page = () => {
  return (
    <div className='h-screen w-full bg-white text-black'>
      <Navbar/>
      <ContentPage/>
    </div>
  )
}

export default Page 