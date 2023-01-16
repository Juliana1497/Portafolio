import React from 'react'
import Perfil from '../../img/foto1.png'

const Curriculum = () => {
  return (
    <div>
      <img src={Perfil} alt="" />
      <p>Yeimy Juliana Cristancho Niño</p>
      <p>Junior Full-Stack Web Developer.</p>
      <p>Interested in putting into practice and increasing my skills in Front-end and Backend web programming. Characterized by being a committed person with easy adaptability.</p>
      <div>
        <div>
          <p>ACADEMIC TRAINING</p>
        </div>
        <ul>
          <li>Web Developer Full-Stack <br/> Programate, 2023</li>
          <li>Psychology <br/> Universidad Católica de Colombia, 2020</li>
          <li>Academic bachelor <br/> Saludcoop sur, 2013</li>
        </ul>
      </div>
      <div>
        <div>
          <p>OTHER KNOWLEDGE</p>
        </div>
        <ul>
          <li>Mobile application developer <br/> MinTic-IBM, 2022.</li>
          <li>Advanced Excel <br/> Universidad Manuela Beltran, 2021.</li>
        </ul>
      </div>
      <div>
        <div>
          <p>lANGUAJES</p>
        </div>
        <ul>
          <li>Intermediate english language <br/> Oral level: Basic | Written: Intermediate.</li>
        </ul>
      </div>
      <div>
        <div>
          <p>SKILLS</p>
        </div>
        <div>
          <p>Assertive communication</p>
        </div>
        <div>
          <p>Achievement orientation</p>
        </div>
        <div>
          <p>Teamwork</p>
        </div>
        <div>
          <p>Personal effectiveness</p>
        </div>
      </div>
    </div>
  )
}

export default Curriculum