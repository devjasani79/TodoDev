import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-900 text-white py-2' >
      <div className="logo">
       
        <div className='font-bold flex gap-2 text-xl mx-9'> <img src="public/logo.png" className='w-10' alt="" />Todo.Dev</div>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Task</li>
    
      </ul>
    </nav>
  )
}

export default Navbar
