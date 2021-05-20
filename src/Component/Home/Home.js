import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Home.css';
import Asif from '../../images/asif.jpg';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1>Md. Ashik Pradhan</h1>
                    <h5>Front end developer</h5>
                    <button>Download Resume</button>
                </div>
                <div className="col-md-6">
                <img src={Asif} alt="" className="homeImg"/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;