import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";


function App() {

  const [OrgNr, setOrgNr] = useState(null);
  const [generateRapport, setGenerateRapport] = useState(null);
  const [appState, setAppState] = useState(0);
  const [naceKode, setNaceKode] = useState(null);

  const logValue = () => {
    console.log(appState);
    };

  return (
  <div className="App">
    <BrowserRouter>
        <Navbar />
        {appState == 0 &&
        <PageOne OrgNr={OrgNr} setOrgNr={setOrgNr} appState={appState} setAppState={setAppState} setNaceKode={setNaceKode} />
        }
        {appState == 1 &&
        <PageTwo naceKode={naceKode} />
        }
        
        
    </BrowserRouter>
    </div>
  );
}

export default App;

/* <Home />


        
        <Qone setOrgNr={setOrgNr} OrgNr={OrgNr}/>
        {appState == 0 &&
        <Rapport OrgNr={OrgNr} appState={appState} settAppState={settAppState}/>
        }
        {appState == 1 &&
        <p> hahah</p>
        }
        */
