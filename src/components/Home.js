import React from "react"; //Imports react
//import "./Pageandhalf.css"; //Imports css
import 'bootstrap/dist/css/bootstrap.min.css'; //Imports bootstrap css
import Baekraftsliste from "./Baerekraftsliste";
import { Col, Container, Row } from "react-bootstrap";
import OrgNrLookUp from "./OrgNrLookUp";



export default function Home({bkListeState, setBkListeState, OrgNr, setOrgNr, appState, setAppState, setNaceKode, postData, setPost} ){ //Defines Home function used in App.js
      //Returns the code to the function Home
    return(

      <Container>
        <Row className="d-flex justify-content-around">
          <div className="Dark-Jungel-Green-Text">
            <Col>
              <h1>Velkommen til Greenovate!</h1> 
            </Col>
          </div>
        </Row>
        <Row >
          <p>Greenovate er en bærekraftsmotor som gir virksomheten en felles forståelse av hva bærekraft betyr, hvilke eksterne drivere som påvirker mest og hvor dere konkret kan sette i gang.
              Verktøyet passer best i workshop-format sammen med Simpact Group, men testen er allikevel gratis slik at flest mulig kan få innsikt i sitt bærekraftpotensial. 
              Spørsmålene omhandler din virksomhet på et strategisk nivå og hvordan dere opplever egen bransje i dette avgjørende arbeidet.
          </p> 
        </Row>  
        <Row >
          <Col>
            <div className="OneThird bm">
              <h3>FNs Bærekraftsmål og forklaring</h3>

              <Baekraftsliste bkListeState={bkListeState} setBkListeState={setBkListeState}/>

            </div>
          </Col>
          <Col>
            <Row>
            <div className="GreenBorder">
              <OrgNrLookUp OrgNr={OrgNr} setOrgNr={setOrgNr} appState={appState} setAppState={setAppState} setNaceKode={setNaceKode} postData={postData} setPost={setPost} />
              </div>
              <div className="GreenBorder">
                <p>
                  Simpact Group er et lite selskap med stor påvirkningskraft. Vår jobb er å hjelpe våre kunder innenfor innovasjon, vekst, forretningsutvikling og omstilling.
                </p>
                <p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
                <p><a href="https://simpact.no/"> https://simpact.no/</a></p>
              </div>
            </Row>
            </Col>
          </Row>
      </Container>
    
        )
}
