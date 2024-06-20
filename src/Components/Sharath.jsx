import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Sharath() {

    const [apidata, SetApidata] = useState([])
    useEffect(() => {
        fetchingData()
    }, [])

    const fetchingData = () => {

        axios.get("http://localhost:4000/profile")
            .then((res) => {
                console.log(res.data);
                SetApidata(res.data)
            })
            .catch((error) => { console.log(error); })
    }
   const handleDelete =(id)=>{

       axios.delete("http://localhost:4000/profile/"+id)
       .then(()=>{fetchingData()})
   }
    const addtoFav=(ele)=>{
        let newobj={
            "name":ele.name,
            "age":ele.age,
            "salary":ele.salary,
            "id":ele.id,
            "favrouties":1

        }
        axios.put("http://localhost:4000/profile/"+ele.id,newobj)
        .then(()=>{
         console.log("hii");
        })
        .catch((err)=>{console.log(err);})
    }


    return (
        <div className='grid grid-cols-4 gap-4 m-2'>
            {
                apidata.map((ele, index) => {
                    return (
                        <div className='w-52 h-52 border-2 border-gray-300 m-3' key={ele.id}>
                            <h1>Name : {ele.name}</h1>
                            <p className='font-normal text-base'>Age : {ele.age}</p>
                            <p className='font-normal text-base'>Salary :  {ele.salary}</p>
                            <div className='m-2'>
                                <Link to={`/update/${ele.id}`}><button className="btn">Edit</button></Link>
                                <button className="btn" onClick={()=>{}}>pop</button>
                                <button className="btn" onClick={()=>{addtoFav(ele)}}>Fav</button>
                                <button className="btn" onClick={(id)=>{handleDelete(ele.id)}}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

