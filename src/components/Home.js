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
            </Container>
        </main>
        )
}