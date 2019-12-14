import React ,  { Component } from "react";



class Feature extends Component{
    render(){
       let data = [
           
        {
            icon: 'zmdi zmdi-tap-and-play',
            title: 'Unlimited Monitoring',
            desc: 'There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available'
        },

        {
            icon: 'zmdi zmdi-sun',
            title: 'Light Intensity',
            desc: 'There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available'
        },

        {
            icon: 'zmdi zmdi-leak',
            title: 'Air & Soil Humidity',
            desc: 'There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available'
        },

        {
            icon: 'zmdi zmdi-invert-colors',
            title: 'Automated Irrigation',
            desc: 'There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available'
        },

        {
            icon: 'zmdi zmdi-toll',
            title: 'Air Quality',
            desc: 'There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration in some form, by injected humour,available'
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
           <div className= {`feature-area feature-bg-image pb--50 ${this.props.horizontalfeature}`} id="features">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12">
                            <div className="section-title text-center mb--40">
                                <h2>AWSOME <span className="theme-color">FEATURES</span></h2>
                                <img className="image-1" src="/treesponse-2.png" alt="App Landing"/>
                                <img className="image-2" src="/treesponse-1.png" alt="App Landing"/>
                                <img className="image-3" src="/treesponse.png" alt="App Landing"/>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>
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
