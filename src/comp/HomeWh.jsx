import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeWh({search,setSearch}) {
    console.log(apidata);
  return (
    <div>
      <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
      <Link to="/left" ><button>Search</button></Link>
    </div>
  )
}
