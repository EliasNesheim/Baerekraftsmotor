import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

export function NaceFunction (naceMainKode){
    
    console.log(typeof naceMainKode);
    console.log(naceMainKode);
    naceMainKode = parseInt(naceMainKode);
    console.log(typeof naceMainKode);
    console.log(naceMainKode);
    if (naceMainKode <= 2 ){
        console.log("feilfeil")
        return 1;
    } else if (naceMainKode <= 3 ){
        return 2;
    } else if (naceMainKode <= 9 ) {
        return 3;
    } else if (naceMainKode <= 33 ) {

        return 4;
    } else if (naceMainKode <= 35 ) {
        return 5; 
    } else if (naceMainKode <= 39 ) {

        return 6;
    } else if (naceMainKode <= 43 ) {

        return 7;
    } else if (naceMainKode <= 47 ) {

        return 8;
    } else if (naceMainKode <= 53 ) {

        return 9;
    } else if (naceMainKode <= 56 ) {

        return 10;
    } else if (naceMainKode <= 63 ) {

        return 11;
    } else if (naceMainKode <= 66 ) {

        return 12;
    } else if (naceMainKode <= 68 ) {

        return 13;
    } else if (naceMainKode <= 75 ) {

        return 14;
    } else if (naceMainKode <= 82 ) {

        return 15;
    } else if (naceMainKode <= 84 ) {

        return 16;
    } else if (naceMainKode <= 85 ) {

        return 17;
    } else if (naceMainKode <= 88 ) {

        return 18;
    } else if (naceMainKode <= 93 ) {

        return 19;
    } else if (naceMainKode <= 96 ) {

        return 20;
    } else if (naceMainKode <= 97 ) {

        return 21;
    } else if (naceMainKode <= 99 ) {

        return 22;
    }


}
