import React from 'react'
import './Home.css'
import Pixel from '../../img/pixel.png'
import {FaCss3Alt, FaHtml5, FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import Logo2 from '../../img/logo2.png'
import Carrousel from '../../Carrousel'


const Home = () => {
  return (
    <div className='containerBody'>
        <div className='containerInfo'>
            <img src={Pixel} className='iconPixel' alt="" />
            <p className='name1'>Ψeimy Dev</p>
            <p className='name'>Junior Full-Stack Web Developer.</p>
            <p className='name'>I have been learning for a short time, but every day with more desire to learn and learning something new every day.</p>
        </div>
        <div id='knowledge'>
            <p className='sub'>KNOWLEDGE</p>
            <p className='name'>HTML</p>
            <FaHtml5 className='icon1'/>
            <p className='name'>CSS</p>
            <FaCss3Alt className='icon2'/>
            <p className='name'>JavaScript</p>
            <IoLogoJavascript className='icon3'/>
            <p className='name'>React</p>
            <FaReact className='icon4'/>
        </div>
        <div id='projects'>
          <p className='sub'>PROJECTS</p>
          <p className='name'>WebPages</p>
          <Carrousel/>
          <p className='name'>Games</p>
        </div>
        <div>
          <img src={Logo2} className='logo' alt="" />
        </div>
    </div>
    
  )
}

export default Home