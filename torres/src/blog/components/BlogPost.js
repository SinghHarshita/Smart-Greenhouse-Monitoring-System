import React, { Component } from "react";


class BlogPost extends Component{
    render(){
        let data = [
            {
                image: "/assets/images/blog/blog-big-1.jpg",
                title: 'Mobile apps are becoming popular in 3rd world',
                link:'blog-details',
                date:'Posted on 25 Jan, 2019',
                postBy:'Nipa',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
            },

            {
                image: "/assets/images/blog/blog-big-2.jpg",
                title: 'Latest App landing are Comming soon in latest world',
                link:'blog-details',
                date:'Posted on 25 Jan, 2019',
                postBy:'John Snow',
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
            {
                image: "/assets/images/blog/blog-big-1.jpg",
                title: 'Mobile apps are becoming popular in 3rd world',
                link:'blog-details',
                date:'Posted on 25 Jan, 2019',
                postBy:'John Snow',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
            },

            {
                image: "/assets/images/blog/blog-big-2.jpg",
                title: 'App landing and sass landing latest post here',
                link:'blog-details',
                date:'Posted on 25 Jan, 2019',
                postBy:'John Snow',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
            },

            {
                image: "/assets/images/blog/blog-big-3.jpg",
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
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
                            <div class="blog-btn">
                                <a class="button-link" href={val.link}>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
        return(
            <div className="blog-area pt--120">
                <div className="container">
                    <div className="row">
                        {DataList}
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pagination-wrapper mt--45">
                                <ul className="page-list">
                                <li className="ative"><a href="/">1</a></li>
                                <li><a href="/">2</a></li>
                                <li><a href="/">3</a></li>
                                <li><a href="/"><i className="zmdi zmdi-arrow-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogPost;
