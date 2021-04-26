import React from "react";
import BKKnapp from "./BKKnapp";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Baekraftsliste({bkListeState, setBkListeState}){
  switch(bkListeState){
    case 1:
      return(
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
      )
    case 2:
      return(
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3>2. Utryde Sult</h3>
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
      )
    case 3:
      return(
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3>3. God Helse og Livskvalitet</h3>
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
      )
    case 4:
      return(
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3>4. God Utdanning</h3>
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
      )
    case 5:
      return(
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3>5. Likestilling Mellom Kjønnene</h3>
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
      )
    case 6:
      return(
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3>6. Rent Vann og God Sanitærforhold</h3>
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
      )
    case 7:
      return(
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3>7. Ren Energi Til Alle</h3>
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
      )
    case 8:
      return(
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3>8. Anstedig Arbeid og Økonomisk Vekst</h3>
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
      )
    case 9:
      return(
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3>9. Industri, Innovasjon og Infrastruktur</h3>
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
      )
    case 10:
      return(
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3>10. Mindre Ulikhet</h3>
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
      )
    case 11:
      return(
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3>11. Bærekraftige Byer og Lokalsamfun</h3>
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
      )
    case 12:
      return(
        <div>
        <div class="malbeskrivelse">
        <h2>FNs Bærekraftsmål og forklaring</h2>
        <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
        <h3>12. Ansvarlig Forbruk og Produksjon</h3>
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
      )
      case 13:
        return(
          <div>
          <div class="malbeskrivelse">
          <h2>FNs Bærekraftsmål og forklaring</h2>
          <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
          <h3>13. Stoppe klimaendringene</h3>
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
        )
      case 14:
        return(
          <div>
          <div class="malbeskrivelse">
          <h2>FNs Bærekraftsmål og forklaring</h2>
          <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
          <h3>14. Livet i havet</h3>
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
        )
      case 15:
        return(
          <div>
          <div class="malbeskrivelse">
          <h2>FNs Bærekraftsmål og forklaring</h2>
          <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
          <h3>15. Livet på Land</h3>
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
        )
      case 16:
        return(
          <div>
          <div class="malbeskrivelse">
          <h2>FNs Bærekraftsmål og forklaring</h2>
          <p>Dette er FNs bærekraftsmål tatt fra <a href="https://www.fn.no/om-fn/fns-baerekraftsmaal">FN's bærekraftside</a></p>
          <h3>16. Fred, Rettferdighet og Velfungerende Institusjoner</h3>
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
        )
        case 17:
          return(
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
          )
  }
}

