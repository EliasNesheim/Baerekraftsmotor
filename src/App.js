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
  const [Answers, setAnswers] = useState({[0]:3,[1]:3,[2]:3,[3]:3,[4]:3,[5]:3,[6]:3,[7]:3,});
  const [AnswerKey, setAnswerKey] = useState(0);

 

  return (
  <div className="App">
    <BrowserRouter>
    
        <Navbar />
<<<<<<< Updated upstream
        {appState === 0 && <ProgressBar now={33} />}
        {appState === 1 && <ProgressBar now={66} />}
        {appState === 2 && <ProgressBar now={100} />}
=======
       
        {appState === 1 && <ProgressBar now={8} />}
        {appState === 2 && <ProgressBar now={16} />}
        {appState === 3 && <ProgressBar now={24} />}
        {appState === 4 && <ProgressBar now={32} />}
        {appState === 5 && <ProgressBar now={40} />}
        {appState === 6 && <ProgressBar now={48} />}
        {appState === 7 && <ProgressBar now={56} />}
        {appState === 8 && <ProgressBar now={64} />}
        {appState === 9 && <ProgressBar now={72} />}
        {appState === 10 && <ProgressBar now={80} />}
        {appState === 11 && <ProgressBar now={88} />}
        {appState === 12 && <ProgressBar now={95} />}
        {appState === 13 && <ProgressBar now={100} />}
>>>>>>> Stashed changes
        <AnimateSharedLayout>
          <AnimatePresence>
            {appState === 0 &&
            <motion.div
              initial={{ y: "-100vh"}}
              animate={{ y: 0}}
              exit={{ y: "-100vh"}}
              >
            <div class="containers">
            <div class="rowing1">
              <Home />
              </div>
              <div class="rowing2">
              <PageOne OrgNr={OrgNr} setOrgNr={setOrgNr} appState={appState} setAppState={setAppState} setNaceKode={setNaceKode} postData={postData} setPost={setPost} />
          
          
          </div>
          </div>     
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
<<<<<<< Updated upstream
=======
                <div class="Farger">
                <Button onClick={console.log(JSON.stringify(Answers))}>Lagre svar</Button></div>
>>>>>>> Stashed changes
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
