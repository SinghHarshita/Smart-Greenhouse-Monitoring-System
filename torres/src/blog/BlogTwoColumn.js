import React, { Component } from "react";
import Navbar from '../components/Navbar';
import BlogTwoColumn from './components/BlogTwoColumn';
import Footer from '../components/Footer';


class BlogGrid extends Component{
    render(){
        return(
            <div>
                {/* Header Navbar */}
                <Navbar />

                {/* Breadcaump Area */}
                <div className="breadcaump-area ptb--120 bg_image bg_image--1" data-black-overlay="5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner">
                                    <h2 className="title">Blog Two Column</h2>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>-</li>
                                        <li>Blog Two Column</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Two Column */}
                <BlogTwoColumn />
                
                {/* Footer */}
                <Footer horizontal="horizontal" />

            </div>
        )
    }
}
export default BlogGrid;

