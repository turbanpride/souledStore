import React, { Component } from 'react';
import './Footer.scss';
import { Row, Col, Image, Accordion, Card } from 'react-bootstrap';
import data from './HeaderData.json';
import FontAwesome from 'react-fontawesome';
import fbIcon from './fbicon.png';
import instaIcon from './instaIcon.jpg';
import snapIcon from './snapIcon.png';
import twitterIcon from './twitter icon.png';
import masterCardIcon from './masterCardIcon.png';
import MobikwickIcon from './mobikwickIcon.png';
import PaytmIcon from './paytmIcon.png';
import AmexIcon from './amexIcon.png';
import CodIcon from './codIcon.png';
import FedEx from './fedExIcon.png';
import DtdcIcon from './dtdcIcon.png';
import Dehlivery from './dehliveryIcon.jpeg';
import RapidIcon from './RapidIcon.png';


class Footer extends Component {
    render() {
        var i, j, headerStructure = [], headerInnerStructure = [];
        console.log(data);
        for (i in data.data) {
            //console.log(i,data.data[i]);
            for (j in data.data[i]) {
                headerInnerStructure.push(
                    <Row key={j} className="show-grid header-nonTitle">
                        {data.data[i][j]}
                    </Row>
                );
            }
            headerStructure.push(
                <Col key={i} sm={2}>
                    <Row className="show-grid header-title">
                        {i}
                    </Row>
                    {headerInnerStructure}
                </Col>

            );
            headerInnerStructure = [];
        }
        return (
            <div className="header-wrapper">
                <Row className="show-grid">
                    <Col sm={2}>
                    </Col>
                    {headerStructure}
                    <Col sm={2}>
                        <FontAwesome className="rupee-icon" name="inr" /><p className="cod-icon-title">COD Available</p> <br />
                        <FontAwesome className="reset-icon" name="repeat" /><p className="reset-icon-title">15 Days Easy Returns</p>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col sm={2}></Col>
                    <Col className="exclamation-col" sm={5}>
                        <span className="exclamation-hover"><FontAwesome className="exclamation-icon" name="exclamation-triangle" /><p className="copyright-title">Report: Inappropriate Content Or Copyright Infringement</p></span>
                    </Col>
                    <Col sm={3} className="socialNetworking-col">
                        <p className="followUs-title do-inline">Follow Us:</p>
                        <span className="do-inline">
                            <Image className="fbIcon-size pointer" src={fbIcon} roundedCircle />
                            <Image className="istaIcon-size pointer" src={instaIcon} roundedCircle />
                            <Image className="snapIcon-size pointer" src={snapIcon} roundedCircle />
                            <Image className="twitterIcon-size pointer" src={twitterIcon} roundedCircle />
                        </span>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col sm={2}></Col>
                    <Col className="no-left-padding" sm={8}>
                        <Accordion className="accordian">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <span className="accordian-title">NAVIGATION LINKS</span>
                                    <FontAwesome className="plus-icon" name="plus" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>Hello! I'm the body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <span className="accordian-title">WHO WE ARE</span>
                                    <FontAwesome className="plus-icon" name="plus" />
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>Hello! I'm another body</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
                <Row className="show-grid">
                <Col sm={2}></Col>
                <Col sm={4} className="masterCard-col no-left-padding">
                <span>100% Secure Payment:</span>
                <Image src={masterCardIcon} className="masterCardIcon-size"/>
                <Image src={MobikwickIcon} className="masterCardIcon-size"/>
                <Image src={PaytmIcon} className="masterCardIcon-size"/>
                <Image src={AmexIcon} className="amexIcon-size"/>
                <Image src={CodIcon} className="masterCardIcon-size"/>
                </Col>
                <Col sm={4} className="shipping-col no-left-padding">
                <span>Shipping Partners:</span>
                <Image src={FedEx} className="fedExIcon-size"/>
                <Image src={DtdcIcon} className="dtdcIcon-size"/>
                <Image src={Dehlivery} className="dtdcIcon-size"/>
                <Image src={RapidIcon   } className="dtdcIcon-size"/>
                </Col>
                <Col sm={2}></Col>
                </Row>
                <Row>
                <Col sm={2}></Col>
                <Col sm={8} className="copyright-col">
                    <FontAwesome name="copyright"/> The Souled Store 2019-20
                </Col>
                <Col sm={2}></Col>
                </Row>
            </div>
        );
    }
}

export default Footer;
