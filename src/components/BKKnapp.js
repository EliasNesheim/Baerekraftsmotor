import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function BKknapp( { plusMinus, set1, set17, bkListeState, setBkListeState } ){
    if (plusMinus === false){
        if (bkListeState == 1){
            return(
                <Button onClick={() => setBkListeState(17)}>Forrige</Button>
            )
        }
        else {
            return(
                <Button onClick={() => setBkListeState(bkListeState - 1)}>Forrige</Button>
            )
        }
    }

    else if (plusMinus === true){
        if (bkListeState == 17){
            return(
                <Button onClick={() => setBkListeState(1)}>Neste</Button>
            )
        }
        else {
            return(
                <Button onClick={() => setBkListeState(bkListeState + 1)}>Neste</Button>
            )
        }
    }
}