import React, { Component, Fragment } from "react";
import { Container, Row, CardTitle } from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import SubHero from "Components/LandingPage/SectionHeroSub";
import Footer from "Components/LandingPage/SectionFooter";
import SectionConnect from "Components/LandingPage/SectionConnect";
import { injectIntl } from 'react-intl';
import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";
const mapStateToProps = ({ landingPage }) => {
  const { isMobileMenuOpen } = landingPage;
  return { isMobileMenuOpen };
}

class Contact extends Component {
  constructor(props) {
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMobileMenuToggle() {
    this.props.landingPageMobileMenuToggle()
  }
  onUnmountingMobileMenu() {
    this.props.landingPageMobileMenuClose()
    return true;
  }

  onMenuClick(ref, event) {
    event.preventDefault();
    let scroller;
    if (ref !== "home") {
      scroller = scrollToComponent(this[ref], { align: 'top', offset: 60 });
      scroller.on('end', () => {
        this.headroom.unpin();
        this.props.landingPageMobileMenuClose();
      });
    } else {
      scrollToComponent(this[ref], { align: 'top' });
    }
  }

  componentDidMount() {
    scrollToComponent(this["home"], { align: 'top', duration: 10 });
  }

  render() {
    const { messages } = this.props.intl;
    return (
      <Fragment>
        <div className={this.props.isMobileMenuOpen ? "landing-page show-mobile-menu" : "landing-page"}>
          <MenuMultipageMobile onUnmountingMenu={() => this.onUnmountingMobileMenu()}></MenuMultipageMobile>
          <div className="main-container">

            <Headroom className="landing-page-nav" ref={(x) => { this.headroom = x; }}>
              <MenuMultipage onMobileMenuToggle={() => this.onMobileMenuToggle()}></MenuMultipage>
            </Headroom>

            <div className="content-container" ref={(x) => { this.home = x; }}>
              <div className="section home subpage">
                <Container>
                  <SubHero title={messages["lp.contact.title"]} detail={messages["lp.contact.detail"]} />
                  <Row>
                    <NavLink className="btn btn-circle btn-outline-semi-light hero-circle-button" to="#" onClick={(event) => this.onMenuClick("content", event)}>
                      <i className="simple-icon-arrow-down"></i>
                    </NavLink>
                  </Row>
                </Container>
              </div>

              <div className="section" ref={(x) => { this.content = x; }}>
                <Container>
                  <Row>
                    <Colxx xxs="12" lg="7">
                      <h2>Contact Form</h2>
                      <div className="card">
                        <div className="card-body">

                          <CardTitle>
                            Reach Us
                        </CardTitle>

                          <form>
                            <label className="form-group has-top-label">
                              <input className="form-control" placeholder="" />
                              <span>NAME</span>
                            </label>

                            <label className="form-group has-top-label">
                              <input className="form-control" />
                              <span>E-MAIL</span>
                            </label>

                            <label className="form-group has-top-label">
                              <textarea className="form-control" rows="4"></textarea>
                              <span>MESSAGE</span>
                            </label>

                            <a href="#" className="btn btn-primary btn-multiple-state float-right" id="contactButton">
                              <div className="spinner d-inline-block">
                                <div className="bounce1"></div>
                                <div className="bounce2"></div>
                                <div className="bounce3"></div>
                              </div>
                              <span className="icon success" data-toggle="tooltip" data-placement="top"
                                title="Message sent successfully!">
                                <i className="simple-icon-check"></i>
                              </span>
                              <span className="icon fail" data-toggle="tooltip" data-placement="top"
                                title="Something went wrong!">
                                <i className="simple-icon-exclamation"></i>
                              </span>
                              <span className="label ">Send</span>
                            </a>
                          </form>
                        </div>
                      </div>
                    </Colxx>

                    <Colxx xxs="12" lg={{ size: 4, offset: 1 }} className="side-bar">
                      <h2>Contact Info</h2>

                      <p className="text-primary mb-2">Address</p>
                      <p className="mb-5">35 Little Russell St Bloomsbury London<br />WC1A 2HH UK</p>

                      <p className="text-primary mb-2">Phone</p>
                      <p className="mb-0">+00 42 287 2686</p>
                      <p className="mb-5">+00 42 287 2685</p>

                      <p className="text-primary mb-2">E-mail</p>
                      <p className="mb-0">info@woodentoys.com</p>
                    </Colxx>
                  </Row>

                </Container>
              </div>

              <div className="section background background-no-bottom mb-0">
                <Container>
                  <SectionConnect />
                </Container>
              </div>

              <div className="section footer mb-0">
                <Footer onClick={this.onMenuClick} />
              </div>

            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, { landingPageMobileMenuToggle, landingPageMobileMenuClose })(injectIntl(Contact))