import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import project from '../../images/prj1.png';
import project1 from '../../images/prj2.png';
import './Portfolio.css';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';


const Portfolio = () => {
    return (
        <div className="container mt-5 pt-5 mb-5 pb-5">
            
            <div className="text-center mb-5">
                <h1>Portfolio</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <div className="cardContainer">
                            <div class="cardBg mb-5">
                                <img src={project} className="projectImg" alt="..."/>
                            </div>
                                <div class="">
                                    <h3 class="">Alif Rides</h3>
                                    <div className="d-flex">
                                        <p className=""> <i className="fas fa-circle text-"></i> Html</p>
                                        <p className=""> <i className="fas fa-circle text-primary"></i> Css</p>
                                        <p className=""> <i className="fas fa-circle text-warning"></i> Bootstrap</p>
                                        <p className=""> <i className="fas fa-circle text-danger"></i> React.js</p>
                                    </div>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>

                    <div className="col-md-6 mb-3">
                        <div className="cardContainer">
                            <div class="cardBg mb-5">
                                <img src={project} className="projectImg" alt="..."/>
                            </div>
                                <div class="">
                                    <h3 class="">Alif Rides</h3>
                                    <div className="d-flex">
                                        <p className=""> <i className="fas fa-circle text-"></i> Html</p>
                                        <p className=""> <i className="fas fa-circle text-primary"></i> Css</p>
                                        <p className=""> <i className="fas fa-circle text-warning"></i> Bootstrap</p>
                                        <p className=""> <i className="fas fa-circle text-danger"></i> React.js</p>
                                    </div>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;