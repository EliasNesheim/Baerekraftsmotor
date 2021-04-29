import React from "react"; //Imports react
//import "./Pageandhalf.css"; //Imports css
import 'bootstrap/dist/css/bootstrap.min.css'; //Imports bootstrap css
export default function Home(){ //Defines Home function used in App.js
      //Returns the code to the function Home
    return(
      <div>
          <meta charSet="utf-8" />  
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Velkommen til Greenovate!</title> 
      
        <div className="Homepagestyling">
            <h1 className="Tittelhovedside">Velkommen til Greenovate!</h1> 
            <p>Greenovate er en bærekraftsmotor som gir virksomheten en felles forståelse av hva bærekraft betyr, hvilke eksterne drivere som påvirker mest og hvor dere konkret kan sette i gang.
               Verktøyet passer best i workshop-format sammen med Simpact Group, men testen er allikevel gratis slik at flest mulig kan få innsikt i sitt bærekraftpotensial. 
               Spørsmålene omhandler din virksomhet på et strategisk nivå og hvordan dere opplever egen bransje i dette avgjørende arbeidet.
            </p> 
          <p>
            
Simpact Group er et lite selskap med stor påvirkningskraft. Vår jobb er å hjelpe våre kunder innenfor innovasjon, vekst, forretningsutvikling og omstilling.

          </p>
 
 <p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
 <p><a href="https://simpact.no/"> https://simpact.no/</a></p>

        </div>
        </div>
    
        )
}
