import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";


const axios = require('axios');

let print = "";



export default function Home(){
    const [postData, setPost] = useState(null);
    const [companyData, setCompany] = useState(null);
    const [OrgKode, setOrgKode] = useState(null);

    axios.get('http://13.48.137.2/getBrukernavn.php')
    .then(function (response) {
    // handle success
    console.log(response);
    console.log(response.data);
    setPost(JSON.stringify(response.data).slice(2,-5));
    console.log(print)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

    

    return(
<head>
<meta charset="utf-8"> <!--Aksepterer ÆØÅ-->
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <!--Mobil skjermer-->
<!--<link rel="stylesheet" href="pages.css"> -->
<title>Bærekraftsmotor </title> <!--Tittel-->
</head>
<body>

<div class="jumbotron"> <!--CSS-->
  <h1>Bruk Bærekraftsmotor</h1> <!--Overskrift-->
  <p class="">Bærekraftsmotor er en nettside som spør deg eller din bedrift en rekke spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> <!--Tekst-->
  <hr class="">
  <img src="Bilde1.png" alt="bilde av noter"> <!--Bilde-->
  <br>
  <br>
  
  <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal" style="right: 50%;"> <!--Mulighet gå tilbake til Simpact.no-->
Gå tilbake til simpact.no
</button> 

<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal"> <!--Mulighet til å gå til spørreskjema-->
Gå til spørreskjema
</button>
 </div>

        )
}
