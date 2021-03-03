import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import TilbakeKnapp from "./TilbakeKnapp";
import { motion } from 'framer-motion';
import BKM from "./BKM";

const axios = require('axios');
const bkk = "http://13.48.137.2/bkk/getNace.php?nace="

export default function PageTwo({ naceKode, appState, setAppState, postData, setPost}){
    
    
    
    const [responseData, setResponseData] = useState("");


    var naceMainKode = naceKode;
    var naceBokstav = "";
    naceMainKode = naceMainKode.slice(1,3);
    console.log("main kode 0: " + naceMainKode[0])

    if (naceMainKode <= 3 ){
        naceBokstav = "A"
    } else if (naceMainKode <= 9 ) {
        naceBokstav = "B" 
    } else if (naceMainKode <= 33 ) {
        naceBokstav = "C" 
    } else if (naceMainKode <= 35 ) {
        naceBokstav = "D" 
    } else if (naceMainKode <= 39 ) {
        naceBokstav = "E" 
    } else if (naceMainKode <= 43 ) {
        naceBokstav = "F" 
    } else if (naceMainKode <= 47 ) {
        naceBokstav = "G" 
    } else if (naceMainKode <= 53 ) {
        naceBokstav = "H" 
    } else if (naceMainKode <= 56 ) {
        naceBokstav = "I" 
    } else if (naceMainKode <= 63 ) {
        naceBokstav = "J" 
    } else if (naceMainKode <= 66 ) {
        naceBokstav = "K" 
    } else if (naceMainKode <= 68 ) {
        naceBokstav = "L" 
    } else if (naceMainKode <= 75 ) {
        naceBokstav = "M" 
    } else if (naceMainKode <= 82 ) {
        naceBokstav = "N" 
    } else if (naceMainKode <= 84 ) {
        naceBokstav = "O" 
    } else if (naceMainKode <= 85 ) {
        naceBokstav = "P" 
    } else if (naceMainKode <= 88 ) {
        naceBokstav = "Q" 
    } else if (naceMainKode <= 93 ) {
        naceBokstav = "R" 
    } else if (naceMainKode <= 96 ) {
        naceBokstav = "S" 
    } else if (naceMainKode <= 97 ) {
        naceBokstav = "T" 
    } else if (naceMainKode <= 99 ) {
        naceBokstav = "U" 
    }
    console.log(naceBokstav);
    console.log(naceMainKode);
    //query database med nacekode for å finne tilsvarende FN mål
    axios.get(bkk + naceBokstav)
    .then(function (response) {
    // handle success
    console.log(bkk + naceMainKode);
    console.log(response.data);
    setResponseData(JSON.stringify(response.data));
    //setNaceKode(JSON.stringify(response.data.naeringskode1.kode));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      console.log(bkk + naceMainKode);
    })
    .then(function () {
      // always executed
      
    });
    var Row = responseData.split("/");
    console.log("Row: " + Row);
    console.log(Row.length);
    var i;
    const BKM2 = [];
    const Næring = [];
    for (i = 0; i < Row.length-1; i++){
        var Words = Row[i].split(",");
        console.log("PRE BKM Words: " + Words);
        //BKM(Words={Words});
        BKM2.push(<li>{Words[2]}, Vekting: {Words[3]}</li>);
        /*if (i = 0){
            Næring.push(Words[1])
        } */
    }
    console.log("postData: "+ postData);
    return(
        <div>
                <h1>{postData}</h1>
                <h2>Næring: {Næring}</h2>
                <TilbakeKnapp plusMinus={false} appState={appState} setAppState={setAppState} />
                <ul>{BKM2}</ul>
                
                </div>

    )
}