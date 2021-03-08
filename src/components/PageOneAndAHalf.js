import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import TilbakeKnapp from "./TilbakeKnapp";
import Question from "./Question";
import { motion } from 'framer-motion';



// å lage en ny useState for hver gang vi instansierer en Question componen er ikke riktig måte å gjøre dette på, but here we are
// https://www.youtube.com/watch?v=k238XpMMn38



export default function PageOneAndAHalf({ appState, setAppState, Answers, setAnswers, AnswerKey, setAnswerKey}){


    return(
        <div>
            <TilbakeKnapp plusMinus={false} appState={appState} setAppState={setAppState} />
            <TilbakeKnapp plusMinus={true} appState={appState} setAppState={setAppState} />

            <div>
                
                <Question QType={"Skala"} QText={"I hvilken grad er bedriftens bærekraftsarbeids strategisk viktig?"} AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} />
                {AnswerKey = AnswerKey + 1 }
                <Question QType={"Skala"} QText={"lol2k?"} AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} />
                {AnswerKey = AnswerKey + 1 }
                <Question QType={"Skala"} QText={"haha?"} AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} />
            </div>
        </div>
    )

}