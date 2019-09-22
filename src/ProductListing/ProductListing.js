import React, { Component } from 'react';
import './ProductListing.scss';
import Data from './ProductListingData.json';
import { Row, Col, Image, Breadcrumb, BreadcrumbItem, Accordion, Card } from 'react-bootstrap';
import MainWallpaper from './productDetailTopWallpaper.jpg';
import DemoWallpaper1 from './demoTshirt1.jpg';
import DemoWallpaper2 from './demoTshirt2.jpg';
import FontAwesome from 'react-fontawesome';

class ProductListing extends Component {
    constructor(props) {
        super(props);
        this.handleImageHover = this.handleImageHover.bind(this);
    }

    handleImageHover(i, j, k) {
        if (k) {
            document.getElementsByClassName("image" + i + j)[0].src = DemoWallpaper2;
        }
        else {
            document.getElementsByClassName("image" + i + j)[0].src = DemoWallpaper1;
        }

    }

    render() {
        var i,j, tshirtListingStructure = [],listStructure=[], self = this;
        for (i = 0; i < 10; i++) {
            tshirtListingStructure.push(
                <Row key={i} className="show-grid product-listing-row">
                    <Col sm={4}>
                        <Image className={"image" + i + 0} src={DemoWallpaper1} fluid
                            onMouseOver={self.handleImageHover.bind(self, i, 0, 1)} onMouseLeave={self.handleImageHover.bind(self, i, 0, 0)} />
                        <h5>F.R.I.E.N.D.S: The One With All The Episodes</h5>
                        <div><p className="product-category">T-Shirts</p>
                            <span className="product-price">Rs. 599</span>
                        </div>
                        <div>
                            <p className="excl-title">For Excl. Member <FontAwesome name="exclamation-circle" /></p>
                            <span className="excl-price">Rs. 399</span>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Image className={"image" + i + 1} src={DemoWallpaper1} fluid
                            onMouseOver={self.handleImageHover.bind(self, i, 1)} onMouseLeave={self.handleImageHover.bind(self, i, 1, 0)} />
                        <h5>F.R.I.E.N.D.S: The One With All The Episodes</h5>
                        <div><p className="product-category">T-Shirts</p>
                            <span className="product-price">Rs. 599</span>
                        </div>
                        <div>
                            <p className="excl-title">For Excl. Member <FontAwesome name="exclamation-circle" /></p>
                            <span className="excl-price">Rs. 399</span>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <Image className={"image" + i + 2} src={DemoWallpaper1} fluid
                            onMouseOver={self.handleImageHover.bind(self, i, 2)} onMouseLeave={self.handleImageHover.bind(self, i, 2, 0)} />
                        <h5>F.R.I.E.N.D.S: The One With All The Episodes</h5>
                        <div><p className="product-category">T-Shirts</p>
                            <span className="product-price">Rs. 599</span>
                        </div>
                        <div>
                            <p className="excl-title">For Excl. Member <FontAwesome name="exclamation-circle" /></p>
                            <span className="excl-price">Rs. 399</span>
                        </div>
                    </Col>
                </Row>
            );
        }
        var data = Data.data
        var filterStructure = [];
        for (i in data) {
            for(j in data[i])
            {
                listStructure.push(
                    <li key={j}>
                        <input className="filter-checkbox"  type="checkbox" name={data[i][j]}/> <p>{data[i][j]}</p>
                    </li>
                    
                );
            }
            var list = <ul>{listStructure}</ul>
            filterStructure.push(
                <Accordion key={i}>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            {i}
                            <FontAwesome className="chevron-down" name="chevron-down"/>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            {list}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            );
            listStructure = [];
        }
        return (
            <div className="productListing-wrapper">
                <Row className="show-grid">
                    <Image src={MainWallpaper} fluid />
                </Row>
                <Row className="show-grid">
                    <Col sm={3}></Col>
                    <Col sm={8}>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
                <Row className="show-grid">
                    <Col sm={1}></Col>
                    <Col sm={2} className="filter-col">
                    {filterStructure}
                    <button className="filter-button">Apply</button>
                    <button className="filter-button">Clear</button>
                    </Col>
                    <Col sm={8}>
                        {tshirtListingStructure}
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </div>
        );
    }
}

export default ProductListing;