import React from "react";
import { useNavigate } from "react-router-dom";

export const QuemSomos = () =>{

    let navigate = useNavigate();

    function handleClick(){
        navigate("/")
    }

    return(
        <>
            <h1> Quem Somos?</h1>
            <h2> Aqui você irá descobrir quem somos e o que fazemos</h2>
            <button onClick={handleClick}>Voltar para home</button>
        </>
    )
}