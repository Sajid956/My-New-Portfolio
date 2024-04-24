import React, { useState } from 'react'
import EmailJS from '@emailjs/browser';

const ContactMe = () => {

  const [message, setMessage] = useState({ name: "", email: "", subject: "", message: "" })

  function changeHandler(event) {
    const { name, value } = event.target;

    setMessage(prev => {
      return {
        ...prev,
        [name]: value,
      }
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await EmailJS.send('service_gts4ch7', 'template_nx3ok9n', message, 'jisXL6u89Js8e_So5');

    alert('Message sent successfully!');
  };

  return (
    <div id="contactMe">
      <div className="contact-content">
        <div className="contact-heading">Contact Me</div>
        <div className="contact-subheading">Questions, Thoughts, Or Just Want To Say Hello?</div>

        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your name" className="context" name='name' value={message.name} onChange={changeHandler} />
          <input type="email" placeholder="Enter your email address" name='email' className="context" value={message.email} onChange={changeHandler} />
          <input type="text" className="context" placeholder="Enter your subject" name='subject' value={message.subject} onChange={changeHandler} />
          <textarea rows={10} cols={40} name="message" form="form" className="context" placeholder="Enter your message" defaultValue={""} value={message.message} onChange={changeHandler} />

          <button type='submit' className="project-btn contact-btn">Send Message
            <i className="fa-sharp fa-solid fa-paper-plane" />
          </button>

        </form>
      </div>
    </div>
  )
}

export default ContactMe