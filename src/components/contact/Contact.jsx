//import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import{RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'



const Contact = () => {

  const form = useRef ()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xhmojzf', 'template_e4fyqoe', form.current, 'fDtQIbws8pah3Wmir')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Contactame!</h5>
      <h2>Conmigo</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>josephvillany@gmail.com</h5>
            <a href="mailto:josephvillany@gmail.com">Enviar un mensaje</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>josephvillany</h5>
            <a href="https://m.me/joseph.villany">Enviar un mensaje</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+573043773542</h5>
            <a href="https://api.whatsapp.com/send?phone+573043773542">Enviar un mensaje</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre Completo' required />
          <input type="email" name='email' placeholder='Corre Electronico' required />
          <textarea name="mensaje" rows="7" placeholder='Tu Mensaje' required></textarea>
          <button type="submit" className='btn btn-primary'>Enviar Mensaje</button>
        
        </form>
      </div>
      
    </section>
  )
}

export default Contact