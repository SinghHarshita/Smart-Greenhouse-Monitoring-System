import React, { Component } from "react";


class Screenshot extends Component { 
    render(){
        return (
            <div className="screenshot-area pt--120" id="screenshots">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--80">
                                <h2>APP <span className="theme-color">SCREENSHOTS</span></h2>
                                <img className="image-1" src="/assets/images/app/title-icon.png" alt="App Landing"/>
                                <img className="image-2" src="/assets/images/app/title-icon-2.png" alt="App Landing"/>
                                <img className="image-3" src="/assets/images/app/title-icon-3.png" alt="App Landing"/>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <div className="screenshot-carousel" id="screenshot-carousel" data-carousel-3d>
                                <img className="image-1" src="/assets/images/app/screenshot-01.png" alt="App Screenshot"/>
                                <img className="image-1" src="/assets/images/app/screenshot-01.png" alt="App Screenshot"/>
                                <img className="image-1" src="/assets/images/app/screenshot-01.png" alt="App Screenshot"/>
                                <img className="image-1" src="/assets/images/app/screenshot-01.png" alt="App Screenshot"/>
                                <img className="image-1" src="/assets/images/app/screenshot-01.png" alt="App Screenshot"/>
                                <img className="image-1" src="/assets/images/app/screenshot-01.png" alt="App Screenshot"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Screenshot;










