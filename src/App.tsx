import React from 'react';
import './App.css';
import { Switch, Route, useHistory } from "react-router-dom";
import Nav from './Components/Nav';
import Blog from './Pages/Blog';
import Pricing from './Pages/Pricing';
import Careers from './Pages/Careers';
import Home from './Pages/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="app">
      <div className="header">
      <Nav/>
      </div>
      <Switch>
        <Route path="/blog" component={Blog}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/careers" component={Careers}/>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
