import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UseFetch(search) {
    
    const [apidata, setApiData] = useState ([]);
    const [isPending, setIspending] = useState(true);
    const [error, setError] = useState(null);
    let api_key = '254fd3f4518eadaf1a26287b44021b87';
    
    useEffect(() => {
        if (search!=="") {
            fetching()   
        }
    }, [])

    const fetching = () => {

      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${api_key}&units=metric`)
        .then((res) => {
          console.log(res.data.list); setApiData(res.data.list); setIspending(false); setError(null)
        })
        .catch((err) => {
          console.log(err);
          setError(err)
        });
    }

  return[apidata,isPending,error,fetching]
}
