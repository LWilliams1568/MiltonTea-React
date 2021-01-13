import React from 'react';

export function Header () {
    return(
        <div>
                <header
                className="jumbotron jumbotron-fluid"
                >
                    <div className="container">
                        <div className="row">
                        <div className="col-4 col-sm-3 col-md-2 align-items-center">
                            <div className="btn btn-success btn-lg mt-4 mt-sm-0">
                            <a href="index.html"> <i className="fa fa-leaf fa-lg"></i></a>
                            </div>
                        </div>

                        <div className="col">
                        
                            <h1>Milton Tea</h1>
                            <h4><i>Fresh, directly from the lush gardens..</i></h4>
                        </div>
                        </div>
                    </div>

              
                    <nav className="navbar navbar-danger sticky-top">
                        <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#goCollections">Collections</a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link" href="#goAbout">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#goTestimonials">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#goContactus">Contact Us</a>
                        </li>

                        </ul>
                    </nav>
                </header>
            
            </div>



    )     
}

