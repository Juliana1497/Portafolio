import React, { useEffect, useState } from 'react'
import './Home.css'
import Pixel from '../../img/pixel.png'
import {FaCss3Alt, FaHtml5, FaReact, FaNodeJs, FaGithubSquare} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {GrMysql} from 'react-icons/gr'
import {SiMongodb} from 'react-icons/si'
import Logo2 from '../../img/logo2.png'
import Carrousel from '../../CarrouselWeb'
import CarrouselGame from '../../CarrouselGame'
import { Progress } from 'reactstrap';
import Logo1 from '../../img/logo1.png'
import ParticlesConfig from '../../ParticlesConfig'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Modal from "../peyes/Modal";


const Home = () => {
  const [stateModal, changeState] = useState(false);
  useEffect(() =>{
    AOS.init()
  }, [])

  return (
    <div>
      <ParticlesConfig/>
    <div className='containerBody'>
    <div className="contact">
          <p className="contactP" onClick={() => changeState(!stateModal)}>
            -CONTÁCTAME-
          </p>
        </div>
        <Modal state={stateModal} changeState={changeState} />
        <div className='containerInfo'>
          <div className='images'>
            <img src={Pixel} className='iconPixel' alt="" />
            <img src={Logo1}  className='logo1'alt="" />
          </div>
            <p className='name1'>Ψeimy Dev</p>
            <p className='name'>Desarrolladora Web Full-Stack</p>
            <p className='name'>Llevo poco tiempo aprendiendo, pero cada día con más ganas de aprender y de seguir aprendiendo cada día algo nuevo.</p>
        </div>
        <div id='knowledge'>
            <p className='sub'>CONOCIMIENTOS</p>
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
            <p className='name'>MySQL</p>
            <div className="languaje">
              <GrMysql className='icon6'/>
              <Progress
              color="primary"
              value={70}
              className="progress"
              data-aos="fade-right"
              />
            </div>
            <p className='name'>MongoDB</p>
            <div className="languaje">
              <SiMongodb className='icon7'/>
              <Progress
              color="success"
              value={75}
              className="progress"
              data-aos="fade-right"
              />
            </div>
            <p className='name'>NodeJs</p>
            <div className="languaje">
              <FaNodeJs className='icon7'/>
              <Progress
              color="success"
              value={75}
              className="progress"
              data-aos="fade-right"
              />
            </div>
            <p className='name'>GitHub</p>
            <div className="languaje">
              <FaGithubSquare className='icon6'/>
              <Progress
              color="primary"
              value={65}
              className="progress"
              data-aos="fade-right"
              />
            </div>
        </div>
        <div id='projects'>
          <p className='sub'>PROYECTOS</p>
          <p className='name'>Paginas web</p>
          <Carrousel/>
          <p className='name'>Juegos y Otros</p>
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