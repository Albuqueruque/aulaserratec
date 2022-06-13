import React, { useEffect, useState } from "react";
import {Mostrar} from "./Mostrar"

export const Input = () =>{

    const[nome, setNome] = useState("")

    function handleChangeNome(e){
         setNome(e.target.value)
    }

    useEffect(()=>{
        document.title = `Olá ${nome}`
    },[nome])

    return(
        <>
        <label>Nome: <Mostrar nome={nome}/></label>
        <div>
            <input type="text" value={nome} onChange={((e) => handleChangeNome(e))}/>
        </div>  
        </>
    )
}