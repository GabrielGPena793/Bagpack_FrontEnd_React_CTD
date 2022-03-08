import { useState } from "react";
import Exercicio from "./dhExemplo";


function App() {

  const [valor, setValor] = useState(0);

  function alteraValor(){
    setValor(valor + 1);
  }

  return (
    <>
      <Exercicio />
      <h1>{valor}</h1>
      <button onClick={alteraValor}>Alterar</button>
    </>
  );
}

export default App;
