import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Favrts() {
    const [favdata,setFavdata]=useState([])
    useEffect(()=>{
        fetchings()
    },[])
    const fetchings = () => {
        axios.get("http://localhost:4000/profile")
            .then((res) => {
                console.log(res.data.filter(ele=>ele.favrouties === 1));
                setFavdata(res.data.filter(ele=>ele.favrouties===1));
            })
            .catch((error) => { console.log(error); })
    }

  return (
    <div>
      {
        favdata.map((ele)=>{
            return(
                <div>
                <div className='w-52 h-52 border-2 border-gray-300 m-3' key={ele.id}>
                            <h1>Name : {ele.name}</h1>
                            <p className='font-normal text-base'>Age : {ele.age}</p>
                            <p className='font-normal text-base'>Salary :  {ele.salary}</p>
                            {/* <div className='m-2'> */}
                                {/* <Link to={`/update/${ele.id}`}><button className="btn">Edit</button></Link> */}
                                {/* <button className="btn" onClick={()=>{}}>pop</button> */}
                                {/* <button className="btn" onClick={()=>{addtoFav(ele)}}>Fav</button> */}
                                {/* <button className="btn" onClick={(id)=>{handleDelete(ele.id)}}>Delete</button> */}
                            {/* </div> */}
                        </div>
                </div>
            )
        })
      }
    </div>
  )
}
