import React, { Component } from "react";
import Navbar from './components/Navbar';
import HeroOlive from './components/HeroOlive';
import About from './components/About';
import Service from './components/Service';
import Feature from './components/Feature';
import Download from './components/Download';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Screenshot from './components/Screenshot';
import Blog from './components/Blog';
import Footer from './components/Footer';

class HomeHorizontal extends Component{
    render(){
        return(
            <div>
                {/* Header Navbar */}
                <Navbar />

                {/* Slider */}
                <HeroOlive horizontal="horizontal" bgshape="bg-shape" />

                {/* About */}
                <About horizontalabout="horizontal-about" />

                {/*Service */}
                <Service horizontal="horizontal" />
                
                {/*Feature */}
                <Feature horizontalfeature="horizontal-feature" />

                {/* Download */}
                <Download horizontal="horizontal" />
                
                {/* Pricing */}
                <Pricing horizontalpricing="" />
                
                {/* Pricing */}
                <Testimonial />
                
                {/* Screenshot */}
                <Screenshot />

                {/* Blog */}
                <Blog />
                
                {/* Footer */}
                <Footer horizontal="horizontal" />

            </div>
        )
    }
}

export default HomeHorizontal;
