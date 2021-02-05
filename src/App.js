import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
  <div className="App">
    <Navbar />
    
    
    <BrowserRouter>
      <Switch>
        <Route component={Home} path = '/' exact />
      </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;

