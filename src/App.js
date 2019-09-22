import React,{Component} from 'react';
import './App.scss';
import Home from './Home/Home';

class App extends Component
{
  render()
  {
    return(
      <div className="app-wrapper">
      <Home/>
      </div>
    );
  }
}

export default App;
