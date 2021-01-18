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
                        </figure>

                        <button className="shopButtons btn-xs">
                        <a  href="https://www.amazon.com/">Shop Black Teas</a>
                        </button>
                        <br />
                    </div>

                    <div className="col-xs-12 col-md-3 centerTitle">
                    <br />
                        <figure>
                            <img src="images/TeaGreenPot.jpg" className="img-fluid" />
                        </figure>
                        <button className="shopButtons btn-xs">
                            <a  href="https://www.amazon.com/">Shop Green Teas</a>
                        </button>
                    </div>

                    <div className="col-xs-12 col-md-3 centerTitle">
                    <br />
                        <figure>
                            <img src="images/oolong.jpg" className="img-fluid" />
                         
                        </figure>
                        <button className="shopButtons btn-xs">
                            <a  href="https://www.amazon.com/">Shop Oolong Teas</a>
                        </button>
                    </div>

                    <div className="col-xs-12 col-md-3 centerTitle">
                    <br />
                        <figure>
                            <img src="images/pu-erh.jpg" className="img-fluid" />
                           
                        </figure>
                        <button className="shopButtons btn-xs">
                            <a  href="https://www.amazon.com/">Shop Puerh Teas</a>
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
