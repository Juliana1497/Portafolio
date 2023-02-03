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
        <p className='description'>Diseñadora Web Full-Stack</p>
        <p className='description'>Desarrolladora Web Full-Stack (Fronted y Backend), con conocimientos en lenguajes de programación (HTML,CSS, JavaScript, React) y Excel. He trabajado en proyectos creando webs dinamicas e interactivas. Interesada en poner en práctica, aumentar mis conocimientos y habilidades en programación web Frontend y Backend. Caracterizada por ser una persona autodidacta, comprometida, de fácil adaptabilidad.</p>
      </div>
      <div>
        <div className='containerTitles'>
          <p>ENTRENAMIENTO ACADÉMICO</p>
        </div>
        <ul className='infoHV'>
          <li className='description'>Desarrolladora Web Full-Stack Programate, 2023 <br/> Fundación educamás, Programate Academy 2023</li>
          <li className='description'>Psicologá <br/> Universidad Católica de Colombia, 2020</li>
          <li className='description'>Bachiller Académica<br/> Saludcoop sur, 2013</li>
        </ul>
      </div>
      <div>
        <div className='containerTitles'>
          <p>OTROS CONOCIMIENTOS</p>
        </div>
        <ul className='infoHV'>
          <li className='description'>Diseño de aplicaciones mobiles<br/> MinTic-IBM, 2022.</li>
          <li className='description'>Excel Avanzado<br/> Universidad Manuela Beltran, 2021.</li>
        </ul>
      </div>
      <div>
        <div className='containerTitles'>
          <p>IDIOMAS</p>
        </div >
        <ul className='infoHV'>
          <li className='description'>Ingles Intermedio:B1 <br/> Nivel Oral: Basico | Escrito: Intermedio.</li>
        </ul>
      </div>
      <div>
        <div className='containerTitles'>
          <p>HABILIDADES</p>
        </div>
        <div className='infoSkill'>
          <div className='skill'>
            <Doughnut data ={data}
               className="donut"/>
            <p className='description'>Comunicación asertiva</p>
          </div>
          <div className='skill'>
            <Doughnut data ={data}
               className="donut"/>
            <p className='description'>Orientación al logro</p>
          </div>
          <div className='skill'>
            <Doughnut data ={data}
               className="donut"/>
            <p className='description'>Trabajo en equipo</p>
          </div>
          <div className='skill'>
            <Doughnut data ={data}
               className="donut"/>
            <p className='description'>Efectividad personal</p>
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