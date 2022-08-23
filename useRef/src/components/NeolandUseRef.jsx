import { useRef, useState } from "react";

export const NeolandUseRef = () => {

  const [name, setName] = useState("Pedro");
  const textInput = useRef(null);

  const printValue = () => {
    const inputValue = textInput.current?.value;
    if (inputValue) setName(inputValue);
    console.log('Imprime Name', inputValue)
  }

  return (<>
    <h1>Hola soy {name}</h1>
    <input type="text" placeholder="name" ref={textInput} />
    <button onClick={printValue}>Show Me!</button>


  </>)
}