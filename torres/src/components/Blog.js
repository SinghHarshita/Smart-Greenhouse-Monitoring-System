import React, { Component } from "react";


class Blog extends Component{
    render(){

        let data = [
            {
                image: "/assets/images/blog/blog-big-1.jpg",
                title: 'Mobile apps are becoming popular in 3rd world',
                link:'blog-details',
                date:'Posted on 25 Jan, 2019',
                postBy:'Nipa Bali',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
            },
            
            {
                image: "/assets/images/blog/blog-big-2.jpg",
                title: 'Latest App landing are Comming soon in latest world',
                link:'blog-details',
                date:'Posted on 25 Jan, 2019',
                postBy:'Fatima Asrafi',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
            },
            {
                image: "/assets/images/blog/blog-big-3.jpg",
                title: 'App landing and sass landing latest post here',
                link:'blog-details',
                date:'Posted on 25 Jan, 2019',
                postBy:'John Snow',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
            },
        ];
        let DataList = data.map((val, i) => {
            return(
                <div className="col-lg-4 col-md-6 col-12" key={i}>
                    <div className="blog">
                        <div className="thumb">
                            <a href={val.link}><img className="w-100" src={`${val.image}`} alt="Blog images"/></a>
                        </div>
                        <div className="inner">
                            <h4 className="title"><a href={val.link}>{val.title}</a></h4>
                            <ul className="meta">
                                <li>{val.date}</li>
                                <li>By <a href="/">{val.postBy}</a></li>
                            </ul>
                            <p className="desc mt--10 mb--30">{val.desc}</p>
                            <div className="blog-btn">
                                <a className="button-link" href={val.link}>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return(
            <div className="blog-area pt--120 pt_md--80 pt_sm--80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--80">
                                <h2>Our <span className="theme-color">Blog</span></h2>
                                <img className="image-1" src="/assets/images/app/title-icon.png" alt="App Landing"/>
                                <img className="image-2" src="/assets/images/app/title-icon-2.png" alt="App Landing"/>
                                <img className="image-3" src="/assets/images/app/title-icon-3.png" alt="App Landing"/>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour,available</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {DataList}
                    </div>
                </div>
            </div>
        )
    }
}


export default Blog;

