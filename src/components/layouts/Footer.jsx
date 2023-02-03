import React,{useState} from 'react'
import './Footer.css'
import {FaGithubSquare,FaLinkedin} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
import Modal from '../peyes/Modal'

const Footer = () => {
  const [stateModal,changeState] = useState(false);
  const scrollUp = () =>{
    var currentScrooll = document.documentElement.scrollTop || document.body.scrollTop;
    if(currentScrooll>0){
      window.scrollTo (0, 0)
    }
  }
  return (
    <div>
    <div className='containerFooter'>
      <a target="_blank" href="https://github.com/Juliana1497">
        <FaGithubSquare className='icon5'/>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/yeimy-juliana-cristancho-ni%C3%B1o-8a0856234/">
        <FaLinkedin className='icon5'/>
      </a>
        <IoMdMail className='icon5' onClick={() => changeState(!stateModal)}/>
        <div>
            <BsFillArrowUpCircleFill className='icon8' onClick={()=>scrollUp()}/>
        </div>
    </div>
    <Modal state={stateModal} changeState={changeState}/>
    </div>
  )
}

export default Footer