import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function PageTwo( { plusMinus, appState, setAppState }){



    if (plusMinus === false){
        return(
            <Button onClick={() => setAppState(appState - 1)}>Tilbake</Button>
        )
    } else  {
        return(
            <Button onClick={() => setAppState(appState + 1)}>Videre</Button>
        )
    }
}

export function BKknapp( { set1, set17, setAppState } ){
    if (set1 == true){
        return(
            <Button onClick={() => setAppState(1)}>Tilbake</Button>
        )
    } 
    else if (set17==true) {
        return(
            <Button onClick={() => setAppState(17)}>Tilbake</Button>
        )
    }
}