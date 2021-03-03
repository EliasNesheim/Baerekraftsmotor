import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function PageTwo( { plusMinus, appState, setAppState }){



    if (plusMinus === false){
        console.log("1 test");
        return(
            
            <Button onClick={() => setAppState(appState - 1)}>Tilbake</Button>
        )
    } else  {
        console.log("2 test");
        return(
            
            <Button onClick={() => setAppState(appState + 1)}>Videre</Button>
        )
    }
}