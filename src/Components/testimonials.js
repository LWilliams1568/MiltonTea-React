import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel'; 

export function Testimonials(){

    return(
            <div>
                <br/>
                <br/>
                <h1 className="centerTitle" id="goTestimonials">View Our Testimonials</h1>
                <br/>
                <div className="container-fluid">
                <Carousel className="col-md-9 half" >            
                   <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src="images/testimonial1.png"
                        alt="First slide"
                        />
                    </Carousel.Item  >
                
                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src="images/testimonial2.png"
                        alt="Second slide"
                        />
                    </Carousel.Item  >

                    <Carousel.Item >
                        <img
                        className="d-block w-100"
                        src="images/testimonial3.png"
                        alt="Third slide"
                        />
                    </Carousel.Item>  
                </Carousel> 
                </div>
               
                <br/>
                <br/>

                <div className="container-fluid partner">
                    <br/>

                    <h1 className="centerTitle">Leave a Testimonial</h1>
                    <div className="row row-content">
                        <div className="col-md-6 offset-3">
                            <form>
                                <div className="form-group row corners">
                                    <label for="company" className="col-6 col-form-label changeFont"
                                        >What company do you work for?</label>
                                    <div className="col-md-12">
                                        <input
                                        type="text"
                                        className="form-control blackRows"
                                        id="company"
                                        name="company"
                                        required
                                        />
                                    </div>
                                </div>
                                <div className="form-group row corners">
                                    <label for="email" className="col-6 col-form-label changeFont"
                                        >Email:</label>
                                    <div className="col-md-12">
                                        <input
                                        type="text"
                                        className="form-control blackRows"
                                        id="email"
                                        name="email"
                                        required
                                        />
                                    </div>
                                </div>
                                <div className="form-group row corners">
                                    <label for="phone" className="col-6 col-form-label changeFont">Phone:</label>
                                    <div className="col-md-12">
                                        <input
                                        type="tel"
                                        className="form-control blackRows"
                                        id="phone"
                                        name="phone"
                                        />
                                    </div>
                                </div>
                                <div className="form-group row corners">
                                    <label for="testimonial" className="col-6 col-form-label changeFont"
                                        >How was your experience with Milton Tea?</label>
                                    <div className="col-md-12">
                                        <input
                                        type="text"
                                        className="form-control blackRows"
                                        id="testimonial"
                                        name="testimonial"
                                        required
                                        />
                                    </div>
                                </div>
                                <div className="form-group row corners">
                                    <div className="col-md-12">
                                        <button
                                        className="col-md-12 btn-dark changeFont submit"
                                        type="submit"
                                        >
                                        Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>        
    
    );
    
}