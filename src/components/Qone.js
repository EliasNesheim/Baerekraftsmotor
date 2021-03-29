import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Qone({ OrgNr, setOrgNr }) {

    

    const handleInput = event => {
        setOrgNr(event.target.value.replace(/[ ]+/g, ''));  };

    

    return (
        <div>
            <input onChange={handleInput} placeholder="skriv org nummeret ditt"/>
            <p>{OrgNr}</p>
        </div>
        );
}
