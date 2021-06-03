import React from 'react';
import carsDoctor from '../../images/carsDoctor.png';
import './Portfolio.css';


const Portfolios = () => {

    return (
            <div className="container mt-5 pt-5 mb-5 pb-5">
                <div className="text-center mt-5">
                    <h1 className="text-light">Projects</h1>
                </div>
                <hr />
                <div className="row mt-5">
                    <div className="col-md-6 mb-3 ">
                       <div div div className = "productCard carDbg" >
                            <div className=" mb-5">
                            <img src={carsDoctor} className="projectImg" alt="..." />
                        </div>
                        <div className="projectLink text-light">
                            <p>
                                <a href="https://alif-car-wash.web.app" > <i className="far fa-eye"></i> Preview </a>
                                    || <a href="https://github.com/MdAshikpradhan/cars-doctor">Client Code </a>
                                    || <a href="https://github.com/MdAshikpradhan/cars-doctor">Server Code </a>
                            </p>
                            <div className="projectDesc">
                                <ul>
                                    <li>This is a full stack website</li>
                                    <li>Authentication with admin panel</li>
                                    <li>Admin can able to add services and manage them.</li>
                                    <li>Customer can book for service and able to review about service.</li>
                                </ul>
                                <h5>Tools: React.js, Javascript, MongDb, express, Node.js, Bootstrap, Html. </h5>
                            </div>
                        </div>
                       </div>
                    </div>

                    <div className="col-md-6 mb-3 ">
                       <div div div div className = "productCard carDbg" >
                            <div className=" mb-5">
                            <img src={carsDoctor} className="projectImg" alt="..." />
                        </div>
                        <div className="projectLink text-light">
                            <p>
                                <a href="https://alif-car-wash.web.app" > <i className="far fa-eye"></i> Preview </a>
                                    || <a href="https://github.com/MdAshikpradhan/cars-doctor">Client Code </a>
                                    || <a href="https://github.com/MdAshikpradhan/cars-doctor">Server Code </a>
                            </p>
                            <div className="projectDesc">
                                <ul>
                                    <li>This is a full stack website</li>
                                    <li>Authentication with admin panel</li>
                                    <li>Admin can able to add services and manage them.</li>
                                    <li>Customer can book for service and able to review about service.</li>
                                </ul>
                                <h5>Tools: React.js, Javascript, MongDb, express, Node.js, Bootstrap, Html. </h5>
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
    );
};

export default Portfolios;