import React, { Component } from 'react';
import { Carousel, CarouselItem, Image, Row, Col } from 'react-bootstrap';
import './Body.scss';

import HomeCarousel1 from './homecorosol1.jpg';
import HomeCarousel2 from './homecorosol2.jpg';
import HomeCarousel3 from './homecorosol3.jpg';
import HomeCarousel4 from './homecorosol4.jpg';
import HomeCarousel5 from './homecorosol5.jpg';
import HomeExclusiveWallpaper from './homeExclusiveWallpaper.jpg';
import Tshirt from './tshirts.jpg';
import Umbrella from './umbrellas.jpg';
import Socks from './socks.jpg';
import MobCovers from './mobileCovers.jpg';
import Caps from './caps.jpg';
import Badges from './badges.jpg';
import Boxers from './boxers.jpg';
import TshirtDress from './tshirtDress.jpg';
import TankTops from './tankTops.jpg';
import Mugs from './mugs.jpg';
import Stickers from './stickers.jpg';
import Notebooks from './notebooks.jpg';
import Flipflop from './flipFlop.jpg';
import Bags from './bags.jpg';
import Pins from './pins.jpg';
import FacebookIcon from '../Footer/fbicon.png';
import InstaIcon from '../Footer/instaIcon.jpg';
import SnapIcon from '../Footer/snapIcon.png';
import TwitterIcon from '../Footer/twitter icon.png';
import Footer from '../Footer/Footer';

class Body extends Component {
    constructor(props)
    {
        super(props);
        this.goToProductListing = this.goToProductListing.bind(this);
    }
    goToProductListing()
    {
        window.location.href = "/ProductListing"
    }
    render() {
        var self = this,i, carouselStructure = [], carouselImages = [HomeCarousel1, HomeCarousel2, HomeCarousel3, HomeCarousel4, HomeCarousel5];
        var len = carouselImages.length;
        for (i = 0; i < len; i++) {
            carouselStructure.push(
                <CarouselItem key={carouselImages[i]}>
                    <Image src={carouselImages[i]} fluid />
                </CarouselItem>
            );
        }

        return (
            <div className="body-wrapper">
                <Carousel interval={3000} wrap="true">
                    {carouselStructure}
                </Carousel>
                <Row className="show-grid exclusive-row">
                    <Col sm={1}>
                    </Col>
                    <Col sm={3}><hr /></Col>
                    <Col sm={4} className="exclusive-title-col">
                        <p> EXCLUSIVE MEMBERSHIP</p>
                    </Col>
                    <Col sm={3}><hr /></Col>

                    <Col sm={1}></Col>
                </Row>
                <Row className="show-grid">
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Image src={HomeExclusiveWallpaper} fluid />
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <Row className="show-grid exclusive-row">
                    <Col sm={1}>
                    </Col>
                    <Col sm={3}><hr /></Col>
                    <Col sm={4} className="exclusive-title-col">
                        <p> PRODUCTS</p>
                    </Col>
                    <Col sm={3}><hr /></Col>
                    <Col sm={1}></Col>
                </Row>
                <Row className="show-grid">
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Row className="show-grid">
                            <Col className="handle-overflow" sm={6}>
                    <Image className="common-image tshirt-image" src={Tshirt} fluid onClick={self.goToProductListing}/>
                            </Col>
                            <Col sm={6}>
                                <Row className="show-grid handle-overflow">
                                <Col>
                                <Image className="common-image umbrella-image" src={Umbrella} fluid />
                                </Col>
                                    
                                </Row>
                                <Row className="show-grid ">
                                    <Col className="handle-overflow" sm={6}>
                                        <Image className="common-image" src={Socks} fluid />
                                    </Col>
                                    <Col sm={6} className="handle-overflow">
                                        <Image className="common-image" src={MobCovers} fluid />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <Row className="show-grid">
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Row>
                            <Col sm={6}>
                                <Row className="show-grid">
                                    <Col sm={6}>
                                        <Image className="common-image caps-image" src={Caps} fluid/>
                                    </Col>
                                    <Col sm={6}>
                                        <Image className="common-image badges-image" src={Badges} fluid/>
                                    </Col>
                                </Row>
                                <Row className="show-grid">
                                <Col>
                                <Image className="common-image" src={Boxers} fluid/>
                                </Col>
                                    
                                </Row>
                            </Col>
                            <Col sm={6}>
                                <Image className="common-image tshirtDress-image" src={TshirtDress} fluid/>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <Row className="show-grid">
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Row className="show-grid">
                            <Col sm={6}>
                                <Image className="common-image tankTop-image" src={TankTops} fluid/>
                            </Col>
                            <Col sm={6}>
                                <Row>
                                <Col>
                                <Image className="common-image notebook-image" src={Notebooks} fluid/>
                                </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <Image className="common-image" src={Mugs} fluid/>
                                    </Col>
                                    <Col sm={6}>
                                        <Image className="common-image" src={Stickers} fluid/>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <Row className="show-grid">
                    <Col sm={1}></Col>
                    <Col sm={10}>
                        <Row className="show-grid">
                            <Col sm={3}>
                                <Image className="common-image" src={Flipflop} fluid/>
                            </Col>
                            <Col sm={3}>
                                <Image className="common-image" src={Pins} fluid/>
                            </Col>
                            <Col sm={6}>
                                <Image className="common-image" src={Bags} fluid/>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <Row className="show-grid social-row">
                    <Col sm={4}></Col>
                    <Col sm={4}>
                        <Row className="show-grid">
                            <Col sm={3}>
                            <div className="social-transition">
                                <Image className="fbIcon-size" src={FacebookIcon}/>
                                <p className="fbIcon-title">Facebook</p>
                            </div>
                            </Col>
                            <Col sm={3}>
                            <div className="social-transition">
                            <Image className="istaIcon-size" src={InstaIcon}/>
                            <p className="istaIcon-title">Instagram</p>
                            </div>
                            </Col>
                            <Col sm={3}>
                            <div className="social-transition">
                            <Image className="snapIcon-size" src={SnapIcon}/>
                            <p className="snapIcon-title">SnapChat</p>
                            </div>
                            </Col>
                            <Col sm={3}>
                            <div className="social-transition">
                            <Image className="twitterIcon-size" src={TwitterIcon}/>
                            <p className="twitterIcon-title">Twitter</p>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={4}></Col>
                </Row>
            </div>
        );
    }
}

export default Body;