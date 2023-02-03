import React from 'react';
import './Modal.css';
import{AiFillCloseCircle} from 'react-icons/ai'
import emailjs from '@emailjs/browser'

const Modal = ({children,state,changeState}) => {
    
    const sendEmail = (event) =>{
        event.preventDefault();

        emailjs.sendForm('service_tmsoqat','template_4t8nz6s',event.target,'LWZQCxuYgDzKuDqXy')
        .then(response => console.log(response))
        .catch(error =>console.log(error))
    }
  return (
    <>
        {state &&
            <div className="Overlay">
                <div className="containerModal">
                    <div className="headerModal">
                        <h3>Contacto</h3>
                        <AiFillCloseCircle onClick={()=> changeState(false)}/>
                        {children}
                    </div>
                    <form className="mail" onSubmit={sendEmail}>
                        <label>Nombre:</label>
                        <input type="text" name='userName'/>
                        <hr/>

                        <label>Correo:</label>
                        <input type="email" name='userEmail'/>
                        <hr/>

                        <label>Mensage:</label>
                        <textarea name="userMessage" id="" cols="30" rows="5"></textarea>
                        <hr/>
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        }
    </>
  )
}

export default Modal