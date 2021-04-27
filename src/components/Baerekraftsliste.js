import React from "react";
import BKKnapp from "./BKKnapp";
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

export default function Baekraftsliste({bkListeState, setBkListeState}){
  switch(bkListeState){
    case 1:
      return(
        <div>
        <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bærekraftsmotor </title> 
    
      <div className="Homepagestyling">
          <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
          <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

<p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
<p><a href="https://simpact.no/"> https://simpact.no/</a></p>
<div>
             <div class="malbeskrivelse">
             <h2>FNs Bærekraftsmål og forklaring</h2>
             <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
             <h3>1. Utryde Fattigdom</h3>
             <p>Utrydde alle former for fattigdom i hele verden </p>
             </div>
             <div class="buttonscontainer">
             <div class="buttonspace1">
     
             <BKKnapp set17={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
             </div>
             <div class="buttonspace2">
     
             <BKKnapp plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
     
             </div>
             </div>
             </div>
             </div>

      </div>
      

           )
        
    case 2:
      return(
        <div>
        <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bærekraftsmotor </title> 
    
      <div className="Homepagestyling">
          <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
          <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

<p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
<p><a href="https://simpact.no/"> https://simpact.no/</a></p>
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <img src={BkMal1} alt="1. Utryde Fattigdom" width="200"></img>
        <p>Utrydde alle former for fattigdom i hele verden </p>
        </div>
        <div class="buttonscontainer">
        <div class="buttonspace1">

        <BKKnapp set17={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
        </div>
        <div class="buttonspace2">

        <BKKnapp plusMinus={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />

        </div>
        </div>
        </div>
        </div>
        </div>
      )
    case 3:
      return(
        <div>
        <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bærekraftsmotor </title> 
    
      <div className="Homepagestyling">
          <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
          <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

<p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
<p><a href="https://simpact.no/"> https://simpact.no/</a></p>
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <img src={BkMal2} alt="2. Utryde Sult" width="200"></img>
        <p>Utrydde sult, oppnå matsikkerhet og bedre ernæring, og fremme bærekraftig landbruk </p>
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
      )
    case 4:
      return(
        <div>
        <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bærekraftsmotor </title> 
    
      <div className="Homepagestyling">
          <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
          <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

<p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
<p><a href="https://simpact.no/"> https://simpact.no/</a></p>
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <img src={BkMal3} alt="3. God Helse og Livskvalitet" width="200"></img>
        <p>Sikre god helse og fremme livskvalitet for alle, uansett alder</p>
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
      )
    case 5:
      return(
        <div>
        <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bærekraftsmotor </title> 
    
      <div className="Homepagestyling">
          <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
          <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

<p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
<p><a href="https://simpact.no/"> https://simpact.no/</a></p>
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <img src={BkMal4} alt="4. God Utdanning" width="200"></img>
        <p>Sikre inkluderende, rettferdig og god utdanning og fremme muligheter for livslang læring for alle</p>  
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
      )
    case 6:
      return(
        <div>
        <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bærekraftsmotor </title> 
    
      <div className="Homepagestyling">
          <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
          <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

<p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
<p><a href="https://simpact.no/"> https://simpact.no/</a></p>
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <img src={BkMal5} alt="5. Likestilling Mellom Kjønnene" width="200"></img>
        <p>Oppnå likestilling og styrke jenters og kvinners stilling i samfunnet </p>
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
      )
    case 7:
      return(
        <div>
        <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bærekraftsmotor </title> 
    
      <div className="Homepagestyling">
          <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
          <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

<p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
<p><a href="https://simpact.no/"> https://simpact.no/</a></p>
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <img src={BkMal6} alt="6. Rent Vann og God Sanitærforhold" width="200"></img>
        <p>Rent vann og gode sanitærforhold</p>
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
      )
    case 8:
      return(
        <div>
        <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bærekraftsmotor </title> 
    
      <div className="Homepagestyling">
          <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
          <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

<p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
<p><a href="https://simpact.no/"> https://simpact.no/</a></p>
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <img src={BkMal7} alt="7. Ren Energi Til Alle" width="200"></img>
        <p>Sikre tilgang til pålitelig, bærekraftig og moderne energi til en overkommelig pris for alle</p>
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
      )
    case 9:
      return(
        <div>
        <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bærekraftsmotor </title> 
    
      <div className="Homepagestyling">
          <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
          <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

<p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
<p><a href="https://simpact.no/"> https://simpact.no/</a></p>
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <img src={BkMal8} alt="8. Anstedig Arbeid og Økonomisk Vekst" width="200"></img>
        <p>Fremme varig, inkluderende og bærekraftig økonomisk vekst, full sysselsetting og anstendig arbeid for alle</p>
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
      )
    case 10:
      return(
        <div>
        <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bærekraftsmotor </title> 
    
      <div className="Homepagestyling">
          <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
          <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

<p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
<p><a href="https://simpact.no/"> https://simpact.no/</a></p>
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <img src={BkMal9} alt="9. Industri, Innovasjon og Infrastruktur" width="200"></img>
        <p>Bygge solid infrastruktur og fremme inkluderende og bærekraftig industrialisering og innovasjon</p>
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
      )
    case 11:
      return(
        <div>
        <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bærekraftsmotor </title> 
    
      <div className="Homepagestyling">
          <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
          <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

<p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
<p><a href="https://simpact.no/"> https://simpact.no/</a></p>
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <img src={BkMal10} alt="10. Mindre Ulikhet" width="200"></img>
        <p>Redusere ulikhet i og mellom land</p>
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
      )
    case 12:
      return(
        <div>
        <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bærekraftsmotor </title> 
    
      <div className="Homepagestyling">
          <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
          <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

<p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
<p><a href="https://simpact.no/"> https://simpact.no/</a></p>
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <img src={BkMal11} alt="11. Bærekraftige Byer og Lokalsamfun" width="200"></img>
        <p>Gjøre byer og lokalsamfunn inkluderende, trygge, robuste og bærekraftige</p>
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
      )
    case 13:
      return(
        <div>
        <meta charSet="utf-8" />  
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Bærekraftsmotor </title> 
    
      <div className="Homepagestyling">
          <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
          <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 

<p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
<p><a href="https://simpact.no/"> https://simpact.no/</a></p>
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <img src={BkMal12} alt="12. Ansvarlig Forbruk og Produksjon" width="200"></img>
        <p>Sikre bærekraftig forbruks- og produksjonsmønstre</p>
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
      )
      case 14:
        return(
          <div>
          <meta charSet="utf-8" />  
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Bærekraftsmotor </title> 
      
        <div className="Homepagestyling">
            <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
            <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 
  
  <p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
  <p><a href="https://simpact.no/"> https://simpact.no/</a></p>
          <div>
          <div class="malbeskrivelse">
          <h2>FNs Bærekraftsmål og forklaring</h2>
          <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
          <img src={BkMal13} alt="13. Stoppe klimaendringene" width="200"></img>
          <p>Handle umiddelbart for å bekjempe klimaendringene og konsekvensene av dem (Basert på en erkjennelse av 
          at FNs rammekonvensjon om klimaendring er det viktigste internasjonale og mellomstatlige forumet for 
          forhandlinger om globale tiltak mot klimaendringer.)</p>
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
        )
      case 15:
        return(
          <div>
          <meta charSet="utf-8" />  
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Bærekraftsmotor </title> 
      
        <div className="Homepagestyling">
            <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
            <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 
  
  <p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
  <p><a href="https://simpact.no/"> https://simpact.no/</a></p>
          <div>
          <div class="malbeskrivelse">
          <h2>FNs Bærekraftsmål og forklaring</h2>
          <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
          <img src={BkMal14} alt="14. Livet i havet" width="200"></img>
          <p>Bevare og bruke havet og de marine ressursene på en måte som fremmer bærekraftig utvikling</p>
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
        )
      case 16:
        return(
          <div>
          <meta charSet="utf-8" />  
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Bærekraftsmotor </title> 
      
        <div className="Homepagestyling">
            <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
            <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 
  
  <p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
  <p><a href="https://simpact.no/"> https://simpact.no/</a></p>
          <div>
          <div class="malbeskrivelse">
          <h2>FNs Bærekraftsmål og forklaring</h2>
          <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
          <img src={BkMal15} alt="15. Livet på Land" width="200"></img>
          <p>Beskytte, gjenopprette og fremme bærekraftig bruk av økosystemer, sikre bærekraftig skogforvaltning, 
            bekjempe ørkenspredning, stanse og reversere landforringelse samt stanse tap av artsmangfold</p>
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
        )
      case 17:
        return(
          <div>
          <meta charSet="utf-8" />  
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>Bærekraftsmotor </title> 
      
        <div className="Homepagestyling">
            <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
            <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 
  
  <p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
  <p><a href="https://simpact.no/"> https://simpact.no/</a></p>
          <div>
          <div class="malbeskrivelse">
          <h2>FNs Bærekraftsmål og forklaring</h2>
          <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
          <img src={BkMal16} alt="16. Fred, Rettferdighet og Velfungerende Institusjoner" width="200"></img>
          <p>Fremme fredelige og inkluderende samfunn for å sikre bærekraftig utvikling, sørge for 
            tilgang til rettsvern for alle, og bygge velfungerende, ansvarlige og inkluderende institusjoner på alle nivåer</p>
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
        )

      case 17:
        return(
          <div>
          <div class="malbeskrivelse">
          <h2>FNs Bærekraftsmål og forklaring</h2>
          <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
          <img src={BkMal17} alt="17. Samarbeid For å nå Målene" width="200"></img>
          <p>Styrke virkemidlene som trengs for å gjennomføre arbeidet, og fornye globale partnerskap for bærekraftig utvikling</p> 
          </div>
          <div class="buttonscontainer">
          <div class="buttonspace1">
    
          <BKKnapp plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
          </div>
          <div class="buttonspace2">
    
          <BKKnapp set1={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
    
          </div>
          </div>
          </div>
        )
        case 18:
          return(
            <div>
            <meta charSet="utf-8" />  
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>Bærekraftsmotor </title> 
        
          <div className="Homepagestyling">
              <h1 className="Tittelhovedside">Bruk Bærekraftsmotor</h1> 
              <p>Bærekraftsmotor er en nettside som spør deg eller din bedrift spørsmål om hvor godt dere følger klima målene og kommer med råd for videre utvikling </p> 
    
    <p>Vil du lære mer om bærekraftig utvikling? Les mer på denne siden:</p> 
    <p><a href="https://simpact.no/"> https://simpact.no/</a></p>
            <div>
            <div class="malbeskrivelse">
            <h2>FNs Bærekraftsmål og forklaring</h2>
            <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
            <h3>17. Samarbeid For å nå Målene</h3>
            <p>Styrke virkemidlene som trengs for å gjennomføre arbeidet, og fornye globale partnerskap for bærekraftig utvikling</p> 
            </div>
            <div class="buttonscontainer">
            <div class="buttonspace1">
      
            <BKKnapp plusMinus={false} bkListeState={bkListeState} setBkListeState={setBkListeState} />
            </div>
            <div class="buttonspace2">
      
            <BKKnapp set1={true} bkListeState={bkListeState} setBkListeState={setBkListeState} />
      
            </div>
            </div>
            </div>
            </div>
           </div>
          )
  }
}

