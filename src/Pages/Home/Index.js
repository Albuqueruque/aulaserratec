import React from "react";
import { Link } from "react-router-dom";

export const Home = () =>{


    return(
        <>
            <h1>Bem vindo turma!</h1>
            <Link to="/quemsomos">Quem somos?</Link>
        </>
    )
}