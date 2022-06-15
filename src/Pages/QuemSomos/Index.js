import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {FirstText, SecondText, Container, AulaButton} from "./style.js"
import {Input} from "../../Components/Input.js"
import {AdicionarLista} from "../../Components/AdicionarLista.js"
import { api } from "../../Services/api.js";

export const QuemSomos = (props) =>{

    // const [produto, setProduto] = useState({
    //     nome:"",
    //     preco: ""
    // })

    // const postProduto = async () =>{
    //     const response = await api.post(`ecommerce/produtos/${produto}`)
    //     console.log(response.data);
    // }


    // useEffect(()=>{
    //     const getUsuario = async () =>{
    //         const response = await api.get(`ecommerce/produtos`)
    //         console.log(response.data);
    //     }

    //     getUsuario()
    // },[])


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