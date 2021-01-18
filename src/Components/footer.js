import React, {Component} from 'react';

export function Footer(){
    return(
        <div>
            <footer>
                <div className="container submit changeFooter">
                    <br/>
                    <div className="row">
                        <div className="col-4 col-sm-2 offset-1">
                            <h5>Links</h5>
                            <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#goCollections">Collections</a></li>
                            <li><a href="#goAbout">About Us</a></li>
                            <li><a href="#goContactus">Contact Us</a></li>
                           
                            </ul>
                        </div>

                        <div className="col-6 col-sm-5 text-center">
                            <h5>Social</h5>
                            <a
                            className="btn btn-social-icon btn-instagram"
                            href="http://instagram.com/"
                            ><i className="fa fa-instagram"></i
                            ></a>
                            <a
                            className="btn btn-social-icon btn-facebook"
                            href="http://facebook.com/"
                            ><i className="fa fa-facebook"></i
                            ></a>
                            <a
                            className="btn btn-social-icon btn-twitter"
                            href="http://twitter.com/"
                            ><i className="fa fa-twitter"></i
                            ></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"
                            ><i className="fa fa-youtube"></i
                            ></a>
                        </div>

                        <div className="col-sm-4 text-center">
                            <a role="button" className="btn btn-light" href="tel:+12065551234"
                            ><i className="fa fa-phone"></i> 1-206-555-1234</a
                            >
                            <br />
                            <br />
                            <a
                            role="button"
                            className="btn btn-light"
                            href="mailto:info@miltontea.com"
                            ><i className="fa fa-envelope-o"></i> info@miltontea.com</a
                            >
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}