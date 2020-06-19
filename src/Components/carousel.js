import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'; 

export function CarouselPart() {

    return (
        <Carousel>  
            <Carousel.Item >  
                <img className="d-block w-100" src="images/tea1.jpg"  />  
            </Carousel.Item  >  
            <Carousel.Item>  
                <img className="d-block w-100" src="images/tea-2.jpg" />  
            </Carousel.Item>  
            <Carousel.Item>  
                <img className="d-block w-100" src="images/tea-4.jpg"  />   
            </Carousel.Item>  
        </Carousel>  
    );

}