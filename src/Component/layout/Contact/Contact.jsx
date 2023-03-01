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
            <h2>Veer Pratap Singh ( Managing Director) +91 87603 67289</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt='post.png'/></div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2>inquiry furnistyle@gmail.com</h2>
            <h2>customercare furnistyle@gmail.com</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt='map-marker.png'/></div>
          <div className="contact-info">
            <h1>Address</h1>
            <h2>12/3 jawed nagar, tiruvantampuram, maharastra 568002</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contact