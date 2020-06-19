import React, { Component } from 'react';
import {Modal, ModalHeader, ModalBody } from 'reactstrap';

export function Collections(){
    return (
        <div>
            <div className="container-fluid certaindiv">
                <div className="row collections">
                    <div className="col-12">
                        <br />
                        <br />
                        <h1 className="centerTitle" id="goCollections">Our Collections</h1>
                    </div>
                </div>
                
                <div className="row collections">
                    <div className="col-xs-12 col-md-3 centerTitle">
                        <br />
                        <figure>
                            <img src="images/blacktea.jpg" className="img-fluid" alt="picture of black tea"/>
                            <figcaption>
                            <button
                            type="button"
                            className="btn btn-xs btn-primary-outline"
                            data-toggle="modal"
                            data-target="#blackteaModal"
                            >
                            Learn More
                            </button>
                            </figcaption>
                        </figure>

                        <button className="shopButtons btn-xs">
                        <a href="shopteas.html">Shop Black Teas</a>
                        </button>
                        <br />
                    </div>

                    <div className="col-xs-12 col-md-3 centerTitle">
                    <br />
                        <figure>
                            <img src="images/TeaGreenPot.jpg" className="img-fluid" />
                            <figcaption>
                            <button
                                type="button"
                                className="btn btn-primary-outline btn-xs"
                                data-toggle="modal"
                                data-target="#greenteaModal"
                            >
                                Learn More
                            </button>
                            </figcaption>
                        </figure>
                        <button className="shopButtons btn-xs">
                            <a href="shopteas.html">Shop Green Teas</a>
                        </button>
                    </div>

                    <div className="col-xs-12 col-md-3 centerTitle">
                    <br />
                        <figure>
                            <img src="images/oolong.jpg" className="img-fluid" />
                            <figcaption>
                            <button
                                type="button"
                                className="btn btn-xs btn-primary-outline"
                                data-toggle="modal"
                                data-target="#oolongteaModal"
                            >
                                Learn More
                            </button>
                            </figcaption>
                        </figure>
                        <button className="shopButtons btn-xs">
                            <a href="shopteas.html">Shop Oolong Teas</a>
                        </button>
                    </div>

                    <div className="col-xs-12 col-md-3 centerTitle">
                    <br />
                        <figure>
                            <img src="images/pu-erh.jpg" className="img-fluid" />
                            <figcaption>
                            <button
                                type="button"
                                className="btn btn-xs btn-primary-outline"
                                data-toggle="modal"
                                data-target="#puerhteaModal"
                            >
                                Learn More
                            </button>
                            </figcaption>
                        </figure>
                        <button className="shopButtons btn-xs">
                            <a href="shopteas.html">Shop Puerh Teas</a>
                        </button>
                        <br />
                        <br />
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
}
