<<<<<<< Updated upstream
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
=======
import React, { useState, useEffect } from "react";
const axios = require('axios');

let print = "";


>>>>>>> Stashed changes

export default function Home(){
    const [postData, setPost] = useState(null);

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
        <main>
<<<<<<< Updated upstream
            <Container>
                <Row>
                    <Col><h1> Bærekraftsmotor</h1></Col>
                    <Col><Button>Bootstrap Test knapp</Button></Col>
                </Row>
                <row>
                  <h1> Bærekraftsmotor</h1>
                  <h2> Piotr Marek Kramer </h2>
                  <h3>Øyvind</h3>
                </row>
            </Container>
=======
            <section>
                <h1> Bærekraftsmotor</h1>
                <h2> Piotr Marek Kramer </h2>
                <h3>Øyvind</h3>
                <section>
                    <h1>respons fra get request fra server:</h1>
                    <h2>{postData}</h2>
                </section>
            </section>
>>>>>>> Stashed changes
        </main>
        )
}