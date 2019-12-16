import React, { Component, Fragment } from "react";
import {
  Container, Row
} from "reactstrap";
import { MenuMultipage, MenuMultipageMobile } from "Components/LandingPage/SectionMenu";
import Headroom from 'react-headroom';
import scrollToComponent from 'react-scroll-to-component';
import { NavLink } from "react-router-dom";
import SubHero from "Components/LandingPage/SectionHeroSub";
import Footer from "Components/LandingPage/SectionFooter";
import SectionNewsletter from "Components/LandingPage/SectionNewsletter";
import { injectIntl } from 'react-intl';
import { Colxx } from "Components/CustomBootstrap";

import { connect } from "react-redux";
import {landingPageMobileMenuToggle,landingPageMobileMenuClose} from "Redux/actions";
const mapStateToProps = ({ landingPage }) => {
  const { isMobileMenuOpen} = landingPage;
  return { isMobileMenuOpen };
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.onMenuClick = this.onMenuClick.bind(this);
  }

  onMobileMenuToggle(){
    this.props.landingPageMobileMenuToggle()
  }
  onUnmountingMobileMenu(){
    this.props.landingPageMobileMenuClose()
    return true;
  }
  
  componentDidMount() {
    scrollToComponent(this["home"], { align: 'top', duration: 10 });
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
    const { messages } = this.props.intl;
    return (
      <Fragment>
        <div className={this.props.isMobileMenuOpen?"landing-page show-mobile-menu":"landing-page"}>
        <MenuMultipageMobile  onUnmountingMenu={()=>this.onUnmountingMobileMenu()}></MenuMultipageMobile>
          <div className="main-container">

            <Headroom className="landing-page-nav" ref={(x) => { this.headroom = x; }}>
            <MenuMultipage onMobileMenuToggle={()=>this.onMobileMenuToggle()}></MenuMultipage>
            </Headroom>

            <div className="content-container" ref={(x) => { this.home = x; }}>
              <div className="section home subpage">
                <Container>
                  <SubHero title={messages["lp.content.title"]} detail={messages["lp.content.detail"]} >
                  </SubHero>
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
                    <Colxx xxs="12">
                      <h2>Getting Started</h2>
                      <p>
                        Blended value human-centered social innovation resist scale and impact issue
                        outcomes bandwidth efficient. A; social return on investment, change-makers,
                        support a, co-create commitment because sustainable. Rubric when vibrant black
                        lives matter benefit corporation human-centered. Save the world, problem-solvers
                        support silo mass incarceration. Accessibility empower communities changemaker,
                        low-hanging fruit accessibility, thought partnership impact investing program areas
                        invest. Contextualize optimism unprecedented challenge, empower inclusive. Living a
                        fully ethical life the resistance segmentation social intrapreneurship efficient
                        inspire external partners. Systems thinking correlation, social impact; when
                        revolutionary bandwidth. Engaging, revolutionary engaging; empower communities
                        policymaker shared unit of analysis technology inspiring social entrepreneurship.
                          <br />
                        <br />
                        Mass incarceration, preliminary thinking systems thinking vibrant thought
                        leadership corporate social responsibility. Green space global, policymaker; shared
                        value disrupt segmentation social capital. Thought partnership, optimism
                        citizen-centered commitment, relief scale and impact the empower communities
                        circular. Contextualize boots on the ground; uplift big data, co-creation co-create
                        segmentation youth inspire. Innovate innovate overcome injustice.
                      </p>
                      <br />

                      <div className="mb-5">
                        <h3>Game Changing Features</h3>
                        <ol>
                          <li>
                            Preliminary thinking systems
                              </li>
                          <li>
                            Bandwidth efficient
                              </li>
                          <li>
                            Green space
                              </li>
                          <li>
                            Social impact
                              </li>
                        </ol>
                      </div>


                      <h2>Unprecedented Challenge</h2>
                      <p>
                        Systems thinking correlation, social impact; when
                        revolutionary bandwidth. Engaging, revolutionary engaging; empower communities
                        policymaker shared unit of analysis technology inspiring social entrepreneurship.
                          <br />
                        <br />
                        Mass incarceration, preliminary thinking systems thinking vibrant thought
                        leadership corporate social responsibility. Green space global, policymaker; shared
                        value disrupt segmentation social capital. Thought partnership, optimism
                        citizen-centered commitment, relief scale and impact the empower communities
                        circular. Contextualize boots on the ground; uplift big data, co-creation co-create
                        segmentation youth inspire. Innovate innovate overcome injustice.
                      </p>
                      <br />

                      <h2>Thought Partnership</h2>
                      <p>
                        Blended value human-centered social innovation resist scale and impact issue
                        outcomes bandwidth efficient. A; social return on investment, change-makers,
                        support a, co-create commitment because sustainable. Rubric when vibrant black
                        lives matter benefit corporation human-centered. Save the world, problem-solvers
                        support silo mass incarceration. Accessibility empower communities changemaker,
                        low-hanging fruit accessibility, thought partnership impact investing program areas
                        invest. Contextualize optimism unprecedented challenge, empower inclusive. Living a
                        fully ethical life the resistance segmentation social intrapreneurship efficient
                        inspire external partners. Systems thinking correlation, social impact; when
                        revolutionary bandwidth. Engaging, revolutionary engaging; empower communities
                        policymaker shared unit of analysis technology inspiring social entrepreneurship.
                          <br />
                        <br />
                        Mass incarceration, preliminary thinking systems thinking vibrant thought
                        leadership corporate social responsibility. Green space global, policymaker; shared
                        value disrupt segmentation social capital. Thought partnership, optimism
                        citizen-centered commitment, relief scale and impact the empower communities
                        circular. Contextualize boots on the ground; uplift big data, co-creation co-create
                        segmentation youth inspire. Innovate innovate overcome injustice.
                          <br /> <br />
                        Blended value human-centered social innovation resist scale and impact issue
                        outcomes bandwidth efficient. A; social return on investment, change-makers,
                        support a, co-create commitment because sustainable. Rubric when vibrant black
                        lives matter benefit corporation human-centered. Save the world, problem-solvers
                        support silo mass incarceration. Accessibility empower communities changemaker,
                        low-hanging fruit accessibility, thought partnership impact investing program areas
                        invest. Contextualize optimism unprecedented challenge, empower inclusive. Living a
                        fully ethical life the resistance segmentation social intrapreneurship efficient
                        inspire external partners. Systems thinking correlation, social impact; when
                        revolutionary bandwidth. Engaging, revolutionary engaging; empower communities
                        policymaker shared unit of analysis technology inspiring social
                        entrepreneurship.Mass incarceration, preliminary thinking systems thinking vibrant
                        thought
                        leadership corporate social responsibility. Green space global, policymaker; shared
                        value disrupt segmentation social capital. Thought partnership, optimism
                        citizen-centered commitment, relief scale and impact the empower communities
                        circular. Contextualize boots on the ground; uplift big data, co-creation co-create
                        segmentation youth inspire. Innovate innovate overcome injustice.
                      </p>

                    </Colxx>
                  </Row>

                </Container>
              </div>

              <div className="section background background-no-bottom mb-0">
                <Container>
                  <SectionNewsletter />
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
export default connect(mapStateToProps, {landingPageMobileMenuToggle,landingPageMobileMenuClose})(injectIntl(Content))