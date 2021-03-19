import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';


<<<<<<< Updated upstream

export default function Question({ QType, QText, Answers, setAnswers, AnswerKey, setAnswerKey }) {
=======
export default function Question({ QType, QText, Answers, setAnswers, AnswerKey, setAnswerKey, AppState }) {
>>>>>>> Stashed changes

    const [value, setValue] = React.useState(5);
     //oppdaterer Answers objektet med ny verdi hver gang value blir endret
     // useEffect -> onUpdate
    
    useEffect(
        () => {
            setAnswers(
                {
                    ...Answers, [AnswerKey]: value, 
                }
            );
            console.log("Key: " + JSON.stringify(AnswerKey) + " value: " + value);
            console.log("AnsKey" + JSON.stringify(AnswerKey));
            console.log(JSON.stringify(Answers));
            console.log(Answers);
        },
        [value, AnswerKey]
    );
    


    // min kode 
    if (QType === "Skala") {
        return (

            <div className="Card">
<<<<<<< Updated upstream

                <br></br>
                <label> {QText}<br /><br />
                Skala fra 0 – 5, 0 = Ikke viktig, 5= Helt avgjørende </label> <br />
=======
                <label> {QText}
                Skala fra 0 – 10, 0 = Ikke viktig, 10= Helt avgjørende </label> <br />
>>>>>>> Stashed changes
                
                <Form>
                    <Form.Group as={Row}>
                        {// slideren
                        }
                        <Col xs="7">
                            <RangeSlider
                                value={value}
                                max={10}
                                onChange={e => setValue(e.target.value)}
                            />
                        </Col>
                        {// tekst input
                        }
                        <Col xs="1">
                            <Form.Control value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                        </Col>
                    </Form.Group>
                </Form>

            </div>
        )
    } else if (QType === "JaNei") {
        return (
            <div className="Card">
                <label> {QText} {" "}
                    <button type="button" class="btn btn-primary" onClick={() => setValue("Ja")}> Ja </button>
                    {" "}
                    <button type="button" class="btn btn-primary" onClick={() => setValue("Nei")}> Nei </button>
                    {value}
                </label>
                
            </div>
        )
    } else if (QType === "JaNeiU") {
        return (
            <div className="Card">
                <label> {QText} {" "}</label>
                    <button type="button" class="btn btn-primary" onClick={() => setValue("Ja")}> Ja </button>
                    {" "}
                    <button type="button" class="btn btn-primary" onClick={() => setValue("Nei")}> Nei </button>
                    {" "}
                    <button type="button" class="btn btn-primary" onClick={() => setValue("Usikker")}> Usikker </button>
                    <div>{value}</div>
            </div>
        )
    }   else { return(<p>bug</p>)}
}