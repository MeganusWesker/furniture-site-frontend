import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title">Contact <span>info</span></h1>
      </div>
      <div className="contact-items">
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="phone.png"/></div>
          <div className="contact-info">
            <h1>Phone</h1>
            <h2>Pranjoy Mukherjee (Operations Manager) - +91 82400 09750 </h2>
            <h2>Narendra Dutta (Sales Manager) - +91 82402 31209 </h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt='post.png'/></div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2>inquiry@metropolite.net</h2>
            <h2>customercare@metropolite.net</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt='map-marker.png'/></div>
          <div className="contact-info">
            <h1>Address</h1>
            <h2>10/1, Jadab Ghosh Road, Kolkata - 700061</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact