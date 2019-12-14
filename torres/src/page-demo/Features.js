import React, { Component } from 'react';

class Features extends Component{
    render(){
        let featureDatalist = this.props.features.map((val, i)=> {
            return(
                <div className="single-feature col-lg-4 col-md-6 col-12 mb--50" key={i}>
                    <span className="icon float-left"><i className={val.featureIconName} /></span>
                    <div className="content fix">
                        <h4>{val.featureTitle}</h4>
                        <p>{val.featureDescription}</p>
                    </div>
                </div>
            )
        });
        return(
            <div>
                <div className="feature-section section bg-gray pt--150 pb--100">
                    <div className="container">
                        <div className="row">
                            <div className="section-title col-12 mb--70">
                                <h1>Castro Features</h1>
                            </div>
                            {featureDatalist}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features;