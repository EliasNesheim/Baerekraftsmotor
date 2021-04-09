import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import TilbakeKnapp from "./TilbakeKnapp";
import { motion } from 'framer-motion';
import { nace } from './Nace.js'

const axios = require('axios');
const bkk = "http://13.48.137.2/bkk/getNace.php?nace="

export default function PageTwo({ naceKode, appState, setAppState, postData, setPost, Answers, sessionms}){
    
    

    var debug = "0"; 
    console.log("Answers: " + JSON.stringify(Answers));
    
    const [responseData, setResponseData] = useState("");
    const [BKM2, setBKM2] = useState([]);
    const [Næring, setNæring] = useState([]);

    var naceMainKode = naceKode;
    var naceBokstav = "";
    var NaceId = null;
    naceMainKode = naceMainKode.slice(1,3);
    console.log("main kode 0: " + naceMainKode[0])

    NaceId = nace(naceMainKode);
    console.log(naceBokstav);
    console.log(naceMainKode);
    var noLoop;
    //query database med nacekode for å finne tilsvarende FN mål
    useEffect(
        () => {
            axios.get(bkk + NaceId)
                    .then(function (response) {
                    // handle success
                    console.log(bkk + NaceId);
                    console.log("response.data" + response.data);
                    //setResponseData(JSON.stringify(response.data));
                    //setNaceKode(JSON.stringify(response.data.naeringskode1.kode));
                    console.log("responsData" + responseData);
                    var Row = JSON.stringify(response.data).split("/");
                    console.log("Row: " + Row);
                    console.log(Row.length);
                    var i;
                    for (i = 0; i < Row.length-1; i++){
                        var Words = Row[i].split(",");
                        console.log("PRE BKM Words: " + Words);
                        //BKM(Words={Words});
                        BKM2.push(<li key={i}>{Words[2]}, Vekting: {Words[3]}</li>);
                        if (i === 0){
                            Næring.push(Words[1])
                        }
                    }
                    console.log("Næring" + JSON.stringify(Næring));
                    console.log("BKM2" + JSON.stringify(BKM2));
                    console.log("postData: "+ postData);
                    console.log("Ans[0] " + Answers[0]);
                    console.log("Ans[1] " + Answers[1]);
                    
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                    console.log(bkk + NaceId);
                })
                .then(function () {
                // always executed
                
                
            });
            
    
            
        },[]
    );
    /* useEffect(
        () => {
        console.log("test1");
        console.log(noLoop);
        axios.get(bkk + NaceId)
        .then(function (response) {
            console.log("test1.5");
            // handle success
            console.log(response.data);
            setResponseData(JSON.stringify(response.data));
            //setNaceKode(JSON.stringify(response.data.naeringskode1.kode));
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            console.log(bkk + naceMainKode);
        });
        console.log("test3");
        noLoop = true;
    },
    []
    ); */
    //hent rapport data fra databasen
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
    var url2 = "http://13.53.68.33/bkk/setResultat.php?";
    var url3 = (url2+"sms="+sessionms+"&spm1="+spm1+"&spm2="+spm2+"&spm3="+spm3+"&spm4="+spm4+"&spm5="+spm5+"&spm6="+spm6+"&spm7="+spm7+"&spm8="+spm8+"&spm9="+spm9+"&spm10="+spm10+"&spm11="+spm11+"&spm12="+spm12);
    axios.get(url3)
    .then(function (response) {})
    .catch(function (error) {})
  
    if (Næring == []) {return null;}
    else {
        return(
        <div>
            <h1>{postData}</h1>
            <h2>Næring: {Næring}</h2>
            <TilbakeKnapp plusMinus={false} appState={appState} setAppState={setAppState} />
            <ul>{BKM2}</ul>
            <ul>
                
                <li>sum col 1 = {(parseInt(Answers[0])+parseInt(Answers[1])+parseInt(Answers[2]))}</li>
                <li>sum col 2 = {(parseInt(Answers[3])+parseInt(Answers[4])+parseInt(Answers[5]))}</li>
                <li>sum col 3 = {(parseInt(Answers[6])+parseInt(Answers[7])+parseInt(Answers[8]))}</li>
                <li>sum col 4 = {(parseInt(Answers[9])+parseInt(Answers[10])+parseInt(Answers[11]))}</li>
            </ul>
            </div>

    ) }
    
}
