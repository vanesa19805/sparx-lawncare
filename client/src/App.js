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
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
