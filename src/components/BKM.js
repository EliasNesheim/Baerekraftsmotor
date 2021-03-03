import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function BKM({ Words }){
    console.log(" BKM Words[1]: " + Words[1]);
    return(
        <div>
            <p>{Words[1]}</p>

        </div>
    )
}