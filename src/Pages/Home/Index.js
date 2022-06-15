import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../Context/data.js";
import {AdicionarLista} from "../../Components/AdicionarLista.js"
import { Exemplo } from "../../Components/ExemploComponents/Exemplo.js";

export const Home = () =>{

    let {nome, handleSetNome} = useContext(DataContext)

    console.log("Home:",nome);
    console.log("HandleChange:", handleSetNome);

    return(
        <>
            <h1>Bem vindo turma!</h1>
            <input type="text" value={nome} onChange={handleSetNome}/>
            <h2>{nome}</h2>
            {/* <Link to={`/quemsomos/${nome}`}>Quem somos?</Link>  */}

        </>
    )
}