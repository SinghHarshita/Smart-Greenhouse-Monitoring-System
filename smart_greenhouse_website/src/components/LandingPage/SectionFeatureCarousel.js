import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Card, CardBody } from "reactstrap";
import IntlMessages from "Util/IntlMessages";
import { Colxx } from "Components/CustomBootstrap";
import ReactSiemaCarousel from "Components/ReactSiema/ReactSiemaCarousel";

export default class SectionFeatureCarousel extends React.Component {

    render() {
        return (
            <Row>
                <Colxx xxs="12" className="pl-0 pr-0 mb-5 home-carousel">
                    <ReactSiemaCarousel
                        perPage={{
                            0: 1,
                            768: 2,
                            1200: 3,
                            1440: 4
                        }}
                        controls={false}
                        loop={false}>
                        <div className="pr-3 pl-3">
                            <Card>
                                <CardBody className="text-center">
                                    <div>
                                        {/* <i className="iconsmind-Cupcake large-icon"></i> */}
                                        <i className="simple-icon-settings large-icon"></i>
                                        <h5 className="mb-0 font-weight-semibold">Easy to Customize</h5>
                                        {/* <h5 className="mb-0 font-weight-semibold"><IntlMessages id="lp.featurecarousel.title-1"/></h5> */}
                                    </div>
                                    <div>
                                        <p className="detail-text">Treesponse is customizeable for all crops that can be grown within a greenhouse. Be it flowers, fruits or vegetables or even herbs....Treesponse covers them all!</p>
                                        {/* <p className="detail-text"><IntlMessages id="lp.featurecarousel.detail-1"/></p> */}
                                    </div>
                                    {/* <NavLink className="btn btn-link font-weight-semibold" to="/features"><IntlMessages id="lp.featurecarousel.view"/></NavLink> */}
                                </CardBody>
                            </Card>
                        </div>
                        <div className="pr-3 pl-3">
                            <Card>
                                <CardBody className="text-center">
                                    <div>
                                        {/* <i className="iconsmind-Line-Chart2 large-icon"></i>
                                        <h5 className="mb-0 font-weight-semibold"><IntlMessages id="lp.featurecarousel.title-2"/></h5> */}
                                        <i className="iconsmind-Heart large-icon"></i>
                                        <h5 className="mb-0 font-weight-semibold">User Friendly</h5>
                                    </div>
                                    <div>
                                        {/* <p className="detail-text"><IntlMessages id="lp.featurecarousel.detail-2"/></p> */}
                                        <p className="detail-text">
                                            Treesponse provides a very easy-to-use dashboard interface to view the sensor data. Negligible human intervention is required for monitoring the greenhouse.
                                        </p>
                                    </div>
                                    {/* <NavLink className="btn btn-link font-weight-semibold" to="/features"><IntlMessages id="lp.featurecarousel.view"/></NavLink> */}
                                </CardBody>
                            </Card>
                        </div>
                        <div className="pr-3 pl-3">
                            <Card>
                                <CardBody className="text-center">
                                    <div>
                                        {/* <i className="iconsmind-Three-ArrowFork large-icon"></i>
                                        <h5 className="mb-0 font-weight-semibold"><IntlMessages id="lp.featurecarousel.title-3"/></h5> */}
                                        <i className="simple-icon-clock large-icon"></i>
                                        <h5 className="mb-0 font-weight-semibold">24/7 Support</h5>
                                    </div>
                                    <div>
                                        <p className="detail-text">We at Treesponse provide support 24/7. Any query, any problem is quickly resolved by us. Not just this - Treesponse even monitors the greenhouse smartly 24/7.</p>
                                    </div>
                                    {/* <NavLink className="btn btn-link font-weight-semibold" to="/features"><IntlMessages id="lp.featurecarousel.view"/></NavLink> */}
                                </CardBody>
                            </Card>
                        </div>

                        <div className="pr-3 pl-3">
                            <Card>
                                <CardBody className="text-center">
                                    <div>
                                        {/* <i className="iconsmind-Funny-Bicycle large-icon"></i>
                                        <h5 className="mb-0 font-weight-semibold"><IntlMessages id="lp.featurecarousel.title-4"/></h5> */}
                                        <i className="iconsmind-Phone-Wifi large-icon"></i>
                                        <h5 className="mb-0 font-weight-semibold">Unlimited Monitoring</h5>
                                    </div>
                                    <div>
                                        <p className="detail-text">
                                        Connection to a remote server and local logs enabling user to have live data on his app. Treesponse enables easy and understandable visualizations of sensor data!     
                                        </p>
                                    </div>
                                    {/* <NavLink className="btn btn-link font-weight-semibold" to="/features"><IntlMessages id="lp.featurecarousel.view"/></NavLink> */}
                                </CardBody>
                            </Card>
                        </div>
                        
                        {/* <div className="pr-3 pl-3">
                            <Card>
                                <CardBody className="text-center">
                                    <div>
                                        <i className="iconsmind-Full-View large-icon"></i>
                                        <h5 className="mb-0 font-weight-semibold"><IntlMessages id="lp.featurecarousel.title-5"/></h5>
                                    </div>
                                    <div>
                                        <p className="detail-text"><IntlMessages id="lp.featurecarousel.detail-5"/></p>
                                    </div>
                                    <NavLink className="btn btn-link font-weight-semibold" to="/features"><IntlMessages id="lp.featurecarousel.view"/></NavLink>
                                </CardBody>
                            </Card>
                        </div>
                    */}
                    </ReactSiemaCarousel>
                </Colxx>
            </Row>
        );
    }
}












