import React from 'react'

const Navbar = () => {
  return (
    <div className='py-8 px-16 text-black'>
       <div class="navbar shadow-sm">
        <div class="navbar-start">
            <div class="cursor-pointer text-xl w-20 h-10">
                <img src="https://i.pinimg.com/1200x/9c/d1/bf/9cd1bf6c2d1a88e8ac473f62a2898c62.jpg" alt="" className='w-full h-full object-cover'/>
    </div>
  </div>
  <div class="navbar-center flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Menu</a></li>
      <li><a>Location</a></li>
      <li><a>About</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <button class="btn bg-red-700 outline-none">Login</button>
  </div>
</div>
    </div>
  )
}

export default Navbar