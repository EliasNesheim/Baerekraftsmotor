import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import TilbakeKnapp from "./AppStateButton";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppStateButton from "./AppStateButton";

const axios = require('axios');
const brreg = "https://data.brreg.no/enhetsregisteret/api/enheter/"


export default function PageOne({ OrgNr, setOrgNr, appState, setAppState, setNaceKode, postData, setPost}){

    // get fra brreg med informasjon om git selskap
    axios.get(brreg + OrgNr)
      .then(function (response) {
      // handle success
      console.log(brreg + OrgNr);
      console.log(response);
      console.log(response.data);
      setPost(JSON.stringify(response.data.navn).slice(1,-1));
      setNaceKode(JSON.stringify(response.data.naeringskode1.kode));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      console.log(brreg + OrgNr);
    })
    .then(function () {
      // always executed

      
    });

    // trim orgNr
    const handleInput = event => {
        setOrgNr(event.target.value.replace(/[ ]+/g, ''));  };
        console.log(Date.now());
    
    if (postData === "") {
      console.log(postData)
      return(
      <input onChange={handleInput} placeholder="skriv org nummeret ditt"/>
      )
    }
    else {
      console.log("test1")
      return(
        <div>
            <h1 className="Tittel">Bruk Bærekraftsmotor</h1> 
            <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

            <p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
            <p><a href="https://simpact.no/"> https://simpact.no/</a></p>

            <input value={OrgNr} onChange={handleInput}/>
            
            <p>er {postData} riktig selskap?</p>
            <p> Hvis så trykk videre</p>
            <AppStateButton plusMinus appState={appState} setAppState={setAppState} />
            
        </div>
    
    )
  }
}
//  
