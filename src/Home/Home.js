import React,{Component} from 'react';
import './Home.scss';
import Body from './../Body/Body';
import Footer from './../Footer/Footer';

class Home extends Component
{
    render()
    {
        return(
            <div className="home-wrapper">
            <Body/>
            <Footer/>
            </div>
        );
    }
}

export default Home;