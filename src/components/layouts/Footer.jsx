import React from 'react'
import './Footer.css'
import {FaGithubSquare,FaLinkedin} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const Footer = () => {
  const scrollUp = () =>{
    var currentScrooll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currentScrooll>0){
      window.scrollTo (0, 0)
    }
  }
  return (
    <div className='containerFooter'>
      <a href="https://github.com/Juliana1497">
        <FaGithubSquare className='icon5'/>
      </a>
        <FaLinkedin className='icon5'/>
        <IoMdMail className='icon5'/>
        <div>
            <BsFillArrowUpCircleFill className='icon6' onClick={()=>scrollUp()}/>
        </div>
    </div>
  )
}

export default Footer