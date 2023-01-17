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
                        <h3>Contact</h3>
                        <AiFillCloseCircle onClick={()=> changeState(false)}/>
                        {children}
                    </div>
                    <form className="mail" onSubmit={sendEmail}>
                        <label>Name:</label>
                        <input type="text" name='userName'/>
                        <hr/>

                        <label>Email:</label>
                        <input type="email" name='userEmail'/>
                        <hr/>

                        <label>Message:</label>
                        <textarea name="userMessage" id="" cols="30" rows="5"></textarea>
                        <hr/>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        }
    </>
  )
}

export default Modal