import React , { Component } from "react";


class Download extends Component{
    render(){
        return(
            <div className={`download-area ${this.props.horizontal}`}>
                <div className="bg-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--55 pt--50">  
                                <h2 className="text-white">DOWNLOAD OUR <span className="theme-color">LATESTAPP</span></h2>
                                
                                <img className="image-1" src="/treesponse-2.png" alt="App Landing"/>
                                <img className="image-2" src="/treesponse-1.png" alt="App Landing"/>
                                <img className="image-3" src="/treesponse.png" alt="App Landing"/>
                                
                                <p className="text-white">
                                    Get the mobile app and smartly monitor your greenhouse using your mobile phone!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="download-buttons pb--50">
                                <button type="submit" className="download-btn">
                                    <i className="zmdi zmdi-apple"></i>
                                    <span>Available on the <span className="large-text">App Store</span> </span>
                                </button>
                                <button type="submit" className="download-btn">
                                    <i className="zmdi zmdi-google-play"></i>
                                    <span>Available on the <span className="large-text">Play Store</span> </span>
                                </button>
                                {/* <button type="submit" className="download-btn">
                                    <i className="zmdi zmdi-windows"></i>
                                    <span>Available on the <span className="large-text">Windows Store</span> </span>
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Download;







