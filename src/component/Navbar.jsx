import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-around items-cente">
        <div className="logo text-black p-3 m-3 font-serif text-2xl italic font-bold cursor-pointer hover:not-italic">
          iTasks
        </div>
         <nav>
            <ul className='flex gap-5 text-white list-none m-3 font-serif italic font-semibold'>
                <NavLink className="text-black p-3" to="/"><li className='cursor-pointer hover:not-italic '>Home</li></NavLink>
                <NavLink className="text-white bg-purple-800 rounded-full p-3"to="/about"><li className='cursor-pointer hover:not-italic'>AboutTodo</li></NavLink>
            </ul>
         </nav>
    </div>
  )
}

export default Navbar