import React, { Component } from "react";
import Pages from './Pages';
import Features from './Features';
import Suggestions from './Suggestions';

class Demo extends Component{
    render(){

        let demos = [
            {demoImg: 'home-01.png', demoLink: 'home-one', demoTitle: 'Home One'},
            {demoImg: 'home-02.png', demoLink: 'home-two', demoTitle: 'Home Two'},
            {demoImg: 'blog-grid.png', demoLink: 'blog-grid', demoTitle: 'Blog Grid'},
            {demoImg: 'blog-two-column.png', demoLink: 'blog-two-column', demoTitle: 'Blog Two Column'},
            {demoImg: 'blog-details.png', demoLink: 'blog-details', demoTitle: 'Blog Details'},
        ];

        let features = [
            {featureIconName: 'icon-genius', featureTitle: 'Latest React', featureDescription: 'Latest React v16.8.6 used'},
            {featureIconName: 'icon-mobile', featureTitle: 'Responsive Design', featureDescription: 'Castro is supper responsive & work perfectly in all devices.'},
            {featureIconName: 'icon-profile-male', featureTitle: 'User Friendly', featureDescription: 'Castro easy to use for any technical & nontechnical People.'},
            {featureIconName: 'icon-beaker', featureTitle: 'Creative Design', featureDescription: 'It comes with creative & smart design layout.'},
            {featureIconName: 'icon-puzzle', featureTitle: 'Icon Font', featureDescription: 'It comes with most popular FontAwesome, Ionicon and Flaticon icon font.'},
            {featureIconName: 'icon-puzzle', featureTitle: 'Google Font', featureDescription: '600+ Google Fonts. You can change font for all elements easily.'},
            {featureIconName: 'icon-search', featureTitle: 'Clean Markup', featureDescription: 'We developed it followed by W3C Markup.'},
            {featureIconName: 'icon-upload', featureTitle: 'Free Updates', featureDescription: 'Purchase once & get life-time free updates.'},
            {featureIconName: 'icon-megaphone', featureTitle: 'Real Support', featureDescription: 'We provide 7 days a week one by one real support.'}
        ];


        let suggestionsHTML = [
            {imgUrl: '//s3.envato.com/files/186369241/preview.__large_preview.png', suggestionLink:'//themeforest.net/item/apnew-multipurpose-landing-page-template/16154013?ref=AslamHasib', suggestionTitle: 'Apnew - Multipurpose Landing Page Template'},

            {imgUrl: '//s3.envato.com/files/223832857/preview.__large_preview.jpg', suggestionLink:'//themeforest.net/item/appro-multipurpose-landing-page-template/19718075?ref=AslamHasib', suggestionTitle: 'Appro – Multipurpose Landing Page Template'},

            {imgUrl: '//s3.envato.com/files/255284479/01_preview_sotare.__large_preview.png', suggestionLink:'//themeforest.net/item/sotare-software-landing-page-bootstrap-4-template/22688830?ref=AslamHasib', suggestionTitle: 'Sotare - Software Landing Page Bootstrap 4 Template'}
        ];

        let suggestionsWP = [
            
            {imgUrl: '//s3.envato.com/files/219991401/preview.__large_preview.jpg', suggestionLink:'//themeforest.net/item/apptech-wordpress-landing-page-theme/19323624?ref=AslamHasib', suggestionTitle: 'AppTech - WordPress Landing Page Theme'},

            {imgUrl: '//s3.envato.com/files/239072226/preview.__large_preview.png', suggestionLink:'//themeforest.net/item/tuco-construction-building-wordpress-theme/21192136?ref=AslamHasib', suggestionTitle: 'Tuco - Construction & Building WordPress Theme'},

            {imgUrl: '//s3.envato.com/files/225152672/preview.__large_preview.jpg', suggestionLink:'//themeforest.net/item/shield-roofing-service-wordpress-theme/19837552?ref=AslamHasib', suggestionTitle: 'Shield - Roofing Service WordPress Theme'}
        ];


        return(
            <div>
                <div className="landing-page-wrapper">

                    {/* Start Header */}
                    <div className="header-section section sticker">
                        <div className="container">
                        <div className="row justify-content-between align-items-center">
                            {/* Logo */}
                            <div className="logo col-6 text-left">
                                <a href="/">
                                    <img src="assets/images/landing/logo.png" className="img-fluid" alt="" />
                                    <img src="assets/images/landing/logo-2.png" alt="" className="sticky-logo img-fluid" /></a>
                            </div>
                            {/* Logo */}
                            <div className="col-6 text-right">
                                <a className="buy-btn" href="/">Buy Torres</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Header End */}

                    {/* Start Hero */}
                    <div className="hero-section section overlay landing-hero-bg">
                        <div className="container">
                        <div className="row">
                            <div className="hero-content text-center col-12">
                                <h1><strong>Torres</strong>React Multipurpose Landing Page Template</h1>
                                <a className="buy-btn" href="#demo">View Demo</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Hero End */}

                    {/* Pages Section Start */}
                    <Pages demos = {demos} />
                    {/* Pages Section End */}

                    {/* Features Section Start */}
                    <Features features = {features} />
                    {/* Features Section End */}

                    {/* Suggestions HTML Section Start */}
                    <Suggestions background="" category = "HTML" suggestions = {suggestionsHTML} />
                    {/* Suggestions HTML Section End */}

                    {/* Suggestions WP Start */}
                    <Suggestions background="bg-gray" category = "WordPress" suggestions = {suggestionsWP} />
                    {/* Suggestions WP Section End */}

                    {/* Footer Section Start */}
                    <div className="footer-section section pt--65 pb--50 overlay bg-img" data-bg="assets/img/landing/hero-bg.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1>Make your website come to life quickly.</h1>
                                    <a className="buy-btn float-right" href="//themeforest.net/user/hastech/portfolio">buy Torres</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer Section End */}  

                </div>
            </div>
        )
    }
}




export default Demo;

