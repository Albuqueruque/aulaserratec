import React from "react";


export const ComponenteFilho = (props) =>{

    return(
        <>
        <h1>{props.nome}</h1>
        <h2>{props.idade}</h2>
        <h2>{props.nerd ? "Verdaderio" : "Falso"}</h2>
        </>
    )
}