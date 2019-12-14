import React, { Component } from 'react';

class Pages extends Component{
    render(){
        let PageList = this.props.demos.map((val, i)=>{
            return(
                <div className="col-lg-4 col-sm-6 col-12 mb--50" key={i}>
                    <div className="demo-item">
                    <a href={`${process.env.PUBLIC_URL}/${val.demoLink}`} className="image" target="_blank"  rel="noopener noreferrer"><img src={`assets/images/landing/${val.demoImg}`} alt="" /></a>
                    <h4 className="title"><a href={`${process.env.PUBLIC_URL}/${val.demoLink}`} target="_blank" rel="noopener noreferrer">{val.demoTitle}</a></h4>
                    </div>
                </div>
            )
        });

        return(
            <div>
                {/* Start Demo Section */}
                <div id="demo" className="demo-section section pt--120 pb--70">
                <div className="container">
                    <div className="row">
                       {PageList}
                    </div>
                </div>
                </div>
                {/* Demo Section End */}

            </div>
        )
    }
}

export default Pages;