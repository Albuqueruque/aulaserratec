import React, { createContext, useState } from "react";

export const estadoContexto ={
    nome:"Matheus"
}

export const DataContext = createContext(null)



export function Contexto (props) {

    const [nome, setNome] = useState(estadoContexto.nome)

    function handleSetNome(e){
        setNome(e.target.value)
        console.log("Entrou");
    }

    return(
        <DataContext.Provider value={{nome, handleSetNome}}>
            {props.children}
        </DataContext.Provider>
    )

}