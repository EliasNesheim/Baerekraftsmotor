import React from "react";
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
import Baekraftselement from "./Baerekraftselement";


export default function Baekraftsliste({bkListeState, setBkListeState}){
  switch(bkListeState){ 
    case 1:
      return(
        <div>
          <Baekraftselement BkMal={BkMal1} text={"Utrydde alle former for fattigdom i hele verden"}/>
        </div>
      )
    case 2:
      return(
        <div>
          <Baekraftselement BkMal={BkMal2} text={"Utrydde sult, oppnå matsikkerhet og bedre ernæring, og fremme bærekraftig landbruk "}/>
        </div>
      )
    case 3:
      return(
        <div>
          <Baekraftselement BkMal={BkMal3} text={" God Helse og Livskvalitet"}/>
        </div>
        
      )
    case 4:
      return(
        <div>
          <Baekraftselement BkMal={BkMal4} text={"Sikre inkluderende, rettferdig og god utdanning og fremme muligheter for livslang læring for alle"}/>
        </div>
        
      )
    case 5:
      return(
        <div>
          <Baekraftselement BkMal={BkMal5} text={"Oppnå likestilling og styrke jenters og kvinners stilling i samfunnet"}/>
        </div>
        
      )
    case 6:
      return(
        <div>
          <Baekraftselement BkMal={BkMal6} text={"Rent vann og gode sanitærforhold"}/>
        </div>
      )
    case 7:
      return(
        <div>
          <Baekraftselement BkMal={BkMal7} text={"Sikre tilgang til pålitelig, bærekraftig og moderne energi til en overkommelig pris for alle"}/>
        </div>
        
      )
    case 8:
      return(
        <div>
          <Baekraftselement BkMal={BkMal8} text={"Fremme varig, inkluderende og bærekraftig økonomisk vekst, full sysselsetting og anstendig arbeid for alle"}/>
        </div>
        
      )
    case 9:
      return(
        <div>
          <Baekraftselement BkMal={BkMal9} text={"Bygge solid infrastruktur og fremme inkluderende og bærekraftig industrialisering og innovasjon"}/>
        </div>
        
      )
    case 10:
      return(
        <div>
          <Baekraftselement BkMal={BkMal10} text={"Redusere ulikhet i og mellom land"}/>
        </div>
        
      )
    case 11:
      return(
        <div>
          <Baekraftselement BkMal={BkMal11} text={"Gjøre byer og lokalsamfunn inkluderende, trygge, robuste og bærekraftige"}/>
        </div>
        
      )
    case 12:
      return(
        <div>
          <Baekraftselement BkMal={BkMal12} text={"Sikre bærekraftig forbruks- og produksjonsmønstre"}/>
        </div>
        
      )
      case 13:
        return(
          <div>
            <Baekraftselement BkMal={BkMal13} text={"Handle umiddelbart for å bekjempe klimaendringene og konsekvensene av dem (Basert på en erkjennelse av at FNs rammekonvensjon om klimaendring er det viktigste internasjonale og mellomstatlige forumet for forhandlinger om globale tiltak mot klimaendringer.)"}/>
          </div>
          
        )
      case 14:
        return(
          <div>
          <Baekraftselement BkMal={BkMal14} text={"Bevare og bruke havet og de marine ressursene på en måte som fremmer bærekraftig utvikling"}/>
        </div>
          
        )
      case 15:
        return(
          <div>
          <Baekraftselement BkMal={BkMal15} text={"Beskytte, gjenopprette og fremme bærekraftig bruk av økosystemer, sikre bærekraftig skogforvaltning, bekjempe ørkenspredning, stanse og reversere landforringelse samt stanse tap av artsmangfold"}/>
        </div>
          
        )
      case 16:
        return(
          <div>
          <Baekraftselement BkMal={BkMal16} text={"Fremme fredelige og inkluderende samfunn for å sikre bærekraftig utvikling, sørge for tilgang til rettsvern for alle, og bygge velfungerende, ansvarlige og inkluderende institusjoner på alle nivåer"}/>
        </div>
          
        )

      case 17:
        return(
          <div>
          <Baekraftselement BkMal={BkMal17} text={"Styrke virkemidlene som trengs for å gjennomføre arbeidet, og fornye globale partnerskap for bærekraftig utvikling"}/>
        </div>
          
        )
  }
}

