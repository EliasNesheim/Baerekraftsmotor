import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import TilbakeKnapp from "./TilbakeKnapp";
import { motion } from 'framer-motion';
import { nace } from './Nace.js'
import ChartExample from './Chart.js'

const axios = require('axios');
const bkk = "http://13.51.89.24/bkk/getNace.php?nace="

export default function PageTwo({ naceKode, appState, setAppState, postData, setPost, Answers, sessionMs}){
    
    const [OneRender, setOneRender] = useState({[0]:0,[1]:3,});

    var debug = "0"; 
    console.log("Answers: " + JSON.stringify(Answers));
    

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
    var BKM2 = [];
    var Næring = [];
    var responsData = "";
    if (OneRender[0] == 0){
        axios.get(bkk + NaceId)
                .then(function (response) {
                // handle success
                console.log(bkk + NaceId);
                responsData = (JSON.stringify(response.data));
                //setNaceKode(JSON.stringify(response.data.naeringskode1.kode));
                console.log("responsData" + responsData);
                var Row = JSON.stringify(response.data).split("/");
                console.log("Row: " + Row);
                console.log(Row.length);
                var i;
                
                for (i = 0; i < Row.length-1; i++){
                    var Words = Row[i].split(",");
                    console.log("PRE BKM Words: " + JSON.stringify(Words));
                    console.log("test1 " + Words[0] + " " + Words[1] )
                    //BKM(Words={Words});
                    BKM2 += <li key={parseInt(i)}>{JSON.stringify(Words[3])}, Vekting: {JSON.stringify(Words[4])}</li>;
                    console.log("int i = " + parseInt(i));
                    console.log(JSON.stringify(Words[2]))
                    if (i === 0){
                        Næring.push(Words[1])
                    }
                }
                console.log("Næring" + JSON.stringify(Næring));
                console.log("BKM2" + BKM2);
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
            // set Første verdi i OneRender til 1 for å ikke kjøre Axios get igjen på rerender
            setOneRender(
                {
                    ...OneRender, [0]: 1, [1]: Næring, [2]: BKM2,
                }
            );
            console.log("setOneRender(1)")
        });
    }        

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
    var url2 = "http://13.51.89.24/bkk/setResultat.php?";
    var url3 = (url2+"sms="+sessionMs+"&spm1="+spm1+"&spm2="+spm2+"&spm3="+spm3+"&spm4="+spm4+"&spm5="+spm5+"&spm6="+spm6+"&spm7="+spm7+"&spm8="+spm8+"&spm9="+spm9+"&spm10="+spm10+"&spm11="+spm11+"&spm12="+spm12);
    console.log(url3);
    axios.get(url3)
    .then(function (response) {console.log(response)})
    .catch(function (error) {console.log(error)})
  
    console.log(JSON.stringify(OneRender[0]) + JSON.stringify(OneRender[1]));
    if (Næring == []) {return null;}
    else {
        return(
        <div>
            <ChartExample></ChartExample>
            <h1>{postData}</h1>
            <h2>Næring: {JSON.stringify(OneRender[1])}</h2>
            <TilbakeKnapp plusMinus={false} appState={appState} setAppState={setAppState} />
            <ul>{JSON.stringify(OneRender[2])}</ul>
            <ul>
                
                <li>sum col 1 = {(parseInt(Answers[0])+parseInt(Answers[1])+parseInt(Answers[2]))}</li>
                <li>sum col 2 = {(parseInt(Answers[3])+parseInt(Answers[4])+parseInt(Answers[5]))}</li>
                <li>sum col 3 = {(parseInt(Answers[6])+parseInt(Answers[7])+parseInt(Answers[8]))}</li>
                <li>sum col 4 = {(parseInt(Answers[9])+parseInt(Answers[10])+parseInt(Answers[11]))}</li>
            </ul>
            </div>

    ) }
    
}
