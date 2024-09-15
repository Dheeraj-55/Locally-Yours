import React from 'react'
import {Search} from 'lucide-react';
function Header() {
  return (
    <div className='p-5 shadow-sm bg-white border-b-2 flex justify-between'>
        <div className='flex gap-2 items-center
        p-2 border rounded-md max-w-lg bg-white'>
        <Search/>
        <input type='text' placeholder='Search...'
        className='outline-none'></input>
        </div>
        <div ><h2 className='bg-primary p-1 rounded-full text-xs text-white px-2'>🔥Join Membership just for $9.99/MoNTH</h2></div>
    </div>
  )
}

export default Header