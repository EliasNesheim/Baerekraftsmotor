import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import './css/App.css';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Questions from "./components/Questions";
import Graphs from "./components/Graphs";

import { NaceFunction } from "./components/NaceFunction";
import Home from "./components/Home";


const axios = require('axios');



function App() {

  const [OrgNr, setOrgNr] = useState(null);
  const [appState, setAppState] = useState(0);
  const [bkListeState, setBkListeState] = useState(1);
  const [naceKode, setNaceKode] = useState(null);
  const [postData, setPost] = useState("");
  const [Answers, setAnswers] = useState({});
  const [AnswerKey, setAnswerKey] = useState(0);
  const [sessionMs, setSessionMs] = useState(null);

  useEffect(
    () => {

      if ( appState === 1 && sessionMs === null) {
        setSessionMs(Date.now());
      }

      if (appState === 1){
        if (sessionMs === null) {
          var pfft = Date.now();
          console.log(pfft);
          setSessionMs(pfft);
          console.log(sessionMs);
        }
        console.log(sessionMs);
        var url = ("https://13.51.89.24/setSession.php?");
        var sms = pfft;
        var bnavn = postData;
        var orgnr = OrgNr;
        var naceMainKode = naceKode;
        naceMainKode = naceMainKode.slice(1,3)
        console.log(naceMainKode);
        console.log(NaceFunction(naceMainKode));
        var ng = NaceFunction(naceMainKode);
        var HeleURL =(url+"sms="+sms+"&bnavn="+bnavn+"&orgnr="+orgnr+"&ng="+ng);
        console.log(HeleURL);

        axios.get(HeleURL)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            // handle error
          })
      }
    }, [appState]
    
);
  const percentage = 100

  



  return (
    

    
    <div className="App">

      <BrowserRouter>
        
        <Navbar />
       
        {appState === 1 && <ProgressBar now={1} label={`${0}% completed`} />}
        {appState === 2 && <ProgressBar now={8} label={`${8}% completed`} />}
        {appState === 3 && <ProgressBar now={16} label={`${16}% completed`} />}
        {appState === 4 && <ProgressBar now={24} label={`${24}% completed`} />}
        {appState === 5 && <ProgressBar now={32} label={`${32}% completed`} />}
        {appState === 6 && <ProgressBar now={40} label={`${40}% completed`} />}
        {appState === 7 && <ProgressBar now={48} label={`${48}% completed`} />}
        {appState === 8 && <ProgressBar now={56} label={`${56}% completed`} />}
        {appState === 9 && <ProgressBar now={64} label={`${64}% completed`} />}
        {appState === 10 && <ProgressBar now={72} label={`${72}% completed`} />}
        {appState === 11 && <ProgressBar now={80} label={`${80}% completed`} />}
        {appState === 12 && <ProgressBar now={90} label={`${90}% completed`} />}
        {appState === 13 && <ProgressBar now={100} label={`${100}% completed`} />}
        <AnimateSharedLayout>
          <AnimatePresence>
            {appState === 0 &&
            <motion.div
               initial={{ opacity: 0}}
               animate={{ opacity: 1}}
               exit={{ opacity: 0}}
              >    
                <Home bkListeState={bkListeState} setBkListeState={setBkListeState} OrgNr={OrgNr} setOrgNr={setOrgNr} appState={appState} setAppState={setAppState} setNaceKode={setNaceKode} postData={postData} setPost={setPost}/>
            
                
             
            </motion.div>
            }
          </AnimatePresence>
          <AnimatePresence>
            {appState >= 1 && appState<=12 &&
              <motion.div

               initial={{ opacity: 0}}
               animate={{ opacity: 1}}
               exit={{ opacity: 0}}
              >
              
                <Questions appState={appState} setAppState={setAppState} Answers={Answers} setAnswers={setAnswers} AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} />
              </motion.div>
            }
          </AnimatePresence>
          <AnimatePresence>
            {appState >= 13 &&
              <motion.div

               initial={{ opacity: 0}}
               animate={{ opacity: 1}}
               exit={{ opacity: 0}}
              >
                <Graphs naceKode={naceKode} appState={appState} setAppState={setAppState}  postData={postData} setPost={setPost} Answers={Answers} sessionMs={sessionMs}/>
              </motion.div>
            }
          </AnimatePresence>
        </AnimateSharedLayout>
       
        
        
        
        </BrowserRouter>
      </div>
        
  
    
  );
}

export default App;


