import React, { Component } from "react";
import Navbar from './components/Navbar';
import HeroOlive from './components/HeroOlive';
import About from './components/About';
import Service from './components/Service';
import Feature from './components/Feature';
import Download from './components/Download';
import Pricing from './components/Pricing';
// import Testimonial from './components/Testimonial';
// import Screenshot from './components/Screenshot';
// import Blog from './components/Blog';
import Footer from './components/Footer';


class HomeOlive extends Component{
    render(){
        return(
            <div>
                {/* Header Navbar */}
                <Navbar />

                {/* Slider */}
                <HeroOlive bgshape="bg-shape" horizontal="" />

                {/* About */}
                <About horizontalabout="vertical-about" />

                {/*Service */}
                <Service horizontal="vertical-service" />
                
                {/*Feature */}
                <Feature horizontalfeature="vertical-feature" />

                {/* Download */}
                <Download horizontal="" />
                
                {/* Pricing */}
                <Pricing horizontalpricing="vertical-pricing" />
                
                {/* Pricing */}
                {/* <Testimonial /> */}
                
                {/* Screenshot */}
                {/* <Screenshot /> */}
                
                {/* Blog */}
                {/* <Blog /> */}
                
                {/* Footer */}
                <Footer horizontal="vertical-footer" />

            </div>
        )
    }
}

export default HomeOlive;

