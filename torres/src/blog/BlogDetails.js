import React ,  { Component } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class BlogDetails extends Component {
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
                                    <h2 className="title">Blog Details</h2>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>-</li>
                                        <li>Blog Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Start Blog Details */}
                <div className="blog-details pt--120 pt_md--80 pt_sm--80 bg-color">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="blog-details-inner">
                                    <article className="single-post-details">
                                        <div className="post-thumbnail">
                                            <img className="w-100" src="/assets/images/blog/blog-big-2.jpg" alt="Blog Images" />
                                        </div>
                                        <div className="content mt--50">
                                            <p className="first-bold">Lorem Ipsum is simply dummy text of the printing and
                                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                                ever since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book the industry's standard dummy text
                                                ever since the 1500s, when an unknown printer took a galley of type and
                                                scrambled it to make a type specimen book.</p>

                                            <p className="mt--35">Contrary to popular belief, Lorem Ipsum is not simply random text.
                                                It has roots in a piece of classical Latin literature from 45 BC, making it over
                                                2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
                                                in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                                                Lorem Ipsum passage, and going through the cites of the word in classical
                                                literature, discovered the undoubtable source.</p>
                                        </div>
                                        <div className="content mt--50">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                                unknown printer took a galley of type and scrambled it to make a type specimen
                                                book Contrary to popular belief.</p>

                                            <p className="mt--35">Contrary to popular belief, Lorem Ipsum is not simply random text.
                                                It has roots in a piece of classical Latin literature from 45 BC, making it over
                                                2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
                                                in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                                                Lorem Ipsum passage, and going through the cites of the word in classical
                                                literature, discovered the undoubtable source.</p>
                                        </div>
                                        <blockquote className="quote-content">
                                            <div className="quote-text">
                                                There are many variations of passages of Lorem Ipsum available, but the majority
                                                have suffered alteration in some form, by injected humour have suffered alteration in some form, by injected humour,
                                            </div>
                                        </blockquote>
                                        <div className="post-thumbnail mt--50">
                                            <img className="w-100" src="/assets/images/blog/blog-big-1.jpg" alt="Blog Images" />
                                        </div>
                                        <div className="content mt--50">
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                                unknown printer took a galley of type and scrambled it to make a type specimen
                                                book Contrary to popular belief.Contrary to popular belief, Lorem Ipsum is not
                                                simply random text. It has roots in a piece of classical Latin literature from
                                                45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                                                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                                                words, consectetur, from a Lorem Ipsum passage, and going through the cites of
                                                the word in classical literature, discovered the undoubtable source.</p>
                                        </div>
                                        <div className="blog-footer mt--50">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-sm-6 col-12">
                                                    <div className="post-tag d-flex align-items-center">
                                                        <h6 className="font--16 mb--0">Tags:</h6>
                                                        <div className="blog-tag-list pl--5">
                                                            <a href="/">App Landing</a>
                                                            <a href="/">App</a>
                                                            <a href="/">App Landing</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-sm-6 col-12 mt_mobile--20">
                                                    <div className="post-share justify-content-start justify-content-sm-end d-flex align-items-center">
                                                        <h6 className="font--16 mb--0">Share:</h6>
                                                        <div className="author-social">
                                                            <a className="facebook" href="/"><i className="zmdi zmdi-facebook"></i></a>
                                                            <a className="twitter" href="/"><i className="zmdi zmdi-twitter"></i></a>
                                                            <a className="google-plus" href="/"><i className="zmdi zmdi-google-plus"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <div className="comments-wrapper mt--50">
                                        <div className="inner">
                                            <h4 className="font--24">3 Comments</h4>
                                            <div className="commnent-list-wrap mt--25">
                                            {/* Start Single Comment */}
                                            <div className="comment">
                                                <div className="thumb">
                                                    <img src="/assets/images/blog/team-01.jpg" alt="Multipurpose" />
                                                </div>
                                                <div className="content">
                                                    <div className="info d-flex justify-content-between">
                                                        <h6 className="mb--0">Fatema Asrafi</h6>
                                                        <span className="reply-btn"><a href="/">Reply</a></span>
                                                    </div>
                                                    <div className="comment-footer mt--5">
                                                        <span>May 17, 2018 at 1:59 am</span>
                                                    </div>
                                                    <div className="text mt--5 pr--50 pr_sm--5">
                                                        <p className="bk_pra">To link your Facebook and Twitter accounts,
                                                            open the Instagram app on your phone or tablet, and select
                                                            the Profile tab in the bottom-right corner of the screen.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Comment */}
                                                
                                            {/* Start Single Comment */}
                                            <div className="comment comment-reply">
                                                <div className="thumb">
                                                    <img src="/assets/images/blog/team-02.jpg" alt="Multipurpose" />
                                                </div>
                                                <div className="content">
                                                    <div className="info d-flex justify-content-between">
                                                        <h6 className="mb--0">John Doe</h6>
                                                        <span className="reply-btn"><a href="/">Reply</a></span>
                                                    </div>
                                                    <div className="comment-footer mt--5">
                                                        <span>May 17, 2018 at 1:59 am</span>
                                                    </div>
                                                    <div className="text mt--5 pr--50 pr_sm--5">
                                                        <p className="bk_pra">To link your Facebook and Twitter accounts,
                                                            open the Instagram app on your phone or tablet, and select
                                                            the Profile tab in the bottom-right corner of the screen.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Comment */}
                                                
                                            {/* Start Single Comment */}
                                            <div className="comment">
                                                <div className="thumb">
                                                    <img src="/assets/images/blog/team-03.jpg" alt="Multipurpose" />
                                                </div>
                                                <div className="content">
                                                    <div className="info d-flex justify-content-between">
                                                        <h6 className="mb--0">Jane Ara</h6>
                                                        <span className="reply-btn"><a href="/">Reply</a></span>
                                                    </div>
                                                    <div className="comment-footer mt--5">
                                                        <span>May 17, 2018 at 1:59 am</span>
                                                    </div>
                                                    <div className="text mt--5 pr--50 pr_sm--5">
                                                        <p className="bk_pra">To link your Facebook and Twitter accounts,
                                                            open the Instagram app on your phone or tablet, and select
                                                            the Profile tab in the bottom-right corner of the screen.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End Single Comment */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Start Comment Form */}
                                    <div className="comment-form-wrapper mt--50">
                                        <div className="header">
                                            <h4 className="font--24">Leave A Comment</h4>
                                            <div className="coppent-note mt--20 mb--30">
                                                <p className="bk_pra">Your email address will not be published. Required fields
                                                    are marked </p>
                                            </div>
                                        </div>
                                        <div className="contact-form">
                                            <form action="/">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <input type="text" placeholder="Name *" />
                                                    </div>
                                                    <div className="col-lg-12 mt--30">
                                                        <input type="text" placeholder="Email *" />
                                                    </div>
                                                    <div className="col-lg-12 mt--30">
                                                        <input type="text" placeholder="Website" />
                                                    </div>
                                                    <div className="col-lg-12 mt--30">
                                                        <textarea placeholder="Your Comment"></textarea>
                                                    </div>
                                                    <div className="col-lg-12 mt--30">
                                                        <div className="blog-btn">
                                                            <a href="/">Post Comment</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    {/* End Comment Form */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Blog Details */}

                {/* Footer */}
                <Footer horizontal="horizontal" />

            </div>
        )
    }
}

export default BlogDetails;














