import React, {Component} from 'react';


export function About(){
    return(
        <div>   
            <div className="container-fluid certaindiv" id="goAbout">
                <div className="row collections">
                    
                    <div className="col-xs-12 col-md-6">
                        <br />
                        <br />
                        <h1>Our Story</h1>
                        <br />
                        <p className="ourStory">
                            Our story begins in 2006 when Lashon and Abdur, two talented and
                            enthusiastic entrepreneurs, decided to establish a tea manufacturing
                            company after a few decades of working in the tea industry. Now
                            Milton Tea has grown into a well-known tea company supplying the
                            highest quality teas all over the world.
                        </p>
                      
                        <br />
                        <button className="partnerButton nav-link btn-lg">
                            <a href="contactus.html">FOLLOW US ON INSTAGRAM</a>
                        </button>
                        <br />
                        <br />
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <br />
                        <br />
                        <img src="images/teafarm1.jpg" className="img-fluid" />
                    </div>
                    <br />
                    <br />
                    <br />
                   
                </div>
            </div>
            <div className="container-fluid partner certaindiv">
                <br />
                <br />
                <div className="row">
                    <div className="col xs-12 col-md-6">
                    <br />
                    <br />
                    <img src="images/hipcafe.jpg" className="img-fluid" />
                    <br />
                    <br />
                    </div>
                    <div className="col-xs-12 col-md-6">
                    <h1 id="mission">Mission</h1>
                    <p className="ourStory">
                        We provide a full range of services to ensure the sustainable growth
                        of our company. Our team of highly trained and experienced
                        specialists with a deep understanding of all business aspects and
                        perfect knowledge of the process always drive us to easily solve
                        various challenges. Our mission is to impress our clients with
                        unique and innovative solutions, along with an individual approach,
                        and exceptional customer support services.
                    </p>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
                <br />
                <br />
            </div>
           
        </div>    
    );
}