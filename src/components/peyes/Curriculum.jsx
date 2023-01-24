import React from 'react'
import Perfil from '../../img/foto1.png'
import './Curriculum.css'
import Logo2 from '../../img/logo2.png'
import { Chart as ChartJS, ArcElement, Tooltip} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import Snow from '../../Snow'

ChartJS.register(
  ArcElement, Tooltip
);

const Curriculum = () => {
  const data ={
    datasets: [{
      label: 'Poll',
      data:[1,8],
      backgroundColor: ['black', '#008037'],
      borderColor: ['black', '#008037'],
    }]
  }

  return (
    <div>
      <Snow/>
      <div className='infoCurri'>
        <img src={Perfil} className='photo' alt="" />
        <p className='description'>Yeimy Juliana Cristancho Niño</p>
        <p className='description'>Junior Full-Stack Web Developer.</p>
        <p className='description'>Interested in putting into practice and increasing my skills in Front-end and Backend web programming. Characterized by being a committed person with easy adaptability.</p>
      </div>
      <div>
        <div className='containerTitles'>
          <p>ACADEMIC TRAINING</p>
        </div>
        <ul className='infoHV'>
          <li className='description'>Web Developer Full-Stack <br/> Programate, 2023</li>
          <li className='description'>Psychology <br/> Universidad Católica de Colombia, 2020</li>
          <li className='description'>Academic bachelor <br/> Saludcoop sur, 2013</li>
        </ul>
      </div>
      <div>
        <div className='containerTitles'>
          <p>OTHER KNOWLEDGE</p>
        </div>
        <ul className='infoHV'>
          <li className='description'>Mobile application developer <br/> MinTic-IBM, 2022.</li>
          <li className='description'>Advanced Excel <br/> Universidad Manuela Beltran, 2021.</li>
        </ul>
      </div>
      <div>
        <div className='containerTitles'>
          <p>lANGUAJES</p>
        </div >
        <ul className='infoHV'>
          <li className='description'>Intermediate english language <br/> Oral level: Basic | Written: Intermediate.</li>
        </ul>
      </div>
      <div>
        <div className='containerTitles'>
          <p>SKILLS</p>
        </div>
        <div className='infoSkill'>
          <div className='skill'>
            <Doughnut data ={data}
               className="donut"/>
            <p className='description'>Assertive communication</p>
          </div>
          <div className='skill'>
            <Doughnut data ={data}
               className="donut"/>
            <p className='description'>Achievement orientation</p>
          </div>
          <div className='skill'>
            <Doughnut data ={data}
               className="donut"/>
            <p className='description'>Teamwork</p>
          </div>
          <div className='skill'>
            <Doughnut data ={data}
               className="donut"/>
            <p className='description'>Personal effectiveness</p>
          </div>
        </div>
      </div>
      <div className='containerLogo'>
          <img src={Logo2} className='logo' alt="" />
        </div>
    </div>
  )
}

export default Curriculum