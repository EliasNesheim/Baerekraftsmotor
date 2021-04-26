import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function BKknapp( { plusMinus, set1, set17, bkListeState, setBkListeState } ){
    if (plusMinus === false){
        return(
            <Button onClick={() => setBkListeState(bkListeState - 1)}>Forrige</Button>
        )
    }

    else if (plusMinus === true){
        return(
            <Button onClick={() => setBkListeState(bkListeState + 1)}>Neste</Button>
        )
    }

    else if (set1 === true){
        return(
            <Button onClick={() => setBkListeState(bkListeState = 1)}>Neste</Button>
        )
    } 
    else if (set17 === true) {
        return(
            <Button onClick={() => setBkListeState(bkListeState = 17)}>Forrige</Button>
        )
    }
}