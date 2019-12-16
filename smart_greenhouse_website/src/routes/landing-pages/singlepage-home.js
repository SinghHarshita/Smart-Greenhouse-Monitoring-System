import React, { Component, Fragment } from "react";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import { MenuSinglepage, MenuSinglepageMobile } from "Components/LandingPage/SectionMenu";
import HomeHero from "Components/LandingPage/SectionHeroHome";
import HomeFeatureCarousel from "Components/LandingPage/SectionFeatureCarousel";
import Features from "Components/LandingPage/SectionFeatures";
import Reviews from "Components/LandingPage/SectionTeam";
import Footer from "Components/LandingPage/SectionFooter";
import SectionPricingTable from "Components/LandingPage/SectionPricingTable";
// import Blog from "Components/LandingPage/SectionBlog";
import { injectIntl } from 'react-intl';

import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';

import { connect } from "react-redux";
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";
const mapStateToProps = ({ landingPage }) => {
  const { isMobileMenuOpen } = landingPage;
  return { isMobileMenuOpen };
}

class SinglepageHome extends Component {

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
      scrollToComponent(this[ref], { align: 'top'});
    }
  }

  render() {
    return (
      <Fragment>
        <div className={this.props.isMobileMenuOpen ? "landing-page show-mobile-menu" : "landing-page"}>
          <MenuSinglepageMobile onClick={this.onMenuClick} onUnmountingMenu={() => this.onUnmountingMobileMenu()}></MenuSinglepageMobile>
          <div className="main-container">

            <Headroom className="landing-page-nav" ref={(a) => { this.headroom = a; }}>
              <MenuSinglepage onClick={this.onMenuClick} onMobileMenuToggle={() => this.onMobileMenuToggle()}></MenuSinglepage>
            </Headroom>

            <div className="content-container" ref={(x) => { this.home = x; }}>
              <div className="section home">
                <Container>
                  <HomeHero />
                  <HomeFeatureCarousel />
                  <Row>
                    <NavLink id="homeCircleButton" className="btn btn-circle btn-outline-semi-light hero-circle-button" to="#" onClick={(event) => this.onMenuClick("features", event)}>
                      <i className="simple-icon-arrow-down"></i>
                    </NavLink>
                  </Row>
                </Container>

              </div>

              <div className="section"  ref={(x) => { this.features = x; }}>
                <Container>
                  <Features />
                </Container>
              </div>

              <div className="section background"  ref={(x) => { this.reviews = x; }}>
                <Container>
                  <Reviews />
                </Container>
              </div>

              <div className="section" ref={(x) => { this.pricing = x; }}>
                <Container>
                  <SectionPricingTable />
                </Container>
              </div>

              {/* <div className="section background background-no-bottom mb-0" ref={(x) => { this.blog = x; }}>
                <Container>
                  <Blog />
                </Container>
              </div> */}

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
export default connect(mapStateToProps, { landingPageMobileMenuToggle, landingPageMobileMenuClose })(injectIntl(SinglepageHome))