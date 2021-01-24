import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Home(){
    return(
        <main>
            <Container>
                <Row>
                    <Col><h1> Bærekraftsmotor</h1></Col>
                    <Col><Button>Bootstrap Test knapp</Button></Col>
                </Row>
                <row>
                  <h1> Bærekraftsmotor</h1>
                  <h2> Piotr Marek Kramer </h2>
                    <h3>Øyvind</h3>
                    <button>Add some text</button>
                    <input type="text" /> 
                    <button>Add some text</button>
                    <input type="text" /> 
            
                </row>
            </Container>
        </main>
        )
}