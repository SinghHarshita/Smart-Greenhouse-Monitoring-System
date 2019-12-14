import React ,  { Component } from "react";


class About extends Component{
    render(){
        return(
            <div className={`app-about ${this.props.horizontalabout}`}  id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--40">
                                <h2>ABOUT <span className="theme-color">Treesponse</span></h2>
                                <img className="image-1" src="/treesponse-2.png" alt="App Landing"/>
                                <img className="image-2" src="/treesponse-1.png" alt="App Landing"/>
                                <img className="image-3" src="/treesponse.png" alt="App Landing"/>
                                {/* Changes need to made here */}
                                <p>There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 offset-lg-1 mt--40">
                            <div className="about-thumbnail mr--35">
                                {/* Changes need to made here */}
                                <img className="image-1" src="/assets/images/app/mobile.png" alt="App Landing"/>
                                <img className="image-2" src="/assets/images/app/mobile-2.png" alt="App Landing"/>
                                <img className="image-3" src="/assets/images/app/mobile-3.png" alt="App Landing"/>
                            </div>
                        </div>
                        <div className="col-lg-6 mt--40">
                            <div className="about-content">
                                <h2 className="title">GO 
                                    <span className="theme-color"> SMART</span>
                                    , GO 
                                    <span className="theme-color"> GREEN</span> ! 
                                </h2>
                                <p>
                                Smart greenhouse is a concept of greenhouse that cultivates crops without human intervention. Crops in a smart greenhouse grow without adjustment of climate or any human interference by any means for a particular period. The smart greenhouse uses various microprocessors and sensors to perform functions such as controlling temperature and irrigation system. Any type of plant, fruit, and vegetables can be grown at any time of year in smart greenhouse. This system is cost effective and improves efficiency and versatility of greenhouses.
                                </p>
                                <div className="about-buttons">
                                    <button type="button" className="button-default button-olive button-border">Sign In</button>
                                    <a className="button-default button-border" href="/" role="button">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;











