import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Questions.css";
import AppStateButton from "./AppStateButton";
import Question from "./Question";
import { Row, Col } from "react-bootstrap";


export default function Questions({ appState, setAppState, Answers, setAnswers, AnswerKey, setAnswerKey}){

    
    switch (appState) {
        case 1:
            setAnswerKey(0);
            return(
                <div className="Container">
                    <div className="Question">
                        <Col>
                            <Row>
                                <Question QType={"Skala"} QText={"Hvor stor er risikoen for at ressursene blir knappere i bedriftens leverandørkjede om tre år? "}
                                AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} appState={appState} />
                            </Row>
                            <Row>
                                <Col>
                                    <AppStateButton plusMinus={false} appState={appState} setAppState={setAppState} />
                                </Col>
                                <Col>
                                    <AppStateButton plusMinus appState={appState} setAppState={setAppState} />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
            )
            
        case 2:
            setAnswerKey(1);
            
            return (
                <div className="Container">
                    <div className="Question">
                        <Col>
                            <Row>
                                <Question QType={"Skala"} QText={"I hvor stor grad vil leverandørene bli utsatt for lovendringer som kan påvirke forsyningene negativt de nærmeste tre årene?  "}
                                    AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} appState={appState} />
                            </Row>
                            <Row> 
                        
                                <Col>
                                    <AppStateButton plusMinus={false} appState={appState} setAppState={setAppState} />
                                </Col>
                                <Col>
                                    <AppStateButton plusMinus={true} appState={appState} setAppState={setAppState} />
                                </Col>

                            </Row>
                            
                        </Col>
                    </div>
                </div>
                    
            )
            
        case 3:
            setAnswerKey(2);
            return(
                <div className="Container">
                    <div className="Question">
                        <Col>
                            <div className="width">
                                <Row>
                                    <Question QType={"Skala"} QText={"Hvor opptatt vil bedriftens kunder være av bærekraftig verdikjede?"}
                                    AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} appState={appState} />
                                </Row>
                                <Row>
                                    <Col>
                                        <AppStateButton plusMinus={false} appState={appState} setAppState={setAppState} />
                                    </Col>
                                    <Col>
                                        <AppStateButton plusMinus appState={appState} setAppState={setAppState} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </div>
                </div> 

            )
            
        case 4:
            setAnswerKey(3);
            return(
                <div className="Container">
                    <div className="Question">
                        <Col>
                            <Row>
                                <Question QType={"Skala"} QText={"I hvor stor grad er bedriftens drift avhengig av fossile eller ikke-gjennvinnbare ressurser?   "}
                                AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} appState={appState} />
                            </Row>
                            <Row>
                                <Col>
                                    <AppStateButton plusMinus={false} appState={appState} setAppState={setAppState} />
                                </Col>
                                <Col>
                                    <AppStateButton plusMinus appState={appState} setAppState={setAppState} />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
            )
            
        case 5:
            setAnswerKey(4);
            return(
                <div className="Container">
                    <div className="Question">
                        <Col>
                            <Row>
                                <Question QType={"Skala"} QText={"I hvor stor grad vil bedriftens drift bli påvirket av kommende lovendringer i forbindelse med det grønne skifte?   "}
                                AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} appState={appState} />
                            </Row>
                            <Row>
                                <Col>
                                    <AppStateButton plusMinus={false} appState={appState} setAppState={setAppState} />
                                </Col>
                                <Col>
                                    <AppStateButton plusMinus appState={appState} setAppState={setAppState} />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
            )
            
        case 6:
            setAnswerKey(5);
            return(
                <div className="Container">
                    <div className="Question">
                        <Col>
                            <Row>
                                <Question QType={"Skala"} QText={"I hvor stor grad vil fremtidens forbrukere sette større krav til bedriftens CSR-profil?   "}
                                AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} appState={appState} />
                            </Row>
                            <Row>
                                <Col>
                                    <AppStateButton plusMinus={false} appState={appState} setAppState={setAppState} />
                                </Col>
                                <Col>
                                    <AppStateButton plusMinus appState={appState} setAppState={setAppState} />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
            )
            
        case 7:
            setAnswerKey(6);
            return(
                <div className="Container">
                    <div className="Question">
                        <Col>
                            <Row>
                                <Question QType={"Skala"} QText={"I hvor stor grad baseres bedriftens produkt eller tjeneste på det som vil bli knappe ressurser om fem år?   "}
                                AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} appState={appState} />
                            </Row>
                            <Row>
                                <Col>
                                    <AppStateButton plusMinus={false} appState={appState} setAppState={setAppState} />
                                </Col>
                                <Col>
                                    <AppStateButton plusMinus appState={appState} setAppState={setAppState} />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
            )
            
        case 8:
            setAnswerKey(7);
            return(
                <div className="Container">
                    <div className="Question">
                        <Col>
                            <Row>
                                <Question QType={"Skala"} QText={"I hvor stor grad vil bedriftens produkt(portefølje) bli preget av lovendringer de kommende fem årene?   "}
                                AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} appState={appState} />
                            </Row>
                            <Row>
                                <Col>
                                    <AppStateButton plusMinus={false} appState={appState} setAppState={setAppState} />
                                </Col>
                                <Col>
                                    <AppStateButton plusMinus appState={appState} setAppState={setAppState} />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
            )
            
        case 9:
            setAnswerKey(8);
            return(
                <div className="Container">
                    <div className="Question">
                        <Col>
                            <Row>
                                <Question QType={"Skala"} QText={"I hvor stor grad vil kundene deres endre krav og forventninger til deres produkt de neste fem årene?   "}
                                AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} appState={appState} />
                            </Row>
                            <Row>
                                <Col>
                                    <AppStateButton plusMinus={false} appState={appState} setAppState={setAppState} />
                                </Col>
                                <Col>
                                    <AppStateButton plusMinus appState={appState} setAppState={setAppState} />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
            )
            
        case 10:
            setAnswerKey(9);
            return(
                <div className="Container">
                    <div className="Question">
                        <Col>
                            <Row>
                                <Question QType={"Skala"} QText={"I hvor stor grad vil ressursene som skaper lønnsomhet kunne påvirke forretningsmodellen til din bedrift?   "}
                                AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} appState={appState} />
                            </Row>
                            <Row>
                                <Col>
                                    <AppStateButton plusMinus={false} appState={appState} setAppState={setAppState} />
                                </Col>
                                <Col>
                                    <AppStateButton plusMinus appState={appState} setAppState={setAppState} />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
            )
            
        case 11:
            setAnswerKey(10);
            return(
                <div className="Container">
                    <div className="Question">
                        <Col>
                            <Row>
                                <Question QType={"Skala"} QText={"I hvor stor grad vil fremtidige lovendringer og reguleringer kunne påvirke verdiskapingen i din bedrift?   "}
                                AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} appState={appState} />
                            </Row>
                            <Row>
                                <Col>
                                    <AppStateButton plusMinus={false} appState={appState} setAppState={setAppState} />
                                </Col>
                                <Col>
                                    <AppStateButton plusMinus appState={appState} setAppState={setAppState} />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
            )
            
        case 12:
            setAnswerKey(11);
            return(
                <div className="Container">
                    <div className="Question">
                        <Col>
                            <Row>
                                <Question QType={"Skala"} QText={"I hvor stor grad vil nye behov i kundesegmentene påvirke forretningsmodellen i bedriften?   "}
                                AnswerKey={AnswerKey} setAnswerKey={setAnswerKey} Answers={Answers} setAnswers={setAnswers} appState={appState} />
                            </Row>
                            <Row>
                                <Col>
                                    <AppStateButton plusMinus={false} appState={appState} setAppState={setAppState} />
                                </Col>
                                <Col>
                                    <AppStateButton plusMinus appState={appState} setAppState={setAppState} />
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </div>
            )
            
    
        default:
            
    }

}