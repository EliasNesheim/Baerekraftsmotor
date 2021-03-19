import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import TilbakeKnapp from "./TilbakeKnapp";
import Question from "./Question";
import { motion } from 'framer-motion';


export default function PageOneAndAHalf({ appState, setAppState, Answers, setAnswers, AnswerKey, setAnswerKey}){

    const [ value, setValue ] = React.useState(3);

    return(
        <div>
        <TilbakeKnapp plusMinus={false} appState={appState} setAppState={setAppState} />
        <TilbakeKnapp plusMinus={true} appState={appState} setAppState={setAppState} />

            <div>
                {
                    //instansier spørsmål komponenten og inkrementerer AnswerKey mellom hvergang, variabler kommer fra app.js
                }
                <Form.Group as={Row}>
                    <Question QType={"Skala"} QText={"I hvilken grad er bedriftens bærekraftsarbeids strategisk viktig?"} AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} />
                        {AnswerKey = AnswerKey + 1 }
                    <Question QType={"Skala"} QText={"lol2k?"} AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} />
                        {AnswerKey = AnswerKey + 1 }
                </Form.Group>
                <Form.Group as={Row}>
                    <Question QType={"Skala"} QText={"haha?"} AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} />
                        {AnswerKey = AnswerKey + 1 }
                    <Question QType={"Skala"} QText={"et spørsmål til"} AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} />
                        {AnswerKey = AnswerKey + 1 }
                </Form.Group>
                <Form.Group as={Row}>
                    <Question QType={"Skala"} QText={"sprøs nr :"} AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} />
                        {AnswerKey = AnswerKey + 1 }
                    <Question QType={"Skala"} QText={"peepoHappy"} AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} />
                        {AnswerKey = AnswerKey + 1 }
                </Form.Group>
                <Form.Group as={Row}>
                    <Question QType={"Type3"} QText={"Er Elon Mask eieren av Tasla?"} 
                    AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} />
                        {AnswerKey = AnswerKey + 1 }
                <Question QType={"Type2"} QText={"Er du en mann?"}      
                    AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers}  />
                        {AnswerKey = AnswerKey + 1 }
                </Form.Group>
            </div>
        </div>
    )

}