import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Home from "../components/peyes/Home"
import Curriculum from "../components/peyes/Curriculum"

const Rute = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to ="/home"/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/curriculum' element={<Curriculum/>} />
    </Routes>
  )
}

export default Rute