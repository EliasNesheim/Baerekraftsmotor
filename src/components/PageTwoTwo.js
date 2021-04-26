import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import TilbakeKnapp from "./TilbakeKnapp";
import { motion } from 'framer-motion';
import { nace } from './Nace.js'
import { render } from "@testing-library/react";
import BarChart from "./Graf.js";

const axios = require('axios');
const bkk = "http://13.51.89.24/bkk/getNace.php?nace="

export default function PageTwo({ naceKode, appState, setAppState, postData, setPost, Answers, sessionMs}){
    



    const [Mål, setMål] = useState([]);
    const [Næring, setNæring] = useState([]);

    
    var naceMainKode = naceKode.slice(1,3);
    console.log("input: " + naceMainKode);
    var NaceId = nace(naceMainKode);
    console.log("output: " + NaceId);


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
    
    var sumcol1 = (parseInt(Answers[0])+parseInt(Answers[1])+parseInt(Answers[2]))
    var sumcol2 = (parseInt(Answers[3])+parseInt(Answers[4])+parseInt(Answers[5]))
    var sumcol3 = (parseInt(Answers[6])+parseInt(Answers[7])+parseInt(Answers[8]))
    var sumcol4 = (parseInt(Answers[9])+parseInt(Answers[10])+parseInt(Answers[11]))

    var sumrow1 = (parseInt(Answers[0])+parseInt(Answers[3])+parseInt(Answers[6])+parseInt(Answers[9]))
    var sumrow2 = (parseInt(Answers[1])+parseInt(Answers[4])+parseInt(Answers[7])+parseInt(Answers[10]))
    var sumrow3 = (parseInt(Answers[2])+parseInt(Answers[5])+parseInt(Answers[8])+parseInt(Answers[11]))
    //var sumrow3 = (5);
    var values = [sumcol1, sumcol2, sumcol3, sumcol4, sumrow1, sumrow2, sumrow3];
    console.log(values);
    return(
        <div class="pagetwocss">
           <div class="h1Pagetwo">
            <h1>{postData}</h1>
            </div>   
            <div class="h2Pagetwo">
            <h2>Næring: {Næring}</h2>
            </div>
            {Mål.map(post => (
                <li key={post.id}>FN mål <b>{post.BK_navn} </b> har en vekting på : {post.poeng}</li>
            ))}
            {JSON.stringify(Mål[6])}

            <BarChart Values ={values}/>

            <TilbakeKnapp plusMinus={false} appState={appState} setAppState={setAppState} />

            
        </div>
    )
}
