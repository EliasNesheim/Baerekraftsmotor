import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import BkMal1 from "./img/bkMal1.png";
import BkMal2 from "./img/bkMal2.png";
import BkMal3 from "./img/bkMal3.png";
import BkMal4 from "./img/bkMal4.png";
import BkMal5 from "./img/bkMal5.png";
import BkMal6 from "./img/bkMal6.png";
import BkMal7 from "./img/bkMal7.png";
import BkMal8 from "./img/bkMal8.png";
import BkMal9 from "./img/bkMal9.png";
import BkMal10 from "./img/bkMal10.png";
import BkMal11 from "./img/bkMal11.png";
import BkMal12 from "./img/bkMal12.png";
import BkMal13 from "./img/bkMal13.png";
import BkMal14 from "./img/bkMal14.png";
import BkMal15 from "./img/bkMal15.png";
import BkMal16 from "./img/bkMal16.png";
import BkMal17 from "./img/bkMal17.png";
import Baekraftselement from "./Baerekraftselement";

import BaerekraftsButton from "./BaerekraftsButton";
import { Col, Row } from "react-bootstrap";

//En slideshow med alle bærekraftsmål
export default function Baekraftsliste({bkListeState, setBkListeState}){
  switch(bkListeState){ 
    case 1:
      return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
          <Col>
            <Baekraftselement BkMal={BkMal1} text={"Utrydde alle former for fattigdom i hele verden"}/>
          </Col>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
        </Row>
      )
    case 2:
      return(
        <Row >
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
          <Col>
            <Baekraftselement BkMal={BkMal2} text={"Utrydde sult, oppnå matsikkerhet og bedre ernæring, og fremme bærekraftig landbruk "}/>
          </Col>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
        </Row>
      )
    case 3:
      return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
          <Col>
            <Baekraftselement BkMal={BkMal3} text={" God Helse og Livskvalitet"}/>
          </Col>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
        </Row>
        
      )
    case 4:
      return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
          <Col>
            <Baekraftselement BkMal={BkMal4} text={"Sikre inkluderende, rettferdig og god utdanning og fremme muligheter for livslang læring for alle"}/>
          </Col>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
        </Row>
        
      )
    case 5:
      return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
          <Col>
            <Baekraftselement BkMal={BkMal5} text={"Oppnå likestilling og styrke jenters og kvinners stilling i samfunnet"}/>
          </Col>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
        </Row>
        
      )
    case 6:
      return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
          <Col>
            <Baekraftselement BkMal={BkMal6} text={"Rent vann og gode sanitærforhold"}/>
          </Col>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
        </Row>
      )
    case 7:
      return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
          <Col>
            <Baekraftselement BkMal={BkMal7} text={"Sikre tilgang til pålitelig, bærekraftig og moderne energi til en overkommelig pris for alle"}/>
          </Col>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
        </Row>
        
      )
    case 8:
      return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
          <Col>
            <Baekraftselement BkMal={BkMal8} text={"Fremme varig, inkluderende og bærekraftig økonomisk vekst, full sysselsetting og anstendig arbeid for alle"}/>
          </Col>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
        </Row>
        
      )
    case 9:
      return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </Col>
          <Col>
            <Baekraftselement BkMal={BkMal9} text={"Bygge solid infrastruktur og fremme inkluderende og bærekraftig industrialisering og innovasjon"}/>
          </Col>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
        </Row>
        
      )
    case 10:
      return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
            <Col>
            <Baekraftselement BkMal={BkMal10} text={"Redusere ulikhet i og mellom land"}/>
            </Col>
            <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
        </Row>
        
      )
    case 11:
      return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
            <Col>
            <Baekraftselement BkMal={BkMal11} text={"Gjøre byer og lokalsamfunn inkluderende, trygge, robuste og bærekraftige"}/>
            </Col>
            <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
        </Row>
        
      )
    case 12:
      return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
            <Col>
            <Baekraftselement BkMal={BkMal12} text={"Sikre bærekraftig forbruks- og produksjonsmønstre"}/>
            </Col>
            <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
        </Row>
        
      )
      case 13:
        return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
            <Col>
            <Baekraftselement BkMal={BkMal13} text={"Handle umiddelbart for å bekjempe klimaendringene og konsekvensene av dem (Basert på en erkjennelse av at FNs rammekonvensjon om klimaendring er det viktigste internasjonale og mellomstatlige forumet for forhandlinger om globale tiltak mot klimaendringer.)"}/>
            </Col>
            <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
        </Row>
          
        )
      case 14:
        return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
            <Col>
            <Baekraftselement BkMal={BkMal14} text={"Bevare og bruke havet og de marine ressursene på en måte som fremmer bærekraftig utvikling"}/>
            </Col>
            <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
        </Row>
          
        )
      case 15:
        return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
            <Col>
            <Baekraftselement BkMal={BkMal15} text={"Beskytte, gjenopprette og fremme bærekraftig bruk av økosystemer, sikre bærekraftig skogforvaltning, bekjempe ørkenspredning, stanse og reversere landforringelse samt stanse tap av artsmangfold"}/>
            </Col>
            <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
        </Row>
          
        )
      case 16:
        return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
            <Col>
            <Baekraftselement BkMal={BkMal16} text={"Fremme fredelige og inkluderende samfunn for å sikre bærekraftig utvikling, sørge for tilgang til rettsvern for alle, og bygge velfungerende, ansvarlige og inkluderende institusjoner på alle nivåer"}/>
            </Col>
            <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
        </Row>
          
        )

      case 17:
        return(
        <Row>
          <Col xs={1}>
            <BaerekraftsButton plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
            <Col>
            <Baekraftselement BkMal={BkMal17} text={"Styrke virkemidlene som trengs for å gjennomføre arbeidet, og fornye globale partnerskap for bærekraftig utvikling"}/>
            </Col>
            <Col xs={1}>
            <BaerekraftsButton plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </Col>
        </Row>
          
        )
  }
}

