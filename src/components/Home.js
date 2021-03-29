import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import bilde from './l5.jpg';
export default function Home(){
    
    return(
      <div>
          <meta charSet="utf-8" /> 
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Bærekraftsmotor </title> 
        
        <div className="jumbotron"> 
            <h1 class="Tittel">Bruk Bærekraftsmotor</h1> 
            <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

 <img src={bilde}></img>
 <p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
 <p><a href="https://simpact.no/"> https://simpact.no/</a></p>

        </div>
        </div>
    
        )
}
