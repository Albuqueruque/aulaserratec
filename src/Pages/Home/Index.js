import React, { useState } from "react";
import { Link } from "react-router-dom";
import {AdicionarLista} from "../../Components/AdicionarLista.js"
import { Exemplo } from "../../Components/ExemploComponents/Exemplo.js";

export const Home = () =>{

    const [usuario] = useState(
        {
        nome:"Matheus",
        idade:22
     }
    )


    return(
        <>
            <h1>Bem vindo turma!</h1>
            <Link to={`/quemsomos/${usuario.nome}/${usuario.idade}`}>Quem somos?</Link> 

        </>
    )
}