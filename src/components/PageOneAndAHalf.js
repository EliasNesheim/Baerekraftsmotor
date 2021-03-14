import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import TilbakeKnapp from "./TilbakeKnapp";
import Question from "./Question";
import { motion } from 'framer-motion';


export default function PageOneAndAHalf({ appState, setAppState, Answers, setAnswers, AnswerKey, setAnswerKey}){


    return(
        <div>
        <TilbakeKnapp plusMinus={false} appState={appState} setAppState={setAppState} />
        <TilbakeKnapp plusMinus={true} appState={appState} setAppState={setAppState} />

            <div>
                {
                    //instansier spørsmål komponenten og inkrementerer AnswerKey mellom hvergang, variabler kommer fra app.js
                }
                <Question QType={"Type1"} QText={"I hvilken grad er bedriftens bærekraftsarbeids strategisk viktig?"}
                    AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers}
                    setAnswers={setAnswers} /> {AnswerKey = AnswerKey + 1}
                
                <Question QType={"Type1"} QText={"lol2k?"} AnswerKey={AnswerKey} setAnswerKey={setAnswerKey}
                    Answers={Answers} setAnswers={setAnswers} /> {AnswerKey = AnswerKey + 1}
    


                <Question QType={"Type3"} QText={"Er Elon Mask eieren av Tasla?"} 
                    AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} />
                
                <Question QType={"Type2"} QText={"Er du en mann?"}      
                    AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers}  />
                
                <Question QType={"Type1"} QText={"haha?"} AnswerKey={AnswerKey} setAnswerKey={setAnswerKey}
                    Answers={Answers} setAnswers={setAnswers}/>
                    
                {AnswerKey = AnswerKey + 1 }
            </div>
        </div>
    )

}