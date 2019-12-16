import React, { Component, Fragment } from "react";
import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import HomeHero from "Components/LandingPage/SectionHeroHome";
import HomeFeatureCarousel from "Components/LandingPage/SectionFeatureCarousel";
import Features from "Components/LandingPage/SectionFeatures";
import Reviews from "Components/LandingPage/SectionReviews";
import Team from "Components/LandingPage/SectionTeam";
import Clients from "Components/LandingPage/SectionClients";
import Footer from "Components/LandingPage/SectionFooter";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { injectIntl } from 'react-intl';


import { connect } from "react-redux";
import { landingPageMobileMenuToggle, landingPageMobileMenuClose } from "Redux/actions";
const mapStateToProps = ({ landingPage }) => {
  const { isMobileMenuOpen } = landingPage;
  return { isMobileMenuOpen };
}

class MultipageHome extends Component {
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

  componentDidMount() {
    scrollToComponent(this["home"], { align: 'top', duration: 10 });
  }

  render() {
    return (
      <Fragment>
        <div className={this.props.isMobileMenuOpen ? "landing-page show-mobile-menu" : "landing-page"}>
          <MenuMultipageMobile onUnmountingMenu={() => this.onUnmountingMobileMenu()}></MenuMultipageMobile>
          <div className="main-container">

            <Headroom className="landing-page-nav" ref={(x) => { this.headroom = x; }}>
              <MenuMultipage onMobileMenuToggle={() => this.onMobileMenuToggle()}></MenuMultipage>
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

              <div className="section" ref={(x) => { this.features = x; }}>
                <Container>
                  <Features />
                </Container>
              </div>

              <div className="section background">
                <Container>
                  <Reviews />
                </Container>
              </div>

              <div className="section">
                <Container>
                  <Team />
                </Container>
              </div>

              <div className="section background background-no-bottom mb-0">
                <Container>
                  <Clients />
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
export default connect(mapStateToProps, { landingPageMobileMenuToggle, landingPageMobileMenuClose })(injectIntl(MultipageHome))