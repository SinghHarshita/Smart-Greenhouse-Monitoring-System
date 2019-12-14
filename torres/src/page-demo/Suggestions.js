import React, { Component } from 'react';

class Suggestions extends Component{
    render(){
        let suggestionDatalist = this.props.suggestions.map((val, i)=>{
            return(
                <div className="col-lg-4 col-md-6 col-12 mb--50" key={i}>
                    <div className="demo-item">
                    <a href={val.suggestionLink} className="image"><img src={val.imgUrl} alt="" /></a>
                    <h4 className="title"><a href={val.suggestionLink}>{val.suggestionTitle}</a></h4>
                    </div>
                </div> 
            )
        });

        return(
            <div>
                <div className={`demo-section also-like section pt--120 pb--70 ${this.props.background}`}>
                    <div className="container">
                        <div className="row">
                        <div className="section-title col-12 mb--70">
                            <h1>You May Also Like ({this.props.category})</h1>
                        </div>            
                            {suggestionDatalist}    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Suggestions;