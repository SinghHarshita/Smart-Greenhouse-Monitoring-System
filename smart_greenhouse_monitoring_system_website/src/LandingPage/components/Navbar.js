import React ,  { Component } from "react";

class Navbar extends Component {
    render(){
        return(
            <div className="app-header header--transparent sticker" id="main-menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-sm-5 col-5">
                            <div className="logo">
                                <a href={`${process.env.PUBLIC_URL}/`}>
                                    <img className="logo-1" src="/treesponse-2.png" alt="app landing"/>
                                    <img className="logo-2" src="/treesponse-1.png" alt="app landing"/>
                                    <img className="logo-3" src="/treesponse-2.png" alt="app landing"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 d-none d-lg-block">
                            <div className="mainmenu-wrapper">
                                <nav>
                                    <ul className="main-menu">
                                        <li className="active"><a href="#home">Home</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#features">Features</a></li>
                                        <li><a href="#pricing">Pricing</a></li>
                                        {/* <li><a href="#reviews">Reviews</a></li>
                                        <li><a href="#screenshots">Screenshots</a></li> */}
                                        <li><a href="#support">Support</a></li>
                                    </ul>
                                </nav>
                                <button className="button-default button-olive" type="button">Sign In</button>
                                {/* <button className="button-default button-olive" type="button">Sign Up</button> */}
                            </div>
                        </div>
                        <div className="col-sm-7 col-7 d-block d-lg-none">
                            <div className="mobile-menu">
                                <nav>
                                    <ul>                              
                                        <li className="active"><a href="#home">Home</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#features">Features</a></li>
                                        <li><a href="#pricing">Pricing</a></li>
                                        {/* <li><a href="#reviews">Reviews</a></li>
                                        <li><a href="#screenshots">Screenshots</a></li> */}
                                        <li><a href="#support">Support</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;


