import React from "react";
//Bilde og tekst for hver bærekraftsmål
export default function Baekraftselement({BkMal, text}){

    return(
        <div>
            <img src={BkMal} alt="" width="200"></img>
            <p>{text}</p>
        </div>
    )

}
