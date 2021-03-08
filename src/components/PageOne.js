import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import TilbakeKnapp from "./TilbakeKnapp";


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
            <input value={OrgNr} onChange={handleInput}/>
            
            <p>er {postData} riktig selskap?</p>
            <p> Hvist så trykk videre</p>
            <TilbakeKnapp plusMinus appState={appState} setAppState={setAppState} />
            
        </div>
    )
  }
}
//  