import React from "react";
import BKKnapp from "./BKKnapp";
import 'bootstrap/dist/css/bootstrap.min.css';
import mal1 from "./FN/mal1.png"
import mal2 from "./FN/mal2.png"
import mal3 from "./FN/mal3.png"
import mal4 from "./FN/mal4.png"
import mal5 from "./FN/mal5.png"
import mal6 from "./FN/mal6.png"
import mal7 from "./FN/mal7.png"
import mal8 from "./FN/mal8.png"
import mal9 from "./FN/mal9.png"
import mal10 from "./FN/mal10.png"
import mal11 from "./FN/mal11.png"
import mal12 from "./FN/mal12.png"
import mal13 from "./FN/mal13.png"
import mal14 from "./FN/mal14.png"
import mal15 from "./FN/mal15.png"
import mal16 from "./FN/mal16.png"
import mal17 from "./FN/mal17.png"

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
             <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
             <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
             <h3 id="FNmaltittel">1. Utryde Fattigdom</h3>
             <img src={mal1}></img>
             <p id="FNmal">Utrydde alle former for fattigdom i hele verden </p>
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
        <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
        <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3 id="FNmaltittel">2. Utryde Sult</h3>
        <img src={mal2}></img>
        <p id="FNmal">Utrydde sult, oppnå matsikkerhet og bedre ernæring, og fremme bærekraftig landbruk </p>
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
        <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
        <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3 id="FNmaltittel">3. God Helse og Livskvalitet</h3>
        <img src={mal3}></img>
        <p id="FNmal">Sikre god helse og fremme livskvalitet for alle, uansett alder</p>
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
        <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
        <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3 id="FNmaltittel" >4. God Utdanning</h3>
        <img src={mal4}></img>
        <p id="FNmal">Sikre inkluderende, rettferdig og god utdanning og fremme muligheter for livslang læring for alle</p>  
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
        <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
        <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3 id="FNmaltittel" >5. Likestilling Mellom Kjønnene</h3>
        <img src={mal5}></img>
        <p id="FNmal">Oppnå likestilling og styrke jenters og kvinners stilling i samfunnet </p>
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
        <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
        <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3 id="FNmaltittel" >6. Rent Vann og God Sanitærforhold</h3>
        <img src={mal6}></img>
        <p id="FNmal">Rent vann og gode sanitærforhold</p>
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
        <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
        <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3 id="FNmaltittel" >7. Ren Energi Til Alle</h3>
        <img src={mal7}></img>
        <p id="FNmal">Sikre tilgang til pålitelig, bærekraftig og moderne energi til en overkommelig pris for alle</p>
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
        <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
        <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3 id="FNmaltittel" >8. Anstedig Arbeid og Økonomisk Vekst</h3>
        <img src={mal8}></img>
        <p id="FNmal">Fremme varig, inkluderende og bærekraftig økonomisk vekst, full sysselsetting og anstendig arbeid for alle</p>
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
        <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
        <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3 id="FNmaltittel" >9. Industri, Innovasjon og Infrastruktur</h3>
        <img src={mal9}></img>
        <p id="FNmal">Bygge solid infrastruktur og fremme inkluderende og bærekraftig industrialisering og innovasjon</p>
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
        <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
        <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3 id="FNmaltittel" >10. Mindre Ulikhet</h3>
        <img src={mal10}></img>
        <p id="FNmal">Redusere ulikhet i og mellom land</p>
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
        <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
        <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3 id="FNmaltittel" >11. Bærekraftige Byer og Lokalsamfun</h3>
        <img src={mal11}></img>
        <p id="FNmal">Gjøre byer og lokalsamfunn inkluderende, trygge, robuste og bærekraftige</p>
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
        <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
        <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3 id="FNmaltittel" >12. Ansvarlig Forbruk og Produksjon</h3>
        <img src={mal12}></img>
        <p id="FNmal"> Sikre bærekraftig forbruks- og produksjonsmønstre</p>
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
          <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
          <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
          <h3 id="FNmaltittel" >13. Stoppe klimaendringene</h3>
          <img src={mal13}></img>
          <p id="FNmal">Handle umiddelbart for å bekjempe klimaendringene og konsekvensene av dem (Basert på en erkjennelse av 
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
          <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
          <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
          <h3 id="FNmaltittel" >14. Livet i havet</h3>
          <img src={mal14}></img>
          <p id="FNmal">Bevare og bruke havet og de marine ressursene på en måte som fremmer bærekraftig utvikling</p>
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
          <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
          <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
          <h3 id="FNmaltittel" >15. Livet på Land</h3>
          <img src={mal15}></img>
          <p id="FNmal">Beskytte, gjenopprette og fremme bærekraftig bruk av økosystemer, sikre bærekraftig skogforvaltning, 
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
          <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
          <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
          <h3 id="FNmaltittel" >16. Fred, Rettferdighet og Velfungerende Institusjoner</h3>
          <img src={mal16}></img>
          <p id="FNmal">Fremme fredelige og inkluderende samfunn for å sikre bærekraftig utvikling, sørge for 
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
            <h2 id="FNtittel">FNs Bærekraftsmål og forklaring</h2>
            <p id="FNhentet">Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
            <h3 id="FNmaltittel" >17. Samarbeid For å nå Målene</h3>
            <img src={mal17}></img>
            
      
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

