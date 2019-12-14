import React , { Component } from "react";
class Footer extends Component {
    render(){
        return(
            <div>
                <div className={`footer-area ${this.props.horizontal}`} id="support">
                    <div className="footer-bg"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--40">
                                    <h2 className="text-white">GET <span className="theme-color">IN TOUCH</span></h2>
                                    <img className="image-1" src="/assets/images/app/title-icon.png" alt="App Landing"/>
                                    <img className="image-2" src="/assets/images/app/title-icon-2.png" alt="App Landing"/>
                                    <img className="image-3" src="/assets/images/app/title-icon-3.png" alt="App Landing"/>
                                    <p className="text-white">There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-xl-4 offset-xl-1">
                                <div className="contact-inner">
                                    <h3 className="title">Say Hello!</h3>
                                    <form className="contact-form" action="/">
                                        <div className="input-box">
                                            <input type="text" placeholder="Name"/>
                                        </div>

                                        <div className="input-box">
                                            <input type="text" placeholder="Email"/>
                                        </div>

                                        <div className="input-box">
                                            <textarea placeholder="Message"></textarea>
                                        </div>

                                        <div className="input-box">
                                            <button className="submite-button" type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-2 col-xl-4 offset-xl-2 mt_md--40 mt_sm--40">
                                <div className="contact-inner">
                                    <h3 className="title">Contact Us</h3>
                                    <div className="conatct-info">
                                        <div className="single-contact-info">
                                            <div className="contact-icon">
                                                <i className="zmdi zmdi-phone"></i>
                                            </div>
                                            <div className="contact-text">
                                                <span>+091 999 999 9999<br />
                                                +091 999 000 9988</span>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="contact-icon">
                                                <i className="zmdi zmdi-globe-alt"></i>
                                            </div>
                                            <div className="contact-text">
                                                <span>mailto:we.hiresight@gmail.com<br />
                                                https://treesponse.com/</span>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="contact-icon">
                                                <i className="zmdi zmdi-pin"></i>
                                            </div>
                                            <div className="contact-text">
                                                <span>Treesponse address goes here,<br /> street,Crossroad123.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                                <div className="newsletter text-center">
                                    <h3 className="text-white title">SUBSCRIBE FOR OUR NEWSLETTER</h3>
                                    <p className="text-white">There are many variations of passages of Lorem Ipsum available,<br />
                                        but the majorityhave alteration in some form, by injected humour,available</p>
                                    <form action="/" method="post" id="newsletter">
                                        <div className="newsletter-content">
                                            <input type="text" name="email" placeholder="Enter your Email address" />
                                            <button type="submit" className="button"><span>Subscribe</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}
                        <br/>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-xl-4 offset-xl-4">
                                <div className="footer-links text-center">
                                    <a href="/"><i className="zmdi zmdi-facebook"></i></a>
                                    <a href="/"><i className="zmdi zmdi-twitter"></i></a>
                                    <a href="/"><i className="zmdi zmdi-google"></i></a>
                                    <a href="/"><i className="zmdi zmdi-linkedin"></i></a>
                                    <a href="/"><i className="zmdi zmdi-pinterest"></i></a>
                                    <a href="/"><i className="zmdi zmdi-youtube"></i></a>
                                </div>
                                <div className="footer-text text-center">
                                    <span>Copyright © 2019 <a href="/">Treesponse</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tap-top">
                    <div>
                        <i className="zmdi zmdi-long-arrow-up"></i>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer







