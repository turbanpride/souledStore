import React,{Component} from 'react';
import './App.scss';
import Home from './Home/Home';
import AppRouter from './AppRouter';
import Footer from './Footer/Footer';

class App extends Component
{
  render()
  {
    return(
      <div className="app-wrapper">
      <AppRouter/>
      <Home/>
      <Footer/>
      </div>
    );
  }
}

export default App;
