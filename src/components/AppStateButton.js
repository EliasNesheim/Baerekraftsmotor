import React from "react";
import { Button} from "react-bootstrap";

export default function AppStateButton( { plusMinus, appState, setAppState }){



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

