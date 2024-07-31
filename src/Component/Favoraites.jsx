import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Favoraites({ setSearch }) {
    const [addFav, setAddFav] = useState(JSON.parse(localStorage.getItem('city')) || []);

    const nav = useNavigate()

    // useEffect(() => {
    //     let data = JSON.parse(localStorage.getItem('city'));
    //     setAddFav(data);
    //     console.log(data); // This updates the state with the parsed data from localStorage
    // }, [addFav]);
    
    const handleDelete = (ele) => {
        
        // let updatedelete = addFav.filter(fav => fav !== ele)
        // setAddFav(updatedelete)
        // localStorage.setItem("city", JSON.stringify(updatedelete));
        // console.log(updatedelete);
    }
    
    // useEffect(() => {
    //     localStorage.setItem('city', JSON.stringify(addFav))
    //     //    console.log(JSON.stringify(allEntry));
    // }, [addFav]);
    
    const setTheCity = (city) => {
        setSearch(city);
        setTimeout(() => {
            nav('/');
        }, 500);
    };

    return (
        <div>
            {
                addFav && addFav.map((ele) => {
                    return (
                        <div  >
                            <div onClick={() => { setTheCity(ele) }}>
                                <h1>{ele}</h1>  {/* Assuming 'city' is a property of your data */}
                            </div>
                            <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={() => { handleDelete(ele) }} >Delete</button>
                        </div>
                    )
                })
            }
        </div>
    );

}
