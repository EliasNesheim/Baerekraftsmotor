import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";


const axios = require('axios');
let print = "";



export default function Home(){
    const [postData, setPost] = useState(null);
    const [companyData, setCompany] = useState(null);
    const [OrgKode, setOrgKode] = useState(null);


    const encodedString = Buffer.from('SELECT * FROM bedrift').toString('base64');
    const url = 'http://13.48.137.2/bkk/Get.php?q=' + encodedString;
    axios.get(url)
    .then(function (response) {
    // handle success
    console.log(url);
    console.log(response);
    console.log(response.data);
    setPost(JSON.stringify(response.data).slice(1,-1));
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
        <main>
            <section>
                <h1> Bærekraftsmotor</h1>
                <section>
                    <h1>respons fra get request fra server:</h1>
                    <h2>{postData}</h2>
                </section>
            </section>
        </main>
        )
}