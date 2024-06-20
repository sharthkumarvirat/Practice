import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className='flex items-center justify-around w-full h-20 border-b-2 border-indigo-500 bg-slate-700 '>
        <Link to='/' ><a className='font-sembold text-base text-white'>Create User</a> </Link>
        <Link to='/users'><a className='font-sembold text-base text-white'> User</a> </Link>
        <Link to='/fav' ><a className='font-sembold text-base text-white'> fav</a></Link>
      </div>
    </div>
  )
}
