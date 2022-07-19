import React from "react";
import './App.css';
import NavBar from "./NavBar";
import Title from "./Title";
import HomePage from "./HomePage";
import Lessons from "./Lessons";
import ClubPlay from "./ClubPlay";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutUs from "./AboutUs";
import FAQ from "./FAQ";
import Francis from "./Francis";

function App() {
  return (
    <Router>
    <div className="App">
      <Title />
      <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/HomePage"> 
          <HomePage />
          </Route>
          <Route exact path= "/Lessons">
            <Lessons />
          </Route>
          <Route exact path= "/ClubPlay">
            <ClubPlay />
          </Route>
          <Route exact path= "/AboutUs">
            <AboutUs />
          </Route>
          <Route exact path= "/FAQ">
            <FAQ />
          </Route>
          <Route exact path= "/Francis">
            <Francis />
          </Route>


        </Switch>
      </div>
    </div>
    </Router>
  );
  
}

export default App;
