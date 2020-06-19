import React, {Component} from 'react';

export function Contact(){
    return(
     <div>
         <img className="imageContact" src="images/contactusimg.jpg" />
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <br />
          <h3 className="centerTitle" id="goContactus">
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us..
          </h3>
        </div>
      </div>

      <div className="row">
        <div className="col-4 testimonial">
          <br />
          <br />
          <h5>Our Address</h5>
          <address>
            1 Nucamp Way<br />
            Seattle, WA 98001<br />
            U.S.A.
          </address>
        </div>

        <div className="col-xs-12 col-md-4">
          <br />
          <br />
          <button className="contactUsButton btn-lg" role="button">
            <a href="tel:+2065551234"
              ><i className="fa fa-phone"></i> 206-555-1234</a
            >
          </button>
        </div>
        <div className="col-xs-12 col-md-4">
          <br />
          <br />
          <button className="contactUsButton btn-lg" role="button">
            <a href="mailto:info@miltontea.com"
              ><i className="fa fa-envelope-o"></i> info@miltontea.com</a
            >
          </button>
        </div>
      </div>
    </div>

     </div>   
    
    );

}