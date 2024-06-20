import React from 'react'
import Wheather from './Wheather';

export default function Left({ data, search }) {
    // console.log(data);
    return (
        <div>
            <div>
                <h1>{search.toUpperCase()}</h1>
                <div>
                    <h1>{data[0].dt_txt.split(" ")[0]}</h1>
                </div>
                <div>
                    <h1>{data[0].main.temp}</h1>
                    <h1>{data[0].weather[0].description}</h1>
                </div>
            </div>
            <div>
                <h1 style={{ color: 'blue' }} >Air Conditions</h1>
                <div>
                    <div>
                        <h1>{data[0].main.humidity}</h1>F
                        <h1>{data[0].main.feels_like}</h1>
                        <h1>{data[0].main.temp_max}</h1>
                    </div>
                </div>
                <h1 style={{ color: "red" }}>todays forcast</h1>
                <div>
                    {
                        data.slice(0, 6).map((element, index) => {
                            return (
                                <div key={element.main.temp}>
                                    <div>
                                        <h1>{element.main.temp}</h1>
                                        <h1>{element.dt_txt.split(" ")[1]}</h1>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
