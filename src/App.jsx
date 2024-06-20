
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Sharath from './Components/Sharath'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from './Components/Edit'
import { useEffect, useState } from 'react'
import Favrts from './Components/Favrts'
import Tabale from './Components/Tabale'
import Wheather from './Component/Wheather'
import axios from 'axios'
import Favoraites from './Component/Favoraites'
import HomeWh from './comp/HomeWh'
import LeftWh from './comp/LeftWh'

function App() {

  const[search,setSearch]=useState("")
   


  return (
    <>
      <BrowserRouter basename='/'>
        <Routes>
        <Route path='/' element={<Wheather search={search} setSearch={setSearch} />}/>
        <Route path='/fav' element={<Favoraites setSearch={setSearch} />}/>
        </Routes>
      </BrowserRouter> 
    </>
  )
}

export default App
