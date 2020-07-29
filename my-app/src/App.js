import React from "react";
// import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import VoterInfo from "./pages/VoterInfo";
import ContactUs from './pages/ContactUs';
import Candidate from './pages/Candidate';
import Ballot from './pages/Ballot'
{/*Google Maps API Key: AIzaSyDiAo_PfbCBFGXVs4Y5FH3NVnot8frLF7U*/}
function App() {
  return (
    <div className="App">
      <Router>
      <span className="headerBar">
      <h1>BeInformedNC</h1>
      <Link to='/'>
      <h2>Home</h2>
      </Link>
      <Link to='/about'>
      <h2>About</h2>
      </Link>
      <Link to='/voterinfo'>
      <h2>Voter Info</h2>
      </Link>
      <Link to='/contactus'>
      <h2>Contact Us</h2>
      </Link>
      {/*<Link to='/candidate'>
      <h2>Candidate</h2>
      </Link>
      <Link to='/ballot'>
      <h2>Ballot</h2>
      </Link> */}
      </span>
      <Route path='/' exact component={() => <Homepage />}></Route>
      <Route path='/about' exact component={() => <About />}></Route>
      <Route path='/voterinfo' exact component={() => <VoterInfo />}></Route>
      <Route path='/contactus' exact component={() => <ContactUs />}></Route>
      {/*<Route path='/candidate' exact component={() => <Candidate />}></Route>
      <Route path='/ballot' exact component={() => <Ballot />}></Route>*/}
      </Router>
    </div>
  );
}

export default App;