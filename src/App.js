import React,{useState, useEffect} from "react";
import { ComponentePai } from "./Pages/ComponentePai";
import {IndiretaPai} from "./Pages/IndiretaPai"
import {Input} from "./Pages/Input"

function App() {

  const[count, setCount] = useState(0)

  // useEffect(()=>{
  //   document.title = `Voce clicou ${count} vezes`
  // },[count])

  return (
    <>
      {/* <ComponentePai/> */}
      {/* <IndiretaPai/> */}
      <Input/>
    </>
  );
}

export default App;
