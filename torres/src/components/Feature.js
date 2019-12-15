import React ,  { Component } from "react";



class Feature extends Component{
    render(){
       let data = [
           
        {
            icon: 'zmdi zmdi-tap-and-play',
            title: 'Unlimited Monitoring',
            desc: 'Connection to a remote server and local logs enabling user to have live data on his app'
        },

        {
            icon: 'zmdi zmdi-sun',
            title: 'Light Intensity',
            desc: 'Enables the user to have access to the live light intensity value inside the greenhouse and notify if not within the recommended range'
        },

        {
            icon: 'zmdi zmdi-leak',
            title: 'Air & Soil Humidity',
            desc: 'Enables the user to monitor the values of humidity and notify if not within the regulated values'
        },

        {
            icon: 'zmdi zmdi-invert-colors',
            title: 'Automated Irrigation',
            desc: 'Regular irrigation patterns can be set for the crops and notified to the user '
        },

        {
            icon: 'zmdi zmdi-toll',
            title: 'Air Quality',
            desc: 'Help Monitor the air quality index (QI) and decide whether it is suitable for any cultivation'
        }
       ] 

       let DataList = data.map((val , i) => {
           return(
               /* Start Single Feature */
               <div className="feature" key={i}>
                   <div className="feature-icon">
                       <i className={`${val.icon}`}></i>
                   </div>
                   <div className="content">
                       <h4 className="title">{val.title}</h4>
                       <p className="desc">{val.desc}</p>
                   </div>
               </div>
               /* End Single Feature */
           )
       })

       return(
           <div className= {`feature-area feature-bg-image pb--50 ${this.props.horizontalfeature}`} id="features" style = {{ background : '../public/assets/images/greenhouse_flow.png'}}>
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12">
                            <div className="section-title text-center mb--40">
                                <h2>AWSOME <span className="theme-color">FEATURES</span></h2>
                                <img className="image-1" src="/treesponse-2.png" alt="App Landing"/>
                                <img className="image-2" src="/treesponse-1.png" alt="App Landing"/>
                                <img className="image-3" src="/treesponse.png" alt="App Landing"/>
                                <p>Our aim is to provide the best possible way to provide with an interractive environment for interraction with multi-sensor environment</p>
                            </div>
                       </div>
                   </div>
                   <div className="row mt--30">
                       <div className="col-lg-7 offset-lg-5">
                            <div className="feature-list">
                                {DataList}
                            </div>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default Feature;
