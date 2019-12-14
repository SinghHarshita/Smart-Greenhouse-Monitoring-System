import React, { Component } from "react";
import Navbar from './LandingPage/components/Navbar';
import HeroOlive from './LandingPage/components/HeroOlive';
import About from './LandingPage/components/About';
import Service from './LandingPage/components/Service';
import Feature from './LandingPage/components/Feature';
import Download from './LandingPage/components/Download';
import Pricing from './LandingPage/components/Pricing';
// import Testimonial from './LandingPage/components/Testimonial';
// import Screenshot from './LandingPage/components/Screenshot';
// import Blog from './LandingPage/components/Blog';
import Footer from './LandingPage/components/Footer';


class LandingPage extends Component{
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

export default LandingPage;

