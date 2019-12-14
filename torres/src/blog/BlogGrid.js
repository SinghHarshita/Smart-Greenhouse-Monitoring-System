import React, { Component } from "react";
import Navbar from '../components/Navbar';
import Breadcaump from '../components/Breadcaump';
import BlogPost from './components/BlogPost';
import Footer from '../components/Footer';


class BlogGrid extends Component{
    render(){
        return(
            <div>
                {/* Header Navbar */}
                <Navbar />

                {/* Breadcaump Area */}
                <Breadcaump />

                <BlogPost />
                {/* Footer */}
                <Footer horizontal="horizontal" />

            </div>
        )
    }
}
export default BlogGrid;

