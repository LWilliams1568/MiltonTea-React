import React, { Component } from 'react';
import {Header} from './Components/header';
import {Example, CarouselPart} from './Components/carousel';
import{Exceptional} from './Components/exceptional';
import{Collections} from './Components/collections';
import{Partner} from './Components/partner';
import{About} from './Components/aboutus';
import{Testimonials} from './Components/testimonials';
import {Contact} from './Components/contactus';
import{Footer} from './Components/footer';
import './App.css';

class App extends Component {
    render() {
        return (
            
                
            <div>
                 <Header />
                 <CarouselPart />
                 <Exceptional />
                 <Collections />
                 <Partner />
                 <About />
                 <Testimonials />
                 <Contact />
                 <Footer />

            </div>
           
            
            



           
            
        );
    }    
    
}

export default App;
