import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import emailjs from 'emailjs-com';
import './Contact.css';
import Footer from '../../Shared/Footer/Footer';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pmfen3a', 'template_3fcgezn', e.target, 'user_xBXVVaxpARkfvKkPH7E5r')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    return (
        <div className="container mt-5 pt-5">
            <div>
                <h1 className="text-center">Contact Me</h1>
                <hr />
            <div className="">
                <div className="row pt-5">
                    <div className="col-md-6 text-light infoContainer">
                        <div className="info">
                        <h4><i class="fas fa-envelope-square"></i> <small>mdashikpradhan@gmail.com</small></h4>
                        <h4><i class="fab fa-whatsapp"></i> <small>+8801738308375</small></h4>
                        <h4><i class="fas fa-map-marker-alt"></i> <small>Dhaka, Bangladesh</small></h4>
                        <h4><i class="far fa-flag"></i> <small>1216</small></h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form className="contact-form" onSubmit={sendEmail}>
                            <input type="name" className="form-control mb-3" id="exampleFormControlInput1" name="name" placeholder="Your Name" />
                            <input type="email" className="form-control mb-3" id="exampleFormControlInput1" name="email" placeholder="Enter Your Email" />
                            <input type="text" className="form-control mb-3" id="exampleFormControlInput1" name="name" placeholder="Subject" />
                            <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows="7" name="message" placeholder="Write something..."></textarea>
                            <button type="submit" className="sendEmailBtn mb-5"><i className="fas fa-paper-plane sendIcon"></i></button> 
                        </form>
                    </div>
                </div>
            </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default Contact;