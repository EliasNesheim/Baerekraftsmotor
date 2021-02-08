<<<<<<< Updated upstream
import React from 'react';
=======
import React, { useState, useEffect } from "react";
>>>>>>> Stashed changes
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import './App.css';
import Qone from "./components/Qone";
import Rapport from "./components/Rapport";


function App() {

  const [OrgNr, setOrgNr] = useState(null);
  const [generateRapport, setGenerateRapport] = useState(null);



  return (
  <div className="App">
    <Navbar />
    
    
    <BrowserRouter>
<<<<<<< Updated upstream
      <Switch>
        <Route component={Home} path = '/' exact />
      </Switch>
      </BrowserRouter>
      </div>
=======
        <Home />
        <Qone setOrgNr={setOrgNr} OrgNr={OrgNr}/>
        <Rapport OrgNr={OrgNr}/>
      </BrowserRouter>
>>>>>>> Stashed changes
  );
}

export default App;

