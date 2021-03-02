import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";


export default function PageTwo({ naceKode }){


    //query database med nacekode for å finne tilsvarende FN mål


    return(
        <div>
        <h1>Bedriftens navn</h1>
        <h2>{naceKode}</h2>

        <section>
            <h2>Bærekraftsmål nr1</h2>
            <p>description</p>
        </section>
        <section>
            <h2>Bærekraftsmål nr2</h2>
            <p>description</p>
        </section>
        <section>
            <h2>Bærekraftsmål nr3</h2>
            <p>description</p>
        </section>
        <p>test</p>
        </div>


    )
}