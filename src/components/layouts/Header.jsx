import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='containerHeader'>
      <div className='nav'>
          <Link to='/portafolio'>
            <p>Home</p>
          </Link>
          <a href="#knowledge"><p>Knowledge</p></a> 
          <a href="#projects"><p>Projects</p></a> 
          <Link to='/curriculum'>
            <p>Curriculum</p>
          </Link>
      </div>
      <div className='contact'>
        <p>-CONTAC ME-</p>
      </div>
  </div>
  )
}

export default Header