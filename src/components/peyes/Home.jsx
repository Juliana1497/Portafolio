import React, { useEffect } from 'react'
import './Home.css'
import Pixel from '../../img/pixel.png'
import {FaCss3Alt, FaHtml5, FaReact} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import Logo2 from '../../img/logo2.png'
import Carrousel from '../../CarrouselWeb'
import CarrouselGame from '../../CarrouselGame'
import { Progress } from 'reactstrap';
import Logo1 from '../../img/logo1.png'
import ParticlesConfig from '../../ParticlesConfig'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(() =>{
    AOS.init()
  }, [])

  return (
    <div>
      <ParticlesConfig/>
    <div className='containerBody'>
        <div className='containerInfo'>
          <div className='images'>
            <img src={Pixel} className='iconPixel' alt="" />
            <img src={Logo1}  className='logo1'alt="" />
          </div>
            <p className='name1'>Ψeimy Dev</p>
            <p className='name'>Junior Full-Stack Web Developer.</p>
            <p className='name'>I have been learning for a short time, but every day with more desire to learn and learning something new every day.</p>
        </div>
        <div id='knowledge'>
            <p className='sub'>KNOWLEDGE</p>
            <p className='name'>HTML</p>
            <div className="languaje">
              <FaHtml5 className='icon1'/>
              <Progress
              color="danger"
              value={70}
              className="progress"
              data-aos="fade-right"
              />
            </div>
            <p className='name'>CSS</p>
            <div className='languaje'>
              <FaCss3Alt className='icon2'/>
              <Progress
              color="primary"
              value={70}
              className="progress"
              data-aos="fade-right"
              />
            </div>
            <p className='name'>JavaScript</p>
              <div className="languaje">
              <IoLogoJavascript className='icon3'/>
              <Progress
              color="warning"
              value={60}
              className="progress"
              data-aos="fade-right"
              />
            </div>
            <p className='name'>React</p>
            <div className="languaje">
              <FaReact className='icon4'/>
              <Progress
              color="purple"
              value={70}
              className="progress"
              data-aos="fade-right"
              />
            </div>
        </div>
        <div id='projects'>
          <p className='sub'>PROJECTS</p>
          <p className='name'>WebPages</p>
          <Carrousel/>
          <p className='name'>Games</p>
          <CarrouselGame/>
        </div>
        <div className='containerLogo'>
          <img src={Logo2} className='logo' alt="" />
        </div>
    </div>
    </div>
  )
}

export default Home