import { useState } from "react";

// Component = function
export const NeolandState = (props) => {

  //variable de estado
  const [name, setName] = useState(props.name);

  const handleChangeInput = (e) => {
    console.log(e);
    console.log('Renders');
    setName(e.target.value)
  }


  // Retorno -> JSX Element
  return (<>

    <h1>{name}</h1>
    <input type="text" value={name} onChange={(e) => { handleChangeInput(e) }} />

  </>)
}