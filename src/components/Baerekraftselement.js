import React from "react";

export default function Baekraftselement({BkMal, text}){

    return(
        <div>
            <img src={BkMal} alt="" width="200"></img>
            <p>{text}</p>
        </div>
    )

}
