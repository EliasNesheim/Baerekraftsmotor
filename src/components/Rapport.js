import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const axios = require('axios');




export default function Rapport(OrgNr, appState, settAppState){

    function AppState() {
        let num = appState +1;
        settAppState = num;
      }

    const [companyData, setCompany] = useState(null);
    const [returnData, setReturn] = useState(null);

    var url = "https://data.brreg.no/enhetsregisteret/api/enheter/";
    console.log(url + JSON.stringify(OrgNr.OrgNr).replace(/['"]+/g, ''));
    axios.get(url + JSON.stringify(OrgNr.OrgNr).replace(/['"]+/g, ''))
    .then(function (response) {
    // handle success
    console.log(response);
    console.log(response.data);
    setCompany(JSON.stringify("Navn: " + response.data.navn + " Org Kode: " + response.data.organisasjonsform.kode));
    console.log("response.data.kode: " + response.data.kode);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
       
    });

    


    if(companyData){
        return (
            <div>
                <p>test</p>
                <p>{companyData}</p>
                <p>Er dette dette riktig selskap? Hvist så, trykk videre --{">"} </p>
                <button onClick={AppState}>Videre</button>;
            </div>
        )
    }
    else {
        return (
            <div>err</div>
        )
    }
    
}