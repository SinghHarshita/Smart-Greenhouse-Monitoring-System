import React,  { Component } from "react";


class Pricing extends Component{
    render(){
        return(
            <div className={`pricing-table-area pt--40 pt_sm--100 ${this.props.horizontalpricing}`} id="pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--40">
                                <h2>PRICING <span className="theme-color">PLAN</span></h2>
                                
                                <img className="image-1" src="/treesponse-2.png" alt="App Landing"/>
                                <img className="image-2" src="/treesponse-1.png" alt="App Landing"/>
                                <img className="image-3" src="/treesponse.png" alt="App Landing"/>

                                <p>There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--30">

                        {/* Start Single Pricing */}
                        <div className="col-lg-4 col-md-6 col-12 pricing-column mt--40">
                            <div className="single-price-package">
                                <div className="price-title">
                                    <h3>Basic</h3>
                                    <div className="price">
                                        <h4><span className="text-top">$</span><span className="text-large">50</span></h4>
                                        <p><span className="text-bottom">/month</span></p>
                                    </div>
                                </div>
                                <div className="price-list">
                                    <ul>
                                        <li>Five Website</li>
                                        <li>Five User</li>
                                        <li>100 GB Bandwidth</li>
                                        <li>2 GB Storage</li>
                                        <li>24x7 Support</li>
                                    </ul>
                                    <div className="price-btn">
                                        <button className="button" type="button">Sign up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Pricing */}

                        {/* Start Single Pricing */}
                        <div className="col-lg-4 col-md-6 col-12 pricing-column mt--40">
                            <div className="single-price-package">
                                <div className="price-title">
                                    <h3>PERSONAL</h3>
                                    <div className="price">
                                        <h4><span className="text-top">$</span><span className="text-large">95</span></h4>
                                        <p><span className="text-bottom">/month</span></p>
                                    </div>
                                </div>
                                <div className="price-list">
                                    <ul>
                                        <li>Five Website</li>
                                        <li>Five User</li>
                                        <li>100 GB Bandwidth</li>
                                        <li>2 GB Storage</li>
                                        <li>24x7 Support</li>
                                    </ul>
                                    <div className="price-btn">
                                        <button className="button" type="button">Sign up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Pricing */}

                        {/* Start Single Pricing */}
                        <div className="col-lg-4 col-md-6 col-12 pricing-column mt--40">
                            <div className="single-price-package">
                                <div className="price-title">
                                    <h3>BUSINESS</h3>
                                    <div className="price">
                                        <h4><span className="text-top">$</span><span className="text-large">110</span></h4>
                                        <p><span className="text-bottom">/month</span></p>
                                    </div>
                                </div>
                                <div className="price-list">
                                    <ul>
                                        <li>Five Website</li>
                                        <li>Five User</li>
                                        <li>100 GB Bandwidth</li>
                                        <li>2 GB Storage</li>
                                        <li>24x7 Support</li>
                                    </ul>
                                    <div className="price-btn">
                                        <button className="button" type="button">Sign up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Pricing */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing;













