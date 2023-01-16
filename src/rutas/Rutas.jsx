import React from 'react'
import {Routes,Route,Navigate} from "react-router-dom"
import Portafolio from "../components/peyes/Home"
import Curriculum from "../components/peyes/Curriculum"

const Rute = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to ="/portafolio"/>} />
        <Route path='/portafolio' element={<Portafolio/>} />
        <Route path='/curriculum' element={<Curriculum/>} />
    </Routes>
  )
}

export default Rute