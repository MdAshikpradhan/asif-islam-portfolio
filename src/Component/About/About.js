import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Typewriter from 'typewriter-effect';
import Contact from '../Contact/Contact';
import './About.css';
import Portfolio from '../Portfolio/Portfolio';
import Blog from '../Blog/Blog';
import Asif from '../../images/ashik.jpg';


const About = () => {
    return (
        <div className="bgColor">
            <div className ="navBarSticky" >
                < Navbar />
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-light">Md. Ashik Pradhan</h1>
                        <Typewriter className="typeWriter"
                        onInit={(typewriter) =>{
                            typewriter.typeString("Modern Web Designer")
                            .pauseFor(2000)
                            .start()
                            .deleteAll()
                            .typeString("Phd To Html")
                            .pauseFor(2000)
                            .start()
                            .deleteAll()
                            .typeString("Mern Stack Developer")
                            .pauseFor(2000)
                            .start()
                            .deleteAll()
                            .typeString("Front End Developer");
                        }}
                        />
                        <div className="socialIcon mt-3 mb-3">
                            <span><a href=""><i className="SocialIcons fab fa-github"></i></a></span>
                            <span><a href="https://www.linkedin.com/in/md-ashik-pradhan-20b904210/"><i className="SocialIcons fab fa-linkedin-in"></i></a></span>
                            <span><a href="https://twitter.com/ASHIKPRODHAN2"><i className="SocialIcons fab fa-twitter"></i></a></span>
                            <span><a href="https://www.facebook.com/wasif.islam.33865"><i className="SocialIcons fab fa-instagram"></i> </a></span>
                        </div>
                        <a href="https://drive.google.com/file/d/1P0c56MplUAEaTPvJHF7LtDj0S4bVOkN2/view?usp=sharing"><button className="BrandBtn mt-3">Resume <i class="fas fa-download"></i></button></a>
                        <h6 className="text-light mt-3">I am a  front-end developer, capable of creating and deploying single-page applications with Mobile-first responsive. Very keen to learn new technology and love to work realistically with it. My passion will make me more proficient in this field. I am looking for a good company that will help me become more expert in the IT field. </h6>
                    </div>
                    <div className="col-md-6">
                    <img src={Asif} alt="" className="homeImg"/>
                    </div>
                </div>
                <h1 className="text-center text-light mt-5 pt-5">My Services</h1>
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <div className="serviceDiv text-center">
                            <img src="https://apisproductions.com/wp-content/uploads/2021/01/AdobeStock_239400336-Cropped-1024x585.png" className="skillIcons" alt=""/>
                            <h2>Web Design</h2>
                            <p>I am a web designer. I have done a lot of design with respectively.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="serviceDiv text-center">
                            <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/176666242/original/3064fe8d34bd42910b873273f9c78a293951a5e6/convert-phd-to-html-and-css-with-bootstrap.jpg" class="skillIcons" alt=""/>
                            <h2>PHD TO HTML</h2>
                            <p>I can convert Phd to Html with mobile responsive. I am using Html, css, Bootstrap.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="serviceDiv text-center">
                        <img src="https://www.kindpng.com/picc/m/95-956807_mern-stack-developer-hd-png-download.png" className="skillIcons" alt="" />
                            <h2>Mern Stack Developer</h2>
                            <p>I am a Mern Stack developer. My main work responsibility is as a front end developer. But I can work with Node.js .</p>
                        </div>
                    </div>
                </div>
            </div>
            <Portfolio />
            {/* <Blog /> */}
            <Contact />
            <Footer />
        </div>
    );
};

export default About;