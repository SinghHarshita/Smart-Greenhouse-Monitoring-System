import React, { Component } from "react";


class HeroOlive extends Component {
    render(){
        return(
            <div className={`slider-area bg-color ${this.props.horizontal} ${this.props.bgshape}`} id="home" data-bg-color="#2d3e50">
                <div className="container h-100">
                    <div className="row">
                        <div className="col-lg-7 h-100">
                            <div className="banner-text">
                                <div className="banner-table-cell">
                                    <h1>AWESOME <br /> <span className="theme-color">Treesponse</span> <br />IS HERE.</h1>
                                    <p>
                                        The Smart Way of Doing Greenhouse Agriculture.
                                        <br/>
                                        Go Smart, Go Green!
                                    </p>
                                    <div className="banner-buttons">
                                        {/* <button type="button" className="button-default button-olive">Download</button> */}
                                        <a className="button-default button-white" href="/" role="button">Learn more</a>
                                    </div>
                                </div>
                            </div>

                            <div className="banner-apps">
                                {/* Start Sinhle app */}
                                <div className="single-app">
                                    <div className="single-app-table-cell">
                                        <i className="zmdi zmdi-apple"></i>
                                        <h4>ios</h4>
                                        <h3>102K</h3>
                                    </div>
                                </div>

                                {/* Start Sinhle app */}
                                <div className="single-app">
                                    <div className="single-app-table-cell">
                                        <i className="zmdi zmdi-cloud-download"></i>
                                        <h4>Download</h4>
                                        <h3>102K</h3>
                                    </div>
                                </div>

                                {/* Start Sinhle app */}
                                <div className="single-app">
                                    <div className="single-app-table-cell">
                                        <i className="zmdi zmdi-android"></i>
                                        <h4>Android</h4>
                                        <h3>102K</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-product-image text-right">
                                <img className="image-1" src="greenhouse.png" alt="App Landing"/>
                                <img className="image-2" src="" alt="App Landing"/>
                                <img className="image-3" src="/assets/images/app/banner-mobile-3.png" alt="App Landing"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeroOlive;








