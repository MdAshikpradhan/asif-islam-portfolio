import React from 'react';
import { Link } from 'react-router-dom';
import  './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav nav class = "navbar navbar-expand-lg navbar-light navBarSticky">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="container collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class=" navbar-nav ms-auto">
                        <Link className="nav-link text-light" to="/about"><span className="navText">About</span></Link>
                        <a className="nav-link text-light" href="https://drive.google.com/file/d/1P0c56MplUAEaTPvJHF7LtDj0S4bVOkN2/view?usp=sharing"><span className="navText">Resume</span></a>
                        <Link className="nav-link  text-light" to="/portfolio"><span className="navText">Portfolio</span></Link>
                        <Link className="nav-link  text-light" to="/contact"><span className="navText">Contact</span></Link>
                        <Link className="nav-link  text-light" to="/blog"><span className="navText">Blog</span></Link>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;