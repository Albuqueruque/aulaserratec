import React,{useState, useEffect} from "react";
import { ComponentePai } from "./Pages/ComponentePai";
import {IndiretaPai} from "./Pages/IndiretaPai"
import {Input} from "./Pages/Input"
import {AdicionarLista} from "./Pages/AdicionarLista"
import {RenderizacaoCondicional} from "./Pages/RenderizacaoCondicional"


function App() {

  const[count, setCount] = useState(0)

  // useEffect(()=>{
  //   document.title = `Voce clicou ${count} vezes`
  // },[count])

  return (
    <>
      {/* <ComponentePai/> */}
      {/* <IndiretaPai/> */}
      {/* <Input/> */}
      {/* <AdicionarLista/> */}
      <RenderizacaoCondicional/>
    </>
  );
}

export default App;
