import React from 'react'
import './Footer.css'
import {FaGithubSquare,FaLinkedin} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='containerFooter'>
        <FaGithubSquare className='icon5'/>
        <FaLinkedin className='icon5'/>
        <IoMdMail className='icon5'/>
        <div>
            <BsFillArrowUpCircleFill className='icon6'/>
        </div>
    </div>
  )
}

export default Footer