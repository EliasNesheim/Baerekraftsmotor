import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import TilbakeKnapp from "./TilbakeKnapp";
import { motion } from 'framer-motion';
import { nace } from './Nace.js'
import { render } from "@testing-library/react";

const axios = require('axios');
const bkk = "http://13.51.89.24/bkk/getNace.php?nace="

export default function PageTwo({ naceKode, appState, setAppState, postData, setPost, Answers, sessionMs}){
    



    const [Mål, setMål] = useState([]);
    const [Næring, setNæring] = useState([]);

    var NaceId = null;
    var naceMainKode = naceKode.slice(1,3);
    NaceId = nace(naceMainKode);


    //set rapport data til databasen
    var spm1 = (parseInt(Answers[0]));
    var spm2 = (parseInt(Answers[1]));
    var spm3 = (parseInt(Answers[2]));
    var spm4 = (parseInt(Answers[3]));
    var spm5 = (parseInt(Answers[4]));
    var spm6 = (parseInt(Answers[5]));
    var spm7 = (parseInt(Answers[6]));
    var spm8 = (parseInt(Answers[7]));
    var spm9 = (parseInt(Answers[8]));
    var spm10 = (parseInt(Answers[9]));
    var spm11 = (parseInt(Answers[10]));
    var spm12 = (parseInt(Answers[11]));
    var url2 = "http://13.51.89.24/bkk/setResultat.php?";
    var url3 = (url2+"sms="+sessionMs+"&spm1="+spm1+"&spm2="+spm2+"&spm3="+spm3+"&spm4="+spm4+"&spm5="+spm5+"&spm6="+spm6+"&spm7="+spm7+"&spm8="+spm8+"&spm9="+spm9+"&spm10="+spm10+"&spm11="+spm11+"&spm12="+spm12);
    

    useEffect(() => {
        async function fetchNace() {
            try {
                const response = await fetch(bkk + NaceId);
                console.log(bkk + NaceId);
                const responseJSON = await response.json();
                console.log(responseJSON);
                console.log(responseJSON[0]['Nace_navn']);
                setMål(responseJSON);
                setNæring(responseJSON[0]['Nace_navn']);
            } catch {
                console.log("error");
            }
        }
        async function setAnswers() {
            console.log(url3);
            try {

                const response = await fetch(url3);
                const responseJSON = await response;
                console.log(responseJSON);
            } catch {
                console.log("error");
            }
        }
        fetchNace();
        setAnswers();
    }, []);

    axios.get(url3)
    .then(function (response) {console.log(response)})
    .catch(function (error) {console.log(error)})
    

    return(
        <div>
              
            <h1>{postData}</h1>
            <h2>Næring: {Næring}</h2>
            {Mål.map(post => (
                <li key={post.id}>FN mål <b>{post.BK_navn} </b> har en vekting på : {post.poeng}</li>
            ))}
            {JSON.stringify(Mål[6])}

            <ul>
                
                <li>sum col 1 = {(parseInt(Answers[0])+parseInt(Answers[1])+parseInt(Answers[2]))}</li>
                <li>sum col 2 = {(parseInt(Answers[3])+parseInt(Answers[4])+parseInt(Answers[5]))}</li>
                <li>sum col 3 = {(parseInt(Answers[6])+parseInt(Answers[7])+parseInt(Answers[8]))}</li>
                <li>sum col 4 = {(parseInt(Answers[9])+parseInt(Answers[10])+parseInt(Answers[11]))}</li>
            </ul>
            <ul>
            <li>sum Row 1 = {(parseInt(Answers[0])+parseInt(Answers[3])+parseInt(Answers[6])+parseInt(Answers[9]))}</li>
            <li>sum Row 1 = {(parseInt(Answers[1])+parseInt(Answers[4])+parseInt(Answers[7])+parseInt(Answers[10]))}</li>
            <li>sum Row 1 = {(parseInt(Answers[2])+parseInt(Answers[5])+parseInt(Answers[8])+parseInt(Answers[11]))}</li>

            </ul>

            <TilbakeKnapp plusMinus={false} appState={appState} setAppState={setAppState} />

            
        </div>
    )
}
