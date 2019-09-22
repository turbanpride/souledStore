import React,{Component} from 'react';
import './Home.scss';
import Body from './../Body/Body';
import Footer from './../Footer/Footer';
import ProductListing from './../ProductListing/ProductListing';

class Home extends Component
{
    render()
    {
        return(
            <div className="home-wrapper">
            <ProductListing/>
            {/* <Body/> */}
            {/* <Footer/> */}
            </div>
        );
    }
}

export default Home;