import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import RangeSlider from 'react-bootstrap-range-slider';

export default function Question({ QType, QText, Answers, setAnswers, AnswerKey, setAnswerKey }){

    const [ value, setValue ] = React.useState(3);
    
    // Set initial value in Answers (3)
    

    //oppdaterer Answers objektet med ny verdi hver gang value blir endret
    // useEffect -> onUpdate
    useEffect(
        () => {
            setAnswers(
                {
                    ...Answers,[AnswerKey]: value,
                }
              );
            console.log("Key: " + AnswerKey + " value: " + value + " Answers.AnswerKey: " + Answers.AnswerKey);
            console.log("AnsKey" + AnswerKey)
            console.log("Answers: " + JSON.stringify(Answers));
        },
        [value]
    );
    


    //skriver ut skala spørsmålstypen:
    if (QType === "Skala"){
        

        return (
            <div className="Card">
            <p> {QText} <br /> Skala fra 0 – 5, 0 = Ikke viktig, 5= Helt avgjørende</p>
                <Form>
                    {// slideren
                    }
                    <Col classname="4">
                        <RangeSlider
                        value={value}
                        max={5}
                        onChange={e => setValue(e.target.value)}
                        />
                    </Col>
                    {// tekst input
                    }
                    <Col classname="4">
                        <Form.Control value={value}
                        max={5}
                        onChange={e => setValue(e.target.value)}
                            />
                    </Col>
                </Form>
        </div>
        )
    }
}