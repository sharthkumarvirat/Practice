import React, { useEffect, useState } from 'react'
import UseFetch from '../CustomHook/UseFetch'
import Left from './Left'
import { Link } from 'react-router-dom'

export default function Wheather({ search, setSearch }) {

  const [apidata, isPending, error, fetching] = UseFetch(search)

  const [addFav, setAddFav] = useState([])

  const addtofav = (search) => {
    if (search !== "") {
      let update = [...addFav, search]
      setAddFav(update);
      console.log(update);
      localStorage.setItem("city", JSON.stringify(update));
      // localStorage.clear();
      //  setSearch("")
    }
  }
  //   useEffect(() => {
  //     localStorage.setItem('city', JSON.stringify(addFav))
  //     //    console.log(JSON.stringify(allEntry));
  // }, [addFav]);

  if (error) {
    return (
      <div>
        <div>
          <h1>{error.message}</h1>
        </div>
        <div>
          <input style={{ width: "200px", height: "40px" }} type="text" onChange={(e) => { setSearch(e.target.value) }} />
          <button onClick={fetching}>search city</button>
          {/* <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button> */}
        </div>
      </div>
    )
  }
  else {
    return (
      <div className='flex justify-center ites-center w-full gap-2'>
        <input type="text" style={{ width: "200px", height: "40px" }} value={search} onChange={(e) => { setSearch(e.target.value) }} />
        <button className='btn btn-secondary' onClick={fetching}>search</button>
        <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>

        <button className='btn btn-primary' onClick={() => { addtofav(search) }}>add favourate</button>

        <Link to='/fav'><button className='btn btn-secondary'>go to favorate</button> </Link>
        
        <div>
          {!isPending && <Left data={apidata} search={search} />}
        </div>
      </div>
    )
  }
}
