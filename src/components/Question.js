import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import RangeSlider from 'react-bootstrap-range-slider';


export default function Question({ QType, QText, Answers, setAnswers, AnswerKey, setAnswerKey, AppState }) {

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
            /*
            console.log("Key: " + JSON.stringify(AnswerKey) + " value: " + value);
            console.log("AnsKey" + JSON.stringify(AnswerKey));
            console.log(JSON.stringify(Answers));
            console.log(Answers); */
        },
        [value, AnswerKey]
    );
    


    // min kode 
    if (QType === "Skala") {
        return (

            <div className="width">
                <Row >
                    <div className="GreenBorder OneThird width">
                    <label>{QText}</label>
                    </div>
                </Row>
                <Row>
                    <Col>
                    <label className="" > 
                    Skala fra 0 – 10, 0 = Ikke viktig, 10= Helt avgjørende
                    </label> <br />
                    </Col>
                </Row>
                <Row>
                    
                        <Col>
                        <Form.Group>
                            <RangeSlider
                            
                                value={value}
                                max={10}
                                onChange={e => setValue(e.target.value)}
                                width="80%"
                            />
                            </Form.Group>
                        </Col>
                       
                    
                </Row>
            </div>
        )
    }   else { return(<p>bug</p>)}
}