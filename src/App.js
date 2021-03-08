import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageOneAndAHalf from "./components/PageOneAndAHalf";
import Home from "./components/Home";
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import ProgressBar from 'react-bootstrap/ProgressBar'

function App() {

  const [OrgNr, setOrgNr] = useState(null);
  const [generateRapport, setGenerateRapport] = useState(null);
  const [appState, setAppState] = useState(0);
  const [naceKode, setNaceKode] = useState(null);
  const [postData, setPost] = useState("");
  const [Answers, setAnswers] = useState({});
  const [AnswerKey, setAnswerKey] = useState(0);

 

  return (
  <div className="App">
    <BrowserRouter>
    
        <Navbar />
        {appState === 0 && <ProgressBar now={33} />}
        {appState === 1 && <ProgressBar now={66} />}
        {appState === 2 && <ProgressBar now={100} />}
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
                <PageOneAndAHalf appState={appState} setAppState={setAppState} Answers={Answers} setAnswers={setAnswers} AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} />
              </motion.div>
            }
          </AnimatePresence>
          <AnimatePresence>
            {appState === 2 &&
              <motion.div

              initial={{ y: "+100vh"}}
              animate={{ y: 0}}
              
              exit={{ y: "+100vh"}}
              >
                <PageTwo naceKode={naceKode} appState={appState} setAppState={setAppState}  postData={postData} setPost={setPost} Answers={Answers}/>
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
