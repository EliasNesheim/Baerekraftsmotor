import React from "react"; //Imports react
//import "./Pageandhalf.css"; //Imports css
import 'bootstrap/dist/css/bootstrap.min.css'; //Imports bootstrap css
import Baekraftsliste from "./Baerekraftsliste";
import BKKnapp from "./BKKnapp";


export default function Home({bkListeState, setBkListeState} ){ //Defines Home function used in App.js
      //Returns the code to the function Home
    return(
      <div>
      
        <div className="Homepagestyling">
            <h1 className="Tittelhovedside">Velkommen til Greenovate!</h1> 
            <p>Greenovate er en bærekraftsmotor som gir virksomheten en felles forståelse av hva bærekraft betyr, hvilke eksterne drivere som påvirker mest og hvor dere konkret kan sette i gang.
               Verktøyet passer best i workshop-format sammen med Simpact Group, men testen er allikevel gratis slik at flest mulig kan få innsikt i sitt bærekraftpotensial. 
               Spørsmålene omhandler din virksomhet på et strategisk nivå og hvordan dere opplever egen bransje i dette avgjørende arbeidet.
            </p> 
          
          <div>
            <div className="Homepagestyling">

              <div>
                <div class="malbeskrivelse">
                  <h2>FNs Bærekraftsmål og forklaring</h2>
                  <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
                  <Baekraftsliste bkListeState={bkListeState} setBkListeState={setBkListeState}/>

                </div>
                  <div class="buttonscontainer">
                    <div class="buttonspace1">
                      <BKKnapp plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
                    </div>
                    <div class="buttonspace2">
                      <BKKnapp plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
        )
}
