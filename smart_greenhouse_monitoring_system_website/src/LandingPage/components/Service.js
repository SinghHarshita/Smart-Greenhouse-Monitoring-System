import React, { Component } from "react";



class Service extends Component{
    render(){
        // Need to Make changes here
        let data = [
            {
                icon: 'zmdi zmdi-settings',
                title: 'Easy To Customize',
                desc: 'Treesponse is customizeable for all crops that can be grown within a greenhouse. Be it flowers, fruits or vegetables or even herbs....Treesponse covers them all!'
            },

            {
                icon: 'zmdi zmdi-favorite',
                title: 'User Friendly',
                desc: 'Treesponse provides a very easy-to-use dashboard interface to view the sensor data. Negligible human intervention is required for monitoring the greenhouse. Treesponse does it for you!'
            },

            {
                icon: 'zmdi zmdi-time',
                title: '24/7 Support',
                desc: 'We at Treesponse provide support 24/7. Any query, any problem is quickly resolved by us. Not just this - Treesponse even monitors the greenhouse smartly 24/7.'
            }
        ];
        let DataList = data.map((val, i) => {
            return(
                <div className="col-lg-4 service-column" key={i}>
                    <div className="single-service text-center">
                        <div className="service-icon">
                            <i className={`${val.icon}`}></i>
                        </div>
                        <h4 className="title">{val.title}</h4>
                        <p className="desc">{val.desc}</p>
                    </div>
                </div>
            )
        });

        return (
            <div>
                {/* Start Service Area */}
                <div className={`service-area ${this.props.horizontal}`}>
                    <div className="container">
                        <div className="row">
                            {DataList}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}
            </div>
        )
    }
}

export default Service;

