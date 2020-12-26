import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Blog from './Pages/Blog';
import Pricing from './Pages/Pricing';
import Careers from './Pages/Careers';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import MobileNav from './Components/MobileNav';


const App: React.FC = (): JSX.Element => {

  return (
    <div className="app">
      <div className="header">
      {window.screen.width > 750 ? <Nav/>: <MobileNav/>}
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
