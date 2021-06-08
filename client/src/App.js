import React, { Component } from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./pages/Signup";
import "./App.css";
import Header from "./components/Header";
import NavLinks from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Services from "./pages/Servicepage";
import Contact from "./components/Contact";
import HomeCard from "./components/HomeCard";
// import Payment from "./components/Payment";
import Schedule from "./components/Schedule";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <NavLinks />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/servicepage" component={Services} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/service_sch" component={Schedule} />
            {/* <Route exact path="/payment" component={Payment} /> */}


            <Route path='/Facebook' component={() => {
              window.location.href = 'https://www.facebook.com/Sparx-lawn-service-107059844915153/?ref=pages_you_manage';
              return null
            }} />
            <Route path='/Instagram' component={() => {
              window.location.href = 'https://www.instagram.com/solid_ground_landscape/';
              return null
            }} />
          </Switch>
          <div className="App-footer">
            <Footer />
          </div>
        </div>

      </Router>

    );
  }
}

export default App;
