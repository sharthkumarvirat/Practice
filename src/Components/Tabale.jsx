import React, { useState } from 'react'

export default function Tabale() {
    const [row, setRow] = useState([]);
        // console.log(row);_\
    const addrow = () => {
        let newRow = {

            Name: "",
            Age: "",
            Salary: "",
            Loacation: ""
        }
        setRow([...row, newRow]);
    }
    const handleChange = (index, column, value) => {
        // console.log(index + " " + column +" " + value);

        const updatedRows = [...row];
        
        updatedRows[index][column] = value;
        // console.log(updatedRows);
        setRow(updatedRows);
    };

    const handleSubmit=()=>{
        // console.log(row);
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Salary</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            row.map((item,index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type="text"
                                                value={item.Name}
                                                onChange={(e) => handleChange(index, 'Name', e.target.value)}
                                            /></td>
                                        <td>   <input
                                            type="text"
                                            value={item.Age}
                                            onChange={(e) => handleChange(index, 'Age', e.target.value)}
                                        />
                                        </td>
                                        <td><input
                                            type="text"
                                            value={item.Salary}
                                            onChange={(e) => handleChange(index, 'Salary', e.target.value)}
                                        />
                                        </td>
                                        <td><input
                                            type="text"
                                            value={item.Location}
                                            onChange={(e) => handleChange(index, 'Location', e.target.value)}
                                        /></td>
                                    </tr>
                                )
                            })

                        }

                    </tbody>
                </table>
            </div>

            <button onClick={addrow}>click</button>

            <button onClick={handleSubmit} className="btn">Submit</button>

        </div>
    )
}
