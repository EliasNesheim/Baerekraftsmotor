import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import Home from "./components/Home";
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

function App() {

  const [OrgNr, setOrgNr] = useState(null);
  const [generateRapport, setGenerateRapport] = useState(null);
  const [appState, setAppState] = useState(0);
  const [naceKode, setNaceKode] = useState(null);
  const [postData, setPost] = useState("");
 

  return (
  <div className="App">
    <BrowserRouter>
    
        <Navbar />
        <AnimateSharedLayout>
          <AnimatePresence>
            {appState === 0 &&
            <motion.div
              initial={{ y: "-100vh"}}
              animate={{ y: 0}}
              exit={{ y: "-100vh"}}
              >
              <Home />
              <PageOne OrgNr={OrgNr} setOrgNr={setOrgNr} appState={appState} setAppState={setAppState} setNaceKode={setNaceKode} postData={postData} setPost={setPost} />
            </motion.div>
            }
          </AnimatePresence>
          <AnimatePresence>
            {appState === 1 &&
              <motion.div

              initial={{ y: "+100vh"}}
              animate={{ y: 0}}
              
              exit={{ y: "+100vh"}}
              >
                <PageTwo naceKode={naceKode} appState={appState} setAppState={setAppState}  postData={postData} setPost={setPost} />
              </motion.div>
            }
          </AnimatePresence>
        </AnimateSharedLayout>
       
        
        
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
