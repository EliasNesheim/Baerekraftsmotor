import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import TilbakeKnapp from "./TilbakeKnapp";
import { motion } from 'framer-motion';

const axios = require('axios');
const bkk = "http://13.48.137.2/bkk/getNace.php?nace="

export default function PageTwo({ naceKode, appState, setAppState, postData, setPost, Answers}){
    
    

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

    
    if (naceMainKode <= 2 ){
        naceBokstav = "A";
        NaceId = 1;
    } else if (naceMainKode <= 3 ){
        naceBokstav = "A3";
        NaceId = 2;
    } else if (naceMainKode <= 9 ) {
        naceBokstav = "B" 
        NaceId = 3;
    } else if (naceMainKode <= 33 ) {
        naceBokstav = "C" 
        NaceId = 4;
    } else if (naceMainKode <= 35 ) {
        naceBokstav = "D"
        NaceId = 5; 
    } else if (naceMainKode <= 39 ) {
        naceBokstav = "E" 
        NaceId = 6;
    } else if (naceMainKode <= 43 ) {
        naceBokstav = "F" 
        NaceId = 7;
    } else if (naceMainKode <= 47 ) {
        naceBokstav = "G" 
        NaceId = 8;
    } else if (naceMainKode <= 53 ) {
        naceBokstav = "H" 
        NaceId = 9;
    } else if (naceMainKode <= 56 ) {
        naceBokstav = "I" 
        NaceId = 10;
    } else if (naceMainKode <= 63 ) {
        naceBokstav = "J" 
        NaceId = 11;
    } else if (naceMainKode <= 66 ) {
        naceBokstav = "K" 
        NaceId = 12;
    } else if (naceMainKode <= 68 ) {
        naceBokstav = "L" 
        NaceId = 13;
    } else if (naceMainKode <= 75 ) {
        naceBokstav = "M" 
        NaceId = 14;
    } else if (naceMainKode <= 82 ) {
        naceBokstav = "N" 
        NaceId = 15;
    } else if (naceMainKode <= 84 ) {
        naceBokstav = "O" 
        NaceId = 16;
    } else if (naceMainKode <= 85 ) {
        naceBokstav = "P" 
        NaceId = 17;
    } else if (naceMainKode <= 88 ) {
        naceBokstav = "Q" 
        NaceId = 18;
    } else if (naceMainKode <= 93 ) {
        naceBokstav = "R" 
        NaceId = 19;
    } else if (naceMainKode <= 96 ) {
        naceBokstav = "S" 
        NaceId = 20;
    } else if (naceMainKode <= 97 ) {
        naceBokstav = "T" 
        NaceId = 21;
    } else if (naceMainKode <= 99 ) {
        naceBokstav = "U" 
        NaceId = 22;
    }
    console.log(naceBokstav);
    console.log(naceMainKode);
    var noLoop;
    //query database med nacekode for å finne tilsvarende FN mål
    useEffect(
        () => {
        console.log("test1");
        console.log(noLoop);
        axios.get(bkk + naceBokstav)
        .then(function (response) {
            console.log("test1.5");
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
        });
        console.log("test3");
        noLoop = true;
    },
    []
    );
    //hent rapport data fra databasen
    var url2 = "http://13.48.137.2/bkk/Get.php?q=";
    var q = btoa("SELECT b.navn, b.organisasjonnr, n.beskrivelse, re.spm1, re.spm2, re.spm3, re.spm4, re.spm5, re.spm6, re.spm7, re.spm8, re.spm9, re.spm10, re.spm11, re.spm12, re.spm13, re.spm14, re.spm15, re.spm16, re.spm17, re.spm18, re.spm19, re.spm20 FROM rapport AS ra, resultat AS re, bedrift AS b, nace_grupper AS n WHERE ra.resultatid =  re.resultatid && b.bedriftid = re.bedriftid && b.nace_gruppe = n.naceid");
    console.log("a");
    console.log(url2 + q);
    console.log("b");
    axios.get(url2 + q)
    .then(function (response) {
    // handle success
    console.log(response);
    console.log(response.data);
    // setCompany(JSON.stringify("Navn: " + response.data.navn + " Org Kode: " + response.data.organisasjonsform.kode));
    console.log(response.data.kode);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
       
    });

    var Row = responseData.split("/");
    console.log("Row: " + Row);
    console.log(Row.length);
    var i;
    const BKM2 = [];
    const Næring = [];
    if(BKM2.length < 1 || BKM2 == undefined){
        for (i = 0; i < Row.length-1; i++){
            var Words = Row[i].split(",");
            console.log("PRE BKM Words: " + Words);
            //BKM(Words={Words});
            BKM2.push(<li>{Words[2]}, Vekting: {Words[3]}</li>);
            if (i === 0){
                Næring.push(Words[1])
            }
        }
    }
    console.log("postData: "+ postData);
    console.log("Ans[0] " + Answers[0]);
    console.log("Ans[1] " + Answers[1]);
    
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
    if (Næring == []) {return null;}
    else {
        return(
        <div>
            <h1>{postData}</h1>
            <h2>Næring: {Næring}</h2>
            <TilbakeKnapp plusMinus={false} appState={appState} setAppState={setAppState} />
            <ul>{BKM2}</ul>
            <ul>
                <li>svar for første spørsmål: {JSON.stringify(Answers["0"])}</li>
                <li>svar for andre spørsmål: {JSON.stringify(Answers["1"])}</li>
                <li>sum col 1 = {(parseInt(Answers[0])+parseInt(Answers[1])+parseInt(Answers[2]))}</li>
                <li>sum col 2 = {(parseInt(Answers[3])+parseInt(Answers[4])+parseInt(Answers[5]))}</li>
                <li>sum col 3 = {(parseInt(Answers[6])+parseInt(Answers[7])+parseInt(Answers[8]))}</li>
                <li>sum col 4 = {(parseInt(Answers[9])+parseInt(Answers[10])+parseInt(Answers[11]))}</li>
            </ul>
            </div>

    ) }
    
}
