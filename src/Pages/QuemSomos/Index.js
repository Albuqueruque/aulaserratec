import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {FirstText, SecondText, Container, AulaButton} from "./style.js"
import {Input} from "../../Components/Input.js"
import {AdicionarLista} from "../../Components/AdicionarLista.js"

export const QuemSomos = () =>{

    var {nome} = useParams()
    var {idade} = useParams()

    var navigate = useNavigate();

    function handleClick(){
        navigate("/")
    }


    return(
        <>
         <Container>
            <FirstText>Quem somos?</FirstText>
            <SecondText> Somos uma turma de reactJs</SecondText>
            <AdicionarLista/>
        </Container>
        <AulaButton onClick={handleClick}>Voltar para home</AulaButton>
        </>
    )
}