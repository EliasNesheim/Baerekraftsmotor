import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const axios = require('axios');

export default function Rapport(OrgNr){

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
    console.log(response.data.kode);
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
                <p>
                    {companyData}
                </p>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
    
}