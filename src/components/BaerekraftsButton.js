import React from "react";
import Button from 'react-bootstrap/Button';

export default function BærekraftsButton( { plusMinus, bkListeState, setBkListeState } ){
    if (plusMinus === false){
        //Knapp på bk mål 1 for å gå til mål 17
        if (bkListeState === 1){
            return(
                <Button variant="outline-success" onClick={() => setBkListeState(17)}>{'<'}</Button>
            )
        }
        else {
            return(
                <Button variant="outline-success" onClick={() => setBkListeState(bkListeState - 1)}>{'<'}</Button>
            )
        }
    }

    else if (plusMinus === true){
        //Knapp på bk mål 17 for å gå til mål 1
        if (bkListeState === 17){
            return(
                <Button variant="outline-success" onClick={() => setBkListeState(1)}>{'>'}</Button>
            )
        }
        else {
            return(
                <Button variant="outline-success" onClick={() => setBkListeState(bkListeState + 1)}>{'>'}</Button>
            )
        }
    }
}